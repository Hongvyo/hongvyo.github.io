import React from 'react';
import logo from './logo.svg';
import './App.css';
import { theme, Layout, Menu, Breadcrumb, ConfigProvider } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import { AppHeader } from './App.Header';
import { AppFooter } from './App.Footer';
const { darkAlgorithm  } = theme;

const App: React.FC = () => {
 
  return (
    <ConfigProvider
        theme={{
            "token": {
                "colorBgBase": "#222831",
                "colorTextBase": "#eeeeee",
                "colorPrimary": "#2d4059",
                "colorInfo": "#2d4059",
                "borderRadius": 0
            },
            "algorithm": darkAlgorithm
          }}
        >
    <Layout style={{height: "100vh"}}>
        <AppHeader/>
      <Content style={{height: "100%"}}>
        <div></div>
      </Content>
      <AppFooter />
    </Layout>
    </ConfigProvider>
    
  );
};

export default App;