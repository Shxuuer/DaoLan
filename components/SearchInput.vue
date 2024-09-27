<script>
export default {
	name:"SearchInput",
	props: ['placeholder'],
	emits: ['search'],
	data() {
		return {
			
		};
	},
	methods: {
		handleInput(e) {
			const input = e.detail.value
			this.$emit('search', input)
		}
	}
}
</script>

<template>
	<view class="main">
		<image src="../static/search.svg" class="search"></image>
		<input type="text" :placeholder="placeholder" class="input" @change="handleInput"/>
	</view>
</template>

<style>
.main {
	box-sizing: border-box;
	position: relative;
	height: 100rpx;
	background: #333333;
	border-radius: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.search {
	position: relative;
	width: 40rpx;
	height: 40rpx;
	margin: 0 30rpx;
}
.input {
	position: relative;
	display: inline-block;
	width: 100%;
	font-size: 30rpx;
	color: #888888;
	margin-right: 25rpx;
	
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	line-height: 32rpx;
	align-items: center;
}
</style>