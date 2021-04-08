import React, { useState, useEffect } from 'react';
import { Tabs, TabPanel, Layout } from 'tea-component';
import {
  HashRouter as Router,
  Route,
  Link,
  useRouteMatch,
  Switch,
  Redirect,
  useParams,
} from 'react-router-dom';
import TabAndroid from './Andriod';
import TabIos from './Ios';
import TabWindows from './Windows';

const tabs = [
  { id: 'android', label: '基本信息' },
  { id: 'ios', label: '弹性网卡' },
  { id: 'windows', label: '监控信息' },
];
const { Body, Header, Content } = Layout;
export default function App() {
  let { topicId } = useParams();
  const routePath = '/Component/demo/framework/fixheadertab';
  const [activeId, setActiveId] = useState(topicId || 'android');

  useEffect(() => {
    if (topicId !== activeId) {
      setActiveId(topicId);
    }
  }, [topicId]);

  return (
    <Router>
      <Layout>
        <Body>
          <Content className="oit-layout--fixtabs">
            <Content.Header title="标题+Tabs选项卡置顶 (oit-layout--fixtabs)">
              <Tabs
                tabs={tabs}
                activeId={activeId}
                tabBarRender={(children, tab) => (
                  <Link to={`${routePath}/${tab.id}`}>{children}</Link>
                )}
              ></Tabs>
            </Content.Header>
            <Content.Body full>
              <Switch>
                <Route path={`${routePath}/:topicId`}>
                  <TabContainer tabs={tabs} />
                </Route>
              </Switch>
            </Content.Body>
          </Content>
        </Body>
      </Layout>

      {/* </Route> */}
      <Redirect to={`${routePath}/android`} />
    </Router>
  );
}

// tab内容
function TabContainer(props: any) {
  const { tabs } = props;
  let { path, url } = useRouteMatch();
  let { topicId } = useParams();
  return (
    <>
      {tabs.map((tab: any) => {
        return (
          tab.id === topicId && (
            <TabPanel key={tab.id} id={tab.id} style={{ padding: 0 }}>
              {tab.id === 'android' ? (
                <TabAndroid />
              ) : tab.id === 'ios' ? (
                <TabIos />
              ) : (
                <TabWindows />
              )}
            </TabPanel>
          )
        );
      })}
    </>
  );
}
