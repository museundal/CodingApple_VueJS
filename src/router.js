import { createWebHistory, createRouter } from "vue-router";
import List  from './components/List.vue';
import Home  from './components/Home.vue';
import Detail  from './components/Detail.vue';
import Author  from './components/Author.vue';
import Comment  from './components/Comment.vue';
// 경로가 아닌 라이브러리명을 입력하면 라이브러리를 제공하는 함수,변수들을 사용할 수 있다.

const routes = [
  {
    path: "/",
    component: Home,
  },
  { 
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id", // :작명
    component: Detail,
    children: [
      { 
        path: "author",
        component: Author,
      },
      { 
        path: "comment",
        component: Comment,
      }
    ]
  } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 