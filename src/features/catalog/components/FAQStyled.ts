import styled from 'styled-components';

export const FAQSection = styled.section`
  width: 100%;
  max-width: 52rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.layout.screenPaddingH};
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  > span {
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.bold};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.size.xl};
    }
  }

  h2 {
    margin: 0 0 ${({ theme }) => theme.spacing[3]};
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size['4xl']};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.size['5xl']};
    }
  }
`;

export const FAQList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const FAQItemWrapper = styled.article`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.color.surface};
`;

export const QuestionButton = styled.button`
  width: 100%;
  min-height: ${({ theme }) => theme.spacing[14]};
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.color.text};
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.size.lg};

  svg {
    transition: transform 0.2s ease;
  }

  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`;

export const Answer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '20rem' : '0')};
  overflow: hidden;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: max-height 0.25s ease, opacity 0.2s ease;

  p {
    margin: 0;
    padding: 0 ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.color.textSecondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;
