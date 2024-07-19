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
		<div id="listOfCategory" v-if="categories.length > 0">
			<div class="categoryItem" v-for="item in categories" v-if="item.totalArticle > 0" :key="item.id">
				<a :href="`/#/category/${item.id}`">
					<div class="itemIcon">
						<img :src="pngs[item.icon]" :alt="item.title" width="50px">
					</div>
					<h2 class="itemTitle">{{ item.title }}</h2>
	
					<div class="itemMeta">
						<span class="itemNoArticle">{{ item.totalArticle }} article{{ item.totalArticle > 1 ? 's' : '' }}</span>
						<span class="itemDate">{{ compareDate(item.updatedOn)}}</span>
					</div>
				</a>
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
			categories: []
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
		async getAllCategories(){
			try {
				let res = await fetch('/api/categories');
				if(res.ok){
					this.categories = await res.json();
				}else{
					this.categories = [];
				}
			} catch (error) {
				console.error(error);
				this.categories = [];
			}
		}
	},
	mounted() {
		// Change categories order
		this.categories = this.categories.sort((a, b) => a.order - b.order);
		this.getAllCategories();
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
	@import 'scss/home.scss';
</style>