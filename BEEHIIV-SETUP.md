# Beehiiv Newsletter Setup (Clean Swap Shop)

The site newsletter UI is ready. Forms do **not** post to a fake Beehiiv URL. Until you connect Beehiiv, submit shows: *“List coming soon — Beehiiv setup pending”*.

## What Jaret must do

1. Create a free Beehiiv account at https://www.beehiiv.com and create a publication (e.g. “Clean Swap Shop”).
2. In Beehiiv: **Subscribers → Subscribe forms → Create new form**.
3. Prefer a **Slim** + **Inline** embed (email + Subscribe) to match the existing site form, or **Regular** if you want a title/subtitle.
4. Style colors to match the site greens if desired; save the form.
5. Click **Save & get embed code** → copy the single `<script>…</script>` tag Beehiiv provides.
6. On this site, replace each newsletter section (`index.html`, `pages/swaps.html`, and any other page with `.newsletter-form`) with either:
   - The Beehiiv embed script inside the `.newsletter` section, **or**
   - Keep the custom form and wire it via Beehiiv API (advanced — needs publication ID + API key; do not put secrets in front-end JS).
7. In `js/main.js`, set `BEEHIIV_EMBED_CONNECTED = true` after the embed is live (or remove the pending toast handler if you delete the custom form).
8. Test signup with a real email; confirm the subscriber appears in Beehiiv.

## Code hooks already in the repo

- Top of `js/main.js`: `BEEHIIV_EMBED_URL` / `BEEHIIV_EMBED_CONNECTED` TODO constants.
- Newsletter `<form>` elements use `data-beehiiv-pending="true"` and an HTML comment with these steps.
- Do **not** invent a form `action` URL — Beehiiv’s standard path is the **embed script**, not a public POST action that you paste as a fake URL.

## Official docs

- Creating an embedded subscribe form: https://www.beehiiv.com/support/article/12977090590487
- API subscriptions (server-side only): https://developers.beehiiv.com/api-reference/subscriptions/create
