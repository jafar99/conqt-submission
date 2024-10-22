import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const ShowData = () => {
  const [supplierData, SetsupplierData] = useState();

  const ApiData = () => {
    axios
      .get(
        "https://apis-technical-test.conqt.com/Api/Item-Supplier/Get-All-Items"
      )
      .then((res) => {
        SetsupplierData(res?.data?.data?.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    ApiData();
  }, []);

  const columns = [
    {
      title: "Supplier",
      dataIndex: ["Supplier", "supplierName"],
    },
    {
      title: "Item Name",
      dataIndex: "itemName",
    },
    {
      title: "Quntity",
      dataIndex: "quantity",
    },
    {
      title: "Ciy",
      dataIndex: ["Supplier", "cityName"],
    },
    {
      title: "Country",
      dataIndex: ["Supplier", "countryName"],
    },
    {
      title: "Email",
      dataIndex: ["Supplier", "email"],
    },
    {
      title: "Phone Number",
      dataIndex: ["Supplier", "phoneNumber"],
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="itemform">
      <Table columns={columns} dataSource={supplierData} onChange={onChange} />
    </div>
  );
};

export default ShowData;
