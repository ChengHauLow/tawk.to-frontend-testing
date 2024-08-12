<template>
	<div class="category">
		<div id="cat-searchData">
			<form id="cat-searchForm" @submit="handleCatSubmit">
				<input type="search" name="searchData" v-model="searchData" placeholder="Search for answers" id="cat-searchInput">
				<button type="submit" id="cat-searchButton">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M20 20L15.65 15.65" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
			</form>
		</div>
		<div id="categoryDetails">
			<div class="catetgoryDetail">
				<div class="allViews">
					<a href="/#/">All categories</a> <span class="seperate"><img src="/assets/images/Next Icon.png" alt=""></span> <span class="currentView">Search Results</span>
				</div>
			</div>
			<div class="categoryArticles" v-if="categoryArticles.length >= 1 && searchData != ''">
				<h2 class="searchTitle">Showing results for "<span class="searchText">{{ searchData }}</span>"</h2>
				<div class="articleItem" v-for="article in categoryArticles" :key="article.id" @click="getDetail(article)">
					<div class="itemIcon">
						<img src="/assets/images/file-text.png" :alt="article.title" width="16px" height="19.9px">
					</div>
					<div class="itemMeta">
						<h2 class="itemTitle">{{ article.title }}</h2>
						<span class="itemDate">{{ compareDate(article.updatedOn)}}</span>
					</div>
					<div class="arrow"><img src="/assets/images/Detailicon.png" alt="next" width="8.44px" height="16.79px"></div>
				</div>
			</div>
			<div class="noResult" v-else>
				<img src="/assets/images/empty-search.svg" alt="no result" width="317px">
				<p class="noResultText">
					No search results
				</p>
				<p class="noResultText small">
					Please, try again or <span class="submitTicket">Submit a ticket</span>
				</p>
			</div>
		</div>
		
		<div class="modal" v-if="modalStatus">
			<div class="overlay" @click="closeModal"></div>
			<div class="contentWrap">
				<span class="closeBtn" @click="closeModal">&times;</span>
				<h2 class="title">{{ article.title }}</h2>
				<h5 class="author">Author: {{ article.name }}</h5>
				<h5 class="lastUpdate">{{ article.lastUpdate }}</h5>
				<p class="content">{{ article.content }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { setStore } from './utils/utils';
import moment from 'moment';
import CategoryItem from './components/CategoryItem.vue';

export default {
	components:{
		CategoryItem
	},
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
			currentCategory: [],
			searchData:'',
			allCats:[],
			slides:[],
			total:0,
			modalStatus:false,
			start:0,
			end:3,
			addSlide: false,
			minusSlide: true,
			article:{}
		}
	},
	methods:{
		async getCategory(id){
			try {
				let res = await fetch('/api/category/'+id);
				if(res.ok){
					let allArticles = await res.json();
					this.categoryArticles = allArticles.filter(article=> article.status == 'published');
					console.log(this.categoryArticles);
				}else{
					this.categoryArticles = [];
				}
			} catch (error) {
				console.error(error);
				this.categoryArticles = [];
			}
		},
		async getResult(text){
			let res = await fetch(`/api/search/${text}`)
			if(res.ok){
				let data = await res.json();
				this.categoryArticles = data
			}
		},
		async handleCatSubmit(e){
			e.preventDefault();
			console.log(this.searchData, 'this.searchData')
			await getResult(this.searchData)
		},
		async getAllCategories(id){
			try {
				let res = await fetch('/api/categories');
				if(res.ok){
					let allCategories = await res.json();
					if(allCategories.length > 0){
						this.allCats = allCategories.filter(category=>category.id != id && category.enabled);
						this.total = this.allCats.length;
						this.slides = this.getSlide(this.allCats)
						console.log(this.slides, 'slides')
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
				return `Last update: ${diff} months ago`
			}else if(diff > 11){
				return `Last update: ${parseInt(diff/12)} year${parseInt(diff/12 > 1)?'s':''} and ${diff%12} months ago`
			}
		},
		async getDetail(item){
			let res = await fetch(`/api/author/${item.authorId}`)
			if(res.ok){
				let authorData = await res.json()
				this.article = {
					name: authorData.name,
					lastUpdate:this.compareDate(item.updatedOn),
					content: item.content,
					title: item.title
				};
				console.log(this.article)
				this.modalStatus = true;
			}else{
				return
			}
		},
		closeModal(){
			this.modalStatus = false;
			this.article = {}
		},
		getSlide(list = [], start=0, end=3){
			let showList = list.slice(start, start+end);
			return showList;
		},
		getNext(){
			if(this.start + this.end < this.total){
				this.start += 1;
			}
			this.addSlide = this.start + this.end >= this.total;
			this.minusSlide = this.start == 0
			this.slides = this.getSlide(this.allCats, this.start, this.end);
		},
		getPrev(){
			if(this.start > 0){
				this.start -= 1;
			}
			this.addSlide = this.start + this.end >= this.total;
			this.minusSlide = this.start == 0
			this.slides = this.getSlide(this.allCats, this.start, this.end);
		}
	},
	created() {
		// Get result from params
		if(this.$route.params.text != undefined){
			this.searchData = this.$route.params.text
			this.getResult(this.searchData)
		}
	},
	mounted(){
		const observe = new ResizeObserver((entries)=>{
			if(entries[0].borderBoxSize[0].inlineSize > 1031){
				this.end = 3
				this.slides = this.getSlide(this.allCats, this.start, this.end)
			}	
			if(entries[0].borderBoxSize[0].inlineSize <= 1031){
				this.end = 2
				this.slides = this.getSlide(this.allCats, this.start, this.end)
			}	
			if(entries[0].borderBoxSize[0].inlineSize <= 675){
				this.end = 1
				this.slides = this.getSlide(this.allCats, this.start, this.end)
			}	
		})
		observe.observe(document.querySelector('.category'))
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
	@import 'scss/search.scss';
</style>