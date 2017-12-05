import React, { Component } from 'react';
import { Layout } from 'antd';

// 通用组建
import Top from '../../components/Layout/Top/Top';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import FixTools from '../../components/Layout/FixTools/FixTools';

// 首页组建
import HomeSlide from '../../components/Home/HomeSlide/HomeSlide';
import NewsFlash from '../../components/Home/NewsFlash/NewsFlash';
import PriceMap from '../../components/Home/PriceMap/PriceMap';
import Banners from '../../components/Home/Banners/Banners';
import Quotation from '../../components/Home/Quotation/Quotation';
import Shopping from '../../components/Home/Shopping/Shopping';
import Supperlier from '../../components/Home/Supplier/Supplier';
import Market from '../../components/Home/Market/Market';
import Information from '../../components/Home/Information/Information';
import FinancialService from '../../components/Home/FinancialService/FinancialService';
import Logistics from '../../components/Home/Logistics/Logistics';
import Cooperative from '../../components/Home/Cooperative/Cooperative';

const { Content } = Layout;

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Layout className="layout">
          <Top />
          <Header />
          <HomeSlide />
          <NewsFlash />
          <Content>
            <div className="container">
              <PriceMap />
              <Banners />
              <Quotation />
              <Shopping />
              <Supperlier />
              <Market />
              <Information />
              <FinancialService />
              <Logistics />
              <Cooperative />
            </div>
          </Content>
          <Footer />
        </Layout>
        <FixTools />
      </div>
    );
  }
}

export default Home;
