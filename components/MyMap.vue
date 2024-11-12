<template>
	<view style="position: relative;" class="map">
		<view class="ctrl" @click="refresh">
			<image src="../static/locate.svg" style="width: 50rpx;height: 50rpx"></image>
		</view>
		<map class="map" id="map" :longitude="longitude" :latitude="latitude"
		 :scale="scale" show-location="true" :markers="markers" @updated="update"
		 :style="{height: height || '650rpx'}">
		</map>
	</view>
</template>

<script>
export default {
	name: 'MyMap',
	props: ['L_latitude', 'L_longitude', 'L_title', 'height'],
	emits: ['update:latitude', 'update:longitude'],
	data () {
		return { 
			scale: 13, 
			markers: [],
			getLocationTimer: null,
			latitude: '',
			longitude: '',
			heightZ: ''
		}
	},
	methods: {
		refresh() {
			const map = uni.createMapContext("map", this);
			if (this.L_latitude & this.L_longitude)
				map.moveToLocation({
					longitude: this.L_longitude,
					latitude: this.L_latitude
				})
			else
				map.moveToLocation({
					longitude: this.longitude,
					latitude: this.latitude
				})
		},
		update() {
			if (this.markers.length === 0 && this.L_latitude !== "")
				this.markers.push({
					id: 1,
					latitude: this.L_latitude,
					longitude: this.L_longitude,
					title: this.L_title,
					width: 30,
					height: 45
				}) 
			this.refresh()
		}
	},
	beforeMount() {
		uni.startLocationUpdate({})
		const that = this
		uni.onLocationChange(function (res) {
			that.$emit('update:latitude', res.latitude)
			that.$emit('update:longitude', res.longitude)
		});
	},
}
</script>

<style scoped>
.map {
	width: 100vw;
}
.ctrl {
	position: absolute;
	right: 40rpx;
	bottom: 60rpx;
	z-index: 2;
	width: 60rpx;
	height: 60rpx;
	
	display: flex;
	align-items: center;
	justify-content: center;
	
	
	background-color: #fff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	color: #FCFCFC;
}
</style>