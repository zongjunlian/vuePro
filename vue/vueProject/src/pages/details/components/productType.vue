<template>
	<div class="proCon">
		<span class="showPro" @click="showMenu()">{{showPro}}
		<i :class="[this.flag?'el-icon-caret-top':'el-icon-caret-bottom']"></i>
		</span>
		<ul v-show="flag">
			<li v-for="(item,index) in proData" @click="selectPro(index)">{{item.name}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				showPro:'初级',

			};
		},
		props: {
			proData: {
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
			selectPro(index) {
				this.showPro = this.proData[index].name;
				this.flag =false;
				this.$emit("pro",this.proData[index].value);
				this.$store.dispatch('updateOrder',['pro',this.proData[index].value]);
			},
			showMenu() {
				this.flag = !this.flag;
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	$blue:#409EFF;
	.proCon {
		.showPro {
			display: inline-block;
			height: 26px;
			line-height: 26px;
			text-align: center;
			width: 90px;
			border: 1px solid #ccc;
			padding: 1px 5px;
			cursor: pointer;
		}

		ul{
			li {
				height: 26px;
				line-height: 26px;
				text-align: center;
				width: 90px;
				border: 1px solid #ccc;
				padding: 1px 5px;
				border-top: 0px !important;
				&:hover{
					background: $blue;
					color: #fff;
					cursor: pointer;
				}
			}
		}
	}
</style>
