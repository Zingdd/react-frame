import React from 'react';
import { Layout, Icon } from 'antd';
import { Route, Switch } from 'react-router-dom';
import './common.css';
import Menus from './Menu';
import Hello from '../hello';
import TestTableView from '../test/testTableView';

const { Header, Content, Footer } = Layout;

class Layouts extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout>
        <Menus collapsed={this.state.collapsed} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 680 }}>
            <Switch>
              <Route path="/" exact component={Hello} />
              <Route path="/test" component={TestTableView} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by HDD
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Layouts;
