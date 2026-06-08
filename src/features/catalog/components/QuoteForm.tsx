import { Send } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';
import { createQuoteMessage, createWhatsAppUrl } from '../utils/whatsapp';
import {
  ErrorText,
  Field,
  Form,
  FormButton,
  FormGrid,
  FormHeader,
  QuoteSection,
} from './QuoteFormStyled';

const interests = ['Reproductor Android', 'Marco integral', 'Accesorios', 'Cámara de retroceso'];

export const QuoteForm = () => {
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [interest, setInterest] = useState(interests[0]);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    return {
      name: name.trim().length < 2 ? 'Ingresa tu nombre.' : '',
      vehicle: vehicle.trim().length < 3 ? 'Indica marca, modelo y año.' : '',
      phone: phone.trim().length < 7 ? 'Ingresa un teléfono válido.' : '',
    };
  }, [name, phone, vehicle]);

  const hasErrors = Boolean(errors.name || errors.vehicle || errors.phone);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (hasErrors) {
      return;
    }

    const url = createWhatsAppUrl(createQuoteMessage(name.trim(), vehicle.trim(), interest, phone.trim()));
    const openedWindow = window.open(url, '_blank', 'noopener,noreferrer');

    if (openedWindow) {
      openedWindow.opener = null;
    }
  };

  return (
    <QuoteSection id="contacto" aria-labelledby="quote-title">
      <FormHeader>
        <span>Contacto</span>
        <h2 id="quote-title">Cotiza según tu vehículo</h2>
        <p>
          Recibe una cotización alineada con el modelo, año y accesorios que necesita tu vehículo.
        </p>
      </FormHeader>

      <Form onSubmit={handleSubmit} noValidate>
        <FormGrid>
          <Field>
            <label htmlFor="quote-name">Nombre</label>
            <input
              id="quote-name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={submitted && Boolean(errors.name)}
              aria-describedby="quote-name-error"
              autoComplete="name"
              required
            />
            <ErrorText id="quote-name-error">{submitted ? errors.name : ''}</ErrorText>
          </Field>

          <Field>
            <label htmlFor="quote-phone">Telefono</label>
            <input
              id="quote-phone"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              aria-invalid={submitted && Boolean(errors.phone)}
              aria-describedby="quote-phone-error"
              autoComplete="tel"
              inputMode="tel"
              required
            />
            <ErrorText id="quote-phone-error">{submitted ? errors.phone : ''}</ErrorText>
          </Field>

          <Field>
            <label htmlFor="quote-vehicle">Vehículo</label>
            <input
              id="quote-vehicle"
              name="vehicle"
              value={vehicle}
              onChange={(event) => setVehicle(event.target.value)}
              aria-invalid={submitted && Boolean(errors.vehicle)}
              aria-describedby="quote-vehicle-error"
              placeholder="Toyota 4Runner 2018"
              required
            />
            <ErrorText id="quote-vehicle-error">{submitted ? errors.vehicle : ''}</ErrorText>
          </Field>

          <Field>
            <label htmlFor="quote-interest">Interes</label>
            <select
              id="quote-interest"
              name="interest"
              value={interest}
              onChange={(event) => setInterest(event.target.value)}
            >
              {interests.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ErrorText aria-hidden="true" />
          </Field>
        </FormGrid>

        <FormButton type="submit" aria-label="Enviar por WhatsApp la cotización">
          <Send aria-hidden="true" size={18} />
          Enviar por WhatsApp
        </FormButton>
      </Form>
    </QuoteSection>
  );
};
