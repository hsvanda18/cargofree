"""Cut the newest client logos out of the supplied pack.

Sources are JPEGs with a flat baked background, so each one is keyed to
transparency from its own corner colour. Two of them (Shamlan, Smartec) only
exist as light marks on a dark ground: those keep their transparency and ship on
the roster's dark card variant, because their wordmarks are white and would
disappear on the white card the other logos use.
"""

from PIL import Image
import os

SRC = r"C:\Users\hairton.vanda\Downloads\CARGOFREE_logos_e_icones"
DST = r"C:\Users\hairton.vanda\Documents\cargofree-landing\src\assets\clients"

# name -> (source file, key tolerance)
JOBS = {
    "admac": ("image21.jpeg", 26),
    "electro-panga": ("image23.jpeg", 26),
    "shamlan": ("image24.jpeg", 30),
    "smartec": ("image25.jpeg", 30),
}


def key_out_background(im, tol):
    """Make every pixel within `tol` of the corner colour transparent."""
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    corners = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    bg = max(set(corners), key=corners.count)[:3]
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            d = max(abs(r - bg[0]), abs(g - bg[1]), abs(b - bg[2]))
            if d <= tol:
                px[x, y] = (r, g, b, 0)
            elif d <= tol * 2:  # soften the JPEG halo at the mark's edge
                px[x, y] = (r, g, b, int(255 * (d - tol) / tol))
    return im, bg


def trim(im):
    box = im.getchannel("A").getbbox()
    return im.crop(box) if box else im


for name, (src_file, tol) in JOBS.items():
    im = Image.open(os.path.join(SRC, src_file))
    im, bg = key_out_background(im, tol)
    im = trim(im)
    if im.width > 900:
        im = im.resize((900, round(im.height * 900 / im.width)), Image.LANCZOS)
    im.save(os.path.join(DST, f"{name}.png"))
    print(f"{name:16} {im.size[0]}x{im.size[1]}  fundo removido rgb{bg}  <- {src_file}")
