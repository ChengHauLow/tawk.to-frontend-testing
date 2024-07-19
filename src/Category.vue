<template>
	<div class="category">
		<div id="cat-searchData">
			<form id="cat-searchForm">
				<input type="search" name="searchData" placeholder="Search for answers" id="cat-searchInput">
				<button type="submit" id="cat-searchButton">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M20 20L15.65 15.65" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
			</form>
		</div>
		<div id="categoryDetails">
			<div class="allViews">
				<a href="/#/">All categories</a> <span class="seperate"><img src="/assets/images/Next Icon.png" alt=""></span> <span class="currentView">{{ currentCategory[0].title }}</span>
			</div>
		</div>
	</div>
</template>

<script>
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
			categoryArticles: [],
			currentCategory: []
		}
	},
	methods:{
		async getCategory(id){
			try {
				let res = await fetch('/api/category/'+id);
				if(res.ok){
					this.categoryArticles = await res.json();
					console.log(this.categoryArticles);
				}else{
					this.categoryArticles = [];
				}
			} catch (error) {
				console.error(error);
				this.categoryArticles = [];
			}
		},
		async getAllCategories(id){
			try {
				let res = await fetch('/api/categories');
				if(res.ok){
					let allCategories = await res.json();
					if(allCategories.length > 0){
						this.currentCategory = allCategories.filter(category=> category.id == id);
						console.log(this.currentCategory);
					}
				}else{
					this.currentCategory = [];
				}
			} catch (error) {
				console.error(error);
				this.currentCategory = [];
			}
		},
		compareDate(udpateDate=moment()){
			let diff = moment().diff(udpateDate, 'months');
			if(diff < 12){
				return `Last update ${diff} months ago`
			}else if(diff > 11){
				return `Last update ${parseInt(diff/12)} year${parseInt(diff/12 > 1)?'s':''} and ${diff%12} months ago`
			}
		},
	},
	created() {
		// Change categories order
		// this.categoryArticles = this.categoryArticles.sort((a, b) => a.order - b.order);
		this.getCategory(this.$route.params.id);
		this.getAllCategories(this.$route.params.id);
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
	@import 'scss/category.scss';
</style>