import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Link } from "react-router-dom";

type DataType = {
  id: string;
  amount: number;
  quantity: number;
  discount: number;
  action: ReactElement;
  status: ReactElement;
};
import { Column } from "react-table";

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "AMOUNT",
    accessor: "amount",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DISCOUNT",
    accessor: "discount",
  },
  {
    Header: "ACTION",
    accessor: "action",
  }, 
  {
    Header: "STATUS",
    accessor: "status",
  },
  
];
const Order = () => {
  const [rows] = useState<DataType[]>([
    {
      id: "7678hgjg",
      amount: 78585,
      quantity: 1,
      discount: 6000,
      action: <span className="red">Processing</span>,
      status: <Link to={`/order/7678hgjg`}>View</Link>,
    },
  ]);

  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "orders",
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table}
    </div>
  );
};

export default Order;
