import React, { Component } from 'react'
import { Layout, Menu, Icon, Popover } from 'antd';
import './Header.less'
import Logo from '../../../assets/logo.svg';
const { Header } = Layout;
export default class Headers extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      citysData:[
        {
          id:1,
          content:"北京"
        },
        {
          id:2,
          content:"上海"
        },
        {
          id:3,
          content:"广州"
        },
        {
          id:4,
          content:"黑龙江"
        },
      ],
    }
  }
  hide = () => {
    this.setState({
      visible:false,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({
      visible
    });
  }

/* ------------------------------------------------------------------------
  城市列表
------------------------------------------------------------------------*/
  CityLsit(props){
    let citys = props.map((city) => 
      <a key={city.id} onClick={this.hide}>{city.content}</a>
    );
    return (<div className="position_name">{citys}</div>);
  }
  render() {
    return (
      <Header className="header">
        <div className="container">
          <div className="logo">
            <a href=""><img src={Logo} alt="logo" /></a>
          </div>
          {/* <span className="headerTitle_line"> </span> */}
          {/* 其他标语 */}
          {/* <div className="headerTitle">欢迎注册</div> */}
          {/* 城市切换 */}
          <Popover placement="bottomLeft"
            title={"请选择所在城市："}
            content={this.CityLsit(this.state.citysData)}
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
          >
            {/* <div className="headerTitle">天津 <Icon type="down" className="position_icon" /></div> */}
          </Popover>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">51集市</Menu.Item>
            <Menu.Item key="3">51商城</Menu.Item>
            <Menu.Item key="4">行业资讯</Menu.Item>
            <Menu.Item key="5">深度分析</Menu.Item>
            <Menu.Item key="6">帮助中心</Menu.Item>
          </Menu>
        </div>
      </Header>
    )
  }
}
