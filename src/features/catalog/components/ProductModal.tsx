import { Download, X } from 'lucide-react';
import { useEffect } from 'react';
import { catalogLinks } from '../data/catalogData';
import type { Product } from '../types/catalog.types';
import { createProductMessage, createWhatsAppUrl } from '../utils/whatsapp';
import {
  ModalActions,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalImage,
  ModalOverlay,
  ModalSpecs,
} from './ProductModalStyled';
import { WhatsAppMark } from './WhatsAppMark';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(product));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, product]);

  if (!product) {
    return null;
  }

  const whatsappUrl = createWhatsAppUrl(createProductMessage(product));

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <ModalClose type="button" onClick={onClose} aria-label="Cerrar detalle de producto">
          <X aria-hidden="true" size={22} />
        </ModalClose>
        <picture>
          <source srcSet={product.image.webp} type="image/webp" />
          <ModalImage src={product.image.fallback} alt={product.image.alt} decoding="async" />
        </picture>
        <ModalBody>
          <span>{product.category}</span>
          <h2 id="product-modal-title">{product.name}</h2>
          <p>{product.description}</p>
          <ModalSpecs>
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ModalSpecs>
          <ModalActions>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppMark size={18} />
              Pedir por WhatsApp
            </a>
            <a href={catalogLinks[0].href} download>
              <Download aria-hidden="true" size={18} />
              Descargar catálogo
            </a>
          </ModalActions>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};
