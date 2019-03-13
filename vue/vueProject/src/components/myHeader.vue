<template>
    <div class="header clearfix">
		<div class="headerCon">
			<div class="fl">
				<router-link to='/'>
					<img class="fl" src="../assets/logo.png" alt="" >
				</router-link>
				
				<span>Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。</span>
			</div>
			<ul class="fr">
				<li>登录</li>
				<li>|</li>
				<li>注册</li>
				<li>|</li>
				<li>关于</li>
				<li>|</li>
				<li>{{test}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import bus from '../assets/js/eventBus.js'
    export default {
        name: "myHeader",
		data() {
			return {
				test: ''
			}
		},
		created(){
			bus.$on("key",(data)=>{
				this.test= data; 
			})
		}
    }
</script>

<style scoped lang="scss">
	$black:#000;
	.header{
		height: 70px;
		line-height: 70px;
		background: $black;
		color: #fff;
		padding: 0 50px;
		.headerCon{
			width:1200px;
			margin: 0 auto;
		}
		img{
			height: 50px;
			margin-top: 10px;
			margin-right: 20px;
		}
		span{
			display: inline-block;
			height: 70px;
			line-height: 70px;
		}
		ul li{
			list-style: none;
			float: left;
			width: 30px;
			text-align: center;
		}
	}
</style>
