import * as React from 'react';

import type { IconProps } from './types';

import { convertSvgIconToIcon } from '../components/Icon/convert-svg-icon';

const SpaceBetweenHorizontally = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
          d="M14.4999 0.999994C14.2237 0.999994 13.9999 1.22385 13.9999 1.49999L13.9999 5.99995L9.99992 5.99995C9.44764 5.99995 8.99993 6.44766 8.99993 6.99994L8.99993 7.99994C8.99993 8.55222 9.44764 8.99993 9.99992 8.99993L13.9999 8.99993L13.9999 13.4999C13.9999 13.776 14.2237 13.9999 14.4999 13.9999C14.776 13.9999 14.9999 13.776 14.9999 13.4999L14.9999 1.49999C14.9999 1.22385 14.776 0.999994 14.4999 0.999994ZM4.99996 5.99995L0.999992 5.99995L0.999992 1.49999C0.999992 1.22385 0.776136 0.999994 0.499996 0.999994C0.223856 0.999994 -9.7852e-09 1.22385 -2.18557e-08 1.49999L4.07279e-07 13.4999C3.95208e-07 13.776 0.223855 13.9999 0.499996 13.9999C0.776136 13.9999 0.999992 13.776 0.999992 13.4999L0.999992 8.99993L4.99996 8.99993C5.55224 8.99993 5.99995 8.55222 5.99995 7.99993L5.99995 6.99994C5.99995 6.44766 5.55224 5.99995 4.99996 5.99995Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export const SpaceBetweenHorizontallyIcon: ReturnType<typeof convertSvgIconToIcon> =
  convertSvgIconToIcon(SpaceBetweenHorizontally);
