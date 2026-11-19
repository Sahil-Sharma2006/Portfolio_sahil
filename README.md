[README.md](https://github.com/user-attachments/files/35100319/README.md)
# Sahil Jangra — Graphic Designer Portfolio 2026

**Live site:** https://sahil-sharma2006.github.io/Portfolio_sahil/

Personal portfolio of **Sahil Jangra**, a Gurugram-based graphic designer working across logos and brand identity, social media creatives, packaging and print, with AI-assisted image creation (ChatGPT, Google Gemini, Adobe Firefly) finished by hand in Photoshop.

---

## What's inside

- **Hero** with a flipping avatar coin and handwritten signature
- **About** with a 360° turning figure (drag it to spin), education, skills and experience
- **Work** galleries: Logos, Social Media, Packaging and Print, with a click-to-enlarge lightbox
- **Clients** list
- **Contact**: email, WhatsApp, phone and a resume download

Built as a plain static site (HTML, CSS and a little JavaScript). No frameworks and no build step, so it loads fast and every change you push goes live in 1–2 minutes.

## Folder structure

```
index.html        page content
style.css         design and layout
script.js         image lightbox
spin.js           360° figure: autoplay and drag-to-turn
assets/
  resume.pdf      resume behind both "Resume" buttons
  spin.webm       360° figure, transparent (Chrome, Edge, Firefox)
  spin.mp4        360° figure (Safari)
  fonts/          Archivo and Caveat, self-hosted
  img/            avatar, portrait, work images (full size + "-sm" thumbnails)
```

## Update your resume

1. Export the new resume as a PDF and rename it to **`resume.pdf`**.
2. In this repo, open the **`assets`** folder, then **Add file → Upload files**.
3. Drop `resume.pdf` in and click **Commit changes**. The old file is replaced automatically.

The site updates within 1–2 minutes. Visitors download it as `Sahil_Jangra_Resume.pdf`, whatever the file is called here.
If you still see the old one, hard-refresh with **Ctrl + Shift + R**.

## Other quick updates

| What | How |
|---|---|
| Text (about, skills, experience) | Open `index.html` → pencil icon → edit → **Commit changes** |
| A work image | Upload into `assets/img/` with the **same file name** (and its `-sm` thumbnail) |
| LinkedIn / Instagram buttons | In `index.html`, add inside the `<!-- SOCIAL_LINKS -->` spot:<br>`<a class="btn" href="https://instagram.com/yourhandle" target="_blank" rel="noopener">Instagram</a>` |

## Turn on GitHub Pages (one time)

**Settings → Pages →** Source: **Deploy from a branch** → Branch: **main**, folder **/ (root)** → **Save**.

## Contact

- Email: aryanjangra284@gmail.com
- Phone / WhatsApp: +91 76695 33097

© 2026 Sahil Jangra. All work shown belongs to its respective clients and is shared for portfolio purposes.
