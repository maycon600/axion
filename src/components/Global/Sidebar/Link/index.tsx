import { useRouter } from "next/router";
import React, { ReactComponentElement, useEffect, useState } from "react";
import { NavBrand, NavIcons } from "./styles";

interface LinkProps {
  href: string;
  imgSrc: string;
  name: string;
}

export function LinkComponent({ href, imgSrc, name }: LinkProps) {
  const router = useRouter();
  const pageActive = router.asPath === href;

  const handleClick = () => {
    router.push(href);
  };

  const useWindowDimensions = () => {
    const [width, setWidth] = useState(100);

    const updateDimensions = () => {
      setWidth(window.innerWidth);
    };
    useEffect(() => {
      setWidth(window.innerWidth);
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return width > 991 ? true : false;
  };

  const isWindowAbove991 = useWindowDimensions();

  return (
    <>
      <NavBrand href={href} isActive={pageActive} onClick={handleClick}>
        <NavIcons src={imgSrc} width={50} height={50} alt="Home" />
        <span>{name}</span>
      </NavBrand>
    </>
  );
}
