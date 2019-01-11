<template>
	<div class="timeBox">
		<ul>
			<li v-for="(item,index) in timeData" @click="selectTime(index)" :class="{active:index==activeIndex}">{{item.name}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
			};
		},
		props: {
			timeData: {
				type: Array,
				default: function() {
					return [{
						name: 'test',
						value: 1
					}]
				}
			}
		},
		methods: {
			selectTime(index) {
				this.activeIndex = index;
				this.$emit("time",this.timeData[index].value);
				this.$store.dispatch('updateOrder',['time',this.timeData[index].value]);
			}
		},
	}
</script>

<style scoped="scoped" lang="scss">
	$blue:#409EFF;

	.timeBox {
		ul li {
			height: 26px;
			line-height: 26px;
			text-align: center;
			border: 1px solid #ccc;
			border-radius: 3px;
			padding: 1px 5px;
			float: left;
			margin-right: 10px;

			&:hover,
			&.active {
				background: $blue;
				color: #fff;
				cursor: pointer;
				border: 1px solid $blue;
			}
		}
	}
</style>
