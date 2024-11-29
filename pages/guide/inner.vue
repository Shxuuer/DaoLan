<template>
	<view style="position: relative;">
		<view class="floor">
			<TopBar :name="name"></TopBar>
			<SelectGroup :types="types" :default="selectedFloorIndex" :ifCancel="false" @select="handleFloorChange"></SelectGroup>
		</view>
        <!-- 地图 -->
		<view style="z-index: -1;position: fixed;top: 320rpx;width: 100vw;" v-if="selectedFloorIndex!==undefined">
			<image :src="_const.imgURL + surfaces[selectedFloorIndex].resource.backgroundImage"
			 mode="widthFix" style="display: block;width: 100%;" id="imageContain" @load="barHeight"></image>
		</view>
		<!-- 附近地点 -->
		<view class="near-by" style="z-index: 0;" :style="{top: imgHeight + 'px'}">
			<view style="position: relative;align-items: center;">
				<view class="nearby-text">附近地点</view>
				<view class="back-to" @click="handleBack">回到室外</view>
			</view>
            <NearbyPosition :nearby_position="nearbys" style="top: 80rpx; position: relative;" :isInner="true"></NearbyPosition>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/TopBar.vue'
import SelectGroup from '../../components/SelectGroup.vue'
import NearbyPosition from '../../components/NearbyPosition.vue'
import _const from '../../static/const'

export default {
	name: 'inner',
	components: {TopBar, SelectGroup, NearbyPosition},
	data() {
		return {
			name: '',
			types: [],
			nearbys: [],
			_const,
			id: '',
			selectedFloorIndex: undefined,
			surfaces: [],
			imgHeight: 0
		}
	},
	onLoad: function(option) {
		this.name = option.name
		this.id = option.id
		uni.request({
			url: _const.baseURL + '/api/miniapp/indoor',
			method: 'POST',
			data: {
				"placeId": this.id,
				"beacons": ["00000000-0000-0000-0000-000000000000"]
			},
			success: (res) => {
				this.types = Array.from({ length:res.data.surfaces.length }, (_, index) => `${index + 1}F`)
				this.selectedFloorIndex = 0
				this.nearbys = res.data.places
				this.surfaces = res.data.surfaces
			},
			fail(res) {
				console.log(res)
			}
		});
	},
	methods: {
		handleBack() {
			uni.navigateBack(1)
		},
		handleFloorChange(tag) {
			this.selectedFloorIndex = this.types.indexOf(tag)
		},
		barHeight() {
			// 设置bar的style.top，使其在image的下方
			// 将bar的top设置为image的高度加image的top
			
			const query = uni.createSelectorQuery().in(this);
			query.select("#imageContain").boundingClientRect((data) => {
				this.imgHeight = data.top + data.height + 50;
			}).exec();

		}
	},
}
</script>

<style scoped>
.floor {
	position: fixed;
	z-index: 1;
	top: 0;
	background-color: #ffffff;
}

.nearby-text {
	position: relative;
	left: 45rpx;
	top: 60rpx;
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

.near-by {
	position: relative;
	width: 100vw;
	min-height: 60vh;
	background-color: #f0f0f0;
	border-radius: 32rpx 32rpx 0 0;
}
.back-to {
	position: relative;
	left: 500rpx;
	padding: 15rpx 30rpx;
	width: fit-content;
	background: #3182CE;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 3px;
	
	color: #FCFCFC;
}
</style>