import styled from 'styled-components';

export const ProductCarouselShell = styled.div`
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[6]};
  display: grid;
  overflow: hidden;
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.background} 0%, ${({ theme }) => theme.color.surface} 100%);
`;

export const ProductCarouselViewport = styled.div`
  --edge-fade: clamp(2rem, 8vw, 5rem);

  position: relative;
  width: 100%;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[4]};

  mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 var(--edge-fade),
    #000 calc(100% - var(--edge-fade)),
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 var(--edge-fade),
    #000 calc(100% - var(--edge-fade)),
    transparent 100%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    --edge-fade: clamp(2.5rem, 5vw, 4rem);
  }
`;

export const ProductCarouselTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 0;
  will-change: transform;
`;

export const ProductCarouselGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  padding-right: ${({ theme }) => theme.spacing[3]};

  > div {
    flex: 0 0 clamp(15.5rem, 20vw, 18rem);
    min-width: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    > div {
      flex-basis: min(16rem, calc(100vw - 4rem));
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    > div {
      flex-basis: 17.25rem;
    }
  }
`;
