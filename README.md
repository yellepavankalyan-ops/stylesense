# StyleSense - AI Fashion Recommendations

## 🎯 Quick Setup Guide

### Where to Paste Your Gradio Link

After running your Google Colab notebook, you'll receive a Gradio link that looks like:
```
https://1234abcd5678efgh.gradio.live
```

**To integrate it with StyleSense:**

1. Open `script.js` in your code editor
2. Find line 5 which says:
   ```javascript
   const GRADIO_LINK = 'PASTE_YOUR_GRADIO_LINK_HERE';
   ```
3. Replace `'PASTE_YOUR_GRADIO_LINK_HERE'` with your actual Gradio link:
   ```javascript
   const GRADIO_LINK = 'https://1234abcd5678efgh.gradio.live';
   ```
4. Save the file
5. Refresh your website

**That's it!** The "Generate Outfit" button will now redirect users to your Gradio AI service.

---

## 🚀 Running the Website Locally

### Option 1: Using Python (Recommended)
```bash
# Navigate to the project folder
cd "C:\Users\Madhu\Desktop\ss test"

# Start a local server
python -m http.server 8000
```
Then open: http://localhost:8000

### Option 2: Using Node.js
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Navigate to the project folder
cd "C:\Users\Madhu\Desktop\ss test"

# Start the server
http-server -p 8000
```
Then open: http://localhost:8000

### Option 3: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 📁 Project Structure

```
ss test/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript (UPDATE GRADIO_LINK HERE!)
└── README.md           # This file
```

---

## ✨ Features

- **Modern, Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Gradient orbs, floating elements, and fade-in effects
- **Professional UI/UX**: Clean, hackathon-ready interface
- **Easy Integration**: Just paste your Gradio link and you're done
- **No Backend Required**: Pure frontend that connects to your Gradio service

---

## 🎨 Design Highlights

- **Color Palette**: Purple-pink gradient theme with vibrant accents
- **Typography**: Inter + Outfit fonts for modern, clean text
- **Animations**: 
  - Floating gradient orbs in hero section
  - Particle effects
  - Smooth hover transitions
  - Fade-in on scroll
- **Responsive**: Mobile-first design with breakpoints at 968px, 768px, and 480px

---

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css` (lines 1-20):
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    /* ... more colors */
}
```

### Update Content
Edit `index.html` to change:
- Hero title and description
- Feature cards
- How It Works steps
- Footer information

### Modify Animations
Adjust animation timings in `styles.css`:
```css
@keyframes float {
    /* Customize the floating effect */
}
```

---

## 🎯 For Hackathon Demo

### Before Presenting:
1. ✅ Update `GRADIO_LINK` in `script.js`
2. ✅ Test the "Generate Outfit" button
3. ✅ Check mobile responsiveness
4. ✅ Ensure Gradio backend is running on Google Colab

### During Demo:
1. Show the landing page and explain features
2. Scroll through "How It Works" section
3. Click "Generate Outfit" to demonstrate AI integration
4. Show the Gradio interface generating recommendations

---

## 🐛 Troubleshooting

### Button doesn't work?
- Check if you updated `GRADIO_LINK` in `script.js`
- Make sure your Gradio link is active (they expire after inactivity)
- Check browser console for errors (F12)

### Gradio link expired?
- Re-run your Google Colab notebook
- Copy the new Gradio link
- Update `script.js` again

### Styling looks broken?
- Make sure all three files (HTML, CSS, JS) are in the same folder
- Clear browser cache (Ctrl + Shift + R)

---

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile menu toggle for small screens
- Stacked layout on mobile devices
- Touch-friendly buttons and navigation
- Optimized font sizes for readability

---

## 🎓 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties, Animations)
- **Vanilla JavaScript**: No frameworks needed
- **Google Fonts**: Inter & Outfit
- **Gradio**: AI backend integration

---

## 📝 Notes

- This is a **frontend-only** prototype
- The AI logic runs on your Google Colab notebook via Gradio
- No deployment or hosting required for the backend
- Perfect for hackathon demos and prototypes

---

## 🚀 Next Steps (Optional Enhancements)

- Add iframe embedding option for Gradio (instead of redirect)
- Create a gallery of example outfits
- Add user testimonials section
- Implement dark mode toggle
- Add loading animations while Gradio processes

---

## 📞 Support

If you encounter any issues:
1. Check the browser console (F12) for errors
2. Verify your Gradio link is active
3. Make sure all files are in the correct location
4. Try a different browser

---

**Built with ✨ for your hackathon success!**
