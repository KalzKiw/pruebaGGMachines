import { ok, notFound } from 'wix-http-functions';
import wixData from 'wix-data';

export function get_getProducts(request) {
  return wixData.query('Store/Products')
    .find()
    .then((results) => {
      return ok({
        headers: { 'Content-Type': 'application/json' },
        body: { products: results.items }
      });
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
      return notFound({ body: error });
    });
}
