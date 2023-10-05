import { useEffect, useState } from "react";

export const windowHeight = (maxHeigth: number) => {
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerHeight);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return width < maxHeigth ? true : false;
}