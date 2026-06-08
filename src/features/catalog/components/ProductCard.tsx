import type { Product } from '../types/catalog.types';
import { createProductMessage, createWhatsAppUrl } from '../utils/whatsapp';
import {
  CardActions,
  ProductBadge,
  ProductCardWrapper,
  ProductCategory,
  ProductImage,
  ProductImageFrame,
  ProductInfo,
  ProductSpecs,
  WhatsAppButton,
} from './ProductCardStyled';
import { WhatsAppMark } from './WhatsAppMark';

interface ProductCardProps {
  product: Product;
  isDuplicate?: boolean;
}

export const ProductCard = ({ product, isDuplicate = false }: ProductCardProps) => {
  const whatsappUrl = createWhatsAppUrl(createProductMessage(product));

  return (
    <ProductCardWrapper data-testid="product-card">
      <ProductImageFrame>
        {product.badge && <ProductBadge>{product.badge}</ProductBadge>}
        <picture>
          <source srcSet={product.image.webp} type="image/webp" />
          <ProductImage
            src={product.image.fallback}
            alt={product.image.alt}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </ProductImageFrame>
      <ProductInfo>
        <ProductCategory>{product.category}</ProductCategory>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ProductSpecs>
          {product.specs.slice(0, 3).map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ProductSpecs>
      </ProductInfo>
      <CardActions>
        <WhatsAppButton
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isDuplicate ? -1 : undefined}
          aria-label={`Pedir por WhatsApp: ${product.name}`}
        >
          <WhatsAppMark size={18} />
          <span>Pedir por WhatsApp</span>
        </WhatsAppButton>
      </CardActions>
    </ProductCardWrapper>
  );
};
