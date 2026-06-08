import styled from 'styled-components';

export const FloatingLink = styled.a`
  position: fixed;
  inset: auto ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]} auto;
  z-index: 40;
  width: clamp(4.25rem, 9vw, 4.375rem);
  height: clamp(4.25rem, 9vw, 4.375rem);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: #25d366;
  color: ${({ theme }) => theme.color.textInverse};
  box-shadow: 0 0.9rem 1.9rem rgba(37, 211, 102, 0.3);
  text-decoration: none;

  svg {
    width: 2.3rem;
    height: 2.3rem;
  }
`;
