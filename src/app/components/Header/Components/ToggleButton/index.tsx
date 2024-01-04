import React, { useState } from "react";
type ToggleButtonProps = {
  onClick: () => void;
};
export default function ToggleButton(props: ToggleButtonProps) {
  const [clicked, setClicked] = useState(false);

  const toggleButton = () => {
    setClicked(!clicked);
    props.onClick();
  };

  return (
    <div
      className={`md:hidden group flex h-16 w-16 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 ${
        clicked ? "bg-slate-50" : ""
      }`}
      onClick={toggleButton}
    >
      <div className="space-y-2">
        <span
          className={`block h-1 w-10 origin-center rounded-full bg-sky-300 transition-transform ease-in-out ${
            clicked ? "w-8 translate-y-1.5 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-8 origin-center rounded-full bg-purple-300 transition-transform ease-in-out ${
            clicked ? "w-10 -translate-y-1.5 -rotate-45" : ""
          }`}
        ></span>
      </div>
    </div>
  );
}
