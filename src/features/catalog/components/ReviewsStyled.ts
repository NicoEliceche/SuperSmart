import styled from 'styled-components';

export const ReviewsSection = styled.section`
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.layout.screenPaddingH};
  background-color: ${({ theme }) => theme.color.neutral[900]};
  color: ${({ theme }) => theme.color.textInverse};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.layout.screenPaddingHDesktop};
  }
`;

export const ReviewsHeader = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto ${({ theme }) => theme.spacing[8]};
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  span {
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.bold};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.size.xl};
    }
  }

  h2 {
    margin: 0;
    max-width: 42rem;
    font-size: ${({ theme }) => theme.typography.size['3xl']};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }
`;

export const ReviewGrid = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ReviewCard = styled.article`
  min-height: 100%;
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.neutral[700]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.color.neutral[800]};

  p,
  strong,
  span {
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.color.neutral[100]};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }

  strong {
    color: ${({ theme }) => theme.color.textInverse};
  }

  > span {
    color: ${({ theme }) => theme.color.neutral[300]};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.accent};
`;
