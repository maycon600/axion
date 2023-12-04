import { IBGEAPI } from "@/lib/axios";
import Theme from "@/styles/themes";
import { useEffect, useState } from "react";
import Select from "react-select";

export function Dropdown() {
  const [stateList, setStateList] = useState<any>([]);
  const [width, setWidth] = useState(100);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#fff",
      backgroundColor: state.isSelected
        ? `${Theme.color.gray_40}`
        : `${Theme.color.darkBlueAxion}`,
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: `${Theme.color.gray_40}`,
      border: "none",
      borderRadius: 10,
      width: width >= 1024 ? "12vw" : width >= 768 ? "15vw" : "35vw",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "" }),
    placeholder: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#ffffff",
    }),
    input: (defaultStyles: any) => ({ ...defaultStyles, color: "#fff" }),
  };

  async function handleIBGEState() {
    const connect = await IBGEAPI(`/estados/?orderBy=nome`);
    const states: any = [];
    for (const key in connect.body) {
      states.push({
        label: connect.body[key].nome,
        value: connect.body[key].sigla,
        id: connect.body[key].id,
      });
    }
    setStateList(states);
  }

  return (
    <Select
      name="state"
      options={stateList}
      //   onChange={(e) => setFormData({ ...formData, state: e })}
      styles={customStyles}
      // onBlur={handleBlur}
      placeholder="Estado"
      onFocus={handleIBGEState}
    />
  );
}
