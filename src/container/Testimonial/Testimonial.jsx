import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor } from "../../client";
import "./Testimonial.scss";

const Testimonial = ({ testimonials, brands }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleClickRight = () => {
    setAnimateCard([{ x: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ x: 0, opacity: 1 }]);
      setCurrentIndex(
        currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
      );
    }, 500);
  };
  const handleClickLeft = () => {
    setAnimateCard([{ x: -100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ x: 0, opacity: 1 }]);
      setCurrentIndex(
        currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
      );
    }, 500);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__testimonial-item app__flex"
          >
            <img
              src={urlFor(testimonials[currentIndex].imgurl)}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </motion.div>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={handleClickLeft}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={handleClickRight}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
