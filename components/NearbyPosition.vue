<template>
	<view class="list">
		<template v-for="(item,index) in nearby_position" :key="index">
			<view class="item" @click="goToDetail(item.Title, item.ID)">
				<view class="pic">
					<image :src="_const.baseURL + item.Resource.CoverImages[item.Resource.CoverImages.length - 1]" class="pic-img"></image>
				</view>
				<view class="info">
					<view class="name">{{item.Title}}</view>
					<view class="detail">{{item.Description}}</view>
				</view>
				<view class="btns">
					<view class="inner-btn" @click.stop="goToInner(item.Title, 1)" v-if="!isInner">
						<text style="width: 100%;text-align: center;">室内</text>
					</view>
					<view class="inner-btn" @click.stop="goToInner(item.Title, 1)" v-if="isInner">
						<text style="width: 100%;text-align: center;">详情</text>
					</view>
					<view class="inner-btn" @click.stop="playSound(item.Description)" style="width: 30rpx;position: relative;right: 0">
						<image src="../static/volume.svg" class="sound-btn"></image>
					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
import _const from '../static/const';
export default {
	name:"NearbyPosition",
	props: ['nearby_position', 'isInner'],
	data() {
		return {
			_const
		};
	},
	methods: {
		goToDetail(name, id) {
			const page = getCurrentPages()
			const path = `/pages/guide/detail?name=${name}&id=${id}`
			if (page[page.length - 1].route === 'pages/guide/detail') 
				uni.redirectTo({ url: path})
			else uni.navigateTo({ url: path})
		},
		goToInner(name, type) {
			if (type === 1) uni.navigateTo({ url: "/pages/guide/inner?name="+name })
			else if (type === 2) uni.navigateTo({ url: "/pages/guide/inner?name="+name })
		},
		playSound(text) {
			const plugin = requirePlugin("WechatSI")
			plugin.textToSpeech({
			    lang: "zh_CN",
			    tts: true,
			    content: text,
			    success: function(res) {
			        console.log("succ tts", res.filename)   
			    },
			    fail: function(res) {
			        console.log("fail tts", res)
			    }
			})
		}
	}
}
</script>

<style scoped>
.sound-btn {
	position: relative;
	height: 14px;
	width: 14px;
}
.btns {
	width: 25%;
	gap: 30rpx;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	margin-left: auto;
	margin-right: 25rpx;
}
.inner-btn {
	background: #F0F0F0;
	border: 1px solid #EAEAEA;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 15rpx;
	padding-left: 22rpx;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 3px;
	color: #888888;
}

.info {
	height: 200rpx;
	overflow: hidden;
	margin-left: 20rpx;
	margin-right: 20rpx;
	width: 60%;
}
.name {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;
	/* identical to box height */
	display: flex;
	align-items: center;
	margin-bottom: 10rpx;
	color: #333333;
}
.detail {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	height: 56px;
	
	/* white-space: nowrap; */
	overflow: hidden;
	text-overflow: ellipsis;
	
	color: #333333;
}
.list {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 30rpx;
	justify-content: center;
	align-items: center;
}

.item {
	width: 90%;
	height: 260rpx;
	background: #F8F8F8;
	/* Shadow  */
	box-shadow: 0px 4px 20px rgba(32, 32, 32, 0.06);
	border-radius: 18px;
	position: relative;
	display: flex;
	align-items: center;
}

.pic-img {
	width: 200rpx;
	height: 200rpx;
	border-radius: 10px;
	margin-left: 30rpx;
}
</style>