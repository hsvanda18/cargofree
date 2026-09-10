"""Prepare the client's deck photography for the site.

Source: CARGOFREE_fotos_parte1 — seven 4000x2250 slides lifted from the company
presentation. Each carries burned-in slide type ("QUEM SOMOS", "MISSAO", ...)
and a CargoFree logo in one corner, so every crop below is chosen to exclude
both. Ratios are picked to match the box each plate renders into, so the
browser's object-cover has almost nothing left to trim.

These are stock photographs from the client's own deck, not documentary shots of
CargoFree operations: captions stay generic (mode of transport, kind of
operation) and never name a real vehicle, facility, shipment or employee.
"""

from PIL import Image, ImageEnhance
import os

SRC = r"C:\Users\hairton.vanda\Downloads\CARGOFREE_fotos_parte1"
DST = r"C:\Users\hairton.vanda\Documents\cargofree-landing\src\assets\photos"
os.makedirs(DST, exist_ok=True)

# name -> (source, crop box excluding burned-in type/logo, output width)
JOBS = {
    # hero establishing shot: container stacks + apron, logo lockup and the
    # tagline row on the left/bottom dropped
    "patio-hero": ("image1.jpg", (1620, 0, 3400, 1480), 1400),
    # three transport modes
    "via-terrestre": ("image4.jpg", (900, 560, 3500, 1560), 1400),
    # image9 is the same yard as the hero shot: this crop goes tight on the blue
    # stacks so the two frames never read as the same photograph twice
    "via-maritima": ("image9.jpg", (2700, 700, 4000, 1560), 1300),
    "via-aerea": ("image2.jpg", (0, 700, 3050, 2250), 1400),
    # people at work — the two frames that put a person on the page
    "operacao-terreno": ("image7.jpg", (1200, 620, 4000, 2250), 1200),
    "armazem": ("image10.jpg", (300, 250, 2100, 1600), 1200),
    # wide corridor band
    "corredor": ("image5.jpg", (0, 700, 4000, 1500), 1800),
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
    print(f"{name:18} {im.size[0]}x{im.size[1]}  ratio={im.size[0]/im.size[1]:.2f}  <- {src_file}")
