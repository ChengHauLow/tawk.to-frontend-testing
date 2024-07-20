<template>
	<div class="categoryItem" v-if="catitem.totalArticle > 0" :key="catitem.id">
		<a :href="`/#/category/${catitem.id}`" :target="'__blank'+catitem.id">
			<div class="itemIcon">
				<img :src="pngs[catitem.icon]" :alt="catitem.title" width="50px">
			</div>
			<h2 class="itemTitle">{{ catitem.title }}</h2>

			<div class="itemMeta">
				<span class="itemNoArticle">{{ catitem.totalArticle }} article{{ catitem.totalArticle > 1 ? 's' : '' }}</span>
				<span class="itemDate">{{ compareDate(catitem.updatedOn)}}</span>
			</div>
		</a>
	</div>
</template>

<script>
import moment from 'moment';
export default {
	props:{
		catitem:Object,
		pngs: Object
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
	}
}
</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';
	@import '../scss/_mixin.scss';

	.categoryItem{
		max-width: 315px;
		width: 100%;
		overflow-x: visible;
		a{
			border: 1px solid #EEEEEE;
			border-radius: 4px;
			width: 100%;
			text-decoration: none;
			color: $text-black;
			max-width: 100%;
			background: #ffffff;
			height: 100%;
			padding: 15px 0;
			min-height: 220px;
			@include flexBox-all-center-vertical;
			.itemIcon{
				img{
					width: 50px;
				}
			}
			.itemTitle{
				font-size: 1rem;
				text-align: center;
				margin: 20px 0;
				color: $text-black;
			}
			.itemMeta{
				width: 100%;
				font-size: 13px;
				@include flexBox-all-center-vertical;
				.itemNoArticle{
					font-weight: bold;
					color: $green;
				}
				.itemDate{
					color: $text-gray;
				}
			}
			.moreInfo{
				width: 100%;
				margin: 15px 0;
				@include flexBox-all-center-vertical;
				.infoText{
					width: 100%;
					padding: 10px;
					text-align: center;
				}
			}
		}
	}
	@media screen and (max-width: 300px) {
		.categoryItem{
			.itemMeta{
				font-size: 10px;
			}
			.itemTitle{
				font-size: 0.9rem;
			}
		}
	}
</style>