import { contact, createWhatsAppUrl } from '../utils/whatsapp';
import { FloatingLink } from './FloatingWhatsAppStyled';
import { WhatsAppMark } from './WhatsAppMark';

export const FloatingWhatsApp = () => {
  const whatsappUrl = createWhatsAppUrl('Hola Super Smart, quiero cotizar un producto.');

  return (
    <FloatingLink
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir a ${contact.company} por WhatsApp`}
    >
      <WhatsAppMark size={25} />
    </FloatingLink>
  );
};
