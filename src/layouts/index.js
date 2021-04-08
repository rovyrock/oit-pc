// 这里是页面要展示的公共部分的内容
// 给个例子，全部注释掉，因为不确定要引入什么版本的tea

import React from 'react';
import { Layout } from 'tea-component/lib';
import { Icon as SvgIcon } from '@/components/Icon';
import NavHeader from '@/components/header';
import LeftMenu from '@/components/leftMenu';
const { Body, Header, Content, Sider } = Layout;

// 直接在这里写路由列表
const routers = [
  {
    title: (
      <div className="menu-item">
        <SvgIcon type="menu-user" className="menu-item-icon"></SvgIcon>
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
        <SvgIcon type="menu-user" className="menu-item-icon"></SvgIcon>
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
