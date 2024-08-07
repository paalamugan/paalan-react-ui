import { useMemo, useState } from 'react';

import { Button } from '@paalan/react-ui';
import { Stack, Text } from '@paalan/react-ui/base';

import { useLogger } from './use-logger';

export default { title: 'Hooks/Life Cycle/useLogger' };

export function Usage() {
  const [count, setCount] = useState(0);
  useLogger(
    'Usage',
    useMemo(() => [{ count, hello: 'world' }], [count]),
  );
  return (
    <Stack alignItems="start">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
      <Text>Check the console</Text>
    </Stack>
  );
}
