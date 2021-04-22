// 这里是页面要展示的公共部分的内容
// 给个例子，全部注释掉，因为不确定要引入什么版本的tea

import React from 'react';
import { Layout, Icon } from 'tea-component';
// import { Icon as SvgIcon } from '@/components/Icon';
import NavHeader from '@/components/header';
import LeftMenu from '@/components/leftMenu';
const { Body, Header, Content, Sider } = Layout;

// 直接在这里写路由列表
const routers = [
  {
    title: (
      <div className="menu-item">
        <Icon
          type="menu-user"
          className="svg-icon svg-icon-menu-user menu-item-icon"
        ></Icon>
        <div className="menu-item-text">通用</div>
      </div>
    ),
    tag: '',
    subMenu: [
      {
        title: '按钮 Button',
        to: '/Tea/Button',
      },
      {
        title: '图标 Icon',
        to: '/Tea/Icon',
      },
    ],
  },
  {
    title: (
      <div className="menu-item">
        <Icon
          type="menu-rule"
          className="svg-icon svg-icon-menu-rule menu-item-icon"
        ></Icon>
        <div className="menu-item-text">Demo</div>
      </div>
    ),
    tag: '',
    subMenu: [
      {
        title: '框架 标题置顶',
        to: '/Demo/Framework/fixheader',
      },
      {
        title: '框架 tabs置顶',
        to: '/Demo/Framework/fixheadertab',
      },
      {
        title: '框架 上下固定',
        to: '/Demo/Framework/verticalFixed',
      },
      {
        title: '框架 两栏布局',
        to: '/Demo/Framework/twoColumnLayout',
      },
      {
        title: '框架 内容加载中',
        to: '/Demo/Framework/loading',
      },
      {
        title: '表格 Table',
        to: '/Demo/Table',
      },
    ],
  },
];

export default (props) => {
  return (
    <Layout>
      <Header>
        <NavHeader />
      </Header>
      <Body>
        <Sider>
          <LeftMenu
            menuList={routers}
            menuTitle="PC Template"
            defaultSubSelected="0"
            defaultSelected="0"
          />
        </Sider>
        <Content>{props.children}</Content>
      </Body>
    </Layout>
  );
};
