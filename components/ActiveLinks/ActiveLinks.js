import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "#5584AC",
  textDecoration: "underline",
};
export const ActiveLinks = ({ text, href }) => {
  const { pathname } = useRouter();
  
  return (
    <Link href={href}>
      <a style={ pathname === href ? style : {}}>{text}</a>
    </Link>
  );
};
