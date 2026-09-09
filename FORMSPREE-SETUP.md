# Contact Form Setup (Clean Swap Shop)

The contact page is wired for a real email backend. Until you paste a live key/endpoint, submit **does not fake success** — it opens a `mailto:contact@cleanswapshop.com` draft with the form contents (always works without paid keys).

**Business inbox:** `contact@cleanswapshop.com`

## Recommended (fastest): Web3Forms (free)

1. Open https://web3forms.com and click **Create Access Key**.
2. Enter `contact@cleanswapshop.com` and verify the email they send you.
3. Copy the Access Key (UUID format).
4. In `pages/contact.html`, replace the hidden field value:

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
```

   with your real UUID (keep it in the form — Web3Forms keys are designed to be public client-side).

5. In `js/main.js`, also set:

```js
const WEB3FORMS_ACCESS_KEY = 'paste-uuid-here';
```

   (JS prefers this constant; if empty, it reads the form’s `access_key` field.)

6. Submit a test message from https://www.cleanswapshop.com/pages/contact.html and confirm it arrives at `contact@cleanswapshop.com` (check spam).

Endpoint used: `https://api.web3forms.com/submit`

## Alternative: Formspree (free tier)

1. Create an account at https://formspree.io with `contact@cleanswapshop.com`.
2. Create a new form → copy the endpoint, e.g. `https://formspree.io/f/xxxxxxxx`.
3. In `js/main.js`, set:

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';
```

4. Optionally update the form `action` in `pages/contact.html` to the same URL.
5. Test submit; confirm delivery.

If both Web3Forms and Formspree are configured, **Web3Forms is tried first**.

## What works today (no key yet)

- Visible **mailto:contact@cleanswapshop.com** on the contact page.
- Form submit → opens the visitor’s email app with name, email, topic, and message prefilled.
- Toast explains that email client was opened / that a key is still needed for in-page delivery.

## Do not

- Invent a fake Formspree ID or Web3Forms UUID.
- Show a success toast unless the remote API returns `success: true` (or Formspree 2xx).
