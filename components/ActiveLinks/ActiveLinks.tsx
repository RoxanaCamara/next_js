import React, { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const style: CSSProperties = {
  color: "#5584AC",
  textDecoration: "underline",
};

interface Props { text: string; href: string; }

export const ActiveLinks: FC<Props> = ({ text, href }) => {
  const { pathname } = useRouter();
  
  return (
    <Link href={href}>
      <a style={ pathname === href ? style : undefined}>{text}</a>
    </Link>
  );
};
