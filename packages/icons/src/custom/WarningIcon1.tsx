import { createIcon } from '../components/Icon';

export const WarningIcon1: ReturnType<typeof createIcon> = createIcon({
  displayName: 'WarningIcon1',
  path: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
      clipRule="evenodd"
    />
  ),
  defaultProps: {
    className: 'w-5 h-5',
  },
});
