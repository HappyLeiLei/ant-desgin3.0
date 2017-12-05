import React, { Component } from 'react';
import { Icon } from 'antd';

import './Supplier.less';

import SupplierImg1 from '../../../assets/home/supplier/supper1.jpg';
import SupplierImg2 from '../../../assets/home/supplier/supper2.jpg';
import SupplierImg3 from '../../../assets/home/supplier/supper3.jpg';
import SupplierImg4 from '../../../assets/home/supplier/supper4.jpg';

class Supplier extends Component {
  render() {
    return (
      <div className="supplierBox">
        <span className="prevBefor prev"><Icon type="right" /></span>
        <span className="prevAfter prev"><Icon type="left" /></span>
        <ul>
          <li className="supplierItem">
            <a href=""><img src={SupplierImg1} alt="" /></a>
          </li>
          <li className="supplierItem">
            <a href=""><img src={SupplierImg2} alt="" /></a>
          </li>
          <li className="supplierItem">
            <a href=""><img src={SupplierImg3} alt="" /></a>
          </li>
          <li className="supplierItem">
            <a href=""><img src={SupplierImg4} alt="" /></a>
          </li>
          <li className="supplierItem">
            <a href=""><img src={SupplierImg3} alt="" /></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Supplier;