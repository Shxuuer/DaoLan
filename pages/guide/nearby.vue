<template>
	<view style="position: relative">
		<view style="z-index: 1;position: fixed; background-color: #ffffff;">
			<TopBar :name="name"></TopBar>
			<SelectGroup :types="types" @select="handleSelect"></SelectGroup>
		</view>
		<!-- 地图 -->
		<view class="map" style="z-index: 0;position: fixed;">
			<MyMap :L_title="L_title" :L_latitude="L_latitude" :L_longitude="L_longitude"></MyMap>
		</view>
		<!-- 附近地点 -->
		<view class="near-by" style="z-index: 0;top: 890rpx;">
			<view class="nearby-text">附近地点</view>
			<NearbyPosition :nearby_position="real_nearbys" style="top: 80rpx; position: relative;"></NearbyPosition>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/TopBar.vue'
import NearbyPosition from '../../components/NearbyPosition.vue'
import SelectGroup from '../../components/SelectGroup.vue'
import MyMap from '../../components/MyMap.vue'
import {_const} from '../../static/const'

export default {
	components: {TopBar, NearbyPosition, SelectGroup, MyMap},
	onLoad: function(option) {
		this.name = option.name
		this.id = option.id
		uni.request({
			url: _const.baseURL + '/api/miniapp/outdoor',
			method: 'POST',
		    data: {
				regionId: option.id,
				"lat": 0,
				"lng": 0,
				"acc": 0,
				"beacons": [""]
			},
		    success: (res) => {
				this.nearbys = res.data.places
				this.real_nearbys = res.data.places
				this.L_title = res.data.region.title
				const temp = res.data.region.circle.split(',')
				this.L_latitude = Number(temp[0])
				this.L_longitude = Number(temp[1])
				this.prepareTags()
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
			types: [],
			_const,
			nearbys: [],
			L_title: '',
			L_latitude: '',
			L_longitude: '',
			real_nearbys: []
		}
	},
	methods: {
		handleSelect(tag) {
			if (tag == undefined) {
				this.real_nearbys = this.nearbys
			} else {
				const tmp = []
				this.nearbys.forEach(item => {
					if (item.tags.indexOf(tag) != -1) tmp.push(item)
				})
				this.real_nearbys = tmp
			}
		},
		prepareTags() {
			this.nearbys.forEach((item) => {
				item.tags.forEach((tag) => {
					if(this.types.indexOf(tag) == -1) {
						this.types.push(tag)
					}
				})
			})
		}
	},
	watch: {
	},
	
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