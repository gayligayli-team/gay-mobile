import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

import Demo from '@/view/demo';
// 懒加载
// const Demo = resolve => require(["@/view/demo"], resolve);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/demo',
		},
		{
			path: '/demo',
			name: 'demo',
			component: Demo,
		},
	]
});

router.beforeEach((to, from, next)=>{
	next();
});

export default router;
