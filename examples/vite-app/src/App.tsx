import { Button } from '@paalan/react-ui/components';
import { useCounter } from '@paalan/react-ui/hooks';
import { AccessibilityIcon } from '@paalan/react-ui/icons';
import { AcademicCapIcon as AcademicCapIconOutline } from '@paalan/react-ui/icons/outline';
import { AcademicCapIcon } from '@paalan/react-ui/icons/solid';
import { Box, Flex, Heading, HStack, Stack, Text } from '@paalan/react-ui/layouts';
import { useTheme } from '@paalan/react-ui/providers';

import './App.css';

function App() {
  const [count, { increment, decrement }] = useCounter(0);
  const { theme, toggleTheme } = useTheme();
  return (
    <Stack>
      <HStack justifyContent="between">
        <Heading>Sample React UI</Heading>
        <Button onClick={toggleTheme} variant="outline" mr="2">
          Switch To {theme === 'light' ? 'Dark' : 'Light'}
        </Button>
      </HStack>
      <Box>
        <Text mb="2" className="start-0">
          Count: {count}
        </Text>
        <Button onClick={() => increment()} variant="outline" mr="2">
          Increment
        </Button>
        <Button onClick={() => decrement()} variant="outline">
          Decrement
        </Button>
        <Stack>
          <Flex alignItems="center" gap="2" justifyContent="center" mt="6">
            Icon:
            <AccessibilityIcon boxSize="6" />
          </Flex>
          <Flex alignItems="center" gap="2" justifyContent="center" mt="6">
            Solid Icon:
            <AcademicCapIcon className="h-6 w-6" />
          </Flex>
          <Flex alignItems="center" gap="2" justifyContent="center" mt="6">
            Outline Icon:
            <AcademicCapIconOutline className="h-6 w-6" />
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
}

export default App;
