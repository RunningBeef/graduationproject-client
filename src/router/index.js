import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

// import store from '../store/index.js'

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/testView'),
    meta: {
      title: '测试|高考志愿推荐系统'
    }
  },
  {
    path:'/collect',
    name: 'collect',
    component: () => import('../views/collectPreferenceView'),
    meta: {
      title: '信息填写|高考志愿推荐系统'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: '登录|高考志愿推荐系统'
    }
  },
  {
    path: '/home',
    component: () => import('../views/HomeView.vue'),
    children: [{
        path: '',
        redirect: '/home/school'
      },
      {
        path: 'school',
        name: 'school',
        component: () => import('../views/SchoolView.vue'),
        meta: {
          need2Login: 1,
          title: '学校查询|高考志愿推荐系统'
        }
      },
      {
        path: 'special',
        name: 'special',
        component: () => import('../views/SpecialView.vue'),
        meta: {
          need2Login: 1,
          title: '专业查询|高考志愿推荐系统'
        }
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('../views/RecommendView.vue'),
        meta: {
          need2Login: 1,
          title: '报考推荐|高考志愿推荐系统'
        }
      },
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/SchoolDetailView.vue'),
    meta: {
      title: '学校详情|高考志愿推荐系统'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  //mode: 'history',
  routes
})


router.beforeEach((to, from, next) => { //全局钩子函数
  to.meta.title && (document.title = to.meta.title);
  if (to.path === '/login') {
    next();
  } else {
    // if(localStorage.getItem('ms_username') === null){
    //   alert("请登录！")
    //   next('/login');
    // }else{
    //   // next('/login');
    //   next();
    // }
    next();
  }
});

export default router