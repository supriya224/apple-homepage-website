/* eslint-disable react/button-has-type */
// CollapsibleSection.tsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between text-left text-md  focus:outline-none">
        <span>{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div className={`${isOpen ? "block" : "hidden"} mt-4`}>{children}</div>
    </div>
  );
};

export default CollapsibleSection;
