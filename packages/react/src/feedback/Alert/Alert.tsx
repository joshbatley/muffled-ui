import { x, th } from '@xstyled/styled-components';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Box, Text, Title } from '../../data';
import { CloseBtn } from './CloseBtn';
import { WithChildren } from '../../types';

export type AlertProps = {
  destructive?: boolean;
  title?: string;
  icon?: React.ReactNode;
  withClose?: () => void;
} & WithChildren;

const Icon: React.FC<React.ComponentProps<typeof Box>> = (props) => (
  <Box
    float="left"
    margin={{ ':empty': 0 }}
    {...props}
  />
);

const Content: React.FC<React.ComponentProps<typeof Text>> = (props) => (
  <Text
    minWidth="100%"
    marginTop={{ '': 2, ':empty': 0 }}
    {...props}
  />
);

export const Alert: React.FC<AlertProps> = ({
  destructive = false, title, icon, children, withClose, ...rest
}) => {
  let Icons = icon || (destructive ? <ExclamationCircleIcon width={20} height={20} /> : <></>);
  return (
    <Box
      px={3}
      py={1}
      display="flex"
      flexGrow={1}
      alignItems="center"
      borderRadius="4"
      overflow="hidden"
      position="relative"
      w={29}
      fontSize={1}
      lineHeight={1}
      flexWrap="wrap"
      color={destructive ? 'destructiveForeground' : 'foreground'}
      bg={destructive ? 'destructive' : 'background'}
      border="1px solid"
      borderColor={destructive ? 'destructive' : 'border'}
      boxShadow="highlight"
      data-test
      {...rest}
    >
      <Box minWidth="100%">
        <Icon mr={3} mt="1px" lineHeight={5} alignSelf="center">{Icons}</Icon>
        <Title display="inline" fontWeight="600" fontSize={1} lineHeight={2} letterSpacing="0.025em" color={destructive ? 'destructiveForeground' : 'foreground'}>{title}</Title>
        {withClose && (<CloseBtn onClick={withClose} />)}
      </Box>
      <Content>{children}</Content>
    </Box>
  );
};

