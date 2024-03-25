import React, { useRef, useState } from "react";
import BodyParts from "./BodyParts";
import { ArrowLeftFromLine, ArrowRightToLine } from "lucide-react";
import ExerciseCard from "./ExerciseCard";

const HorizontalResults = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  // Ref for the scrollable container
  const elementRef = useRef(null);
  // State to manage left arrow button disable
  const [arrowDisable, setArrowDisable] = useState(true);

  // Function to handle horizontal scrolling with animation
  const handleHorizontalScroll = (element, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      // Check if scrolled to the far left to disable left arrow button
      setArrowDisable(element.scrollLeft === 0);
    }, 10); // Adjust animation speed as needed (lower value for faster animation)
  };

  return (
    <>
      {/* Navigation buttons */}
      <div className="flex gap-5 p-3">
        <button
          className="hover:text-red-500 left-exercise text-white"
          onClick={() => {
            handleHorizontalScroll(elementRef.current, 100, -10); // Distance and step values adjusted for animation
          }}
          disabled={arrowDisable}
        >
          <ArrowLeftFromLine className="md:w-8 md:h-10" />
        </button>
        <button
          className="hover:text-red-500 text-white"
          onClick={() => {
            handleHorizontalScroll(elementRef.current, 100, 10); // Distance and step values adjusted for animation
          }}
        >
          <ArrowRightToLine className="md:w-8 md:h-10" />
        </button>
      </div>

      {/* Scrollable container */}
      <div className="img-container md:p-8 md:h-full h-3/5" ref={elementRef}>
        {/* Render body parts or exercise cards based on props */}
        {data.map((item) => (
          <div
            className="flex items-center justify-center"
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
          >
            {/* Conditionally render BodyParts or ExerciseCard */}
            {bodyParts ? (
              <BodyParts
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default HorizontalResults;
