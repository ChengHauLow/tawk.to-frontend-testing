import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Category from './Category.vue'
import SearchResult from './SearchResult.vue'

Vue.use(VueRouter)

const router = new VueRouter({ routes:[
	{
		path: '/',
		component: Home,
	},
	{
		path: '/category',
		component: Category,
	},
	{
		path: '/category/:id',
		component: Category,
	},
	{
		path: '/search',
		component: SearchResult,
	},
	{
		path: '/search/:text',
		component: SearchResult,
	},
] })

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});