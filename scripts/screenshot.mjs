import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const url = process.argv[2] || 'http://localhost:5183/'
const outDir = process.argv[3] || '.impeccable/review'
mkdirSync(outDir, { recursive: true })

const sizes = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

const browser = await chromium.launch({ channel: 'msedge' })
for (const s of sizes) {
  const page = await browser.newPage({ viewport: { width: s.width, height: s.height } })
  await page.goto(url, { waitUntil: 'load' })

  // Walk the page so lazy-loaded images actually decode, the way a real
  // visitor scrolling would trigger them; a capture of stubbed placeholders
  // is not evidence.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 120))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForFunction(
    () => Array.from(document.images).every((i) => i.complete && i.naturalWidth > 0),
    null,
    { timeout: 15000 },
  )
  await page.waitForTimeout(400)

  await page.screenshot({ path: `${outDir}/${s.name}.png`, fullPage: true })
  await page.close()
  console.log('captured', s.name)
}
await browser.close()
