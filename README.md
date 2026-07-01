# C-RAM Entertainment — Website (`cram-site`)

This is your **public website** — its own standalone app, separate from the hub.
Its job: look good, tell new clients everything they need, and collect enquiries.
When someone submits the *Get in Touch* form, their details go straight into your
Supabase database and show up in the hub's CRM as a new enquiry.

---

## Deploying it (browser only — same as before)

### 1. Put it on GitHub
- Create a **new** repository (e.g. `cram-site`) — keep it separate from the hub.
- Upload **everything inside this `cram-site` folder** (not the folder itself — its
  contents: `index.html`, `package.json`, `src/`, etc.).

### 2. Import it into Vercel
- Vercel → **Add New… → Project** → import your `cram-site` repo.
- **Before** clicking Deploy, open **Environment Variables** and add these two
  (from your Supabase project → Project Settings → API):

  | Name | Value |
  |------|-------|
  | `VITE_SUPABASE_URL` | your Project URL |
  | `VITE_SUPABASE_ANON_KEY` | your anon public key |

- Click **Deploy**. In ~1 minute you'll get a live URL to test.

### 3. Test the form
- Open the live URL, go to **Get in touch**, fill it in, and send.
- You should see the "🎉 Enquiry sent!" message.
- In Supabase → **Table Editor → clients**, you should see a new row with
  `source = Website`. That same enquiry will appear in your hub's CRM.

### 4. (Later) Point c-rament.com.au at it
When you're happy, you can attach your domain in **Vercel → Project → Settings →
Domains**. One thing to know: your videos and photos currently load from the old
WordPress site at `c-rament.com.au/wp-content/...`. They'll keep working while
WordPress is still up. If you switch the domain fully over to this app, we'll need
to move those video/image files into the app — tell me when you're at that step and
I'll walk you through it.

---

## Notes
- The **anon key is safe** in here. The database rules only let the public *insert*
  an enquiry — no one can read your CRM or invoices from the website.
- Email alerts (getting an email the moment an enquiry lands) aren't on yet — for
  now every enquiry is saved in the database and shown in the hub. We can switch on
  email notifications later.
- If a Vercel build ever fails, it keeps your last working version live. Paste me
  any red error text and I'll sort it.
