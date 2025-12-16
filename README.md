# Myanmar Casino Review Website

A luxurious Myanmar casino review website built with Next.js 14, featuring comprehensive casino reviews in Burmese language with SEO optimization.

## Features

- 🎰 **Luxury Casino Design**: Red, black, and gold theme with smooth animations
- 🇲🇲 **Myanmar Language**: Primary content in Burmese with English technical terms
- 📱 **Fully Responsive**: Mobile-first design with touch-friendly interfaces
- 🚀 **Performance Optimized**: Fast loading times with Next.js 14 App Router
- 🔍 **SEO Optimized**: Complete metadata, sitemap, and structured data
- 🎨 **Beautiful UI**: Framer Motion animations and Tailwind CSS styling

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Noto Sans Myanmar (Burmese), Poppins (English)
- **Image Optimization**: Next.js Image with Sharp

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
myanmar-casino-review/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── bonuses/            # Bonuses page
│   ├── games/              # Games page
│   ├── payment/            # Payment methods page
│   ├── guide/              # Beginner's guide
│   ├── review/             # Casino review pages
│   │   ├── [slug]/         # Dynamic review pages
│   │   └── top-myanmar-casinos/  # Comparison page
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Homepage sections
│   └── ui/                 # Reusable UI components
├── data/
│   └── casinos.json        # Casino data
└── public/
    └── images/             # Images directory
```

## Key Features

### Casino Reviews

- 8 detailed casino review pages
- Pros and cons comparison
- Bonus information
- Payment methods
- Game categories
- Expert verdicts

### Redirect Strategy

All CTA buttons redirect to our brand partners:
- Yes8
- Ygn9
- Pya777
- Mmk99
- Kbz999
- Mmk123

### SEO Optimization

- Myanmar language meta tags
- Open Graph tags
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## Deployment

The project is optimized for Vercel deployment:

```bash
vercel deploy
```

## License

Private project - All rights reserved

