import React, { Component } from 'react';
import { Tabs, Button, Icon } from 'antd';

import './RriceMap.less';
import mapApiImg from '../../../assets/home/map1.png';
class PriceMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      priceDate: new Date().toLocaleDateString(),
    }
  }
  PriceItem (props) {
    return(
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="A4" key="1">{this.PriceItemList()}</Tabs.TabPane>
        <Tabs.TabPane tab="A6" key="2">{this.PriceItemList()}</Tabs.TabPane>
        <Tabs.TabPane tab="A8" key="3">{this.PriceItemList()}</Tabs.TabPane>
      </Tabs>
    );
  }
  PriceItemList (props) {
    return(
      <ul className="PriceItemListBox">
        <li className="PriceItemListItem gBoxShadow priDown">
          <span className="title">天长</span>
          <strong className="pri">54060</strong>
          <span className="float"><Icon type="caret-up" /> 200</span>
        </li>
        <li className="PriceItemListItem gBoxShadow ">
          <span className="title">内蒙古</span>
          <strong className="pri">54060</strong>
          <span className="float"><Icon type="caret-up" /> 200</span>
        </li>
        <li className="PriceItemListItem gBoxShadow ">
          <span className="title">天长</span>
          <strong className="pri">54060</strong>
          <span className="float"><Icon type="caret-up" /> 200</span>
        </li>
        <li className="PriceItemListItem gBoxShadow priDown">
          <span className="title">天长</span>
          <strong className="pri">54060</strong>
          <span className="float"><Icon type="caret-up" /> 200</span>
        </li>
        <li className="PriceItemListItem gBoxShadow ">
          <span className="title">天长</span>
          <strong className="pri">54060</strong>
          <span className="float"><Icon type="caret-up" /> 200</span>
        </li>
        <li className="PriceItemListItem gBoxShadow ">
          <span className="title">天长</span>
          <strong className="pri">54060</strong>
          <span className="float"><Icon type="caret-up" /> 200</span>
        </li>
        <li className="PriceItemListItem gBoxShadow ">
          <span className="title">天长</span>
          <strong className="pri">54060</strong>
          <span className="float"><Icon type="caret-up" /> 200</span>
        </li>
        <li className="PriceItemListItem gBoxShadow ">
          <span className="title">天长</span>
          <strong className="pri">54060</strong>
          <span className="float"><Icon type="caret-up" /> 200</span>
        </li>
      </ul>
    );
  }
  render(){
    return(
      <div className="priceMapBox gBoxShadow clearfix">
        <div className="priceMap">
          <h1>
            51有色直供 
            {/* <span>{this.state.priceDate}</span> */}
          </h1>
          <div className="mapApi">
            <a href=""><img src={mapApiImg} alt="" /></a>
            <a href="" className="ant-btn">查看价格地图</a>
          </div>
        </div>
        <div className="price">
          <a href="" className="priceMore">更多</a>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab={<Button>铝杆</Button>} key="1">
              <div className="priceItem">
                {this.PriceItem()}
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab={<Button>铜杆</Button>} key="2">
              <div className="priceItem">
                {this.PriceItem()}
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default PriceMap;