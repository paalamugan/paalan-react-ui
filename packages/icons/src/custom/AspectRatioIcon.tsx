import * as React from 'react';

import type { IconProps } from './types';

import { convertSvgIconToIcon } from '../components/Icon/convert-svg-icon';

const AspectRatio = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M2.5 2H12.5C12.7761 2 13 2.22386 13 2.5V12.5C13 12.7761 12.7761 13 12.5 13H2.5C2.22386 13 2 12.7761 2 12.5V2.5C2 2.22386 2.22386 2 2.5 2ZM1 2.5C1 1.67157 1.67157 1 2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5ZM7.5 4C7.77614 4 8 3.77614 8 3.5C8 3.22386 7.77614 3 7.5 3C7.22386 3 7 3.22386 7 3.5C7 3.77614 7.22386 4 7.5 4ZM8 5.5C8 5.77614 7.77614 6 7.5 6C7.22386 6 7 5.77614 7 5.5C7 5.22386 7.22386 5 7.5 5C7.77614 5 8 5.22386 8 5.5ZM7.5 8C7.77614 8 8 7.77614 8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8ZM10 7.5C10 7.77614 9.77614 8 9.5 8C9.22386 8 9 7.77614 9 7.5C9 7.22386 9.22386 7 9.5 7C9.77614 7 10 7.22386 10 7.5ZM11.5 8C11.7761 8 12 7.77614 12 7.5C12 7.22386 11.7761 7 11.5 7C11.2239 7 11 7.22386 11 7.5C11 7.77614 11.2239 8 11.5 8Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export const AspectRatioIcon: ReturnType<typeof convertSvgIconToIcon> = convertSvgIconToIcon(AspectRatio);
