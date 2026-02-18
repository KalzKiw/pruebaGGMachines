# Mini PC Store - React Frontend + Velo by Wix Backend

A premium dark mode landing page for Mini PC sales with Velo by Wix integration.

## 🚀 Features

- **Premium Dark Mode Design** - High-end, industrial aesthetic
- **React + Tailwind CSS** - Modern, responsive frontend
- **Velo by Wix Integration** - Custom backend endpoints and data collections
- **Production Ready** - Optimized build for deployment

## 🛠️ Tech Stack

- **Frontend:** React 18, Tailwind CSS
- **Backend:** Velo by Wix (custom endpoints, data collections)
- **Database:** Wix Data Collections
- **Build Tool:** Create React App
- **Deployment:** Wix Platform (recommended) or Netlify/Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/KalzKiw/pruebaGGMachines.git
cd Pagina

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
REACT_APP_VELO_SITE_URL=https://yourusername.wixsite.com/yoursite
REACT_APP_ENVIRONMENT=development
```

2. Set up your Wix site with Velo:
   - Create a Wix account and new site
   - Enable Velo Developer Mode
   - Create data collections (Products, Orders, Contacts)
   - Deploy HTTP functions for API endpoints
## 🏗️ Project Structure

```
src/
├── components/
│   └── LandingPage.jsx     # Main landing page component
├── services/
│   └── veloService.js      # Velo by Wix API integration
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

### Wix Platform (Recommended)

1. Follow the complete guide in `VELO_SETUP_GUIDE.md`
2. Upload your React build to Wix
3. Configure domain and payments

### Netlify/Vercel (Alternative)

1. Build the project:
```bash
npm run build
```

2. Deploy to your preferred platform
3. Configure environment variables

## 🛍️ Products Featured

- GMKtec EVO-T1 - Intel Ultra 9, 64GB RAM ($2,499)
- GMKtec EVO-X1 - Ryzen AI 9, AI-ready NPU ($1,799)
- MinisForum UM870 Plus - Ryzen 7, 4K displays ($1,299)
- GMKtec K6 - Ryzen 7 7840HS, office-ready ($999)

## 🔄 Velo Integration Flow

1. Customer views React frontend 
2. Frontend calls Velo HTTP Functions
3. Velo manages products, cart, and orders
4. Wix Payments handles secure transactions
5. All data stored in Wix Data Collections

## 📚 Setup Guides

- **Complete Setup:** See `VELO_SETUP_GUIDE.md` for step-by-step instructions
- **API Reference:** Check Velo by Wix documentation
- **Data Collections:** Configure Products, Orders, and Contacts collections

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