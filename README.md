# Mini PC Store - React Frontend + Wix Backend

A premium dark mode landing page for Mini PC sales with Wix headless integration.

## 🚀 Features

- **Premium Dark Mode Design** - High-end, industrial aesthetic
- **React + Tailwind CSS** - Modern, responsive frontend
- **Wix Headless Integration** - Backend for products, payments, inventory
- **Production Ready** - Optimized build for deployment

## 🛠️ Tech Stack

- **Frontend:** React 18, Tailwind CSS
- **Backend:** Wix Headless (products, cart, checkout)
- **Build Tool:** Create React App
- **Deployment:** Ready for Netlify/Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mini-pc-store.git
cd mini-pc-store

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🔧 Configuration

1. Create a `.env` file in the root directory:

```env
REACT_APP_WIX_API_KEY=your_wix_api_key_here
REACT_APP_WIX_SITE_ID=your_wix_site_id_here
REACT_APP_WIX_CLIENT_ID=your_wix_client_id_here
```

2. Set up your Wix store:
   - Create a Wix Business account
   - Enable Wix Stores
   - Configure payment methods
   - Add your products

## 🏗️ Project Structure

```
src/
├── components/
│   └── LandingPage.jsx     # Main landing page component
├── services/
│   └── wixService.js       # Wix API integration
├── styles/
│   ├── global.css          # Global styles
│   └── tailwind.css        # Tailwind directives
└── App.js                  # Main app component
```

## 🎨 Design

- **Color Scheme:** Black background, green accents (#22ff88)
- **Typography:** Bold, industrial fonts with wide letter spacing
- **Layout:** Premium grid system with glassmorphism effects
- **Responsive:** Mobile-first design approach

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Drag the `build/` folder to [netlify.com](https://netlify.com)

### Vercel

1. Connect your GitHub repository to [vercel.com](https://vercel.com)
2. Deploy automatically on push

## 🛍️ Products Featured

- GMKtec EVO-T1 - Intel Ultra 9, 64GB RAM ($2,499)
- GMKtec EVO-X1 - Ryzen AI 9, AI-ready NPU ($1,799)
- MinisForum UM870 Plus - Ryzen 7, 4K displays ($1,299)
- GMKtec K6 - Ryzen 7 7840HS, office-ready ($999)

## 🔄 Wix Integration Flow

1. Customer views React frontend (fast & beautiful)
2. Adds products to cart via Wix API
3. Clicks checkout → redirects to Wix secure payment
4. Order management handled by Wix dashboard

## 📄 License

MIT License - feel free to use for commercial projects.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Built with ❤️ for high-performance Mini PC enthusiasts**