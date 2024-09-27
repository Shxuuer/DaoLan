<template>
	<view style="position: relative">
		<view style="z-index: 1;position: fixed; background-color: #ffffff;">
			<TopBar :name="name"></TopBar>
			<SelectGroup :types="types"></SelectGroup>
		</view>
		<!-- 地图 -->
		<view class="map" style="z-index: 0;position: fixed;">
			<MyMap v-model:longitude="longitude" v-model:latitude="latitude"></MyMap>
		</view>
		<!-- 附近地点 -->
		<view class="near-by" style="z-index: 0;top: 890rpx;">
			<view class="nearby-text">附近地点</view>
			<NearbyPosition :nearby_position="nearbys" style="top: 80rpx; position: relative;"></NearbyPosition>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/TopBar.vue'
import NearbyPosition from '../../components/NearbyPosition.vue'
import SelectGroup from '../../components/SelectGroup.vue'
import MyMap from '../../components/MyMap.vue'
import _const from '../../static/const'

export default {
	components: {TopBar, NearbyPosition, SelectGroup, MyMap},
	onLoad: function(option) {
		this.name = option.name
		this.id = option.id
		uni.request({
			url: _const.baseURL + '/api/miniapp/outdoor',
			method: 'POST',
		    data: {},
		    success: (res) => {
				this.nearbys = res.data.Places
		    },
			fail(res) {
		    	console.log(res)
		    }
		});
	},
	data() {
		return {
			name: '',
			id: '',
			types: ['休闲区','娱乐区','学习区','学习区','学习区','学习区'],
			latitude: '',
			longitude: '',
			_const,
			nearbys: []
		}
	},
	methods: {
	},
	watch: {
		// longitude(newl, oldl) {
		// 	if (newl === "") return
		// 	uni.request({
		// 		method: 'POST',
		// 		url: _const.baseURL + 'api/miniapp/outdoor',
		// 		data: {
		// 			"Acc": 10,
		// 			"Beacons": [
		// 				"1:2:3"
		// 			],
		// 			"Lng": this.longitude,
		// 			"Lat": this.latitude
		// 		},
		// 		success: (res) => {
		// 			this.nearbys = res.data.Places
		// 		}
		// 	});
		// }
	}
}
</script>

<style scoped>
.nearby-text {
	position: relative;
	left: 45rpx;
	top: 45rpx;
	width: fit-content;

	font-family: 'Roboto';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;
	display: flex;
	align-items: center;
	letter-spacing: 2px;

	color: #333333;
}

.map {
	width: 100vw;
	height: 650rpx;
	top: 280rpx;
}
.near-by {
	position: relative;
	width: 100vw;
	min-height: 60vh;
	background-color: #f0f0f0;
	border-radius: 32rpx 32rpx 0 0;
}
</style>