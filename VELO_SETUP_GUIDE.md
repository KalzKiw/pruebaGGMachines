# Configuración Velo by Wix + React Frontend

## 🎯 **Arquitectura:**
- **Frontend:** React (tu landing actual)
- **Backend:** Velo by Wix (endpoints personalizados)
- **Base de Datos:** Wix Data Collections
- **Hosting:** Wix (todo integrado)

## 📋 **Guía paso a paso:**

### 1. **Crear sitio Wix con Velo**

1. Ve a [Wix.com](https://wix.com) y crea un nuevo sitio
2. Activa **Velo by Wix** en tu sitio:
   - **Dashboard** → **Developer Mode** → **Enable Velo**
3. Esto activará el editor de código backend

### 2. **Configurar Wix Data Collections**

En tu **Wix Dashboard**:

1. **Database** → **+ New Collection**
2. Crea estas colecciones:

```javascript
// Collection: Products
{
  _id: "string", // Auto-generated
  model: "text",
  description: "text", 
  specs: "text",
  price: "number",
  image: "image",
  featured: "boolean"
}

// Collection: Orders
{
  _id: "string",
  products: "reference-multiple", // Reference to Products
  customerEmail: "text",
  customerName: "text", 
  total: "number",
  status: "text", // "pending", "paid", "shipped"
  createdDate: "date"
}

// Collection: Contacts
{
  _id: "string",
  name: "text",
  email: "text",
  phone: "text", 
  message: "text",
  createdDate: "date"
}
```

### 3. **Crear endpoints de Velo**

En tu sitio Wix, ve al **Editor** → **Code** → **Backend** → **HTTP Functions**

Crea estos archivos:

#### `http-functions.js`
```javascript
import { ok, badRequest, serverError } from 'wix-http-functions';
import wixData from 'wix-data';

// GET /getProducts - Obtener productos
export function get_getProducts(request) {
  return wixData.query('Products')
    .find()
    .then((results) => {
      return ok({
        headers: { 'Content-Type': 'application/json' },
        body: { products: results.items }
      });
    })
    .catch((error) => {
      return serverError({ body: error });
    });
}

// POST /addToCart - Agregar al carrito (usando wix-ecom)
export function post_addToCart(request) {
  const { productId, quantity } = request.body;
  
  // Aquí integrarías con Wix eCommerce API
  // Por ahora retornamos success
  return ok({
    headers: { 'Content-Type': 'application/json' },
    body: { success: true, message: 'Product added to cart' }
  });
}

// GET /getCurrentCart - Obtener carrito actual
export function get_getCurrentCart(request) {
  // Integrar con Wix eCommerce para obtener carrito
  return ok({
    headers: { 'Content-Type': 'application/json' },
    body: { cart: { lineItems: [] } }
  });
}

// POST /createCheckout - Crear sesión de checkout
export function post_createCheckout(request) {
  // Integrar con Wix Payments API
  return ok({
    headers: { 'Content-Type': 'application/json' },
    body: { 
      checkoutId: 'checkout_123',
      checkoutUrl: '/checkout'
    }
  });
}

// POST /submitContactForm - Enviar formulario de contacto  
export function post_submitContactForm(request) {
  const { name, email, phone, message } = request.body;
  
  return wixData.insert('Contacts', {
    name,
    email, 
    phone,
    message,
    createdDate: new Date()
  })
  .then((result) => {
    return ok({
      headers: { 'Content-Type': 'application/json' },
      body: { success: true, message: 'Contact form submitted successfully' }
    });
  })
  .catch((error) => {
    return serverError({ body: error });
  });
}
```

### 4. **Configurar variables de entorno**

Crea un archivo `.env` con:

```env
# URL de tu sitio Wix (reemplaza con tu URL real)
REACT_APP_VELO_SITE_URL=https://tuusuario.wixsite.com/tu-sitio

# Opcional
REACT_APP_ENVIRONMENT=development
REACT_APP_API_TIMEOUT=10000
```

### 5. **Actualizar el servicio React**

El archivo `src/services/veloService.js` ya está configurado. Solo actualiza la importación en tus componentes:

```javascript
// En lugar de wixService.js, usa:
import wixServices from '../services/veloService';
```

### 6. **Subir productos a Wix**

1. **Wix Dashboard** → **Content Manager** → **Products Collection**
2. Agrega tus Mini PCs:

```javascript
// Ejemplos de productos
{
  model: "GMKtec EVO-T1",
  description: "Maximum performance for professional workflow applications",
  specs: "Intel Ultra 9, 64GB RAM", 
  price: 2499,
  featured: true
}
```

### 7. **Deploy del proyecto**

#### Opción A: React en Netlify + Velo como API
```bash
# Build de producción
npm run build

# Deploy a Netlify
# Configura las variables de entorno en Netlify
```

#### Opción B: Todo en Wix (Recomendado)
1. Sube tu React build a Wix:
   - **Editor** → **Add** → **More** → **HTML Component**  
   - Sube los archivos build generados
2. Configura el dominio personalizado en Wix

### 8. **Activar Wix Payments**

1. **Dashboard** → **Settings** → **Accept Payments**
2. Conecta Stripe, PayPal o procesador preferido
3. Configura impuestos y envío

## 🔄 **Flujo de trabajo:**

1. **Cliente** → Ve tu landing React (hospedado en Wix)
2. **Backend** → Endpoints de Velo manejan la lógica
3. **Datos** → Wix Data Collections almacenan todo
4. **Pagos** → Wix Payments procesa transacciones
5. **Gestión** → Wix Dashboard para administración

## ⚡ **Ventajas de Velo:**

✅ **Sin configuración** de servidores  
✅ **Escalabilidad** automática  
✅ **Base de datos** integrada  
✅ **Pagos seguros** incluidos  
✅ **Editor visual** + código  
✅ **Todo en una plataforma**  

## 🚀 **Checklist final:**

- [ ] Sitio Wix creado con Velo activado
- [ ] Data Collections configuradas  
- [ ] HTTP Functions creadas
- [ ] Productos agregados a la colección
- [ ] Variables de entorno configuradas
- [ ] React build generado
- [ ] Proyecto desplegado
- [ ] Pagos configurados
- [ ] ¡Listo para vender!

## 🔗 **Recursos útiles:**

- [Velo by Wix Docs](https://www.wix.com/velo/reference)
- [Wix Data API](https://www.wix.com/velo/reference/wix-data)
- [HTTP Functions](https://www.wix.com/velo/reference/wix-http-functions)
- [Wix eCommerce API](https://www.wix.com/velo/reference/wix-ecom)

---

**¿Necesitas ayuda con algún paso específico?** ¡Avísame!