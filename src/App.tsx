import React from 'react';
import logo from './logo.svg';
import './App.css';
import { theme, Layout, Menu, Breadcrumb, ConfigProvider } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
const { darkAlgorithm, compactAlgorithm } = theme;




const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
        theme={{
            "token": {
              "colorPrimary": "#f9b17a",
              "colorInfo": "#f9b17a",
              "colorLink": "#f9b17a",
              "colorBgBase": "#161e30",
              "colorBgContainer": "#2d3250",
              "borderRadius": 0
            },
            "algorithm": darkAlgorithm
          }}
        >
    <Layout style={{height: "100vh"}}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
        //   theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        />
      </Header>
      <Content >
        
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
    </ConfigProvider>
    
  );
};

export default App;