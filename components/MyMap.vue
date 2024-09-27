<template>
	<view style="position: relative;" class="map">
		<view class="ctrl" @click="refresh">刷新</view>
		<map class="map" id="map" :longitude="longitude" :latitude="latitude"
		 :scale="scale" show-location="true" :markers="markers">
		</map>
	</view>
</template>

<script>

export default {
	name: 'MyMap',
	props: ['latitude', 'longitude'],
	emits: ['update:latitude', 'update:longitude'],
	data () {
		return { 
			scale: 13, 
			markers: [],
			getLocationTimer: null
		}
	},
	methods: {
		refresh() {
			const map = uni.createMapContext("map", this);
			map.moveToLocation({
				longitude: this.longitude,
				latitude: this.latitude
			})
		}
	},
	created() {
		uni.startLocationUpdate({})
		const that = this
		uni.onLocationChange(function (res) {
			that.$emit('update:latitude', res.latitude)
			that.$emit('update:longitude', res.longitude)
		});
	}
}
</script>

<style scoped>
.map {
	width: 100vw;
	height: 650rpx;
}
.ctrl {
	position: absolute;
	right: 40rpx;
	top: 40rpx;
	padding: 20rpx;
	z-index: 2;
	
	background: #3182CE;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	color: #FCFCFC;
}
</style>