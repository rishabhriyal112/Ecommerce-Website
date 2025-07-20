import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number on our website or the carrier's website to track your package."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are securely processed."
    },
    {
      question: "How long will it take to receive my order?",
      answer: "Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days depending on the destination country and customs processing."
    },
    {
      question: "Can I change or cancel my order?",
      answer: "You can change or cancel your order within 1 hour of placing it. Please contact our customer service team immediately if you need to make changes."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in their original condition with tags attached. Please visit our Returns & Exchanges page for more details."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Additional customs fees may apply depending on your country's import regulations."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team by email at support@cosmosstore.com, by phone at +91 (555) 123-4567 during business hours, or by using the contact form on our Contact Us page."
    },
    {
      question: "Are my personal details secure?",
      answer: "Yes, we take data security very seriously. We use industry-standard encryption to protect your personal and payment information. Please see our Privacy Policy for more details."
    }
  ];
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products, shipping, returns, and more.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-500" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;