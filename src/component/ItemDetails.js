import React, { useState } from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";
const { TextArea } = Input;

const ItemDetails = () => {
  const [itemDisabled, setitemDisabled] = useState(true);
  const [SupplierDisabled, setSupplierDisabled] = useState(false);

  return (
    <div className="input-form">
      <>
        <div className="checkbox">
          <Checkbox
            checked={itemDisabled}
            onChange={(e) => setitemDisabled(e.target.checked)}
          >
            Item
          </Checkbox>
          <Checkbox
            checked={SupplierDisabled}
            onChange={(e) => setSupplierDisabled(e.target.checked)}
          >
            Supplier
          </Checkbox>
        </div>
        <div className="itemform">
          <div className="item-form-container">
            {itemDisabled ? (
              <>
                <h1>Item Details</h1>
                <Form
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                  layout="horizontal"
                >
                  <Form.Item label="Item Name">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Quantity">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="Unit Price">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="Date Of submission">
                    <DatePicker />
                  </Form.Item>

                  <div className="button-submit">
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="itemform">
          <div className="item-form-container">
            {SupplierDisabled ? (
              <>
                <h1> Supplier Details</h1>
                <Form
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                  layout="horizontal"
                >
                  <Form.Item label="Enter Supplier Name">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Compony Name">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="Country">
                    <Select>
                      <Select.Option value="demo">India</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="City">
                    <Select>
                      <Select.Option value="demo">pune</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Email Address">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Enter Supplier Name">
                    <Input />
                  </Form.Item>

                  <div className="button-submit">
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default ItemDetails;
