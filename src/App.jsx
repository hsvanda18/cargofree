import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import { useSiteContent } from './lib/useSiteContent'

export default function App() {
  const content = useSiteContent()

  return (
    <div className="min-h-screen bg-graphite font-body text-paper">
      <Header phone={content.contact.phone} />
      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <Services content={content.services} />
        <Clients clients={content.clients} />
        <Contact content={content.contact} />
      </main>
      <Footer tagline={content.siteSettings.tagline} />
    </div>
  )
}
