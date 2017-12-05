import React, { Component } from 'react';
import { Carousel } from 'antd';
import './HomeCarousel.less';

export default class HomeCarouse extends Component {
  render(){
    return(
      <Carousel effect="fade" autoplay>
        <div><a href=""><img src="http://www.51youse.cn/uploadfile/2017/0824/20170824050815636.jpg" alt="" /></a></div>
        <div><a href="">
          <img src="http://www.51youse.cn/uploadfile/2017/0802/20170802024604677.jpg" alt="" /></a></div>
        <div><a href=""><img src="http://www.51youse.cn/uploadfile/2017/0527/20170527042036281.jpg" alt="" /></a></div>
      </Carousel>
    )
  }
}