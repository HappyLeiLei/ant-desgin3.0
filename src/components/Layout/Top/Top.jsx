import React, { Component } from 'react'
import { Row, Col } from 'antd';
import LoginReg from './LoginReg';
import TopMenu from './TopMenu';
import UserSetting from './UserSetting';
import './Top.less';

export default class Top extends Component {
  render() {
    return (
      <div className="top">
        <div className="container">
          <Row>
            <Col span={10}>
              <LoginReg />
              <UserSetting />
            </Col>
            <Col span={14}>
              <TopMenu />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
