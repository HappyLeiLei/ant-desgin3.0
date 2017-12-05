import React, { Component } from 'react';
import { Row, Col, Button, Tabs } from 'antd';
import './Information.less';

import tempImg from '../../../assets/temp/1.png';

class Information extends Component {
  InformationList(props){
    return(
      <div className="MainInformation">
        <div className="MainTop">
          <a href="">
            <img src={tempImg} alt="" />
            <p className="">文本表述似地哪位你哪位年</p>
          </a>
        </div>
        <ul>
          <li className="InformationListItem line-limit-length"><a href="">热烈祝贺沈一线缆有限公司获批成司获批成为吉象金服</a></li>
          <li className="InformationListItem line-limit-length"><a href="">热烈祝贺沈一线缆有限公司获批成为吉象金服司获批成</a></li>
          <li className="InformationListItem line-limit-length"><a href="">热烈祝贺沈一线缆有限公司获批成为吉象金服司获批成</a></li>
          <li className="InformationListItem line-limit-length"><a href="">热烈祝贺沈一线缆有司获批成限公司获批成为吉象金服</a></li>
          <li className="InformationListItem line-limit-length"><a href="">热烈祝贺沈一线缆有限公司获批成司获批成为吉象金服</a></li>
        </ul>
      </div>
    );
  }
  render() {
    return (
      <div className="homeInformationBox floorBox" id="homeInformationBox">
        <Row gutter={10}>
          <Col span={7} >
            <div className="floorLeft">
              <div className="floorTitle"></div>
              <div className="floorMain">
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab={<Button>平台动态</Button>} key="1">
                    {this.InformationList()}
                  </Tabs.TabPane>
                  <Tabs.TabPane tab={<Button>企业动态</Button>} key="2">
                    {this.InformationList()}
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </Col>
          <Col span={17}>
            <div className="floorContent gBoxShadow clearfix">
              <div className="inforContentItem">
                <h1 className="inforTitle">行业资讯<span><a href="">更多</a></span>
                </h1>
                <Row gutter={10}>
                    <Col span={12} >
                      <ul className="inforTopList">
                        <li className="inforTopListItem">
                          <h1>
                            <a href="">今年全球矿业市场呈现新特点 <span>09-05</span></a>
                          </h1>
                          <p>9月4日，沪铝主力合约1711报得16935元 吨，刷新自2012年5月以来的新高。虽然国内铝产品社会库存持续高</p>
                        </li>
                        <li className="inforTopListItem">
                          <h1>
                            <a href="">今年全球矿业市场呈现新特点 <span>09-05</span></a>
                          </h1>
                          <p>9月4日，沪铝主力合约1711报得16935元 吨，刷新自2012年5月以来的新高。虽然国内铝产品社会库存持续高</p>
                        </li>
                      </ul>
                    </Col>
                    <Col span={12} >
                      <ul className="inforList">
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                      </ul>
                    </Col>
                </Row>
              </div>
              <div className="inforContentItem">
                <h1 className="inforTitle">深度分析<span><a href="">更多</a></span>
                </h1>
                <Row gutter={10}>
                    <Col span={12} >
                      <ul className="inforTopList">
                        <li className="inforTopListItem">
                          <h1>
                            <a href="">今年全球矿业市场呈现新特点 <span>09-05</span></a>
                          </h1>
                          <p>9月4日，沪铝主力合约1711报得16935元 吨，刷新自2012年5月以来的新高。虽然国内铝产品社会库存持续高</p>
                        </li>
                        <li className="inforTopListItem">
                          <h1>
                            <a href="">今年全球矿业市场呈现新特点 <span>09-05</span></a>
                          </h1>
                          <p>9月4日，沪铝主力合约1711报得16935元 吨，刷新自2012年5月以来的新高。虽然国内铝产品社会库存持续高</p>
                        </li>
                      </ul>
                    </Col>
                    <Col span={12} >
                      <ul className="inforList">
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                        <li className="inforListItem">
                          <a href="">TALСO计划到2020年将原铝产量提升至30万吨 <span>09-05</span></a>
                        </li>
                      </ul>
                    </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Information;