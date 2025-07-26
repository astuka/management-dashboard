# Business Management Dashboard

A comprehensive business management dashboard demo built with Next.js. Includes analytics, customer management, product tracking, and reporting capabilities.

Demo site available here: https://astuka-management.netlify.app/

## Features

- 📊 Interactive analytics and charts
- 👥 Customer management
- 📦 Product inventory tracking
- 📈 Sales and revenue reporting
- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Fast performance with Next.js 14
- 📱 Mobile-friendly design

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd management-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.



## Project Structure

```
management-dashboard/
├── app/                    # Next.js App Router pages
│   ├── analytics/         # Analytics page
│   ├── customers/         # Customers page
│   ├── products/          # Products page
│   ├── reports/           # Reports page
│   ├── settings/          # Settings page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── dashboard/         # Dashboard-specific components
│   ├── layout/            # Layout components
│   └── ui/                # UI components
├── out/                   # Static export output
├── public/                # Static assets
├── netlify.toml           # Netlify configuration
└── next.config.js         # Next.js configuration
```

## Todos
- Add labels on the sales and revenue charts
- Make notifications clickable

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.