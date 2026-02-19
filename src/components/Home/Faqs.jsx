// import React, { useState } from "react";
// import { faqs } from "../../utils/constant";

// export const Faqs = () => {
//   const [openFaqIndex, setopenFaqIndex] = useState([]);

//   const handleAccordion = (index) => {
//     setopenFaqIndex((prev) => {
//       return prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index];
//     });
//   };
//   return (
//     <div>
//       {faqs.map((faq, index) => {
//         return (
//           <div key={index} className="border mb-2 p-4">
//             <button
//               onClick={() => handleAccordion(index)}
//               aria-expanded={openFaqIndex.includes(index)}
//               className="  pb-2"
//             >
//               {faq.question}
//             </button>
//             {openFaqIndex.includes(index) && (
//               <p className={` border-t-2  pt-2 bg-black text-white`}>
//                 {faq.answer}
//               </p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// ------------------------------------------------ One accordion open at once ---------------------------
import React, { useState } from "react";
import { faqs } from "../../utils/constant";

export const Faqs = () => {
  const [openFaqIndex, setopenFaqIndex] = useState(0);

  const handleAccordion = (index) => {
    setopenFaqIndex((prev) => {
      return prev === index ? null : index;
    });
  };
  return (
    <div>
      {faqs.map((faq, index) => {
        return (
          <div key={index} className="border mb-2 p-4">
            <button
              onClick={() => handleAccordion(index)}
              aria-expanded={openFaqIndex === index}
              className=" pb-2"
            >
              {faq.question}
            </button>
            {openFaqIndex === index && (
              <p className={` border-t-2  pt-2 bg-black text-white`}>
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
