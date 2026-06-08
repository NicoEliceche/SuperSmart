import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.color.overlay};
`;

export const ModalContent = styled.article`
  position: relative;
  width: 100%;
  max-width: 58rem;
  max-height: 90vh;
  display: grid;
  overflow: auto;
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  inset: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]} auto auto;
  z-index: 1;
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

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 18rem;
  object-fit: contain;
  padding: ${({ theme }) => theme.spacing[8]};
  background-color: ${({ theme }) => theme.color.surfaceAlt};
`;

export const ModalBody = styled.div`
  display: grid;
  align-content: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[6]};

  span {
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size['3xl']};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  p {
    color: ${({ theme }) => theme.color.textSecondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }

  strong {
    font-size: ${({ theme }) => theme.typography.size['2xl']};
  }
`;

export const ModalSpecs = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: ${({ theme }) => theme.spacing[3]};
    border-radius: ${({ theme }) => theme.radius.md};
    background-color: ${({ theme }) => theme.color.primaryLight};
    color: ${({ theme }) => theme.color.primaryDark};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
  }
`;

export const ModalActions = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  a {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing[2]};
    border-radius: ${({ theme }) => theme.radius.md};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  a:first-child {
    background-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.textInverse};
  }

  a:last-child {
    border: 1px solid ${({ theme }) => theme.color.border};
    color: ${({ theme }) => theme.color.primary};
  }
`;
