import React, { Component } from 'react';
import { Row, Col, Tabs, Button, Icon } from 'antd';
import GoodsTable from '../../Tables/GoodsTable/GoodsTable';
import './Market.less';

import tempImg from '../../../assets/temp/1.png';

class Market extends Component {
  render() {
    return (
      <div className="homeMarketBox floorBox" id="homeMarketBox">
        <Row gutter={10}>
          <Col span={7} >
            <div className="floorLeft">
              <div className="floorTitle"></div>
              <div className="floorMain">
                <div className="quShiBox">
                  <div className="qushi">
                  <h1>51价格趋势 <span><a href="">更多</a></span></h1>
                    <Tabs defaultActiveKey="1">
                      <Tabs.TabPane tab={<Button>铜杆</Button>} key="1">
                        <img src={tempImg} alt="" />
                      </Tabs.TabPane>
                      <Tabs.TabPane tab={<Button>电解铜</Button>} key="2">
                        <img src={tempImg} alt="" />
                      </Tabs.TabPane>
                      <Tabs.TabPane tab={<Button>铝杆</Button>} key="3">
                        <img src={tempImg} alt="" />
                      </Tabs.TabPane>
                      <Tabs.TabPane tab={<Button>铝锭</Button>} key="4">
                        <img src={tempImg} alt="" />
                      </Tabs.TabPane>
                    </Tabs>
                  </div>
                  <div className="chengJiao">
                    <ul className="cjList">
                      <li className="cjListItem">
                        <h1>铜杆-铜线 <span>楚江 TR 2.1mm 无为</span></h1>
                        <h2>46,500<span>元/吨</span>1.0238<span>吨</span></h2>
                      </li>
                      <li className="cjListItem">
                        <h1>铜杆-铜线 <span>楚江 TR 2.1mm 无为</span></h1>
                        <h2>46,500<span>元/吨</span>1.0238 <span>吨</span></h2>
                      </li>
                      <li className="cjListItem">
                        <h1>铜杆-铜线 <span>楚江 TR 2.1mm 无为</span></h1>
                        <h2>46,500<span>元/吨</span>1.0238<span>吨</span></h2>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={17} >
            <div className="HomeGoodsTableBox">
              <span className="saiXuan">
                <button type="button" className="ant-btn ant-btn-action"><span>一口价</span></button>
                <button type="button" className="ant-btn"><span>可议价</span></button>
              </span> 
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab={<Button>铜杆</Button>} key="1">
                  <GoodsTable />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<Button>电解铜</Button>} key="2">
                  <GoodsTable />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<Button>铝杆</Button>} key="3">
                  <GoodsTable />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<Button>铝锭</Button>} key="4">
                  <GoodsTable />
                </Tabs.TabPane>
              </Tabs>
              <p className="buyMore"><a href="">前去51商城购买更多商品 <Icon type="right" /></a></p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Market;