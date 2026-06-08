import { Star } from 'lucide-react';
import { reviews } from '../data/catalogData';
import {
  ReviewCard,
  ReviewGrid,
  ReviewsHeader,
  ReviewsSection,
  Stars,
} from './ReviewsStyled';

export const Reviews = () => {
  return (
    <ReviewsSection aria-labelledby="reviews-title">
      <ReviewsHeader>
        <span>Reseñas</span>
        <h2 id="reviews-title">Compra guiada para clientes exigentes</h2>
      </ReviewsHeader>
      <ReviewGrid>
        {reviews.map((review) => (
          <ReviewCard key={`${review.name}-${review.vehicle}`}>
            <Stars role="img" aria-label="Valoracion 5 de 5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} aria-hidden="true" size={17} fill="currentColor" />
              ))}
            </Stars>
            <p>{review.text}</p>
            <strong>{review.name}</strong>
            <span>{review.vehicle}</span>
          </ReviewCard>
        ))}
      </ReviewGrid>
    </ReviewsSection>
  );
};
