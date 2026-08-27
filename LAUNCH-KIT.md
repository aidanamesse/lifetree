# LifeTree — Launch Kit

**Goal for today:** one real person takes the Reality Check on their own phone and sends you a screenshot of their sky.

Not a stranger from an ad. A person you can reach in one message. Paid acquisition for a prototype buys traffic into a funnel that doesn't exist yet; a friend who's grinding a skill buys you the only thing that matters this week — a real reaction.

---

## The 15-minute path

**1. Deploy (about 2 minutes).**
The `dist` folder is a complete site: `index.html`, `manifest.webmanifest`, `sw.js`, and four images. Drag the folder onto a drag-and-drop static host (Netlify Drop is the fastest; GitHub Pages or Vercel if you want it to live somewhere durable). You get an `https://` link. The service worker and "Add to Home Screen" both need https, which every host provides.

**2. Two text edits, optional but worth it (1 minute).**
Open `index.html` in any editor.
- `<meta name="lifetree-feedback" content="">` — put your email between the quotes and the app shows a Send feedback button.
- `og:image` — change `./og-image.png` to the full absolute URL (e.g. `https://your-site.netlify.app/og-image.png`) so iMessage, WhatsApp, Slack, and X show the preview card. Add `<meta property="og:url" content="https://your-site...">` above it.
Re-upload after editing.

**3. Test on your own phone (3 minutes).**
Open the link. Take the Reality Check. On the tree screen, tap Share → Add to Home Screen (iOS) or menu → Add to Home screen (Android). Open it from the icon: it should launch full-screen with your sky intact. Log one thing. Check the level-up flare fires when a node crosses 100 XP.

**4. Send it to five people (5 minutes).**
Pick people who are *currently* grinding something — a language, a race, an edit, a repo, a job search. Not "people who like apps." Use the messages below.

**5. Ask for one thing back.**
A screenshot of their sky. That screenshot is your first marketing asset and your first data point.

---

## The messages

**Friend, direct (use this one first)**

> Hey — I built a thing and you're exactly who it's for. It turns the skills you're actually working on into a night sky that lights up as you put hours in. No streaks, nothing to lose. Takes two minutes to set up: [link]
>
> Do the questions honestly and send me a screenshot of your sky? Want to see what it looks like for someone who isn't me.

**Group chat / Discord / class group**

> Built a small app over the last couple of weeks and I need five people to try it before I decide whether to build the real thing. It's a skill tracker that looks like a constellation map — every skill is a star, hours make it brighter, and there are no streaks to break. Two-minute setup, works in the browser, add it to your home screen and it behaves like an app: [link]
>
> If you try it, reply with a screenshot of your sky. Brutal feedback welcome.

**When someone replies with feedback**

> This is exactly what I needed. Two questions: what did you expect to happen that didn't? And would you open it again tomorrow without me asking?

**What to say about data (true, and a selling point)**

> Everything stays on your phone. There's no account and no server — I literally can't see your data unless you screenshot it.

---

## What to tell people it is (and isn't)

One line: **Your skills, as a night sky.**

Longer: LifeTree turns real skills — running, Korean, video editing, your side business — into a tree you see from above at night. Log effort, or let your watch do it, and the nodes light up and grow. Nothing you earn can be lost: miss three weeks and a node rests; one log wakes it.

Say: *no streaks, nothing to lose, two-minute setup, works on any phone, add it to your home screen.*

Don't say: "the Skyrim of habit trackers" in public (it's a trademark you don't own, and it reintroduces the fantasy frame the product deliberately avoids); "syncs with Apple Watch" (the prototype simulates it — say "designed to sync with your watch"); anything about Pro or pricing (nothing is for sale yet).

---

## Posts — for after you have five users and at least one screenshot that isn't yours

**Short video (TikTok / Reels / Shorts, 15–20 seconds, screen recording)**
1. 0–4s: chips being tapped on "What do you make or build?" — Video editing, Coding, Cooking. Overlay: *"What are you actually working on?"*
2. 4–8s: the sky reveal animating in. Overlay: *"This is my life, from above, at night."*
3. 8–12s: log 30 min on a node → the star brightens → level-up flare. Overlay: *"Every hour makes a star brighter."*
4. 12–16s: tap +22 days in prototype controls → nodes go resting → one log wakes them. Overlay: *"No streaks. Nothing to lose."*
5. 16–20s: share card. Overlay: *"Link in bio. Two minutes to set up."*
No music, or something quiet. The screen is the point.

