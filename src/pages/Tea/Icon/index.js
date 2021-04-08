import React from 'react';
import { Icon, Bubble, Card, Layout, Form } from 'tea-component';
const { Content, Body } = Layout;

import { Icon as SvgIcon } from '@/components/Icon';

// 暂无 SVG：'records', 'sales', 'shutdown', 'running', 'deploy', 'links', 'client', 'alarm', 'try', 'new', 'favorable'
// prettier-ignore
const iconTypes = [
    "close", "dismiss", "delete", "shopcart", "more", "folderclose", "folderopen", "notice",
    "guide", "consult", "realname", /*"realnamev", */"show", "hide", "success",
    "warning", "loading", "error", "sort", "sortup", "sortdown", "btnback", "plus", "minus", "setting",
    "pencil", "copy", "remind", "phone", /*"phonev", "phone-warning", "phone-error",*/ "wechat", /*"wechatv",
    "wechat-warning", "wechat-error",*/ "email", /*"emailv", "email-warning", "email-error",*/ "qq",
    "viewgrid", "viewlist", "monitor", "download", "filter", "convertip--blue", "convertip",
    "info", "arrowup", "arrowdown", "arrowleft", "arrowright", "externallink", "refresh", "refresh-blue",
    "fullscreen", "fullscreenquit", "trenddown", "trendup", "drop", "news", "help", "pending-gray", "pending",
    "infoblue", "lastpage", "firstpage", "search", "transfer", "cur", "cur-active", "fold", "check",
    "not", "and", "detail", "qrcode", "database", "datasheet", "daily",
    "chart-pie", "chart-pie-hover", "chart-line", "chart-line-hover", "chart-column", "chart-column-hover",
    "table", "table-hover", "relationship", "relationship-hover", "multi-line", "percent", "percent-blue", "tag"
];

const smallIconTypes = ['close', 'dismiss', 'check'];

const largeIconTypes = ['warning', 'error', 'pending', 'infoblue', 'success'];

const addIconTypes = ['switch'];
const menuIcons = [
  'menu-user',
  'menu-config',
  'menu-rule',
  'menu-effective',
  'menu-customize',
  'menu-props',
  'menu-sensitive',
  'menu-punish',
  'menu-dataservice',
  'menu-datamanage',
];
const pimpMenuIcons = [
  'menu-user',
  'menu-pimp-props',
  'menu-pimp-customize',
  'menu-pimp-sensitive',
  'menu-pimp-punish',
];
const gdosMenuIcons = [
  'menu-gdos-summary',
  'menu-gdos-interfaceList',
  'menu-gdos-interfaceAuth',
  'menu-gdos-interfaceTpl',
  'menu-gdos-deployment',
  'menu-gdos-document',
  'menu-gdos-docManage',
  'menu-gdos-interfaceInstruction',
];
const apasMenuIcons = [
  'menu-apas-core',
  'menu-apas-performance',
  'menu-apas-network',
  'menu-apas-hardware',
  'menu-apas-funnel',
  'menu-apas-monitor',
  'menu-apas-manage',
  'menu-apas-wiki',
];

export default function IconExample() {
  return (
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="表单 Form" />
          <Content.Body full>
            <Card>
              <Card.Body title="16x16图标">
                <section>
                  {iconTypes.map((type) => (
                    <Bubble key={type} content={`<Icon type="${type}" />`}>
                      <Icon
                        type={type}
                        style={{ margin: '0 10px 10px 0', cursor: 'pointer' }}
                      />
                    </Bubble>
                  ))}
                </section>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body title="16x16图标（small）">
                <section>
                  {smallIconTypes.map((type) => (
                    <Bubble
                      key={type}
                      content={`<Icon type="${type}" size="s" />`}
                    >
                      <Icon
                        type={type}
                        size="s"
                        style={{ margin: '0 10px 10px 0', cursor: 'pointer' }}
                      />
                    </Bubble>
                  ))}
                </section>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body title="32x32 图标">
                <section>
                  {largeIconTypes.map((type) => (
                    <Bubble
                      key={type}
                      content={`<Icon type="${type}" size="l" />`}
                    >
                      <Icon
                        type={type}
                        size="l"
                        style={{ margin: '0 10px 10px 0', cursor: 'pointer' }}
                      />
                    </Bubble>
                  ))}
                </section>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body title="新增 图标">
                <section>
                  {addIconTypes.map((type) => (
                    <Bubble key={type} content={`<Icon type="${type}" />`}>
                      <Icon
                        type={type}
                        style={{ margin: '0 10px 10px 0', cursor: 'pointer' }}
                      />
                    </Bubble>
                  ))}
                </section>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body title="左侧菜单 图标">
                <Form>
                  <Form.Item label="海外玩家系统">
                    <Form.Text>
                      {pimpMenuIcons.map((type) => (
                        <SvgIcon
                          key={type}
                          type={type}
                          bubble={`<SvgIcon type="${type}" />`}
                          style={{ margin: '0 10px 10px 0', cursor: 'pointer' }}
                        />
                      ))}
                    </Form.Text>
                  </Form.Item>

                  <Form.Item label="GDOS服务端">
                    <Form.Text>
                      {gdosMenuIcons.map((type) => (
                        <SvgIcon
                          key={type}
                          type={type}
                          bubble={`<SvgIcon type="${type}" />`}
                          style={{ margin: '0 10px 10px 0', cursor: 'pointer' }}
                        />
                      ))}
                    </Form.Text>
                  </Form.Item>

                  <Form.Item label="APAS">
                    <Form.Text>
                      {apasMenuIcons.map((type) => (
                        <SvgIcon
                          key={type}
                          type={type}
                          bubble={`<SvgIcon type="${type}" />`}
                          style={{ margin: '0 10px 10px 0', cursor: 'pointer' }}
                        />
                      ))}
                    </Form.Text>
                  </Form.Item>
                </Form>
              </Card.Body>
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
}
