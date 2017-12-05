import React, { Component } from 'react';
import { Icon } from 'antd';
import './FixTools.less';

export default class FixTools extends Component {

  componentDidMount(){
    window.onscroll = ()=> {
      // 变量t就是滚动条滚动时，到顶部的距离
      const t = document.documentElement.scrollTop || document.body.scrollTop;
      const top_view = document.getElementsByClassName('back_top')[0];
      if (top_view !== null) {
        top_view.style.display = t >= 600? 'block':'none'
      }
    }
  }
  // 返回顶部
  scrollToTop = () => {
    // console.log(this);
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div className="toolsBox">
        <div className="toolsItem kefu">
          <a href=""><Icon type="customer-service"/></a>
          <div className="toolsItemContent">
            qq客服
          </div>
        </div>
        <div className="toolsItem gongzhong">
          <a href=""><Icon type="qrcode"></Icon></a>
          <div className="toolsItemContent gongzhonghao"> </div>
        </div>
        <div className="toolsItem">
          <a href="#shoppingBox">商城</a>
        </div>
        <div className="toolsItem">
          <a href="#homeMarketBox">集市</a>
        </div>
        <div className="toolsItem">
          <a href="#homeInformationBox">资讯</a>
        </div>
        <div className="toolsItem">
          <a href="#homeFinancialServiceBox">金融</a>
        </div>
        <div className="toolsItem">
          <a href="#homeLogisticsBox">物流</a>
        </div>
        <div className="toolsItem back_top">
          <a href="##" onClick={this.scrollToTop.bind(this)}><Icon type="up" /></a>
        </div>
      </div>
    );
  }
}