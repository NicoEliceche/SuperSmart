import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../data/catalogData';
import {
  Answer,
  FAQItemWrapper,
  FAQList,
  FAQSection,
  QuestionButton,
} from './FAQStyled';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <FAQSection aria-labelledby="faq-title">
      <span>FAQ</span>
      <h2 id="faq-title">Preguntas frecuentes</h2>
      <FAQList>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <FAQItemWrapper key={faq.question}>
              <QuestionButton
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" size={20} />
              </QuestionButton>
              <Answer id={answerId} $isOpen={isOpen}>
                <p>{faq.answer}</p>
              </Answer>
            </FAQItemWrapper>
          );
        })}
      </FAQList>
    </FAQSection>
  );
};
