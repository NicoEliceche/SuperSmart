import type { Product } from '../types/catalog.types';

const WHATSAPP_PHONE = '584122657893';

export const contact = {
  company: 'Super Smart',
  phoneDisplay: '+58 412-265-7893',
  email: 'manue.quijada12@gmail.com',
  instagram: '@Super.Smart101',
  instagramUrl: 'https://www.instagram.com/Super.Smart101/',
};

export const createWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export const createProductMessage = (product: Product) => {
  return `Hola Super Smart, quiero cotizar el producto: ${product.name}.`;
};

export const createQuoteMessage = (name: string, vehicle: string, interest: string, phone: string) => {
  return [
    'Hola Super Smart, quiero una cotización.',
    `Nombre: ${name}`,
    `Vehículo: ${vehicle}`,
    `Interés: ${interest}`,
    `Teléfono de contacto: ${phone}`,
  ].join('\n');
};
