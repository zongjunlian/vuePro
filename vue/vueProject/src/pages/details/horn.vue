<template>
	<div>
		开放产品{{getOrder}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			getOrder(){
				return this.$store.getters.getOrder;
			}
		},
	}
</script>

<style scoped="scoped">

</style>
