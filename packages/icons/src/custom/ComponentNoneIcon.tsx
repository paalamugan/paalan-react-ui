import * as React from 'react';

import type { IconProps } from './types';

import { convertSvgIconToIcon } from '../components/Icon/convert-svg-icon';

const ComponentNone = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.85361 1.48959C7.65835 1.29432 7.34176 1.29432 7.1465 1.48959L1.48965 7.14644C1.29439 7.3417 1.29439 7.65829 1.48965 7.85355L3.9645 10.3284L1.64644 12.6464C1.45118 12.8417 1.45118 13.1583 1.64644 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.6716 11.0355L7.1465 13.5104C7.34176 13.7057 7.65835 13.7057 7.85361 13.5104L13.5105 7.85355C13.7057 7.65829 13.7057 7.3417 13.5105 7.14644L11.0356 4.67154L13.3535 2.35355C13.5488 2.15829 13.5488 1.84171 13.3535 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.3285 3.96443L7.85361 1.48959ZM9.62135 4.67154L7.50005 2.55025L2.55031 7.49999L4.6716 9.62129L9.62135 4.67154ZM5.37871 10.3284L7.50005 12.4497L12.4498 7.49999L10.3285 5.37865L5.37871 10.3284Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export const ComponentNoneIcon: ReturnType<typeof convertSvgIconToIcon> = convertSvgIconToIcon(ComponentNone);
