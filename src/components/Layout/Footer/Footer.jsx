import React, { Component } from 'react'
import { Layout } from 'antd';
import DataSource from '../../../mock/Mock';
import './Footer.less';

import footerimg1 from '../../../assets/footer/alarm.png';
import footerimg2 from '../../../assets/footer/integrity.png';
import footerimg3 from '../../../assets/footer/publicsecurity.png';

const { Footer } = Layout;

export default class Footers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpLinkData: DataSource.helpLinkData,
      footerLinkData: DataSource.footerLinkData,
    }
  }

  HelpLinkData(props) {
    console.log(props);
    let list = props.map((data) =>
      <li className="helpLinkItem" key={data.id}><a href={data.url}>{data.title}</a></li>
    );
    return (
      <ul className="helpLinkData">
        {list}
      </ul>
    );
  }
  FooterLinkData(props) {
    // console.log(props);
    let list = props.map((data) =>
      <li className="footerLinkItem" key={data.id}><a href={data.url}>{data.title}</a></li>
    );
    return (
      <ul className="footerLinkData">
        {list}
      </ul>
    );
  }
  render() {
    let copyright = ("COPYRIGHT © 51有色网  www.51youse.com  津ICP备16003818号-1  金汇通（天津）电工材料交易市场有限公司");
    return (
      <Footer>
        <div className="container">
          {this.HelpLinkData(this.state.helpLinkData)}
          {this.FooterLinkData(this.state.footerLinkData)}
          <p>{copyright}</p>
          <ul className="footerImg">
            <li className="footerImgItem"><a href=""><img src={footerimg1} alt="" /></a></li>
            <li className="footerImgItem"><a href=""><img src={footerimg2} alt="" /></a></li>
            <li className="footerImgItem"><a href=""><img src={footerimg3} alt="" /></a></li>
          </ul>
        </div>
      </Footer>
    )
  }
}
