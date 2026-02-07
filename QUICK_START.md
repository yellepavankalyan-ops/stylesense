# 🎯 QUICK START - Where to Paste Your Gradio Link

## Step-by-Step Instructions

### 1. Run Your Google Colab Notebook
- Open your Google Colab notebook with the GenAI backend
- Run all cells
- Wait for Gradio to generate a public link

### 2. Copy the Gradio Link
You'll see something like:
```
Running on public URL: https://1234abcd5678efgh.gradio.live
```
**Copy this entire URL**

### 3. Paste the Link in script.js

Open the file: `script.js`

Find this line (around line 5):
```javascript
const GRADIO_LINK = 'PASTE_YOUR_GRADIO_LINK_HERE';
```

Replace it with your actual link:
```javascript
const GRADIO_LINK = 'https://1234abcd5678efgh.gradio.live';
```

**Important:** Keep the quotes around the URL!

### 4. Save the File

Press `Ctrl + S` (Windows) or `Cmd + S` (Mac)

### 5. Open the Website

#### Option A: Double-click `index.html`
Just double-click the `index.html` file in your file explorer

#### Option B: Use a local server (recommended)
```bash
# In terminal/command prompt:
cd "C:\Users\Madhu\Desktop\ss test"
python -m http.server 8000
```
Then open: http://localhost:8000

### 6. Test It!

1. Click the "Generate Your Outfit Now" button
2. It should open your Gradio interface in a new tab
3. ✅ Success!

---

## 🔍 Visual Guide

```
Before:
const GRADIO_LINK = 'PASTE_YOUR_GRADIO_LINK_HERE';
                     ↑
                     Replace this entire part

After:
const GRADIO_LINK = 'https://abc123.gradio.live';
                     ↑
                     Your actual Gradio link
```

---

## ⚠️ Common Issues

### "Gradio link not configured" alert?
- You haven't updated the link yet
- Go back to step 3

### "Invalid Gradio link" alert?
- Make sure you copied the complete URL
- It should start with `https://`
- It should end with `.gradio.live`

### Gradio page shows "Connection Error"?
- Your Gradio link might have expired
- Re-run your Google Colab notebook
- Get a new link and update `script.js` again

---

## 📍 Exact Location

**File:** `C:\Users\Madhu\Desktop\ss test\script.js`

**Line:** 5

**What to change:**
```javascript
// BEFORE (default)
const GRADIO_LINK = 'PASTE_YOUR_GRADIO_LINK_HERE';

// AFTER (your link)
const GRADIO_LINK = 'https://YOUR-ACTUAL-LINK.gradio.live';
```

---

## ✅ Checklist

- [ ] Google Colab notebook is running
- [ ] Gradio link is copied
- [ ] Opened `script.js` in a text editor
- [ ] Found line 5 with `GRADIO_LINK`
- [ ] Pasted your link (keeping the quotes)
- [ ] Saved the file
- [ ] Opened `index.html` in browser
- [ ] Clicked "Generate Outfit" button
- [ ] Gradio interface opened successfully

---

**That's it! You're ready for your hackathon demo! 🚀**
