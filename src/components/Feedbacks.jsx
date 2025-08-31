import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { sectionWrapper } from "../sectionWrapper/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Modal = ({
  isOpen,
  onClose,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        className="bg-tertiary rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-6">
          <p className="text-white font-black text-[48px]">"</p>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-secondary transition-colors"
          >
            ×
          </button>
        </div>

        <p className="text-white tracking-wider text-[18px] leading-relaxed mb-8">
          {testimonial}
        </p>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#00ABE4] flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt={`feedback_by-${name}`}
                className="w-16 h-16 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<span class="text-white font-bold text-lg">${name.charAt(
                    0
                  )}</span>`;
                }}
              />
            ) : (
              <span className="text-white font-bold text-lg">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <p className="text-white font-medium text-[18px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="text-secondary text-[14px]">
              {designation} {designation && company && "at"} {company}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncateText = (text, maxLines = 2) => {
    const words = text.split(" ");
    const wordsPerLine = 10;
    const maxWords = maxLines * wordsPerLine;

    if (words.length <= maxWords) {
      return { text, isTruncated: false };
    }

    return {
      text: words.slice(0, maxWords).join(" ") + "...",
      isTruncated: true,
    };
  };

  const { text: displayText, isTruncated } = truncateText(testimonial);

  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-[#00ABE470] p-10 rounded-3xl xs:w-[320px] w-full cursor-pointer transition-colors"
        onClick={() => isTruncated && setIsModalOpen(true)}
      >
        <p className="text-tertiary font-black text-[48px]">"</p>

        <div className="mt-1">
          <p className="text-tertiary tracking-wider text-[16px] leading-relaxed">
            {displayText}
            {isTruncated && (
              <span className="text-black ml-2 text-sm font-semibold">
                Read more
              </span>
            )}
          </p>

          <div className="mt-4 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-tertiary font-medium text-[16px]">
                <span className="blue-text-gradient">@</span> {name}
              </p>
              <p className="mt-1 text-gray-800 text-[12px]">
                {designation} {designation && company && "at"} {company}
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-[#00ABE4] flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt={`feedback_by-${name}`}
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<span class="text-white font-bold text-sm">${name.charAt(
                      0
                    )}</span>`;
                  }}
                />
              ) : (
                <span className="text-white font-bold text-sm">
                  {name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        testimonial={testimonial}
        name={name}
        designation={designation}
        company={company}
        image={image}
      />
    </>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px]">
      <div className={` rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-[#00ABE4]`}>
            Recommendations.
          </h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-5 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default sectionWrapper(Feedbacks, "feedbacks");
