import React, { Component } from 'react'
import { Table, Button } from 'antd';

import './GoodsTable.less';

const columns = [{
  title: '品名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '商品信息',
  dataIndex: 'goodscontent',
  key: 'goodscontent',
}, {
  title: '',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '重量',
  dataIndex: 'weight',
  key: 'weight',
}, {
  title: '起订量',
  dataIndex: 'moq',
  key: 'moq',
}, {
  title: '单价',
  dataIndex: 'UnitPrice',
  key: 'UnitPrice',
}, {
  title: '　',
  dataIndex: 'action',
  key: 'action',
    render: text => <Button>{text}</Button>,
}];

const data = [{
  key: '1',
  name: '铜杆1',
  goodscontent: "上冶T1RΦ8mm ",
  address: "发货地: 七都 ",
  weight: "50",
  moq: "5",
  UnitPrice: "45000.00",
  action: "购买"

}, {
  key: '2',
  name: '铜杆',
  goodscontent: "上冶T1RΦ8mm ",
  address: "发货地: 七都 ",
  weight: "50",
  moq: "5",
  UnitPrice: "45000.00",
  action: "购买"
  }, {
    key: '3',
    name: '铜杆',
    goodscontent: "上冶T1RΦ8mm ",
    address: "发货地: 七都 ",
    weight: "50",
    moq: "5",
    UnitPrice: "45000.00",
    action: "待上架"
  }, {
    key: '4',
    name: '铜杆',
    goodscontent: "上冶T1RΦ8mm ",
    address: "发货地: 七都 ",
    weight: "50",
    moq: "5",
    UnitPrice: "45000.00",
    action: "已成交"
  }, {
    key: '5',
    name: '铜杆',
    goodscontent: "上冶T1RΦ8mm ",
    address: "发货地: 七都 ",
    weight: "50",
    moq: "5",
    UnitPrice: "45000.00",
    action: "购买"
  }, {
    key: '6',
    name: '铜杆',
    goodscontent: "上冶T1RΦ8mm ",
    address: "发货地: 七都 ",
    weight: "50",
    moq: "7",
    UnitPrice: "45000.00",
    action: "购买"
  }, {
    key: '7',
    name: '铜杆',
    goodscontent: "上冶T1RΦ8mm ",
    address: "发货地: 七都 ",
    weight: "50",
    moq: "5",
    UnitPrice: "45000.00",
    action: "购买"
  }, {
    key: '8',
    name: '铜杆',
    goodscontent: "上冶T1RΦ8mm ",
    address: "发货地: 七都 ",
    weight: "50",
    moq: "5",
    UnitPrice: "45000.00",
    action: "购买"
  }];

class GoodsTable extends Component {
  render() {

    return (
      <div className="goodsTableBox">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}

export default GoodsTable;