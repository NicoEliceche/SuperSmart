import styled from 'styled-components';

export const QuoteSection = styled.section`
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.layout.screenPaddingH};
  background-color: ${({ theme }) => theme.color.surfaceAlt};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.layout.screenPaddingHDesktop};
  }
`;

export const FormHeader = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto ${({ theme }) => theme.spacing[8]};
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  span {
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.bold};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.size.xl};
    }
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
    max-width: 44rem;
    color: ${({ theme }) => theme.color.textSecondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const FormGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Field = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  label {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  input,
  select {
    width: 100%;
    min-height: ${({ theme }) => theme.layout.inputHeight};
    padding: ${({ theme }) => theme.spacing[3]};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background-color: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
  }

  input[aria-invalid='true'] {
    border-color: ${({ theme }) => theme.color.error};
    background-color: ${({ theme }) => theme.color.errorLight};
  }
`;

export const ErrorText = styled.span`
  min-height: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const FormButton = styled.button`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-self: start;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.accentDark};
  color: ${({ theme }) => theme.color.textInverse};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-0.125rem);
    background-color: ${({ theme }) => theme.color.primaryDark};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;
