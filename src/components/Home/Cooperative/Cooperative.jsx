import React, { Component } from 'react';

import './Cooperative.less';

import bankImg1 from '../../../assets/home/bank/bank1.png';
import bankImg2 from '../../../assets/home/bank/bank2.png';
import bankImg3 from '../../../assets/home/bank/bank3.png';
import bankImg4 from '../../../assets/home/bank/bank4.png';
import bankImg5 from '../../../assets/home/bank/bank5.png';

class Cooperative extends Component {
  render() {
    return (
      <div className="homeCooperativeBox">
        <h1>合作伙伴</h1>
        <div className="Cooperative gBoxShadow">
          <a href=""><img src={bankImg1} alt="" /></a>
          <a href=""><img src={bankImg2} alt="" /></a>
          <a href=""><img src={bankImg3} alt="" /></a>
          <a href=""><img src={bankImg4} alt="" /></a>
          <a href=""><img src={bankImg5} alt="" /></a>
        </div>
      </div>
    );
  }
}

export default Cooperative;