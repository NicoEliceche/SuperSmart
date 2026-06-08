import styled from 'styled-components';

export const ProductCardWrapper = styled.article`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.surface} 0%, ${({ theme }) => theme.color.neutral[50]} 100%);
  box-shadow: ${({ theme }) => theme.shadow.md};
  overflow: hidden;
  transition: transform 0.32s ease, box-shadow 0.32s ease, border-color 0.32s ease, background 0.32s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-0.375rem) scale(1.01);
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }

  &:hover img {
    transform: scale(1.045);
  }
`;

export const ProductImageFrame = styled.div`
  position: relative;
  aspect-ratio: ${({ theme }) => theme.layout.productImageRatio};
  overflow: hidden;
  background:
    radial-gradient(circle at 22% 18%, ${({ theme }) => theme.color.accentLight}, transparent 42%),
    ${({ theme }) => theme.color.surfaceAlt};

  picture {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: ${({ theme }) => theme.spacing[3]};
  transition: transform 0.32s ease;
`;

export const ProductBadge = styled.span`
  position: absolute;
  inset: ${({ theme }) => theme.spacing[3]} auto auto ${({ theme }) => theme.spacing[3]};
  z-index: 1;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: ${({ theme }) => theme.color.magenta};
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ProductInfo = styled.div`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
  min-width: 0;

  h3,
  p {
    margin: 0;
  }

  h3 {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.lg};
    line-height: ${({ theme }) => theme.typography.lineHeight.snug};
    overflow-wrap: anywhere;
  }

  p {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    overflow-wrap: anywhere;
  }
`;

export const ProductCategory = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ProductSpecs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
    border-radius: ${({ theme }) => theme.radius.full};
    background-color: ${({ theme }) => theme.color.primaryLight};
    color: ${({ theme }) => theme.color.primaryDark};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    overflow-wrap: anywhere;
  }
`;

export const CardActions = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0 ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
`;

export const WhatsAppButton = styled.a`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-decoration: none;
  min-width: 0;
  white-space: normal;
  box-shadow: 0 0.75rem 1.375rem rgba(255, 7, 120, 0.2);
  transition: transform 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-0.125rem);
    background-color: ${({ theme }) => theme.color.accentDark};
    box-shadow: 0 1rem 1.75rem rgba(255, 7, 120, 0.28);
  }

  span {
    text-align: center;
    overflow-wrap: anywhere;
  }
`;
