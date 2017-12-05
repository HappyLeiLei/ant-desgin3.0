import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import './Logistics.less';

import floorMainImg from '../../../assets/home/f5-7.png';

class Logistics extends Component {
  render() {
    return (
      <div className="homeLogisticsBox floorBox" id="homeLogisticsBox">
        <Row gutter={10}>
          <Col span={7} >
            <div className="floorLeft">
              <div className="floorTitle"></div>
              <div className="floorMain logisticsBanner">
                <img src={floorMainImg} alt="" />
              </div>
            </div>
          </Col>
          <Col span={17} >
            <div className="floorContent gBoxShadow clearfix">
              <div className="logisticsCont">
                <div className="lotop">
                  <div className="logisticsItem logisticsItem1">
                    <a href="">
                      <h1>标准报价</h1>
                      <h2>按单计价，一单一结<br />标准透明报价体系</h2>
                    </a>
                  </div>
                  <div className="logisticsItem logisticsItem2">
                    <h1>临时叫车</h1>
                    <h2>0分钟响应<br />两小时到仓库</h2>
                  </div>
                  <div className="logisticsItem logisticsItem3">
                    <h1>回收签单</h1>
                    <h2>7个工作日内回单交换<br />自有司机安全有保障</h2>
                  </div>
                </div>
                <div className="logisticsCont">
                  <div className="logisticsItem logisticsItem4">
                    <h1>在途监控</h1>
                    <h2>24小时系统监控车辆货物情况<br />货物安全可视化</h2>
                  </div>
                  <div className="logisticsItem logisticsItem5">
                    <h1>结算发票</h1>
                    <h2>月结对账，多种转账方式<br />开具普票、增值税发票</h2>
                  </div>
                  <div className="logisticsItem logisticsItem6">
                    <h1>异常处理</h1>
                    <h2>专业客服跟踪，<br />最快2小时异常处理</h2>
                  </div>
                </div>
                <h1 className="logisticsFooter"> 合作咨询<span>朱经理</span><Icon type="phone" /><strong>13132149883</strong></h1>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Logistics;