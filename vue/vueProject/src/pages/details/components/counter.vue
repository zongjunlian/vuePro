<template>
	<div>
		<span class="countBtn countBtnMin fl" @click="mins"> - </span>
		<input class="countShow fl" type="text" v-model="count" @keyup="check()" @blur="check()">
		<span class="countBtn countBtnMax fl" @click="maxs"> + </span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 1,
				
			};
		},
		props:{
			min:{
				type:Number,
				default:1
			},
			max:{
				type:Number,
				default:5
			}
			
		},
		methods: {
			mins() {
				if(this.count>this.min){
					this.count--;
				}
				this.$emit("count",this.count);
				this.$store.dispatch('updateOrder',['count',this.count]);
			},
			maxs() {
				if(this.count<this.max){
					this.count++;
				}
				this.$emit("count",this.count);
				this.$store.dispatch('updateOrder',['count',this.count]);
			},
			check(){
				this.count=Number(this.count.replace(/\D/g,""));
				
				if(this.count<this.min || this.count>this.max){
					this.count=this.min;
				}
				this.$emit("count",this.count);
				this.$store.dispatch('updateOrder',['count',this.count]);
				
			}
		},
	}
</script>

<style scoped="scoped" lang="scss">
	$blue:#409EFF;
	.countBtn {
		display: inline-block;
		width: 26px;
		height: 26px;
		line-height: 26px;
		border: 1px solid #ccc;
		text-align: center;

		&:hover {
			background: $blue;
			color: #fff;
			border: 1px solid $blue;
			cursor: pointer;
		}

		&.countBtnMin {
			border-right: 0;
		}

		&.countBtnMax {
			border-left: 0;
		}
	}

	.countShow {
		margin: 0;
		padding: 0;
		width: 40px;
		height: 26px;
		line-height: 26px;
		text-align: center;
		outline: 0;
		border: 1px solid #ccc;
	}
</style>
