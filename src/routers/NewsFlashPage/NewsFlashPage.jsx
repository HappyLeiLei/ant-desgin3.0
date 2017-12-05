import React, { Component } from 'react';
import { Layout } from 'antd';
// 通用组建
import Top from '../../components/Layout/Top/Top';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import FixTools from '../../components/Layout/FixTools/FixTools';
import Breadcrumb from '../../components/Layout/Breadcrumb/Breadcrumb';

// 快讯组件
import NewsFlashList from '../../components/NewsFlashPage/NewsFlashPage';


const { Content } = Layout;

class NewsFlashPage extends Component {
  render(){
    return(
      <div className="Home">
        <Layout className="layout">
          <Top />
          <Header />
          <Content>
            <div className="container">
              <Breadcrumb />
              <NewsFlashList />
            </div>
          </Content>
          <Footer />
        </Layout>
        <FixTools />
      </div>
    );
  }
}

export default NewsFlashPage;