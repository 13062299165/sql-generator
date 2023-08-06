export default [
  {
    path: '/',
    redirect: '/index',
  },
  {
    name: 'sql生成',
    path: '/index',
    component: './index',
  },
  {
    name: '表大全',
    path: '/table',
    component: './table',
  },
  {
    name: '字段大全',
    path: '/field',
    component: './field',
  },
  {
    name: '词库大全',
    path: '/dict',
    component: './dict',
    routes: [
      {
        path: '/dict/add',
        component: './dict/add',
      },
      {
        path: '/dict/result',
        component: './dict/result',
      },
    ],
  },
  {
    name: '管理',
    path: '/admin',
    routes: [
      {
        name: '用户管理',
        path: '/admin/user',
        component: './admin/user',
      },
      {
        name: '词库管理',
        path: '/admin/dict',
        component: './admin/dict',
      },
      {
        name: '字段管理',
        path: '/admin/field',
        component: './admin/field',
      },
      {
        name: '表管理',
        path: '/admin/table',
        component: './admin/table',
      },
      {
        name: '举报管理',
        path: '/admin/report',
        component: './admin/report',
      },
    ],
  },
];
