<template>
	<div class="detailCar">
		<div class="detailTop">
			<div>
				<h3 class="title">流量分析</h3>
				<p class="textCon">如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。
					如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。</p>
			</div>
			<div class="optCon">
				<div class="clearfix mt10">
					<span class="type fl">购买数量:</span>
					<p class="fl">
						<counter :min="counter.min" :max="counter.max" @count="getInfo('count',$event)"/>
					</p>
				</div>
				<div class="clearfix mt10">
					<span class="type fl">产品类型:</span>
					<p class="fl">
						<productType :proData='proData'  @pro="getInfo('pro',$event)"></productType>
					</p>
				</div>
				<div class="clearfix mt10">
					<span class="type fl">有效时间:</span>
					<p class="fl">
						<effectiveTime :timeData="timeData"   @time="getInfo('time',$event)"/>
					</p>
				</div>
				<div class="clearfix mt10">
					<span class="type fl">总价:</span>
					<p class="fl">
						{{totalPrice}}元
					</p>
				</div>
				<div class="clearfix mt10">
					<span class="type fl"></span>
					<p class="fl">
						<el-button type="success" size="small">立即购买</el-button>
					</p>
				</div>
				{{getOrder}}
			</div>
		</div>
		<div class="detailBottom">
			<h3 class="title">产品说明</h3>
			<p class="textCon">如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。
				如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。</p>

		</div>
	</div>
</template>

<script>
	import counter from "@/pages/details/components/counter"
	import effectiveTime from "@/pages/details/components/time"
	import productType from "@/pages/details/components/productType"
	export default {
		components: {
			counter,
			effectiveTime,
			productType
		},
		data() {
			return {
				count:1,
				time:1,
				pro:1,
				counter: {
					max: 10,
					min: 1
				},
				proData: [{
					name: '初级',
					value: 1
				}, {
					name: '中级',
					value: 2
				}, {
					name: '高级',
					value: 3
				}],
				timeData: [{
					name: '1个月',
					value: 1
				}, {
					name: '3个月',
					value: 3
				}, {
					name: '半年',
					value: 6
				}, {
					name: '年费',
					value: 12
				}]

			};
		},
		methods: {
			getInfo(data,event) {
				this[data]=event;//把count,pro,time存到组件中
				// console.log(this);
				var obj={
					"count":this.count,//5
					"pro":this.pro,//2
					"time":this.time//10
				}//实际中到这已经结束,把这个对象传给后台,后台计算,单价是存在后台数据库中的
				//console.log(obj)
				this.totalPrice=this.count*5+this.pro*2+this.time*10;
			}
		},
		computed: {
			totalPrice() {
				//return this.totalPrice=this.count*5+this.pro*2+this.time*10;
				this.$store.dispatch("updatePrice",this.count*5+this.pro*2+this.time*10);
				return this.$store.getters.getTotalPrice;
			},
			getOrder(){
				return this.$store.getters.getOrder;
			}
			
		},
	}
</script>

<style scoped="scoped" lang="scss">
	$blue:#409EFF;

	.detailCar {
		margin-left: 10px;

		.detailTop {
			background: #fff;
			padding: 10px 20px;
		}

		.optCon {
			padding: 20px 0;

			.type {
				min-width: 120px;
				height: 28px;
				line-height: 28px;
			}


		}

		.detailBottom {
			background: #fff;
			padding: 10px 20px;
			margin-top: 10px;
		}

		.title {
			line-height: 40px;
		}

		.textCon {
			line-height: 24px;
		}
	}
</style>
