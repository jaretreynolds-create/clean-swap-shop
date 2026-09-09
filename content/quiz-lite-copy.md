# Quiz Lite Copy — “What’s hiding in your clean routine?”

**Status:** Copy-only for later HTML implementation (no interactive code in this file).  
**Site:** https://www.cleanswapshop.com  
**All Swaps:** https://www.cleanswapshop.com/pages/swaps.html  
**Amazon Associates tag:** `cleanswapsh0a-20` (required on every Amazon URL)

---

### Affiliate Disclosure

The Clean Swap Shop is a participant in the Amazon Services LLC Associates Program. As an Amazon Associate, we earn from qualifying purchases. Product recommendations and Amazon links in this quiz use our Associates tag **cleanswapsh0a-20**. Commissions come at no extra cost to you. We only recommend swaps we genuinely believe in.  
Full disclosure: https://www.cleanswapshop.com/pages/disclosure.html

---

## Quiz meta (for implementers)

| Field | Copy |
|---|---|
| **Working title** | What’s hiding in your clean routine? |
| **Alt title** | Under-sink toxin profile (lite) |
| **Subtitle** | Five gentle questions. One calm bundle of swaps — no judgment, just a clearer next bottle. |
| **Voice** | Boho natural, practical toxin → clean, cream counters / imperfect progress |
| **Length** | 5 questions · 2–4 answers each · simple majority / points → 4 result bundles |
| **CTA after results** | Browse [All Swaps](https://www.cleanswapshop.com/pages/swaps.html) · soft newsletter pitch (“Come Sit With Us”) |

---

## Intro screen

**Headline:** What’s hiding in your clean routine?

**Body:**  
That “fresh” smell under the sink isn’t always fresh. Take five quiet questions about bleach, laundry, air, pans, and personal care. We’ll point you toward a starter bundle — kitchen deep clean, sensitive skin, baby-safe, or fresh-air family — with tagged shop links and guides when you want the *why*.

**Button:** Start the soft audit →

---

## Questions

### Q1 — Under the kitchen sink, what’s the loudest bottle?

**A.** Bleach spray or “disinfecting” jug I reach for most days → **+2 Kitchen Deep Cleaner (K)**  
**B.** Neon all-purpose cleaner that smells like a perfume counter → **+2 Kitchen Deep Cleaner (K)** · **+1 Fresh Air Family (F)**  
**C.** Mostly dish soap + trash bags; bleach only for rare jobs → **+1 Kitchen Deep Cleaner (K)** · **+1 Sensitive Skin Household (S)**  
**D.** I’ve already swapped a lot of cleaning stuff; I’m more worried about air / body products → **+2 Fresh Air Family (F)** · **+1 Sensitive Skin Household (S)**

---

### Q2 — How does your laundry leave your skin and nose?

**A.** Pods or heavy detergent — clothes smell “clean” for days → **+2 Sensitive Skin Household (S)** · **+1 Kitchen Deep Cleaner (K)**  
**B.** Someone in the house gets itchy, red, or congested after wash day → **+3 Sensitive Skin Household (S)**  
**C.** Fragrance-free-ish already, but I want a simpler powder → **+2 Sensitive Skin Household (S)**  
**D.** Laundry’s fine; my stress is baby lotion / diapers / “gentle” bath stuff → **+3 Baby-Safe Starter (B)**

---

### Q3 — What’s floating in your indoor air?

**A.** Plug-ins, sprays, or “odor eliminators” on autopilot → **+3 Fresh Air Family (F)**  
**B.** Scented trash bags + candle fog in the kitchen → **+2 Fresh Air Family (F)** · **+1 Kitchen Deep Cleaner (K)**  
**C.** Mostly open windows; occasional essential oil or nothing → **+1 Fresh Air Family (F)**  
**D.** Nursery / kids’ rooms get the “baby fresh” sprays → **+2 Baby-Safe Starter (B)** · **+1 Fresh Air Family (F)**

---

### Q4 — Cookware & high-heat habits

**A.** Scratched nonstick / Teflon still does breakfast duty → **+2 Kitchen Deep Cleaner (K)** *(cast-iron path)*  
**B.** Mix of pans; ready to retire the flaky one → **+2 Kitchen Deep Cleaner (K)**  
**C.** Cast iron or stainless already — not my focus → **+0** (tie-breaker: keep current leading bundle)  
**D.** I cook less; personal care bottles worry me more → **+2 Sensitive Skin Household (S)** · **+1 Baby-Safe Starter (B)**

---

### Q5 — Body & baby shelf — what feels off?

**A.** Antiperspirant with aluminum / “clinical” deodorant → **+2 Sensitive Skin Household (S)** *(Native path)*  
**B.** Sulfate shampoo / “fragrance” hair aisle staples → **+2 Sensitive Skin Household (S)** *(Innersense path)*  
**C.** Chemical sunscreen (oxybenzone-type) for the whole family → **+1 Sensitive Skin Household (S)** · **+1 Baby-Safe Starter (B)** · **+1 Fresh Air Family (F)** *(Badger path — family sun)*  
**D.** Baby lotion, wash, or “gentle” nursery products I’m second-guessing → **+3 Baby-Safe Starter (B)**

---

## Scoring key

### Point letters
- **K** = Kitchen Deep Cleaner  
- **S** = Sensitive Skin Household  
- **B** = Baby-Safe Starter  
- **F** = Fresh Air Family  

### How to score (simple majority / points)
1. Sum points for K, S, B, and F from the five answers.  
2. **Winner = highest total.**  
3. **Ties:**  
   - K vs anything → prefer **K** if Q1 or Q4 leaned kitchen/bleach/pans.  
   - B vs S → prefer **B** if Q2-D or Q5-D was chosen.  
   - F vs S → prefer **F** if Q3-A or Q3-B was chosen.  
   - Still tied → default **Sensitive Skin Household (S)** (broadest everyday bundle).  
4. Optional UI: show “You’re closest to: [Bundle]” plus a secondary “Also peek at: [runner-up]” if within 1 point.

### Quick implementer map (answer → points)

| Q | A | B | C | D |
|---|---|---|---|---|
| 1 | K+2 | K+2, F+1 | K+1, S+1 | F+2, S+1 |
| 2 | S+2, K+1 | S+3 | S+2 | B+3 |
| 3 | F+3 | F+2, K+1 | F+1 | B+2, F+1 |
| 4 | K+2 | K+2 | — | S+2, B+1 |
| 5 | S+2 | S+2 | S+1, B+1, F+1 | B+3 |

---

## Result bundles

Each result: title, short paragraph, **3 recommended swaps** with Amazon tagged links + relevant guide URLs (guides marked *new* may not exist on the site yet — link them for when HTML/guides ship).

---

### Result 1 — Kitchen Deep Cleaner

**Title:** Kitchen Deep Cleaner  
**Eyebrow:** Your under-sink profile leans “sharp clean”

**Paragraph:**  
You’re the person who actually *uses* what’s under the sink — bleach, all-purpose sprays, maybe a tired nonstick pan that still gets eggs. That’s not failure; it’s a clear starting map. Trade the chlorine burn and forever-chemical coatings for a plant-based concentrate and cast iron that lasts generations. One dilution bottle. One skillet. Cream counters, less fog.

**Recommended swaps (3):**

1. **Bleach / all-purpose → Branch Basics Concentrate**  
   - Shop: https://www.amazon.com/s?k=branch+basics+concentrate&tag=cleanswapsh0a-20  
   - Guide: https://www.cleanswapshop.com/pages/guides/bleach-vs-branch-basics.html  

2. **Teflon nonstick → Lodge cast iron**  
   - Shop: https://www.amazon.com/dp/B00006JSUA/?tag=cleanswapsh0a-20  
   - Guide: https://www.cleanswapshop.com/pages/guides/nonstick-vs-cast-iron.html  

3. **Pods / heavy detergent (if it lives by the sink) → Molly’s Suds**  
   - Shop: https://www.amazon.com/dp/B06WCZRHQR/?tag=cleanswapsh0a-20  
   - Guide: https://www.cleanswapshop.com/pages/guides/laundry-detergent-mollys-suds.html  

**Footer CTA:** Browse more kitchen pairs → https://www.cleanswapshop.com/pages/swaps.html  

---

### Result 2 — Sensitive Skin Household

**Title:** Sensitive Skin Household  
**Eyebrow:** Your clean routine is wearing on skin and scent tolerance

**Paragraph:**  
Itchy after laundry, fragrance that follows you out the door, shampoo that strips, deodorant that feels like armor — your answers point to products that touch skin all day. Soften the load with cleaner detergent, aluminum-free deodorant, and a botanical wash. Same rituals. Kinder labels.

**Recommended swaps (3):**

1. **Conventional detergent → Molly’s Suds**  
   - Shop: https://www.amazon.com/dp/B06WCZRHQR/?tag=cleanswapsh0a-20  
   - Guide: https://www.cleanswapshop.com/pages/guides/laundry-detergent-mollys-suds.html  

2. **Aluminum antiperspirant → Native Deodorant**  
   - Shop: https://www.amazon.com/dp/B07GB1KJN3/?tag=cleanswapsh0a-20  
   - Guide: https://www.cleanswapshop.com/pages/guides/deodorant-native-vs-conventional.html  

3. **Sulfate shampoo → Innersense**  
   - Shop: https://www.amazon.com/dp/B074Q2CNMY/?tag=cleanswapsh0a-20  
   - Guide (*new*): https://www.cleanswapshop.com/pages/guides/shampoo-innersense-vs-conventional.html  

**Footer CTA:** Personal care + laundry swaps → https://www.cleanswapshop.com/pages/swaps.html  

---

### Result 3 — Baby-Safe Starter

**Title:** Baby-Safe Starter  
**Eyebrow:** Little skin, big labels — start gentle

**Paragraph:**  
Nursery shelves love the word “gentle.” Your answers say you’re ready to look past the pastel packaging — lotion, wash, sun time, and the air around the crib. Lean organic botanicals, mineral SPF, and fragrance that isn’t a chemical cloud. Swap slow; protect the tiniest lungs and cheeks first.

**Recommended swaps (3):**

1. **Conventional baby lotion/wash → Earth Mama Organics**  
   - Shop: https://www.amazon.com/dp/B01ANJKCLO/?tag=cleanswapsh0a-20  
   - Browse baby swaps: https://www.cleanswapshop.com/pages/swaps.html  

2. **Chemical sunscreen → Badger Mineral SPF**  
   - Shop: https://www.amazon.com/dp/B00NB411MS/?tag=cleanswapsh0a-20  
   - Guide (*new*): https://www.cleanswapshop.com/pages/guides/sunscreen-badger-vs-chemical.html  

3. **“Baby fresh” sprays / nursery plug-ins → Essential oil diffuser (use thoughtfully; keep out of reach)**  
   - Shop: https://www.amazon.com/s?k=essential+oil+diffuser&tag=cleanswapsh0a-20  
   - Guide: https://www.cleanswapshop.com/pages/guides/air-freshener-vs-diffuser.html  

**Footer CTA:** Baby & kids swaps → https://www.cleanswapshop.com/pages/swaps.html  

---

### Result 4 — Fresh Air Family

**Title:** Fresh Air Family  
**Eyebrow:** Your “clean smell” might be the problem

**Paragraph:**  
Plug-ins, sprays, scented bags, perfume that never clocks out — indoor air is doing overtime. Swap masking chemicals for a simple diffuser ritual (and open a window when you can). Pair it with a gentler kitchen spray so the whole house exhales. Fresh shouldn’t sting.

**Recommended swaps (3):**

1. **Synthetic air freshener / Febreze-style spray → Essential oil diffuser**  
   - Shop: https://www.amazon.com/s?k=essential+oil+diffuser&tag=cleanswapsh0a-20  
   - Guide: https://www.cleanswapshop.com/pages/guides/air-freshener-vs-diffuser.html  

2. **Bleach / harsh spray that hangs in the air → Branch Basics Concentrate**  
   - Shop: https://www.amazon.com/s?k=branch+basics+concentrate&tag=cleanswapsh0a-20  
   - Guide: https://www.cleanswapshop.com/pages/guides/bleach-vs-branch-basics.html  

3. **Chemical sunscreen for park days → Badger Mineral SPF** *(outdoor air + skin; family-friendly mineral path)*  
   - Shop: https://www.amazon.com/dp/B00NB411MS/?tag=cleanswapsh0a-20  
   - Guide (*new*): https://www.cleanswapshop.com/pages/guides/sunscreen-badger-vs-chemical.html  

**Footer CTA:** Home fragrance + cleaning swaps → https://www.cleanswapshop.com/pages/swaps.html  

---

## Shared result footer (all bundles)

**Soft newsletter pitch:**  
Want one calm swap a week? Come sit with us — a warm note with ingredient clarity and tagged links when you’re ready. Subscribe on https://www.cleanswapshop.com (“Come Sit With Us”).

**Legal line:**  
As an Amazon Associate, The Clean Swap Shop earns from qualifying purchases. Tag: **cleanswapsh0a-20**.  
Disclosure: https://www.cleanswapshop.com/pages/disclosure.html

**Primary site CTA:**  
https://www.cleanswapshop.com/pages/swaps.html

---

## Guide URL reference (for HTML later)

| Topic | Path |
|---|---|
| Bleach | `/pages/guides/bleach-vs-branch-basics.html` |
| Laundry | `/pages/guides/laundry-detergent-mollys-suds.html` |
| Nonstick | `/pages/guides/nonstick-vs-cast-iron.html` |
| Deodorant | `/pages/guides/deodorant-native-vs-conventional.html` |
| Air | `/pages/guides/air-freshener-vs-diffuser.html` |
| Shampoo (*new*) | `/pages/guides/shampoo-innersense-vs-conventional.html` |
| Sunscreen (*new*) | `/pages/guides/sunscreen-badger-vs-chemical.html` |

Absolute base: `https://www.cleanswapshop.com`

---

*End of quiz-lite copy. Implement as static HTML later; this file is content + scoring only. Do not ship without affiliate disclosure on quiz and result screens.*
