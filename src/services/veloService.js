// Velo by Wix Service - API Integration
// Este servicio maneja la comunicación con endpoints de Velo backend
// Los endpoints de Velo deben ser creados en el código backend de tu sitio Wix

// Datos de desarrollo - reemplazar con llamadas reales a la API de Velo
const mockProducts = [
  {
    id: 1,
    model: "GMKtec EVO-T1",
    description: "Maximum performance for professional workflow applications and GraphQL tasks.",
    specs: "Intel Ultra 9, 64GB RAM",
    price: "$2,499",
    image: ""
  },
  {
    id: 2,
    model: "GMKtec EVO-X1",
    description: "Optimized with dedicated NPU for enhanced AI workflow acceleration.",
    specs: "Ryzen AI 9, AI-ready NPU",
    price: "$1,799",
    image: ""
  },
  {
    id: 3,
    model: "MinisForum UM870 Plus",
    description: "Extreme versatility for workstations with multi-monitor configurations.",
    specs: "Ryzen 7 up to 3x 4K displays",
    price: "$1,299",
    image: ""
  },
  {
    id: 4,
    model: "GMKtec K6",
    description: "The ultimate power efficiency solution for modern office environments.",
    specs: "Ryzen 7 7840HS, office-ready",
    price: "$999",
    image: ""
  }
];

class VeloService {
  constructor() {
    this.siteUrl = process.env.REACT_APP_VELO_SITE_URL; // ej: 'https://tusite.wixsite.com/misite'
    this.apiEndpoint = `${this.siteUrl}/_functions`;
  }

  // Obtener productos desde endpoint de Velo
  async getProducts() {
    try {
      // Llamar a tu endpoint de Velo: /_functions/getProducts
      const response = await fetch(`${this.apiEndpoint}/getProducts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.products || mockProducts;
    } catch (error) {
      console.error('Error fetching products:', error);
      return mockProducts; // Fallback a datos mock
    }
  }

  // Agregar producto al carrito a través de endpoint de Velo
  async addToCart(productId, quantity = 1) {
    try {
      // Llamar a tu endpoint de Velo: /_functions/addToCart
      const response = await fetch(`${this.apiEndpoint}/addToCart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { success: true, cart: data.cart };
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Fallback para desarrollo
      console.log(`Added product ${productId} to cart (mock)`);
      return { success: true };
    }
  }

  // Obtener carrito actual desde endpoint de Velo
  async getCurrentCart() {
    try {
      // Llamar a tu endpoint de Velo: /_functions/getCurrentCart
      const response = await fetch(`${this.apiEndpoint}/getCurrentCart`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.cart || { lineItems: [] };
    } catch (error) {
      console.error('Error fetching current cart:', error);
      return { lineItems: [] }; // Fallback
    }
  }

  // Crear checkout a través de endpoint de Velo
  async createCheckout() {
    try {
      // Llamar a tu endpoint de Velo: /_functions/createCheckout
      const response = await fetch(`${this.apiEndpoint}/createCheckout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        checkoutId: data.checkoutId,
        checkoutUrl: data.checkoutUrl
      };
    } catch (error) {
      console.error('Error creating checkout:', error);
      // Fallback para desarrollo
      alert('Configure Velo endpoints to enable payments');
      return null;
    }
  }

  // Redirigir a checkout de Wix
  async redirectToCheckout(checkoutId) {
    try {
      if (checkoutId && this.siteUrl) {
        // Construir URL de checkout de Wix
        const checkoutUrl = `${this.siteUrl}/checkout?checkoutId=${checkoutId}`;
        window.open(checkoutUrl, '_blank');
      } else {
        console.log('Redirect to Wix checkout:', checkoutId);
      }
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
    }
  }

  // Enviar formulario de contacto a través de endpoint de Velo
  async submitContactForm(formData) {
    try {
      // Llamar a tu endpoint de Velo: /_functions/submitContactForm
      const response = await fetch(`${this.apiEndpoint}/submitContactForm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { success: true, message: data.message || 'Form submitted successfully!' };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // Fallback para desarrollo
      console.log('Contact form submitted (mock):', formData);
      return { success: true, message: 'Form submitted successfully! (mock mode)' };
    }
  }
}

const veloService = new VeloService();

// Exportar como objeto para compatibilidad con código existente
export const wixServices = {
  getProducts: () => veloService.getProducts(),
  addToCart: (productId, quantity) => veloService.addToCart(productId, quantity),
  getCurrentCart: () => veloService.getCurrentCart(),
  createCheckout: () => veloService.createCheckout(),
  redirectToCheckout: (checkoutId) => veloService.redirectToCheckout(checkoutId),
  submitContactForm: (formData) => veloService.submitContactForm(formData)
};

export default wixServices;