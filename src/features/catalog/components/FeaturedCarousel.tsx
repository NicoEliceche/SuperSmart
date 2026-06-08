import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { featuredItems } from '../data/catalogData';
import {
  CarouselButton,
  CarouselControls,
  CarouselDot,
  CarouselFrame,
  CarouselHeader,
  CarouselImage,
  CarouselItem,
  CarouselSection,
  CarouselTrack,
} from './FeaturedCarouselStyled';

export const FeaturedCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = useMemo(() => featuredItems[activeIndex], [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? featuredItems.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === featuredItems.length - 1 ? 0 : current + 1));
  };

  return (
    <CarouselSection id="accesorios" aria-labelledby="featured-title">
      <CarouselHeader>
        <span>Destacados del mes</span>
        <h2 id="featured-title">Piezas que elevan el catálogo y llaman más la atención</h2>
      </CarouselHeader>

      <CarouselFrame aria-live="polite">
        <CarouselTrack $activeIndex={activeIndex}>
          {featuredItems.map((item) => (
            <CarouselItem key={item.id}>
              <picture>
                <source srcSet={item.image.webp} type="image/webp" />
                <CarouselImage
                  src={item.image.fallback}
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div>
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselFrame>

      <CarouselControls>
        <CarouselButton type="button" onClick={goToPrevious} aria-label="Ver producto anterior">
          <ChevronLeft aria-hidden="true" size={22} />
        </CarouselButton>
        {featuredItems.map((item, index) => (
          <CarouselDot
            key={item.id}
            type="button"
            $isActive={activeItem.id === item.id}
            aria-label={`Ver destacado ${index + 1}`}
            aria-current={activeItem.id === item.id}
            onClick={() => setActiveIndex(index)}
          />
        ))}
        <CarouselButton type="button" onClick={goToNext} aria-label="Ver producto siguiente">
          <ChevronRight aria-hidden="true" size={22} />
        </CarouselButton>
      </CarouselControls>
    </CarouselSection>
  );
};
