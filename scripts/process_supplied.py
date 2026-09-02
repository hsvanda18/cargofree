"""Prepare the client-supplied operational photography for the site.

Each source carries a generator watermark in the bottom-right corner, so every
crop below excludes that corner region. Images ship in full colour (they carry
CargoFree livery, and the brand orange in them rhymes with the page accent) with
a light grade so they sit together as one set.
"""

from PIL import Image, ImageEnhance
import os

SRC = r"C:\Users\hairton.vanda\Downloads\drive-download-20260901T205921Z-1-001"
DST = r"C:\Users\hairton.vanda\Documents\cargofree-landing\src\assets\photos"
os.makedirs(DST, exist_ok=True)

# name -> (source file, crop box, target width)
JOBS = {
    # hero establishing shot: brand signage + docks + apron, watermark row dropped
    "hub": ("CargoCenter.jpeg", (0, 40, 1024, 860), 1400),
    # três vias
    "via-aerea": ("TCCLuanda.jpeg", (0, 170, 1024, 866), 1200),
    "via-terrestre": ("CargoMoving.jpeg", (0, 96, 512, 434), 1000),
    # clients banner: remote / industrial operation
    "operacao-remota": ("CargoOps.jpeg", (0, 210, 1024, 860), 1400),
}


def grade(im):
    im = ImageEnhance.Color(im).enhance(0.92)      # pull saturation back a touch
    im = ImageEnhance.Contrast(im).enhance(1.06)   # firm up the midtones
    return im


for name, (src_file, box, width) in JOBS.items():
    im = Image.open(os.path.join(SRC, src_file)).convert("RGB").crop(box)
    if im.width > width:
        h = round(im.height * width / im.width)
        im = im.resize((width, h), Image.LANCZOS)
    im = grade(im)
    im.save(os.path.join(DST, f"{name}.webp"), quality=82, method=6)
    im.save(os.path.join(DST, f"{name}.jpg"), quality=88, optimize=True)
    print(f"{name:16} {im.size[0]}x{im.size[1]}  <- {src_file}")

# maritime plate comes from the existing clean container-yard crop (PDF source)
mar = Image.open(os.path.join(DST, "containers-raw.jpg")).convert("RGB")
mar = mar.crop((0, 120, mar.width, 900))
mar = mar.resize((1200, round(mar.height * 1200 / mar.width)), Image.LANCZOS)
mar = grade(mar)
mar.save(os.path.join(DST, "via-maritima.webp"), quality=82, method=6)
mar.save(os.path.join(DST, "via-maritima.jpg"), quality=88, optimize=True)
print(f"{'via-maritima':16} {mar.size[0]}x{mar.size[1]}  <- containers-raw.jpg")
