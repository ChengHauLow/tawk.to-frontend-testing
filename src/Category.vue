<template>
	<div>
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>

export default {
	data() {
		return {
			// data
			msg:'Hello from Cat'
		}
	},
	mounted() {
		// mounted
		console.log(this.$route.params);
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
</style>