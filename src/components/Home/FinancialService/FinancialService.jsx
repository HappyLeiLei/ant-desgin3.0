import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import './FinancialService.less';

import floorMainImg from '../../../assets/home/f4-6.png';

class FinancialService extends Component {
  render() {
    return (
      <div className="homeFinancialServiceBox floorBox" id="homeFinancialServiceBox">
        <Row gutter={10}>
          <Col span={7} >
            <div className="floorLeft">
              <div className="floorTitle"></div>
              <div className="floorMain jinfuBanner">
                <img src={floorMainImg} alt="" />
              </div>
            </div>
          </Col>
          <Col span={17} >
            <div className="floorContent gBoxShadow clearfix">
              <div className="jinfuCont">
                <div className="jinfuItem jinfuItem1">
                  <h1>吉象白条</h1>
                  <h2>信用审批，循环授信</h2>
                </div>
                <div className="jinfuItem jinfuItem2">
                  <h1>吉象订单</h1>
                  <h2>保证交易，下单融资</h2>
                </div>
                <div className="jinfuItem jinfuItem3">
                  <h1>吉象代采</h1>
                  <h2>质资源，采购便捷</h2>
                </div>
                <div className="jinfuItem jinfuItem4">
                  <h1>吉象库押</h1>
                  <h2>闪电放款，现货融资</h2>
                </div>
              </div>
              <div className="jinfuLiu">
                <span><a href="">了解更多<Icon type="right" /></a></span>
                <h1>张经理<Icon type="phone" /><strong>18902074455</strong></h1>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FinancialService;