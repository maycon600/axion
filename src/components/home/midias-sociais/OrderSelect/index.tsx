import { useState } from "react";
import { SelectContainer } from "./styles";
import { DropDownIconSVG } from "../../../../../public/dashboard/DropdownIconSVG";

interface Props {
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  id?: string;
}

export function OrderSelect({
  values,
  selectedValue,
  setSelectedValue,
  id,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  function handleSelect(value: string) {
    setSelectedValue(value);
    setIsFocused(false);
    handleBlur();
  }

  return (
    <>
      <SelectContainer
      tabIndex={0}
      onClick={() => setIsFocused(!isFocused)}
      onBlur={handleBlur}
      isOpen={isFocused}
      id={id}
    >
      <strong>{selectedValue}</strong>
      <div className="icon">
        <DropDownIconSVG />
      </div>
      <div className="options-container">
        {values.map((value) => (
          <div
            className="option"
            onClick={() => handleSelect(value.toString())}
          >
            {value}
          </div>
        ))}
      </div>
    </SelectContainer>
    </>
  );
}
