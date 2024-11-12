<template>
	<TopBar :name="place.Title" style="position: fixed; z-index: 1;top: 0;"></TopBar>
	<view style="position: relative;" v-if="place.Resource">
		<view style="display: flex;flex-direction: column;align-items: center;position: fixed;top: 200rpx;z-index: -1;width: 100vw;">
			<image class="image" :src="_const.baseURL + place.Resource.CoverImages[place.Resource.CoverImages.length - 1]"></image>
		</view>
		<view class="main">
			<view class="select-bar">
				<view :style="{backgroundColor: selectedID === 0 ? '#dfdfdf' : '#ffffff', borderRadius: '20rpx 0 0 20rpx'}" @click="changeSelected(0)">介绍</view>
				<view :style="{backgroundColor: selectedID === 1 ? '#dfdfdf' : '#ffffff'}" @click="changeSelected(1)">位置</view>
				<view :style="{backgroundColor: selectedID === 2 ? '#dfdfdf' : '#ffffff'}" @click="changeSelected(2)">相关地点</view>
				<view :style="{backgroundColor: selectedID === 3 ? '#dfdfdf' : '#ffffff', borderRadius: '0 20rpx 20rpx 0'}" @click="changeSelected(3)">VR</view>
			</view>
			<view class="content">
				<template v-if="selectedID === 0" style="position: relative;width: 100%;">
					<view class="reader">
						{{place.Description}}
					</view>
				</template>
				<template v-if="selectedID === 1" style="position: relative;width: 100%;">
					<MyMap :L_title="L_title" :L_latitude="L_latitude" :L_longitude="L_longitude" height="50vh"/>
				</template>
				<view v-if="selectedID === 2" style="position: relative;width: 100%;">
					<NearbyPosition :nearby_position="nearbys"></NearbyPosition>
				</view>
				<template v-if="selectedID === 3" style="position: relative;width: 100%;">
				</template>
			</view>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/TopBar.vue'
import NearbyPosition from '../../components/NearbyPosition.vue'
import MyMap from '../../components/MyMap.vue'
import _const from '../../static/const'

export default {
	name: 'detail',
	components: {TopBar, NearbyPosition, MyMap},
	data() {
		return {
			selectedID: 0,
			id: "",
			_const,
			place: {},
			nearbys: [],
			L_title: '',
			L_latitude: '',
			L_longitude: ''
		}
	},
	onLoad: function(option) {
		this.id = option.id
		this.name = option.name
		uni.request({
			method: 'GET',
			url: _const.baseURL + '/api/miniapp/outdoor-place?id=' + option.id,
			data: {},
			success: (res) => {
				this.place = res.data.Place
				this.nearbys = res.data.Nearby
				
				this.L_title = res.data.Place.Title
				const temp = res.data.Place.Location.split(',')
				this.L_latitude = Number(temp[0])
				this.L_longitude = Number(temp[1])
			}
		});
	},
	methods: {
		changeSelected(index) {
			this.selectedID = index
		}
	}
}
</script>

<style scoped>
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
.image {
	position: relative;
	width: 700rpx;
	height: 460rpx;
	border-radius: 10px;
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
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
}

.select-bar {
	box-sizing: border-box;
	background: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 20rpx;
	display: flex;
	flex-direction: row;
	margin-top: 40rpx;
	margin-bottom: 40rpx;
}

.select-bar view {
	padding: 25rpx 45rpx;
	
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.03em;
	
	color: #333333;

	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>