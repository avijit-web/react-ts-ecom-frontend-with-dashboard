import { useState, type ReactElement } from "react";
import TableHOC from "../components/admin/TableHOC";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const columns: ColumnDef<DataType>[] = [
  { header: "ID", accessorKey: "_id" },
  { header: "Amount", accessorKey: "amount" },
  { header: "Quantity", accessorKey: "quantity" },
  { header: "Discount", accessorKey: "discount" },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => info.getValue<ReactElement>(),
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: (info) => info.getValue<ReactElement>(),
  },
];

function Orders() {
  const [rows, setRows] = useState<DataType[]>([
    {
      _id: "ABADASDAS",
      amount: 100,
      discount: 25,
      quantity: 10,
      status: <span className="red">Processing</span>,
      action: <Link to={`/orders/ABADASDAS`}>View</Link>,
    },
  ]);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6,
  );
  return (
    <div className="container">
      <h1>My Orders</h1>

      {Table()}
    </div>
  );
}

export default Orders;
