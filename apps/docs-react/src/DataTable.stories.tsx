import type { Meta, StoryObj } from "@storybook/react-vite";
import {  DataTable,
  DataTableColumnHeader,
  DataTablePagination,
  DataTableViewOptions  } from "@muffled-ui/ui-web"
import type { ColumnDef } from "@tanstack/react-table";
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "amount",
   enableSorting: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" className="justify-end" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

// Generating 25 items to demonstrate pagination capabilities
const manyPayments: Payment[] = Array.from({ length: 25 }, (_, i) => ({
  id: `id-${i}`,
  amount: Math.floor(Math.random() * 1000),
  status: i % 2 === 0 ? "success" : "pending",
  email: `user-${i}@example.com`,
}));

const meta = {
  title: "ui-web/DataTable",
  component: DataTable,
  subcomponents: {
    DataTableColumnHeader,
    DataTablePagination,
    DataTableViewOptions
  } as any,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Full Capabilities Story:
 * This shows the table with sorting (via headers),
 * visibility toggling (via View button),
 * and pagination (via the footer controls).
 */
export const FullFeatures: Story = {
  args: {
    showViewOptions: false,
    columns: columns as any,
    data: manyPayments,
  },
};

export const Simple: Story = {
  args: {

    columns: columns as any,
    data: manyPayments.slice(0, 3),
  },
};

export const Empty: Story = {
  args: {
    columns: columns as any,
    data: [],
  },
};
