import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigationItems } from '../data/catalogData';
import { publicPath } from '../utils/publicPath';
import { contact, createWhatsAppUrl } from '../utils/whatsapp';
import {
  DesktopNav,
  HeaderLogo,
  HeaderWrapper,
  MobileMenu,
  MobileNavLink,
  NavAction,
  NavContainer,
  NavLink,
  ToggleButton,
} from './HeaderStyled';
import { WhatsAppMark } from './WhatsAppMark';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const quoteUrl = createWhatsAppUrl('Hola Super Smart, quiero cotizar por WhatsApp.');

  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderWrapper>
      <NavContainer aria-label="Navegacion principal">
        <HeaderLogo href="#inicio" aria-label="Ir al inicio de Super Smart" onClick={closeMenu}>
          <img
            src={publicPath('assets/brand/supersmart-logo.webp')}
            alt="Super Smart"
            width="128"
            height="75"
            decoding="async"
          />
        </HeaderLogo>

        <DesktopNav aria-label="Secciones principales">
          {navigationItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </DesktopNav>

        <NavAction
          href={quoteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Cotizar por WhatsApp con ${contact.company}`}
        >
          <WhatsAppMark size={34} />
          <span>Cotizar por WhatsApp</span>
        </NavAction>

        <ToggleButton
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </ToggleButton>
      </NavContainer>

      <MobileMenu id="mobile-menu" $isOpen={isOpen} aria-hidden={!isOpen} hidden={!isOpen}>
        {navigationItems.map((item) => (
          <MobileNavLink key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </MobileNavLink>
        ))}
        <MobileNavLink href={quoteUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          Cotizar por WhatsApp
        </MobileNavLink>
      </MobileMenu>
    </HeaderWrapper>
  );
};
