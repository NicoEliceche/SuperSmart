import { Instagram, Mail, Phone } from 'lucide-react';
import { catalogLinks } from '../data/catalogData';
import { publicPath } from '../utils/publicPath';
import { contact, createWhatsAppUrl } from '../utils/whatsapp';
import {
  FooterBottom,
  FooterBrand,
  FooterColumn,
  FooterGrid,
  FooterLink,
  FooterWrapper,
} from './FooterStyled';
import { WhatsAppMark } from './WhatsAppMark';

export const Footer = () => {
  const whatsappUrl = createWhatsAppUrl('Hola Super Smart, quiero información del catálogo.');

  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterBrand>
          <img
            src={publicPath('assets/brand/supersmart-logo.webp')}
            alt="Super Smart"
            width="160"
            height="94"
            loading="lazy"
          />
          <strong>{contact.company}</strong>
          <span>Catálogo automotriz</span>
        </FooterBrand>

        <FooterColumn>
          <h2>Contacto</h2>
          <FooterLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppMark size={18} />
            WhatsApp {contact.phoneDisplay}
          </FooterLink>
          <FooterLink href={`tel:${contact.phoneDisplay.replace(/[^+\d]/g, '')}`}>
            <Phone aria-hidden="true" size={18} />
            {contact.phoneDisplay}
          </FooterLink>
          <FooterLink href={`mailto:${contact.email}`}>
            <Mail aria-hidden="true" size={18} />
            {contact.email}
          </FooterLink>
          <FooterLink href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
            <Instagram aria-hidden="true" size={18} />
            {contact.instagram}
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <h2>Catálogos</h2>
          {catalogLinks.map((link) => (
            <FooterLink key={link.href} href={link.href} download>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn>
          <h2>Legal</h2>
          <FooterLink href={publicPath('legal/politicas-de-privacidad.html')}>Políticas de Privacidad</FooterLink>
          <FooterLink href={publicPath('legal/terminos-y-condiciones.html')}>Términos y Condiciones</FooterLink>
        </FooterColumn>
      </FooterGrid>
      <FooterBottom>
        <span>Super Smart</span>
        <span>Catálogo automotriz profesional</span>
      </FooterBottom>
    </FooterWrapper>
  );
};
