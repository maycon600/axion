import Theme from "@/styles/themes";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

export function DateSelectorDropdown() {
  const [dropdownTitle, setDropdownTitle] = useState("Últimos 15 Dias");
  return (
    <Dropdown
      style={{
        alignSelf: "flex-end",
      }}
    >
      <Dropdown.Toggle
        variant="danger"
        style={{
          backgroundColor: "white",
          color: Theme.color.darkBlueAxion,
        }}
      >
        {dropdownTitle}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setDropdownTitle("Últimas 7 dias")}>
          Últimos 7 dias
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setDropdownTitle("Últimos 15 dias")}>
          Últimos 15 dias
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setDropdownTitle("Últimos 30 dias")}>
          Últimos 30 dias
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
