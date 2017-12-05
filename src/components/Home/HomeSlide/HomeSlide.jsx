import React, { Component } from 'react';
import { Icon, Button, Tabs } from 'antd';
import HomeCarousel from '../../Carousel/HomeCarousel';
import DataSource from '../../../mock/Mock';

import './HomeSlide.less';

import QQBanner from '../../../assets/home/reg_login_help/reg_login_qq.png';

const TabPane = Tabs.TabPane;
export default class HomeSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: DataSource.newsData.newsData,
      menuData: DataSource.menuData
    }
  }

/* ------------------------------------------------------------------------
  轮播图内左侧App推广
------------------------------------------------------------------------*/
  SlideMenuTop() {
    return (
      <div className="slide_menu_top">
        <h1 className="slide_menu_top_title">51有色APP
        <span className="slide_menu_top_icon"> <Icon type="right" /></span>
        </h1>
        <div className="slide_menu_top_txt">买货更轻松
        <div className="slide_menu_top_app"></div>
        </div>
      </div>
    );
  }

/* ------------------------------------------------------------------------
  轮播图内左侧类目导航
------------------------------------------------------------------------*/
  // dt组件
  ListTitle(props) {
    return (<dt><a href="">{props}</a></dt>);
  }
  // dd组件
  ListChild(props) {
    let goods = props.map((txt) =>
      <dd key={txt.goods}><a href="">{txt.goods}</a></dd>
    );
    return (goods);
  }
  // li组件
  SlideMenuList(props) {
    let listItems = props.map((list) =>
      <li className={'slide_menu_item' + ' ' + 'slide_menu_item' + list.id} key={list.id}>
        <dl>
          {this.ListTitle(list.title)}
          {this.ListChild(list.children)}
        </dl>
      </li>
    );
    return (
      <div className="slide_menu_list">
        <ul>{listItems}</ul>
      </div>
    );
  }

/* ------------------------------------------------------------------------
  轮播图内右侧注册登录
------------------------------------------------------------------------*/
  RegLogin() {
    return (
      <div className="slide_reg_login">
        <h1 className="slide_reg_login_title">买卖铜铝就上51有色</h1>
        <div className="rl_btn">
          <Button size="large"><i className="icon iconfont icon-icon-51-Login"></i>登录</Button>
          <Button size="large"><i className="icon iconfont icon-icon-51-register"></i>注册</Button>
        </div>
      </div>
    );
  }

/* ------------------------------------------------------------------------
  轮播图内右侧卖家登录后
------------------------------------------------------------------------*/
  Seller() {
    return (
      <div className="Seller">
        <h1 className="Seller_title">51有色欢迎您</h1>
        <h2 className="Seller_title1">送三角函数数有限公司</h2>
        <div className="rl_btn">
          <a href="" className="ant-btn ant-btn-lg">我要挂单</a>
          <a href="" className="ant-btn ant-btn-lg">进入供应商中心</a>
        </div>
      </div>
    );
  }

/* ------------------------------------------------------------------------
  轮播图内右侧买家登录后
------------------------------------------------------------------------*/
  Buyers() {
    return (
      <div className="Buyers">
        <h1 className="Buyers_title">51有色欢迎您</h1>
        <h2 className="Buyers_title1">送三角函数数有限公司</h2>
        <div className="rl_btn">
          <a href="" className="ant-btn ant-btn-lg">我要采购</a>
          <a href="" className="ant-btn ant-btn-lg">进入供应商中心</a>
        </div>
      </div>
    );
  }

/* ------------------------------------------------------------------------
  轮播图内右侧帮助
------------------------------------------------------------------------*/
  Process() {
    const help1 = (
      <div className="help_content">
        <dl className="help_item">
          <a href="">
            <dt><i class="icon iconfont icon-icon-51-order"></i></dt>
            <dd>下单</dd>
          </a>
        </dl>
        <dl className="help_item">
          <a href="">
            <dt><i class="icon iconfont icon-icon-51-paymet"></i></dt>
            <dd>付款</dd>
          </a>
        </dl>
        <dl className="help_item">
          <dt><i class="icon iconfont icon-icon-51-finish"></i></dt>
          <dd>完成</dd>
        </dl>
      </div>
    );
    const help2 = (
      <div className="help_content">
        <dl className="help_item">
          <a href="">
            <dt><i class="icon iconfont icon-icon-51-offer"></i></dt>
            <dd>挂单</dd>
          </a>
        </dl>
        <dl className="help_item">
          <a href="">
            <dt><i class="icon iconfont icon-icon-51-trade"></i></dt>
            <dd>交易</dd>
          </a>
        </dl>
        <dl className="help_item">
          <dt><i class="icon iconfont icon-icon-51-finish"></i></dt>
          <dd>完成</dd>
        </dl>
      </div>
    );
    return (
      <div className="slide_help">
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="买家入门" key="1"> {help1} </TabPane>
          <TabPane tab="卖家入门" key="2"> {help2} </TabPane>
        </Tabs>
      </div>
    );
  }
  
/* ------------------------------------------------------------------------
  轮播图内右侧新闻资讯
------------------------------------------------------------------------*/
  Note(props) {
    console.log(props)
    
    const listItems = props.map((note) =>
      <li className="note_item line-limit-length" key={note.id}> <a href="">活动 | {note.title}</a> </li>
    );
    return (
      <div className="slide_note">
        <ul> {listItems} </ul>
      </div>
    );
  }

/* ------------------------------------------------------------------------
  轮播图内右侧QQ客服
------------------------------------------------------------------------*/
  QBanner() {
    return (
      <div className="slide_banner">
        <a href=""><img src={QQBanner} alt="" /></a>
      </div>
    );
  }

  render() {
    return (
      <div className="home-slide">
        <div className="container slide_content">
          <div className="slide_menu">
            {this.SlideMenuTop()}
            {this.SlideMenuList(this.state.menuData)}
          </div>
          <div className="slide_reg_login_help">
            {this.RegLogin()}
            {this.Seller()}
            {this.Buyers()}
            {this.Process()}
            {this.Note(this.state.newsData)}
            {this.QBanner()}
          </div>
        </div>
        <HomeCarousel />
      </div>
    )
  }
}

