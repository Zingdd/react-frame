import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

class Menus extends Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
  };
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        width={300}
      >
        <div className="logo" />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <Link to="/">首页</Link >
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <Link to="/ee">正文</Link >
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>测试</span></span>}>
            <Menu.Item key="5"><Link to="/test">列表</Link ></Menu.Item>
            <Menu.Item key="6">其他1</Menu.Item>
            <Menu.Item key="7">其他2</Menu.Item>
            <Menu.Item key="8">其他3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>内容</span></span>}>
            <Menu.Item key="9">内容1</Menu.Item>
            <Menu.Item key="10">内容2</Menu.Item>
            <SubMenu key="sub3" title="子内容">
              <Menu.Item key="11">结果</Menu.Item>
              <Menu.Item key="12">结果</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default Menus;
