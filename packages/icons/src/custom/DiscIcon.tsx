import * as React from 'react';

import type { IconProps } from './types';

import { convertSvgIconToIcon } from '../components/Icon/convert-svg-icon';

const Disc = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M7.49991 0.877075C3.84222 0.877075 0.877075 3.84222 0.877075 7.49991C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 3.84222 11.1576 0.877075 7.49991 0.877075ZM1.82708 7.49991C1.82708 4.36689 4.36689 1.82707 7.49991 1.82707C10.6329 1.82707 13.1727 4.36689 13.1727 7.49991C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49991ZM8.37287 7.50006C8.37287 7.98196 7.98221 8.37263 7.5003 8.37263C7.01839 8.37263 6.62773 7.98196 6.62773 7.50006C6.62773 7.01815 7.01839 6.62748 7.5003 6.62748C7.98221 6.62748 8.37287 7.01815 8.37287 7.50006ZM9.32287 7.50006C9.32287 8.50664 8.50688 9.32263 7.5003 9.32263C6.49372 9.32263 5.67773 8.50664 5.67773 7.50006C5.67773 6.49348 6.49372 5.67748 7.5003 5.67748C8.50688 5.67748 9.32287 6.49348 9.32287 7.50006Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export const DiscIcon: ReturnType<typeof convertSvgIconToIcon> = convertSvgIconToIcon(Disc);
