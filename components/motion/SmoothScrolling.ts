"use client";

import { ReactNode } from "react";
import Scrollbar from "react-smooth-scrollbar";
import { ScrollbarProps } from "smooth-scrollbar-react";

interface SmoothScrollingProps extends ScrollbarProps {
  children: ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({
  children,
  ...scrollbarProps
}) => {
  return <Scrollbar {...scrollbarProps}>{children}</Scrollbar>;
};

export default SmoothScrolling;
