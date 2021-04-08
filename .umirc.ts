import { defineConfig } from 'umi';
const path = require('path');

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // base: '/',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  qiankun: {
    slave: {},
  },
  dva: {
    // hmr: true,
  },
  // 页面标题
  title: 'OIT PC Template',
  // 不引入antd，包括样式
  antd: false,
  chainWebpack(config, { webpack }) {},
});
