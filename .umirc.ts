import { defineConfig } from '@umijs/max';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import routes from './src/configs/routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'sql生成工具',
  },
  routes,
  npmClient: 'pnpm',
  chainWebpack: (memo) => {
    memo.plugin('monaco-editor-webpack-plugin').use(MonacoWebpackPlugin, [
      {
        languages: ['javascript', 'sql', 'json'],
      },
    ]);
    return memo;
  },
});
