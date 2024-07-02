import { Menu, Typography } from "antd"
import { Header } from "antd/es/layout/layout"

const items = [{
    label: "about.",
    title: "about",
    key: "about"
  },{
    label: "projects.",
    title: "projects",
    key: "projects"
  },{
    label: "contact.",
    title: "contact",
    key: "contact"
  }]

export const AppHeader = () => {
    return <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: "transparent"
        }}
      >
        <Menu
        style={{
            backgroundColor: "transparent",
            width: "100%"
        }}
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
        />
      </Header>
}