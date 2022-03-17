import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Main from '../views/Main.vue';
import Home from '../views/Home.vue';
import StrategyCenter from '../views/StrategyCenter.vue';
import Match from '../views/Match.vue';
import IpGame from '../views/IpGame.vue';
import News from '../views/News.vue';
import NewsList from '../views/NewsList.vue';
import HeroList from '../views/HeroList.vue';
import Video from '../views/Video.vue';
import HeroDetail from '../views/HeroDetail.vue';
import HeroSkin from '../views/HeroSkin.vue';
import HeroStrategy from '../views/HeroStrategy.vue';
import HeroDetailPic from '../views/HeroDetailPic.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Main,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'strategyCenter', component: StrategyCenter },
      { path: 'match', component: Match },
      { path: 'ipgame', component: IpGame },
      { path: 'news/:id', component: News, props: true },
      { path: 'newsList', component: NewsList },
      { path: 'heroList', component: HeroList },
      { path: 'video/:id', component: Video, props: true },
    ],
  },
  { path: '/heroList', component: HeroList },
  {
    path: '/heroStrategy',
    component: HeroStrategy,
    children: [
      { path: 'detail', component: HeroDetail },
      { path: 'skin', component: HeroSkin },
      { path: 'pic', component: HeroDetailPic },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
