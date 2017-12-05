import React, { Component } from 'react';
import HomeBanner1 from '../../../assets/home/banner/banner1.png';
import HomeBanner2 from '../../../assets/home/banner/banner2.png';
import HomeBanner3 from '../../../assets/home/banner/banner3.png';

import './Banners.less';

class Banners extends Component {
  render(){
    return(
      <div className="homeBannersBox">
        <a href=""><img src={HomeBanner1} alt="" /></a>
        <a href=""><img src={HomeBanner2} alt="" /></a>
        <a href=""><img src={HomeBanner3} alt="" /></a>
      </div>
    );
  }
}

export default Banners;