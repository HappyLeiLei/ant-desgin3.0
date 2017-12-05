import React, { Component } from 'react'
import { Icon } from 'antd';

export default class LoginReg extends Component {
  render() {
    return (
      <div className="top_menu user_tools">
        <ul className="top_menu_nav">
          <li className="top_menu_nav_li"></li>
          <li className="top_menu_nav_li">
            <div className="top_menu_item">
              <a className="" href="">用户昵称...<Icon type="down" /> </a>
              <div className="top_menu-box user_setting">
                <p>欢迎您，天津铜业有限公司！</p>
                <p><span className="o_member">普通会员</span><a href="##" className="pull_right">账号管理</a></p>
              </div>
            </div>
          </li>
          <li className="top_menu_nav_li">
            <div className="top_menu_item">
              <a className="" href="">退出</a>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
