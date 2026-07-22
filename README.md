# BSDESSIGNS — Interior & Construction Website

A responsive, single-page business website for an interior design and construction company.

## Included
- Premium responsive design
- About, vision, mission and aim
- Interior, construction, renovation and turnkey services
- Filterable project portfolio
- Detailed project case-study popups
- Work process and company benefits
- Client testimonials
- Contact details and embedded Google map
- WhatsApp enquiry form
- Mobile navigation and accessibility improvements

## Important: replace demo details before publishing

### 1. Phone and WhatsApp
Open `script.js` and update:
```js
whatsappNumber: "919876543210"
```
Use the country code without `+`, spaces or dashes.

Also replace the visible phone number in `index.html`.

### 2. Email and office address
Search `index.html` for:
- `hello@bsdessigns.in`
- `Delhi NCR, India`
- `+91 98765 43210`

Replace all occurrences with the real information.

### 3. Google map
Replace the iframe URL and directions link in the `map-wrap` section of `index.html` with the real office location.

### 4. Real projects and testimonials
The current projects, figures, owner names and testimonials are demo content. Replace them with genuine company information and photographs.
Project popup details are stored in `projectData` inside `script.js`.

### 5. Company statistics
Replace the sample values in the `stats-band` section, such as projects delivered and years of experience.

## Run locally
Open `index.html` directly in a browser, or use the VS Code Live Server extension.

## Deploy
The folder can be deployed directly to GitHub Pages, Netlify or Vercel as a static website.
