import { type SVGProps, type ReactNode } from 'react';

interface SvgWrapperProps {
  children: ReactNode;
  width?: number;
  height?: number;
  viewBox?: string;
  color?: string;
}

const SvgWrapper = function SvgWrapper({
  children,
  width = 24,
  height = 24,
  color = 'currentColor',
  viewBox,
  ...rest
}: SvgWrapperProps & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...rest}
      width={width}
      height={height}
      viewBox={viewBox || `0 0 ${width} ${height}`}
    >
      {children}
    </svg>
  );
};

export default SvgWrapper;
