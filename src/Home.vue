<template>
	<div class="home">
		<div id="searchData">
			<form id="searchForm">
				<input type="search" name="searchData" placeholder="Search for answers" id="searchInput">
				<button type="submit" id="searchButton"><svg class="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"></path></svg></button>
			</form>
		</div>
		<div id="listOfCategory">
			<div class="categoryItem" v-for="item in categories" v-if="item.totalArticle > 0" :key="item.id">
				<div class="itemIcon">
					<img :src="item.icon" :alt="item.title" width="50px">
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
export default {
	data() {
		return {
			// data
			msg:'Hello',
			categories:[
				{
					"id" : "cat1",
					"title" : "Getting Started",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-11T03:01:52.849Z",
					"updatedOn": "2019-12-11T03:02:10.297Z",
					"enabled": true,
					"order": 1,
					"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEtklEQVR4nO2bTWwbRRTHp6FQPotoSO2djzWJDKrjBBCRKqiEIqECJm/cJN1ZihrEAQkjSqUce0yPvfbYa4+5VgRQvbUoFQIBQnyISlRFfAQEKi1taQOU7g4ae21vN042aXFiz/CkkTxe79ff834z780MQhGjBC4zAlepxSeQicYIl42C+XuUwnZkkrHw5SmBX8LPASV81rZhAJkkQF+fey8jcJBhWKgKguFvivmRdLrQh3Q04XvHJ6X3WF2A+veEFKh6cUbgeugW520CB7LZwiakk4nAk47v+XEB6sZYMc8wf6vJCPieEXgFIbQB6SKACLwGAB3fO+jKD+6K/87GsJNh+DwCyo+YBU8j3QQQtRYx78oTpRk503Pjr2d61L9PMf85As1jlBazSCcBRFgcv/yJK0+Mxs9JpZ69R/GAVccOCpT8muJFKjW5FekkgKgX3zvmysqif5mxXTgKSorhdyVMJjN6J9JKgKDaGq45fvmIK08u6g4z6bGccoUIKH+wCZSUyyBdBBBNIS44snygIOc2tQQl4Z81+IDhY0r5IhfqagFEU4gzQnoukjLWHc702ARcSvh3TVDy45TCENJJANHgQ/lDR3o74te1LH634gEl/FJ47X8UL/q3FlNIKwGCqgiB8L1ZV77bH7++ZfEHKYbDSoCQD3+ooTal7qKxxrqYCF9icLIkB3e/fnMCNN1iQfjeoSk5tzl+n4zFt6ngKjKQ+rEGSvc2tJ4mbuGFlxHinCvL06OysjF+P5sUn6EEPo2A8itCYEwrAUTTNU7vluVii9tuqIESvo2CkpDio+smQH7PvmppjxC1iDN+78FB9w5GYJpifjHkg08xHLXt5601F2D45f3V0q7WoCJOxy8fdWUlHX8GjCd6KeaHVO4hbBFXVL23d9d9ayaAWKPi+N6VpSJOjF94JARlEPLhp7aDUoQPlhsvVXuCNRRiiYhTJWOKT1ICpyJ8+Foxo3PHAcGtCNE64myAEvOzUVBiPPa4VgKIhIhTgVK5ASNwrgFKwmcfSo9l9BIgWD7ipPS5LTVQ8r9CIa6qenZLYbM2AogVRJyWxW3VVdZBWWsZMI3Q6EZtBBCJEadqEbCdEn4ykpo7fVOgFB0sQFLEqYxhXmQYzkSG1p5t8Sf0EiBYPuIcGRm5XYGSEvj1hlmtVLFfHwGC5IjTtuGBEJR/Nme14PDAwM77tRFArCDixHichcnacMIHfltyVkt0qQAriDhbgfKU6QK8r40Ajqku4BgLQd/kbtA3dCDkmDoUdjohGMonJEkTj7/4xqrP76hweDghSZp0XAmwqvNNTYg4pqbEnE5PiuZjPppYj/l8vJ6bKFXrHZsWZwkMUJ/VSy13PFqPM2B4an+wrfDqfMdOjLB2ukA3TI2xdgjQTZOj7D9kgIrUsk/t/YZS7sXvZ3fq9DhbAQOS6kN737xej9TUmJxhmOuaBRLM9CUy7P9FUnxVDMiNlxYGRl76QttlcsMtfFwNZuqRGmO8EvVx7RdKOkYvlfUNXCyd37NP5vhrl41cLu/43vzDO6a+ZATeNm7DhGPilhnH6E1TfvmdSVkZMnbbXN2M3ThZtwjUzN46y0zdPE2JysqYtX3+X5MvU4kuUXPwAAAAAElFTkSuQmCC",
					"totalArticle" : 10
				}, {
					"id" : "cat2",
					"title" : "Chat Widget Customization",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-13T11:20:48.057Z",
					"updatedOn": "2019-12-13T11:22:31.745Z",
					"enabled": true,
					"order": 2,
					"icon": "data:image/png;base64,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",
					"totalArticle" : 10
				}, {
					"id" : "cat3",
					"title" : "Using the Dashboard",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-16T14:10:46.604Z",
					"updatedOn": "2019-12-16T14:11:04.658Z",
					"enabled": true,
					"order": 3,
					"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVR4nO2aUUoDMRCG58kzuJmk+twjiF6gGVCLnsGDWLFeSCvoi0U8iYL1DhvJtllBxV1ba7rJ/8HAFrLszN/JbDIbIgBA1vT7p1uG5UoreTEsLgfTyj5rJWMfO/mL2A7FE0LG5NXwP3pqsEeZYArZD5lAQQ3KjDpu80kAzfKYbMqznTYKYDbA0XVaawEoMSAAIwMcpgCjBriViuBJee+6aiEufw0BCBlAmAKMGuBQBBlvAYfXoME6QLAQMlgJCpbChL3AHGyGGLtBh+0wox/g6BtiNzXQECnREXJoiZXoCTo0RUt0hR3a4uWavwuYRK1RAM12GtvJdVl/eNYswE/EXs39lS0tQEp8EcBkahTbgdhG9UVmbIQAmu2dt2wFMMpee4vy7BC3XhyV9cdHKRNMYQ/qo7I668PS9rI6Lu9FqDMht+Py/wHzYFg9XMlN01ijZFI5qe0xpYJWclEFxXbUOJbtqO3YzqDZ3rb9V/2YRbZMKBUMy8wHpdShaRpbFNKbz1X7Rimwuz3Y+W1AQTAvBnUd/kUBDPixyRRCvSiAhu1563tSKoQ6FMBCjlrf81EIW2fNxqLZvq6waJlR19EsD0sLoOxTbP8BJc476AWkbfeHbzQAAAAASUVORK5CYII=",
					"totalArticle" : 20
				}, {
					"id" : "cat4",
					"title" : "Integrations",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-16T14:11:01.982Z",
					"updatedOn": "2019-12-16T14:14:29.954Z",
					"enabled": true,
					"order": 5,
					"icon": "data:image/png;base64,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",
					"totalArticle" : 15
				}, {
					"id" : "cat5",
					"title" : "Advanced Features",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-18T09:22:22.661Z",
					"updatedOn": "2019-12-18T09:54:35.029Z",
					"enabled": true,
					"order": 4,
					"icon": "data:image/png;base64,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",
					"totalArticle" : 5
				}, {
					"id" : "cat6",
					"title" : "Javascript API",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-19T08:18:42.302Z",
					"updatedOn": "2019-12-19T08:19:12.579Z",
					"enabled": false,
					"order": 6,
					"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuklEQVR4nO2ZUW6EIBCGOYcDF+hV8Klyh95wn+RlbY9lbTCRKHUVhNYB5k8m2Vnyu+TbcZxlGSORSCQSqV5xaL8EtFONwUEO7O5N3B3MvshMsfsmAFBYBXCQnxxkv8r7o7w8AI3UopEPu97Ih5sbSMUCCBUBAKcCRKXB7t7A3cHsi8pEAIAqYKJbAKgHTC+b4Ppn8vyzcef9s/U7fdFNkIMcNo8Lx/jrcYLMFw3ASI29pduNeqa75Opbz+GuY/ElAdCN2tI1H360oWUdiy8JAKOjDe3lWHxnIgAQWQHCCd9v8r98ySqAgxze3j/shd2ua2K9jsWXDIDR0oDc3I1lHYsvGYBu1IMa9XOTuxtarWPxJQPAM5n+znyXAYhMpr8zXzQAhXz68/ElBaCQTX8+vmgADPH05+sjACxRE1TIpj9fXzAAnsn05+sLBpDT9OfrCwbQZTL9+foCb4G2uPPBqB7AnIu4gc0XDaDE88FLPUAUdD4YDMDoaEN7ORbfnggAJKwAgWzS+7MK4AWdD14CkNOk9+r9aABdIeeDlwGUIgIAVAHT5haoNdjeo6WW4NB6/YlCIpFIJBIrUz9YAGp/QCQeMgAAAABJRU5ErkJggg==",
					"totalArticle" : 0
				}, {
					"id" : "cat7",
					"title" : "E-commerce Integrations",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis massa ac augue tristique sagittis.",
					"createdOn": "2019-12-19T09:56:05.344Z",
					"updatedOn": "2019-12-19T09:56:48.796Z",
					"enabled": true,
					"order": 7,
					"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEdElEQVR4nO1bXWgcVRS++FKoIMWXZu+5d7bWJpW0CXmwCq3WKBjXPWe3+WlA0tj6IFhTlWL8ezHxDzE+6Esivgj1QSom1h9IgtJtadNCH9oH8anpi4iCIgGTolhtu3LvzMY4O7ObmZ1kZnbng/Mw58zeM/PtPd89927CWIIECRIkSNC4EEDnJVBxpQlOfwmOBaMp38rqHQJwzk7Af0Tgz6kUbWSNhnR63yYBeMki4THWiJBAr5gzAcdZI0IIekDPAKCLrBGRStFGCfSPss2bH76VNSKEpQP1agLobEUCVP3XNwH4a0UCALKD1o1frvT33Tj5yf6bhWLzfYN6IJqfLKpru5USrbdfGV6e1LGW+x8viz00/aH5WU6zlWeAzNzpxNT+4qkhNVBr72E9UNe5Y5EjoGvumI7t6DtcFrv3nTesz+Kbq9GBX9TNhoFbl2dA8WS7GqhjaFgP1Pn5ROQI6Jwa17GOI8NlsZ0Dz5glkKLuVRBAX+mbBR4o+UaLo7f03Sgs7HptRA+0e2IscgTsHh/TsXteHymLbW3v1zHO98mqBBiC3g9brNbEOP7JVgMpc4fqcgXg9ENNDVFvsbBXiZ8aTIlh1EqgtfcpHes6/7F/ASxheWMksntLvkxxZgNenrym/Go5jBoBzXvMJRqvTPkXQHtDZAC+vOxkjHUvTF9Q/vS27sgRsKW5R8d6lmb/L4Bt/TdXLYDVG6LC2JYWK9HibGQI6Fmc0X71bCv9+R+/KE3/35gXSKshqhvj9D3zCgH4d92sAIBf+yCAyhoihbYnnvvdrRsMqwTcusCdA0e8C2C1E6L2J49+59YNhkWAWxfoSwCrnRC1HXz2uPKrtjgqBOwaNVv0PR+8W7sAVmuIWroOHdXTbWg4MgR0PP289neemPC+Ba4EybM/hS1gAdhHzC8E4LkIvEBNJji94J8AgQfsDdG22zO3uXWDYZWAUxd4x47+674FsNoJkSFzfzh1g2EQ4NQF1iyA1U6IJKd5p7PBMAhwOgsMRAArNUSS0xmns8EwCHA6C/S1BXaDwXPvhS1kfg2asoOsVkjAg2G/iF8T4tG2mglIOTREgtOLKsHdI69eD7sE7F1goALodkJUWh4l0HHb/kEnX+lba78A/NR8NhpQ1wDUF5gAup0QAWQftJKcCZ8AOqvrHbBTX3N6OzABdGuI0im6yyJgPmwCJMcrysd5frt+VsBvfG+B3aB6gLAFzavV1AHaoQYTQLE5IRKA37IgITlOWVN+GiAjWKNBAi6ZQtOAL6+QEMDphFkCOBOouMQFnOe3S04LMRHAuTUhASAjBNBnAmgx1n8IFQQkp5xOxvGaSOFLUua5MtUpKp+KGTxHccnjGZLTaacfTxWUz3roQlzyeIYEvKofzHgkZY+l09kmczriUlzy+H4wNR3tMSEQrFpcjEsez5CcTrlNzdJPagGVwLrk8QwlPCVx0rXoJE6Qxbjk8QUB+Jb7chTcXny98vj+htQUNGsVr+p/u1mDb2S98iRIkCABq3f8CxZGJsY6sZUBAAAAAElFTkSuQmCC",
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