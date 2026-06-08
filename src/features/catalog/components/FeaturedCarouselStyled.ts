import styled from 'styled-components';

export const CarouselSection = styled.section`
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.layout.screenPaddingH};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.surfaceAlt} 0%, rgba(255, 255, 255, 0.84) 100%);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.layout.screenPaddingHDesktop};
  }
`;

export const CarouselHeader = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto ${({ theme }) => theme.spacing[8]};
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  span {
    color: ${({ theme }) => theme.color.primaryDark};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.bold};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.size.xl};
    }
  }

  h2 {
    margin: 0;
    max-width: 44rem;
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size['4xl']};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h2 {
      font-size: ${({ theme }) => theme.typography.size['5xl']};
    }
  }
`;

export const CarouselFrame = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

export const CarouselTrack = styled.div<{ $activeIndex: number }>`
  display: flex;
  transform: translateX(calc(${({ $activeIndex }) => $activeIndex} * -100%));
  transition: transform 0.35s ease;
`;

export const CarouselItem = styled.article`
  flex: 0 0 100%;
  display: grid;
  background-color: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 1rem;
  overflow: hidden;

  picture {
    min-height: 18rem;
    background-color: transparent;
    overflow: hidden;
  }

  div {
    display: grid;
    align-content: center;
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[6]};
  }

  span {
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size['2xl']};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  p {
    color: ${({ theme }) => theme.color.textSecondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 18rem;
  aspect-ratio: ${({ theme }) => theme.layout.productImageRatio};
  object-fit: cover;
  padding: 0;
  border-radius: 0;
`;

export const CarouselControls = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: ${({ theme }) => theme.spacing[5]} auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const CarouselButton = styled.button`
  width: ${({ theme }) => theme.layout.buttonHeight};
  height: ${({ theme }) => theme.layout.buttonHeight};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
`;

export const CarouselDot = styled.button<{ $isActive: boolean }>`
  width: ${({ theme }) => theme.spacing[3]};
  height: ${({ theme }) => theme.spacing[3]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.color.primary : theme.color.border)};
  cursor: pointer;
`;
