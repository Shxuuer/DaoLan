<template>
	<TopBar :name="pageInfo.name" style="position: fixed; z-index: 1;top: 0;"></TopBar>
	<view style="position: relative;">
		<view style="display: flex;flex-direction: column;align-items: center;position: fixed;top: 200rpx;z-index: -1;width: 100vw;">
			<image class="image" :src="_const.imgURL + pageInfo.imgUrl"></image>
		</view>
		<view class="main">
			<view class="content">
				<view class="reader">
					{{pageInfo.Detail}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/TopBar.vue'
import {_const} from '../../static/const'

export default {
	name: 'inner',
	components: {TopBar},
	data() {
		return {
			pageInfo: {
				name: "",
				Detail: "",
				imgUrl: ""
			},
			_const
		}
	},
	onLoad: function(option) {
		this.pageInfo = {...option}
	},
}
</script>

<style scoped>	
.image {
	position: relative;
	width: 700rpx;
	height: 460rpx;
	border-radius: 10px;
}

.reader {
	width: 80vw;
	position: relative;
	
	white-space: pre-wrap;
	background: #F8F8F8;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	padding: 30rpx;
	
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.1em;
	
	color: #000000;
}
.main {	
	border-radius: 14px 14px 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f0f0f0;
	margin-top: 30rpx;
	position: relative;
	top: 656rpx;
}
.content {
	position: relative;
	width: 100vw;
	margin-bottom: 20rpx;
	min-height: 40vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	top: 50rpx;
}
</style>