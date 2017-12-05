import React, { Component } from 'react';
import { Row, Col, Tabs, Tag, Button, Icon } from 'antd';
import GoodsTable from '../../Tables/GoodsTable/GoodsTable';

import './Shopping.less';

class Shopping extends Component {

  topTabsListAu () {
    return(
      <ul className="topList topListAu">
        <li className="topListAuItem topListAuItem1"><span className="name">商家名称</span><Tag color="orange">铜杆</Tag><Tag color="orange">铜杆</Tag><span className="addrs">扬州</span><span className="liang">58400<em>吨</em></span></li>
        <li className="topListAuItem topListAuItem2"><span className="name">商家名称</span><Tag color="orange">铜杆</Tag><Tag color="orange">铜杆</Tag><span className="addrs">扬州</span><span className="liang">58400<em>吨</em></span></li>
        <li className="topListAuItem topListAuItem3"><span className="name">商家名称</span><Tag color="orange">铜杆</Tag><Tag color="orange">铜杆</Tag><span className="addrs">扬州</span><span className="liang">58400<em>吨</em></span></li>
        <li className="topListAuItem topListAuItem4"><span className="name">商家名称</span><Tag color="orange">铜杆</Tag><Tag color="orange">铜杆</Tag><span className="addrs">扬州</span><span className="liang">58400<em>吨</em></span></li>
        <li className="topListAuItem topListAuItem5"><span className="name">商家名称</span><Tag color="orange">铜杆</Tag><Tag color="orange">铜杆</Tag><span className="addrs">扬州</span><span className="liang">58400<em>吨</em></span></li>
      </ul>
    );
  }

  topTabsListAi() {
    return (
      <ul className="topList topListAi">
        <li className="topListAuItem topListAuItem1"><span className="name">商家名称</span><Tag color="orange">铝杆</Tag><span className="addrs">扬州</span><span className="liang">58400<em>吨</em></span></li>
        <li className="topListAuItem topListAuItem2"><span className="name">商家名称</span><Tag color="orange">铝杆</Tag><span className="addrs">扬州</span><span className="liang">58400<em>吨</em></span></li>
        <li className="topListAuItem topListAuItem3"><span className="name">商家名称</span><Tag color="orange">铝杆</Tag><span className="addrs">扬州</span><span className="liang">58400<em>吨</em></span></li>
        <li className="topListAuItem topListAuItem4"><span className="name">商家名称</span><Tag color="orange">铝杆</Tag><span className="addrs">扬州</span><span className="liang">58400<em>吨</em></span></li>
        <li className="topListAuItem topListAuItem5"><span className="name">商家名称</span><Tag color="orange">铝杆</Tag><span className="addrs">扬州</span><span className="liang">58400<em>吨</em></span></li>
      </ul>
    );
  }

  topGongYing(){
    return(
      <ul className="topGYList">
        <li className="topGYItem topGYItem1"><a href="">天津铜业有限公司</a></li>
        <li className="topGYItem topGYItem2"><a href="">天津铜业有限公司</a></li>
        <li className="topGYItem topGYItem3"><a href="">天津铜业有限公司</a></li>
        <li className="topGYItem topGYItem4"><a href="">天津铜业有限公司</a></li>
        <li className="topGYItem topGYItem5"><a href="">天津铜业有限公司</a></li>
      </ul>
    );
  }

  render() {
    return (
      <div className="shoppingBox floorBox" id="shoppingBox">
        <Row gutter={10}>
          <Col span={7} >
            <div className="floorLeft">
              <div className="floorTitle"></div>
              <div className="floorMain">
                <div className="youzhiTop">
                  <h1 className="topTitle">优质供应商排行</h1>
                  <div className="topTabs">
                    <Tabs defaultActiveKey="1" type="card">
                      <Tabs.TabPane tab="铜供应商" key="1">{this.topTabsListAu()}</Tabs.TabPane>
                      <Tabs.TabPane tab="铝供应商" key="2">{this.topTabsListAi()}</Tabs.TabPane>
                    </Tabs>
                  </div>
                </div>
                <div className="youzhiTop">
                  <h1 className="topTitle">优质供应商排行</h1>
                  <div className="topTabs">
                    {this.topGongYing()}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={17}>
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

export default Shopping;