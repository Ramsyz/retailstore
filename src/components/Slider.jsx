import { useRef } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export default function Slider({ children, width }) {
  const contentBoxRef = useRef();

  const scrollRight = () => {
    contentBoxRef.current.scrollLeft += width;
  };
  const scrollLeft = () => {
    contentBoxRef.current.scrollLeft -= width;
  };
  return (
    <div className="flex my-4">
      <button className=" text-white hidden md:block" onClick={scrollLeft}>
        <TfiAngleLeft />
      </button>
      <div
        className="md:flex overflow-scroll scrollbar-none transition-all gap-3"
        ref={contentBoxRef}
      >
        {children}
      </div>
      <button className="text-white hidden md:block" onClick={scrollRight}>
        <TfiAngleRight />
      </button>
    </div>
  );
}
