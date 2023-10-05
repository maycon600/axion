import { useRouter } from "next/router";
import React, { ReactComponentElement, useEffect, useState } from "react";
import { NavIcons, NavLink } from "./styles";

interface LinkProps {
  href: string;
  imgSrc: React.ReactElement;
  name: string;
  color?: string;
}

export function LinkComponent({ href, imgSrc, name, color }: LinkProps) {
  const router = useRouter();
  const pageActive = router.asPath === href;

  const handleClick = () => {
    router.push(href);
  };

  return (
    <>
      <NavLink color={color} isActive={pageActive} onClick={handleClick}>
        <NavIcons>
          {imgSrc}
        </NavIcons>
        <span>{name}</span>
      </NavLink>
    </>
  );
}
