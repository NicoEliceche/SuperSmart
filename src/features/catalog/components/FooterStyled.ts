import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.layout.screenPaddingH};
  background-color: ${({ theme }) => theme.color.neutral[900]};
  color: ${({ theme }) => theme.color.textInverse};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.layout.screenPaddingHDesktop};
  }
`;

export const FooterGrid = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.1fr repeat(3, minmax(0, 1fr));
  }
`;

export const FooterBrand = styled.div`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.spacing[3]};

  img {
    width: 9rem;
    height: auto;
    border-radius: ${({ theme }) => theme.radius.brand};
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }

  strong {
    font-size: ${({ theme }) => theme.typography.size.xl};
  }

  span {
    color: ${({ theme }) => theme.color.neutral[300]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    img {
      display: none;
    }
  }
`;

export const FooterColumn = styled.div`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.spacing[3]};

  h2 {
    margin: 0 0 ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.typography.size.base};
  }
`;

export const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.neutral[200]};
  text-decoration: none;
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  overflow-wrap: anywhere;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: ${({ theme }) => theme.spacing[10]} auto 0;
  padding-top: ${({ theme }) => theme.spacing[5]};
  border-top: 1px solid ${({ theme }) => theme.color.neutral[700]};
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.neutral[300]};
  font-size: ${({ theme }) => theme.typography.size.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr auto;
  }
`;
