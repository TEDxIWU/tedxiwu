import React from 'react'
import FAQs from './FAQs'

const faqs = [
  {
    question: 'What is TEDx?',
    answer:
      'In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxIWU*, where x = independently organized TED event. At our TEDxIWU event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self organized.',
  },
  {
    question: 'What is a TED Talk?',
    answer:
      'A TED Talk is a showcase for speakers presenting great, well-informed ideas in under 18 minutes.',
  },
]

const FAQsContainer = () => <FAQs faqs={faqs} />

export default FAQsContainer