**X / Threads (three posts)**
1. I got tired of habit apps punishing me for a bad week. So I built one where nothing you earn can be lost. Your skills become a night sky; hours make the stars brighter. [screenshot]
2. Two-minute setup. It asks what you actually do — several answers allowed — and plants a tree per answer. Languages get one each. Then it shows you your sky. [reveal screenshot]
3. Works in the browser, add to home screen, no account, data stays on your phone. Free while I decide whether to build the native version. Try it: [link]

**Reddit** — read each subreddit's self-promotion rules first; most allow it in designated threads or with a feedback framing.
Candidates: r/SideProject, r/getdisciplined (feedback posts), r/productivity (check rules), r/languagelearning only if you lead with the language trees and genuinely ask for feedback on them.
Title: *"I built a habit tracker where nothing can be lost — your skills as a night sky. Looking for 10 honest testers."*
Body: what it is in three sentences, what's rough (it's a prototype, watch sync is simulated), what you want to know (did the Reality Check feel like you? would you open it tomorrow?), the link, the data line.

**Show HN** — later, when the native app exists. HN rewards the engineering story: the XP engine with tests, the dormancy decision, the cross-section that became a sky.

---

## App Store listing (draft for the native build)

- **Name:** LifeTree
- **Subtitle (30 chars):** Your skills, as a night sky
- **Promo text:** Level up real skills. No streaks, nothing to lose.
- **Keywords:** skill tree, habit tracker, progress, level up, self improvement, language learning, fitness log, deep work, focus, personal growth
- **Description (opening):** LifeTree turns the things you're actually working on — running, a language, video editing, your side business — into a tree you see from above at night. Every skill is a point of light. Hours make it brighter. Milestones open new branches. Nothing you earn can be lost.
- **Screenshot captions (5):** 1. Your skills, as a night sky · 2. Answer honestly. Your tree grows from where you really are · 3. Log thirty minutes. Watch it light up · 4. Miss a month? It rests. One log wakes it · 5. Your watch feeds Vitality on its own

---

## Day-one scorecard

Track by hand. Five numbers.

| Step | Count | Note |
|---|---|---|
| Sent | | who, and what they're grinding |
| Opened | | |
| Finished the Reality Check | | the activation number |
| Added to home screen | | the "download" |
| Logged at least once | | |
| Came back on day two, unprompted | | the only number that predicts anything |

**The bar for building the native app:** 3 of 5 finish the Reality Check, and 1 of 5 opens it on day two without being asked. If that holds across fifteen people, build. If nobody comes back on day two, the problem is the loop, not the distribution — fix the weekly ring before touching Swift.

---

## Don'ts for this week

- No paid ads. There is nothing to optimize yet.
- No posting in five subreddits at once. One community, one honest post, answer every reply.
- No adding features because one tester asked. Collect, wait for the pattern.
- Don't promise the watch sync, the widgets, or Pro. Ship what exists.

---

## Accounts and configuration (what to create, and what to send back)

All configuration is in `index.html` as `<meta name="lifetree-*">` tags — edit and re-upload, no rebuild.

| Account | Cost | What it gives us | What to send back |
|---|---|---|---|
| **GoatCounter** (goatcounter.com) | free | Page views plus the events the app fires: `reality-check-complete`, `first-log`, `level-up`, `share`, `launched-installed` (the real "download" signal), `pro-tap`, `buy-click`, `unlocked`. No cookies, no personal data. | Your site code (the part before `.goatcounter.com`) |
| **Gumroad** (gumroad.com) — or a Stripe Payment Link | free to start; Gumroad takes a cut per sale | A checkout page for "LifeTree Founding Member — lifetime Pro", $19. Put the unlock code in the product's content so buyers see it on the receipt page. | The product URL, and the code you chose |
| **GitHub** (github.com) | free | Hosting at `https://you.github.io/lifetree/`, deployed by `deploy-github.cjs`. Create an empty public repo named `lifetree`, then a fine-grained personal access token scoped to that one repo with Contents, Pages, and Administration set to read and write. | Your username and the token — then delete the token once the site is confirmed live |

Order of operations: GitHub first (the site has to exist), then GoatCounter (so day one is measured), then Gumroad (so the paywall is live before the first five people open it — the pro-tap and buy-click numbers from those five are the earliest willingness-to-pay data we can get).

Positioning against the direct competitor: Life Reset has 1.5M+ users and sells "level up your life" with a Hard Mode that penalizes missed days, a subscription, and a paywall that lands after a long onboarding — and its reviews are dominated by complaints about exactly that. Every message we send should quietly be the inverse: *no penalties, no subscription, nothing paywalled but the sky.*
