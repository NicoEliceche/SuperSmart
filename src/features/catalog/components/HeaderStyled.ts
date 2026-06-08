import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 30;
  background-color: ${({ theme }) => `${theme.color.surface}F2`};
  backdrop-filter: blur(14px);
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const NavContainer = styled.nav`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  min-height: ${({ theme }) => theme.layout.headerHeight};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.layout.screenPaddingH};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.layout.screenPaddingHDesktop};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: auto 1fr auto;
  }
`;

export const HeaderLogo = styled.a`
  display: inline-flex;
  align-items: center;
  width: 6.25rem;
  text-decoration: none;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.brand};
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }
`;

export const DesktopNav = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[6]};
  }
`;

export const NavLink = styled.a`
  position: relative;
  min-height: ${({ theme }) => theme.spacing[10]};
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.color.textSecondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  transition: color 0.2s ease, transform 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 ${({ theme }) => theme.spacing[1]};
    height: ${({ theme }) => theme.spacing[1]};
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.brandGradient};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.24s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.color.magenta};
    transform: translateY(-0.0625rem);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const NavAction = styled.a`
  display: none;
  min-height: 3.25rem;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-0.125rem) scale(1.015);
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }

  svg {
    flex-shrink: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-flex;
  }
`;

export const ToggleButton = styled.button`
  justify-self: end;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  max-height: ${({ $isOpen }) => ($isOpen ? '28rem' : '0')};
  padding: ${({ $isOpen, theme }) => ($isOpen ? theme.spacing[4] : '0')} ${({ theme }) => theme.layout.screenPaddingH};
  overflow: hidden;
  border-top: ${({ $isOpen, theme }) => ($isOpen ? `1px solid ${theme.color.border}` : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: max-height 0.25s ease, opacity 0.2s ease, padding 0.25s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MobileNavLink = styled.a`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.primaryLight};
  color: ${({ theme }) => theme.color.primaryDark};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;
