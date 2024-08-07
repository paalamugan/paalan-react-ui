import { Button } from '@paalan/react-ui';

import { useToggle } from './use-toggle';

export default { title: 'Hooks/State Management/useToggle' };

export function Usage() {
  const colors = ['blue', 'orange', 'cyan', 'teal'] as const;
  const [value, toggle] = useToggle<(typeof colors)[number]>([...colors]);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
