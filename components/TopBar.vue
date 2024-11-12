<script>
export default {
	name: 'TopBar',
	props: ['name', 'buttonName'],
	emits: ['buttonActive'],
	data() {
		return {
			icon: {}
		}
	},
	methods: {
		handleBack() {
			uni.navigateBack(1)
		}
	},
	beforeMount() {
		this.icon = wx.getMenuButtonBoundingClientRect()
	}
}
</script>

<template>
	<view class="head" :style="{height: icon.bottom + 20 + 'px'}">
		<view class="main" :style="{top: icon.top - 1 + 'px'}">
			<view class="name">
				<text>{{name}}</text>
			</view>
			<view class="back" @click="handleBack">
				<image src="../static/back.svg" class="back-img"></image>
			</view>
			<view class="button">
				
			</view>
		</view>
	</view>
</template>

<style scoped>
.head {
	position: relative;
	width: 100vw;
	background: #F0F0F0;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 0px 0px 25px 25px;
}
.main {
	position: relative;
	display: flex;
	align-items: center;
}
.back-img {
	position: relative;
	width: 100%;
	height: 100%;
}
.back {
	position: relative;
	width: 70rpx;
	height: 70rpx;
	margin-left: 51rpx;
}

.name {
	height: 70rpx;
	position: absolute;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
}
.name text {
	line-height: 70rpx;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	letter-spacing: 3px;
	color: #222222;
}
</style>