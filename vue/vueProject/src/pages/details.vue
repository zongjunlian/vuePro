<template>
	<div class="clearfix detailsBox">
		<div class="detailsBoxCon clearfix">
			<div class="fl leftMenu">
				<p class="text-center">
					<i :class="['iconfont icon-'+geturl]"></i>
				</p>
				<ul>
					<router-link active-class='active' tag="li" :to="{path:'/details/'+item.tag}" :key='index'  v-for="(item,index) in data">
						{{item.name}}
					</router-link>
				</ul>
			</div>
			<div class="fl rightCon">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data:[
					{
						name:'开放产品',
						tag:'horn'
					},
					{
						name:'品牌营销',
						tag:'car'
					},
					{
						name:'使命必达',
						tag:'earth'
					},
					{
						name:'勇攀高峰',
						tag:'mountain'
					}
				],
				url:{
					'/details/horn':'horn',
					'/details/car':'car',
					'/details/earth':'earth',
					'/details/mountain':'mountain',
				}
			};
		},
		computed: {
			geturl() {
				return this.url[this.$route.path]
			}
		},
	}
</script>

<style scoped lang="scss">
	$green:#86c586;
	$gray:#fafafa;
	$red:#F56C6C;
	$blue:#409EFF;
	$orange:#E6A23C;
	.active{
		color: $blue;
	}
	.detailsBox{
		.detailsBoxCon{
			width:1200px;
			margin: 0 auto;
		}
		background:$gray ;
		padding: 10px 0;
		.leftMenu{
			background: #fff;
			width:250px;
			padding: 0 10px;
			.iconfont {
				font-size: 100px;
			}
			
			.icon-horn {
				color: $orange;
			}
			
			.icon-car {
				color: $red;
			}
			
			.icon-earth {
				color: $blue;
			}
			
			.icon-mountain {
				color: $green;
			}
			ul>li{
				line-height: 28px;
				font-size: 16px;
				cursor: pointer;
			}
		}
		.rightCon{
			width: 930px;
		}
	}
	
</style>
