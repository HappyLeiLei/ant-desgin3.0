import React, { Component } from 'react'
import {  Icon } from 'antd';


export default class TopMenu extends Component {
  render() {
    return (
      <div className="top_menu">
        <ul className="top_menu_nav">
          <li className="top_menu_nav_li">
            <div className="top_menu_item">
              <a className="" href=""> 网站首页</a>
            </div>
          </li>
          <li className="top_menu_nav_li">
            <div className="top_menu_item">
              <a className="" href=""> APP下载<Icon type="down" /> </a>
              <div className="top_menu-box app_down"></div>
            </div>
          </li>
          <li className="top_menu_nav_li">
            <div className="top_menu_item">
              <a className="" href=""> 采购商中心<Icon type="down" /> </a>
              <div className="top_menu-box caigou">
                <dl>
                  <dd><a href="">我的订单</a></dd>
                </dl>
              </div>
            </div>
          </li>
          <li className="top_menu_nav_li">
            <div className="top_menu_item">
              <a className="" href=""> 供应商中心<Icon type="down" /> </a>
              <div className="top_menu-box gongying">
                <dl>
                  <dd><a href="">添加挂单</a></dd>
                  <dd><a href="">我的挂单</a></dd>
                  <dd><a href="">我的订单</a></dd>
                </dl>
              </div>
            </div>
          </li>
          <li className="top_menu_nav_li">
            <div className="top_menu_item">
              <a className="" href=""> 网站地图<Icon type="down" /> </a>
              <div className="top_menu-box maps">
                <dl>
                  <dt>网站首页</dt>
                  <dd><a href="">网站首页</a></dd>
                </dl>
                <dl>
                  <dt>现货交易</dt>
                  <dd><a href="">51集市</a></dd>
                  <dd><a href="">51商城</a></dd>
                </dl>
                <dl>
                  <dt>信息中心</dt>
                  <dd><a href="">行业资讯</a></dd>
                  <dd><a href="">深度分析</a></dd>
                  <dd><a href="">企业动态</a></dd>
                  <dd><a href="">供应商推荐</a></dd>
                </dl>
                <dl>
                  <dt>帮助中心</dt>
                  <dd><a href="">新手入门</a></dd>
                  <dd><a href="">交易流程</a></dd>
                  <dd><a href="">交易流程</a></dd>
                </dl>
                <dl>
                  <dt>关于平台</dt>
                  <dd><a href="">平台介绍</a></dd>
                  <dd><a href="">平台动态</a></dd>
                  <dd><a href="">平台动态</a></dd>
                  <dd><a href="">联系我们</a></dd>
                  <dd><a href="">人才招聘</a></dd>
                  <dd><a href="">合作伙伴</a></dd>
                  <dd><a href="">法律声明</a></dd>
                </dl>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
