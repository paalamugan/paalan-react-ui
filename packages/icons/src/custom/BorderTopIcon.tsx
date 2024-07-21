import * as React from 'react';

import type { IconProps } from './types';

import { convertSvgIconToIcon } from '../components/Icon/convert-svg-icon';

const BorderTop = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <path d="M14 1.75L1 1.75L1 0.249999L14 0.25L14 1.75Z" fill={color} fillRule="evenodd" clipRule="evenodd" />
      <rect x="8" y="10" width="1" height="1" rx=".5" transform="rotate(-180 8 10)" fill={color} />
      <rect x="2" y="10" width="1" height="1" rx=".5" transform="rotate(-180 2 10)" fill={color} />
      <rect x="8" y="12" width="1" height="1" rx=".5" transform="rotate(-180 8 12)" fill={color} />
      <rect x="2" y="12" width="1" height="1" rx=".5" transform="rotate(-180 2 12)" fill={color} />
      <rect x="8" y="8" width="1" height="1" rx=".5" transform="rotate(-180 8 8)" fill={color} />
      <rect x="8" y="14" width="1" height="1" rx=".5" transform="rotate(-180 8 14)" fill={color} />
      <rect x="2" y="8" width="1" height="1" rx=".5" transform="rotate(-180 2 8)" fill={color} />
      <rect x="2" y="14" width="1" height="1" rx=".5" transform="rotate(-180 2 14)" fill={color} />
      <rect x="10" y="8" width="1" height="1" rx=".5" transform="rotate(-180 10 8)" fill={color} />
      <rect x="10" y="14" width="1" height="1" rx=".5" transform="rotate(-180 10 14)" fill={color} />
      <rect x="12" y="8" width="1" height="1" rx=".5" transform="rotate(-180 12 8)" fill={color} />
      <rect x="12" y="14" width="1" height="1" rx=".5" transform="rotate(-180 12 14)" fill={color} />
      <rect x="6" y="8" width="1" height="1" rx=".5" transform="rotate(-180 6 8)" fill={color} />
      <rect x="6" y="14" width="1" height="1" rx=".5" transform="rotate(-180 6 14)" fill={color} />
      <rect x="4" y="8" width="1" height="1" rx=".5" transform="rotate(-180 4 8)" fill={color} />
      <rect x="4" y="14" width="1" height="1" rx=".5" transform="rotate(-180 4 14)" fill={color} />
      <rect x="8" y="6" width="1" height="1" rx=".5" transform="rotate(-180 8 6)" fill={color} />
      <rect x="2" y="6" width="1" height="1" rx=".5" transform="rotate(-180 2 6)" fill={color} />
      <rect x="8" y="4" width="1" height="1" rx=".5" transform="rotate(-180 8 4)" fill={color} />
      <rect x="2" y="4" width="1" height="1" rx=".5" transform="rotate(-180 2 4)" fill={color} />
      <rect x="14" y="10" width="1" height="1" rx=".5" transform="rotate(-180 14 10)" fill={color} />
      <rect x="14" y="12" width="1" height="1" rx=".5" transform="rotate(-180 14 12)" fill={color} />
      <rect x="14" y="8" width="1" height="1" rx=".5" transform="rotate(-180 14 8)" fill={color} />
      <rect x="14" y="14" width="1" height="1" rx=".5" transform="rotate(-180 14 14)" fill={color} />
      <rect x="14" y="6" width="1" height="1" rx=".5" transform="rotate(-180 14 6)" fill={color} />
      <rect x="14" y="4" width="1" height="1" rx=".5" transform="rotate(-180 14 4)" fill={color} />
    </svg>
  );
});

export const BorderTopIcon: ReturnType<typeof convertSvgIconToIcon> = convertSvgIconToIcon(BorderTop);
