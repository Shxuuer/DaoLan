<template>
	<view style="position: relative;" class="map">
		<view class="ctrl" @click="refresh">刷新</view>
		<map class="map" id="map" :longitude="longitude" :latitude="latitude"
		 :scale="scale" show-location="true" :markers="markers" @updated="update">
		</map>
	</view>
</template>

<script>

export default {
	name: 'MyMap',
	props: ['L_latitude', 'L_longitude', 'L_title'],
	emits: ['update:latitude', 'update:longitude'],
	data () {
		return { 
			scale: 13, 
			markers: [],
			getLocationTimer: null,
			latitude: '',
			longitude: ''
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