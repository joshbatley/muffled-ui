import { useEffect, useState } from 'react';
import { StoryObj } from '@storybook/react';
import {
  Box,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Text,
} from '@muffled-ui/react';

export default {
  title: 'Data/Table',
  component: Table,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const arrayRange = (from: number, to: number) =>
  Array.from(Array(Math.max(0, to - from + 1)), (_, idx) => idx + from);
const allRows = arrayRange(0, 39);

export const Showcase: StoryObj<typeof Table> = {
  render: () => {
    let [limit, setLimit] = useState(10);
    let [skip, setSkip] = useState(0);
    let [rows, setRows] = useState<number[]>([]);

    useEffect(() => {
      if (skip + limit < allRows.length) {
        setRows(allRows.slice(skip, skip + limit));
      } else {
        let lower = allRows.length - limit < 0 ? 0 : allRows.length - limit;
        setRows(allRows.slice(lower, allRows.length));
      }
    }, [skip, limit]);

    return (
      <Table
        footer={
          <Pagination
            limit={limit}
            skip={skip}
            setSkip={setSkip}
            setSize={setLimit}
            itemCount={allRows.length}
          />
        }
      >
        <TableHead headers={['Header 1', 'Header 2', 'Header 3']} />
        <TableBody>
          {rows.map((m, idx) => (
            <TableRow key={`${m}-${idx}`}>
              <TableCell>Value for row {m + 1} item 1</TableCell>
              <TableCell>Value for row {m + 1} item 2</TableCell>
              <TableCell>Value for row {m + 1} item 3</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const Interactable: StoryObj<typeof Table> = {
  render: () => {
    let limit = 10;
    let [active, setActive] = useState<number | undefined>();
    let [skip, setSkip] = useState(0);
    let [rows, setRows] = useState<number[]>([]);

    useEffect(() => {
      if (skip + limit < allRows.length) {
        setRows(allRows.slice(skip, skip + limit));
      } else {
        setRows(allRows.slice(allRows.length - limit, allRows.length));
      }
    }, [skip, limit]);

    const interactive = (i: number) => {
      alert(`Setting row ${i} as active`);
      setActive(i);
    };

    return (
      <Table
        footer={
          <Pagination
            limit={limit}
            skip={skip}
            setSkip={setSkip}
            itemCount={allRows.length}
          />
        }
      >
        <TableHead headers={['Header 1', 'Header 2', 'Header 3']} />
        <TableBody>
          {rows.map((m, idx) => (
            <TableRow
              key={`${m}-${idx}`}
              onClick={() => interactive(idx)}
              active={idx === active}
            >
              <TableCell>Value for row {m} item 1</TableCell>
              <TableCell>Value for row {m} item 2</TableCell>
              <TableCell>Value for row {m} item 3</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const TableProps: StoryObj<typeof Table> = {
  render: () => (
    <Box>
      <Box mb="2">
        <Table>
          <TableHead headers={['Header 1', 'Header 2', 'Header 3']} />
          <TableBody>
            <TableRow>
              <TableCell>Value for row 1 item 1</TableCell>
              <TableCell>Value for row 2 item 2</TableCell>
              <TableCell>Value for row 3s item 3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Table
        footer={
          <Text textAlign="center" color="primary" fontWeight="700">
            You can add any footer prop, like a Pagination
          </Text>
        }
      >
        <TableHead headers={['Header 1', 'Header 2', 'Header 3']} />
        <TableBody>
          <TableRow>
            <TableCell>Value for row 1 item 1</TableCell>
            <TableCell>Value for row 2 item 2</TableCell>
            <TableCell>Value for row 3s item 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  ),
};

export const TableHeadProps: StoryObj<typeof Table & typeof TableHead> = {
  args: {
    headers: ['Header1', 'header2', 'header3'],
  },
  render: ({ ...rest }) => {
    let headers = rest.headers!;
    return (
      <div>
        <Box mb="3">
          Headers as pro
          <Table>
            <TableHead headers={headers} />
          </Table>
        </Box>

        <Box mb="3">
          As Custom headers
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((i) => (
                  <th key={i}>{i}</th>
                ))}
              </TableRow>
            </TableHead>
          </Table>
        </Box>

        <Box mb="3">
          Sticky Header
          <Table>
            <TableHead headers={['Header 1', 'Header 2', 'Header 3']} sticky />
            <TableBody>
              {allRows.map((m, idx) => (
                <TableRow key={`${m}-${idx}`}>
                  <TableCell>Value for row {m} item 1</TableCell>
                  <TableCell>Value for row {m} item 2</TableCell>
                  <TableCell>Value for row {m} item 3</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </div>
    );
  },
};
