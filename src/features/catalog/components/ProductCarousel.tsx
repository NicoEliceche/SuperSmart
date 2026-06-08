import { useEffect, useRef } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types/catalog.types';
import {
  ProductCarouselGroup,
  ProductCarouselShell,
  ProductCarouselTrack,
  ProductCarouselViewport,
} from './ProductCarouselStyled';

interface ProductCarouselProps {
  products: Product[];
  onOpenProduct: (product: Product) => void;
}

const PRODUCT_MARQUEE_SPEED = 42;
const INITIAL_OFFSET_RATIO = 0.2;

export const ProductCarousel = ({ products, onOpenProduct: _onOpenProduct }: ProductCarouselProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;

    if (!track || !group) {
      return;
    }

    let animationFrameId = 0;
    let resizeObserver: ResizeObserver | null = null;
    let groupWidth = 0;
    let offset = 0;
    let hasMeasured = false;
    let previousTimestamp: number | null = null;

    const applyTransform = () => {
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const measure = () => {
      const nextWidth = group.getBoundingClientRect().width;

      if (nextWidth <= 0) {
        return;
      }

      groupWidth = nextWidth;

      if (!hasMeasured) {
        offset = groupWidth * INITIAL_OFFSET_RATIO;
        hasMeasured = true;
      } else {
        offset %= groupWidth;
      }

      applyTransform();
    };

    const step = (timestamp: number) => {
      if (previousTimestamp === null) {
        previousTimestamp = timestamp;
      }

      const deltaSeconds = Math.min((timestamp - previousTimestamp) / 1000, 0.05);
      previousTimestamp = timestamp;

      if (groupWidth > 0) {
        offset += PRODUCT_MARQUEE_SPEED * deltaSeconds;

        if (offset >= groupWidth) {
          offset -= groupWidth;
        }

        applyTransform();
      }

      animationFrameId = window.requestAnimationFrame(step);
    };

    measure();
    animationFrameId = window.requestAnimationFrame(step);

    const handleResize = () => {
      previousTimestamp = null;
      measure();
    };

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(group);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver?.disconnect();
      window.removeEventListener('resize', handleResize);
      track.style.removeProperty('transform');
    };
  }, [products.length]);

  return (
    <ProductCarouselShell data-testid="product-carousel-shell">
      <ProductCarouselViewport aria-label="Carrusel de productos estrella">
        <ProductCarouselTrack ref={trackRef} data-testid="product-carousel-track">
          <ProductCarouselGroup ref={groupRef}>
            {products.map((product) => (
              <div key={product.id} data-carousel-card>
                <ProductCard product={product} />
              </div>
            ))}
          </ProductCarouselGroup>
          <ProductCarouselGroup aria-hidden="true">
            {products.map((product) => (
              <div key={`duplicate-${product.id}`} data-carousel-card>
                <ProductCard product={product} isDuplicate />
              </div>
            ))}
          </ProductCarouselGroup>
        </ProductCarouselTrack>
      </ProductCarouselViewport>
    </ProductCarouselShell>
  );
};
