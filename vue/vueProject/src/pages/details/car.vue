<template>
	<div>
		品牌营销{{totalPrice}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			totalPrice() {
				return this.$store.getters.getTotalPrice;
			}
		},
	}
</script>

<style scoped="scoped">

</style>
