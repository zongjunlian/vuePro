<template>
	<div class="layoutBox">
		<div class="layout clearfix">
			<div class="leftBox fl">
				<div class="section">
					<h4 class="title">全部产品</h4>
					<div class="sectionCon">
						<div v-for="(item,index) in menuList" :class="{line:index%2!=0}">
							<h4 class="title2">{{item.type}}</h4>
							<ul>
								<li v-for="item in item.arrs">
									<a  target="_blank" :href="item.ulr">{{item.name}}</a>
									<span class="flag" v-if="item.flag">HOT</span>
								</li>
							</ul>
						</div>
					</div>

				</div>
				<div class="section mt15">
					<h4 class="title">最新消息</h4>
					<div class="sectionCon">
						<ul class="news">
							<li v-for="item in news">
								<a target="_blank" :href="item.url">{{item.author_name}}</a>
							</li>
						</ul>
					</div>

				</div>

			</div>
			<div class="rightBox fl">
				<div class="carouselBox">
					<swiper :options="swiperOption">
						<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
								<a target="_blank" href="http://www.baidu.com">
									<img :src="slide.src" alt="">
								</a>
						</swiper-slide>
						<div class="swiper-pagination" slot="pagination"></div>
						<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
						<!--左箭头-->
						<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
						<!--右箭头-->
					</swiper>


				</div>
				<div class="prolist">
					<ul class="clearfix">
						<li v-for="(item,index) in prolists" :class="['clearfix',{'ml10':index % 2!=0}]">
							<i :class="['iconfont','fl','icon-'+item.tag]"></i>
							<div class="fl ml10">
								<h4>{{item.title}}</h4>
								<p>{{item.details}}</p>
								<a href="javascript:;">
									<router-link :to="{path:'details/'+item.tag}">
										<el-button type="success" size="small">立即购买</el-button>
									</router-link>
									
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: "layout",
		data() {
			return {
				menuList: [{
						type: '手机应用类',
						arrs: [{
								name: '91助手',
								ulr: 'http://www.baidu.com',
								flag: false
							},
							{
								name: '豌豆荚',
								ulr: 'http://www.baidu.com',
								flag: true
							},
							{
								name: '金山毒霸',
								ulr: 'http://www.baidu.com',
								flag: false,
							}
						]
					},
					{
						type: '开发工具',
						arrs: [{
								name: 'webstorm',
								ulr: 'http://www.baidu.com',
								flag: false
							},
							{
								name: 'hbuilder',
								ulr: 'http://www.baidu.com',
								flag: true
							},
							{
								name: 'sublime text3',
								ulr: 'http://www.baidu.com',
								flag: false
							},
							{
								name: 'atom',
								ulr: 'http://www.baidu.com',
								flag: true
							}
						]
					}
				],
				news: [],
				swiperOption: {
					loop: true,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				},
				swiperSlides: [{
						src: require('../assets/1.jpg')
					},
					{
						src: require('../assets/2.jpg')
					},
					{
						src: require('../assets/3.jpg')
					}
				],
				prolists: [{
						tag: 'horn',
						title: '开放产品',
						details: '开放产品是一种开放产品'
					},
					{
						tag: 'car',
						title: '品牌营销',
						details: '开放产品是一种开放产品'
					},
					{
						tag: 'earth',
						title: '使命必达',
						details: '开放产品是一种开放产品'
					},
					{
						tag: 'mountain',
						title: '勇攀高峰',
						details: '开放产品是一种开放产品'
					}
				]
			}
		},
		created() {
			var _this=this;
			this.$axios.get('http://www.wwtliu.com/sxtstu/news/juhenews.php', {
					params: {
						type: "junshi",
						count: 10
					}
				})
				.then(function(response) {
					_this.news = response.data.result.data;
					console.log(_this.news)
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}
</script>

<style scoped lang="scss">
	$green:#86c586;
	$gray:#fafafa;
	$red:#F56C6C;
	$blue:#409EFF;
	$orange:#E6A23C;

	.line {
		border-top: 1px solid #ddd;
	}

	.layoutBox {
		background: $gray;
		padding: 10px 0;

		.layout {
			width: 1200px;
			margin: 0 auto;

			.leftBox {
				width: 250px;

				.section {
					.title {
						padding: 0 10px;
						height: 30px;
						line-height: 30px;
						background: $green;
						color: #fff;
					}

					.sectionCon {
						background: #fff;
						min-height: 260px;
						padding: 0 10px;

						.title2 {
							line-height: 40px;
						}

						ul {
							padding-bottom: 10px;

							li {
								padding: 0 12px;
								line-height: 24px;
								color: #666;

								.flag {
									display: inline-block;
									height: 18px;
									line-height: 18px;
									color: #fff;
									background: $red;
								}

								a:hover {
									color: $blue;
								}
							}
						}
					}

					.news li {
						line-height: 34px !important;
					}
				}
			}

			.rightBox {
				width: 930px;
				margin-left: 20px;

				.carouselBox {
					height: 400px;

					img {
						height: 400px;
						width: 100%;
					}
				}
			}
		}
	}

	.prolist {
		ul li {
			background: #fff;
			width: 460px;
			float: left;
			padding: 15px 0;
			margin-top: 10px;

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

			p {
				line-height: 40px;
			}
		}
	}
</style>
