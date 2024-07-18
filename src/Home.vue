<template>
	<div class="home">
		<div id="searchData">
			<form id="searchForm">
				<input type="search" name="searchData" placeholder="Search for answers" id="searchInput">
				<button type="submit" id="searchButton">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M20 20L15.65 15.65" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
			</form>
		</div>
		<div id="listOfCategory">
			<div class="categoryItem" v-for="item in categories" v-if="item.totalArticle > 0" :key="item.id">
				<div class="itemIcon">
					<img :src="pngs[item.icon]" :alt="item.title" width="50px">
				</div>
				<h2 class="itemTitle">{{ item.title }}</h2>
				<h4 class="itemNoArticle">{{ item.totalArticle }} article{{ item.totalArticle > 1 ? 's' : '' }}</h4>
				<h4 class="itemDate">{{ compareDate(item.updatedOn)}}</h4>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import { convertSvgTo64BaseData } from './utils/utils.js';
export default {
	data() {
		return {
			// data
			msg:'Hello',
			pngs:{
				'play': '/assets/images/play.png',
				'gem':'/assets/images/gem.png',
				'code':'/assets/images/code.png',
				'desktop':'/assets/images/desktop.png',
				'link':'/assets/images/link.png',
				'comment':'/assets/images/comment.png',
				'shopping-cart':'/assets/images/shopping-cart.png'
			},
			categories:[
				{
					"id" : "cat1",
					"title" : "Getting Started",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-11T03:01:52.849Z",
					"updatedOn": "2019-12-11T03:02:10.297Z",
					"enabled": true,
					"order": 1,
					"icon": "play",
					"totalArticle" : 10
				}, {
					"id" : "cat2",
					"title" : "Chat Widget Customization",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-13T11:20:48.057Z",
					"updatedOn": "2019-12-13T11:22:31.745Z",
					"enabled": true,
					"order": 2,
					"icon": "comment",
					"totalArticle" : 10
				}, {
					"id" : "cat3",
					"title" : "Using the Dashboard",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-16T14:10:46.604Z",
					"updatedOn": "2019-12-16T14:11:04.658Z",
					"enabled": true,
					"order": 3,
					"icon": "desktop",
					"totalArticle" : 20
				}, {
					"id" : "cat4",
					"title" : "Integrations",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-16T14:11:01.982Z",
					"updatedOn": "2019-12-16T14:14:29.954Z",
					"enabled": true,
					"order": 5,
					"icon": "link",
					"totalArticle" : 15
				}, {
					"id" : "cat5",
					"title" : "Advanced Features",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-18T09:22:22.661Z",
					"updatedOn": "2019-12-18T09:54:35.029Z",
					"enabled": true,
					"order": 4,
					"icon": "gem",
					"totalArticle" : 5
				}, {
					"id" : "cat6",
					"title" : "Javascript API",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-19T08:18:42.302Z",
					"updatedOn": "2019-12-19T08:19:12.579Z",
					"enabled": false,
					"order": 6,
					"icon": "code",
					"totalArticle" : 0
				}, {
					"id" : "cat7",
					"title" : "E-commerce Integrations",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-19T09:56:05.344Z",
					"updatedOn": "2019-12-19T09:56:48.796Z",
					"enabled": true,
					"order": 7,
					"icon": "shopping-cart",
					"totalArticle" : 5
				}
			]
		}
	},
	methods:{
		compareDate(udpateDate=moment()){
			let diff = moment().diff(udpateDate, 'months');
			if(diff < 12){
				return `Last update ${diff} months ago`
			}else if(diff > 11){
				return `Last update ${parseInt(diff/12)} year${parseInt(diff/12 > 1)?'s':''} and ${diff%12} months ago`
			}
		},
		parseSvg(svgString){
			return convertSvgTo64BaseData(svgString);
		}
	},
	mounted() {
		// mounted
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
	@import 'scss/home.scss';
</style>