# Beehiiv Newsletter Setup (Clean Swap Shop)

**Status (live):** The Beehiiv subscribe embed is connected sitewide (form ID `d8f7debc-1541-4519-9b00-c5c33d08daf8`). Pages load the standard `subscribe-forms.beehiiv.com` script + iframe inside each `.newsletter` section. `BEEHIIV_EMBED_CONNECTED = true` in `js/main.js`. Publication title in Beehiiv may still show as “Jaret's Newsletter” — that is OK for the embed.

## What is already done

1. Free Beehiiv account + subscribe form created.
2. Embed code placed on homepage, swaps, about, contact, and all guide pages (heading/copy kept; fake pending forms removed).
3. Fake “connects soon” toast / `data-beehiiv-pending` forms removed.

## Still for Jaret (in Beehiiv dashboard)

1. Paste welcome + Week 1 email drafts from `content/beehiiv-welcome-and-week1.md` into Beehiiv automations / posts.
2. Optionally rename the publication from “Jaret's Newsletter” to “Clean Swap Shop” (cosmetic).
3. Test signup with a real email; confirm the subscriber appears in Beehiiv.
4. Style form colors in Beehiiv if you want a closer match to site greens.

## Do not

- Invent API keys or fake form `action` URLs.
- Put Beehiiv API secrets in front-end JS (API subscriptions are server-side only).

## Official docs

- Creating an embedded subscribe form: https://www.beehiiv.com/support/article/12977090590487
- API subscriptions (server-side only): https://developers.beehiiv.com/api-reference/subscriptions/create
