import { forwardRef } from 'react';
import { x } from '@xstyled/styled-components';

export type TableHeadProps = {
  headers?: string[];
  sticky?: boolean;
} & React.ComponentPropsWithRef<'thead'>;

type TheadProps = TableHeadProps & {
  ref?: React.Ref<HTMLTableSectionElement>;
};

const Thead = ({ sticky, ...props }: TheadProps) => (
  <x.thead
    textAlign="left"
    bg="offsetBackground"
    borderBottom="1px solid"
    borderColor="border"
    position={sticky ? 'sticky' : undefined}
    top={sticky ? 0 : undefined}
    boxShadow={sticky ? 'base.1' : undefined}
    {...props}
  />
);

const TableHeadItem = (props: React.ComponentPropsWithRef<'th'>) => (
  <x.th
    padding={3}
    fontWeight={600}
    letterSpacing="0.025em"
    color="primary"
    {...props}
  />
);

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(({ children, headers, sticky, ...rest }, ref) => {
  if (!headers) {
    return (
      <Thead sticky={sticky} ref={ref} {...rest}>{children}</Thead>
    );
  }
  return (
    <Thead sticky={sticky} ref={ref}>
      <tr>
        {headers.map(h => (
          <TableHeadItem key={h}>{h}</TableHeadItem>
        ))}
      </tr>
    </Thead>
  );
});
