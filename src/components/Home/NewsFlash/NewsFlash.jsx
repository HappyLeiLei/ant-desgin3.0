import React, { Component } from 'react';
import { Row, Col, Carousel} from 'antd';
import DataSource from '../../../mock/Mock';
import './NewsFlash.less';

export default class NewsFlash extends Component {
  constructor(props){
    super(props);
    this.state = {
      newsFlashData: DataSource.data.list,
      dateStatistics: DataSource.dateStatistics
    }
  }

  NewsFlashTtiel (props) {
    let lsitItems = props.map((list) =>
      <li className="NewsFlashTtielItem line-limit-length" key={list.id}>
        <a href="">{list.content}</a>
      </li>
    );
    return(
      <ul className="NewsFlashList">
        <span className="NewsFlashNote"></span>
        <Carousel vertical autoplay  dots={false}>
          {lsitItems}
        </Carousel>
      </ul>
    )
  }

  DateStatistics (props) {
    let dataSource = props.map ((data) =>
      <span className="dateStatistics" key={data.id}>
        {data.name}<strong className="date">{data.data}</strong>{data.unit}
      </span>
    );
    return (
      dataSource
    );
  }

  render(){
    return(
      <div className="NewsFlashBox">
        <div className="container">
          <Row>
            <Col span={10}>
              {this.NewsFlashTtiel(this.state.newsFlashData)}
            </Col>
            <Col span={14}>
              <div className="statisticsBox">
                {this.DateStatistics(this.state.dateStatistics)}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}