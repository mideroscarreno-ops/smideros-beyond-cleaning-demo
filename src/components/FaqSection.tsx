import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/beyondData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DCEBE8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
            Frequently Asked Questions
          </p>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-[#123F46]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Clear Answers Before You Request a Quote
          </h2>
        </div>

        <div className="divide-y divide-[#DCEBE8] border-y border-[#DCEBE8]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div key={item.id} className="py-1">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left text-base sm:text-lg font-semibold text-[#123F46] hover:text-[#23A9A1] transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#23A9A1] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-sm sm:text-base leading-relaxed text-[#243338]/85"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
