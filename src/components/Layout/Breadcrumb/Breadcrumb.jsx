import React, { Component } from 'react';
import { Icon } from 'antd';
import './Breadcrumb.less';

class BreadcrumbTop extends Component {

  render(){
    return(
      <div class="ant-breadcrumb breadcrumbTop">
        <span>
          <span class="ant-breadcrumb-link">当前位置</span>
          <span class="ant-breadcrumb-separator">:</span>
        </span>
        <span>
          <span class="ant-breadcrumb-link">
            <a href="">快讯</a>
          </span>
          <span class="ant-breadcrumb-separator"><Icon type="right" /> </span>
        </span>
        <span>
          <span class="ant-breadcrumb-link">
            <a href="">企业快讯</a>
          </span>
        </span>
      </div>
    );
  }
}

export default BreadcrumbTop;