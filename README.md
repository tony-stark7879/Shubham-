# Khushi's Birthday Surprise 🎂

A one-page birthday website for **Khushi**, made with love by **Shubham**.

It's plain HTML, CSS and JavaScript with no build step and no dependencies to install, so it runs on any free static host such as Netlify or Vercel. It works on phones (upright and sideways), tablets and computers, follows the device's light or dark mode, and tones down animation for people who have "reduce motion" turned on.

## What's on the page

The visit starts with a 3D gift box that bursts open into a "Happy Birthday, Khushi" welcome. After that come:

- a cake whose candles she can blow out one by one or all at once with "Make a Wish"
- a night sky where she writes wishes and releases them as glowing lanterns
- your letter in an envelope, typing itself out
- "Our little moments": a wall of polaroids that flip over to tell the story behind each one
- "Reasons I adore you": a deck of cards she turns over one reason at a time
- the little surprises: a scratch-card fortune, a shower of hearts, a hidden star with a secret message, balloons with notes, and "Written in the stars"
- birthday coupons she can claim, like breakfast in bed or winning one argument
- the "Catch the hearts" game
- a final screen with fireworks

Soft music-box music plays after she taps to open, with play/pause and mute buttons in the top corner.

## Project structure

```
khushi-birthday/
├── index.html     The page
├── css/style.css  All styles, including mobile and light/dark layouts
├── js/script.js   All interactions, plus the CONFIG block with every personal message
├── favicon.svg    The little 🎂 shown in the browser tab
├── assets/        Optional: put your own song file here
│   └── photos/    Optional: your photos for "Our little moments"
└── README.md      This file
```

## Preview on your computer

The quickest way is to double-click `index.html`. You need an internet connection for the handwritten fonts to load. Without it the page still works, just with plainer fonts.

To see it exactly as it will behave once it's online, run a small local server from inside the folder. Use whichever of these you have installed:

```bash
cd khushi-birthday
npx serve .                 # needs Node.js
python -m http.server 8000  # needs Python, then open http://localhost:8000
```

## Changing the words

All personal text lives in one place: the `CONFIG` block at the very top of `js/script.js`. Edit the text between the quotes, save, refresh the page, and redeploy.

Inside any text you can write `{name}`, `{nick}` and `{full}` (all Khushi) or `{from}` (Shubham). These fill in automatically.

| Setting | What it changes |
| --- | --- |
| `name`, `nickname`, `fullName` | Her names: `name` in the big headline, `nickname` in the letter and messages, the full name in the tab title and footer |
| `from`, `fromFull` | Your name in the signature and footer |
| `openerText` | The first line she sees on the gift screen |
| `birthday` | Her birthday as `"YYYY-MM-DD"`. Shows a live countdown, then "It's …, your day" on the day. Leave it as `""` to hide it |
| `together` | The day you got together as `"YYYY-MM-DD"`. Shows a live "Together for … days" counter under her name. Leave it as `""` to hide it |
| `heroSubtitle` | The line under her name at the top |
| `candles` | Number of candles on the cake (1 to 9) |
| `wish` | The message shown after the candles go out |
| `lanternWishes` | The three lanterns already glowing in the sky |
| `lanternSuggestions` | The wish ideas she can tap under the lantern box |
| `letter` | The greeting, paragraphs, closing and signature of your letter |
| `memories` | The polaroids in "Our little moments": a photo (or emoji), a caption, an optional date like `"14 Feb 2023"`, and the story on the back |
| `reasons`, `reasonsEnd` | The cards in "Reasons I adore you", and the line on the last card |
| `coupons`, `couponNote` | The birthday coupons (icon, title, text) and the line under them |
| `fortunes` | The scratch-card fortunes |
| `balloonNotes` | The notes inside the balloons |
| `secret` | The message unlocked by the hidden star |
| `stars` | The names and line revealed in "Written in the stars" |
| `game` | Game length in seconds and its start and end messages |
| `finale` | The big final wish and the closing line above your name |
| `music` | Your own song (see below), the volume, and whether music starts on open |

**To use your own song:** put an MP3 file in the `assets` folder, for example `assets/song.mp3`, and change the music line to:

```js
music: { src: "assets/song.mp3", volume: 0.55, playOnOpen: true },
```

Keep the file small (a few MB) so it loads quickly on mobile data. If the file can't be played, the built-in music box plays instead.

**To add your photos:** put them in `assets/photos`, then set `photo` on each memory, for example:

```js
{ photo: "assets/photos/first-date.jpg", emoji: "☕", title: "The day we met", date: "14 Feb 2023", text: "…" },
```

Square-ish photos look best, since each one is cropped to a square. Resize them to about 800 pixels wide first so the page stays fast on a phone. If a photo is missing or misspelled, the emoji shows instead. File names are case-sensitive once the site is online, so `Photo.JPG` and `photo.jpg` are different.

## Put it online for free

Before you start, make sure you have the unzipped `khushi-birthday` folder with `index.html` directly inside it.

### Option 1: Netlify (easiest, about 2 minutes)

1. Create a free account or sign in at [app.netlify.com](https://app.netlify.com). Signing in first keeps the site saved to your account.
2. Open [app.netlify.com/drop](https://app.netlify.com/drop) and drag the whole `khushi-birthday` folder onto the page.
3. Netlify gives you a link like `https://random-words-123.netlify.app`. That's the site, live.
4. For a nicer link, open the site in Netlify, go to **Site configuration → Change site name**, and pick something like `khushi-birthday`. It becomes `https://khushi-birthday.netlify.app` if the name is free.

**To update it later:** open the site in Netlify, go to the **Deploys** tab, and drag the updated folder onto the drop area there.

### Option 2: Vercel

**With GitHub (it updates automatically whenever you change a file):**

1. Create a new repository on [github.com](https://github.com) and upload the contents of the `khushi-birthday` folder. `index.html` must be at the top level of the repository, not inside another folder.
2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and import that repository.
3. For **Framework Preset**, choose **Other**. Leave the build command empty and the output directory as it is, then click **Deploy**.
4. You get a link like `https://your-project.vercel.app`. To change it, open the project and go to **Settings → Domains**.

**With the Vercel command line (needs Node.js):**

```bash
npm install -g vercel
cd khushi-birthday
vercel          # first time: log in and accept the default answers
vercel --prod   # publishes to your main .vercel.app link
```

## Good to know

- **Music starts only after she taps "Open Your Surprise."** On iPhone, the silent switch also mutes website sound, so the ringer needs to be on to hear it.
- **Lantern wishes, claimed coupons and her best game score are saved in her own browser**, so they're still there when she comes back. You won't see the wishes she writes, which is why the coupons ask her to send you a screenshot.
- **Anyone with the link can open the site.** There's no password, so share the link privately.
- **Both Netlify and Vercel host a small personal site like this for free.**

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The page shows plain text with no styling | Make sure `css`, `js` and `index.html` sit side by side at the top level of what you uploaded. Upload the unzipped folder, not the .zip file |
| Fonts look plain | The fonts come from Google Fonts. Check the internet connection, or that nothing is blocking `fonts.googleapis.com` |
| Your changes don't show up | Redeploy, then hard-refresh the page (Ctrl + Shift + R on a computer). On a phone, wait a minute and reopen the link |
| No sound | Tap the ♪ button in the top corner, check the mute button next to it, and turn off the iPhone silent switch |

---

Fonts: [Birthstone](https://fonts.google.com/specimen/Birthstone) and [Jost](https://fonts.google.com/specimen/Jost), both free under the SIL Open Font License. The music-box tune is an original melody generated live in the browser, so there's no audio file to license.
