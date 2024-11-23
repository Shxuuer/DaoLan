<template>
	<view style="position: relative;">
		<view class="floor">
			<TopBar :name="name"></TopBar>
			<SelectGroup :types="types"></SelectGroup>
		</view>
        <!-- 地图 -->
		<view ref="mapContainer" style="z-index: -1;position: fixed;top: 320rpx;width: 100%;">
			<image ref="mapImage" src="http://[2001:da8:215:81f0:215:5dff:fe08:603]:8000/室内地图.png"
			 :style="{objectFit: 'contain' }" @load="onMapLoad"></image>
            <!-- <img v-for="pos in selectedItem.positions" :key="pos.id" :src="'../../static/map-pin.svg#map-pin'" :style="getPinStyle(pos)" /> -->
		</view>
		<!-- 附近地点 -->
		<view class="near-by" style="z-index: 0;top: 800rpx;">
			<view style="position: relative;align-items: center;">
				<view class="nearby-text">附近地点</view>
				<view class="back-to" @click="handleBack">回到室外</view>
			</view>
            <NearbyPosition :nearby_position="nearbys" style="top: 80rpx; position: relative;" :isInner="true" @item-clicked="handleItemClicked"></NearbyPosition>
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
			types: ['1F', '2F', '3F', '4F', '5F'],
			nearbys: [],
			_const,
            mapScale: 1,
            mapTop: 320, // 地图顶部位置
            mapHeight: 800 - 320, // 地图高度
            pinWidth: 10, // 标点宽度
            pinHeight: 10, // 标点高度
            selectedItem: {
				// 自习区域
				positions: [
					{ x: 104, y: 255 },
					{ x: 253, y: 142 },
					{ x: 820, y: 153 },
					{ x: 768, y: 462 },
					{ x: 215, y: 680 },
					{ x: 980, y: 711 },
					{ x: 716, y: 948 },
					{ x: 775, y: 1247 },
				]
			},
            mapCorners: {
                topLeft: { x: 0, y: 0 },
                topRight: { x: 0, y: 0 },
                bottomLeft: { x: 0, y: 0 },
                bottomRight: { x: 0, y: 0 }
            },
			id: ''
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
				"beacons": []
			},
			success: (res) => {
				console.log(res.data)
				this.nearbys = res.data.places
			},
			fail(res) {
				console.log(res)
			}
		});
	},
    mounted() {
        this.getMapCorners();
    },
	methods: {
		handleBack() {
			uni.navigateBack(1)
		},
        onMapLoad(event) {
			// const mapImage = event.target;
			// // 打印mapImage的这四个值到控制台
			// console.log(mapImage.naturalWidth, mapImage.naturalHeight, mapImage.width, mapImage.height);
			// const mapWidth = mapImage.naturalWidth || mapImage.width;
			// const mapHeight = mapImage.naturalHeight || mapImage.height;
			// // const viewportWidth = window.innerWidth; // 获取视口宽度
			// const systemInfo = uni.getSystemInfoSync();
			// const viewportWidth = systemInfo.windowWidth; // 获取视口宽度
			// const viewportHeight = systemInfo.windowHeight; // 获取视口高度
   //          const rpxToPx = viewportWidth / 750; // 1rpx 等于多少 px
   //          const containerHeightPx = this.mapHeight * rpxToPx; // mapHeight rpx 对应的 px 值
			// console.log(`Map dimensions: naturalWidth=${mapWidth}, naturalHeight=${mapHeight}, viewportWidth=${viewportWidth}, viewportHeight=${viewportHeight}`);
			// console.log(`rpxToPx=${rpxToPx}, containerHeightPx=${containerHeightPx}`);
			// this.mapScale = viewportWidth / mapWidth;
			// // this.mapScale = containerHeightPx / mapHeight;
			// console.log(`mapScale=${this.mapScale}`);
			// // 为了确保 mapContainer 已经被渲染，在 onMapLoad 方法中调用 getMapCorners 方法，因为此时图片已经加载完成，容器也应该已经渲染完毕。
   //          this.getMapCorners();
        },
        handleItemClicked(item) {
            // this.selectedItem = item;
        },
        getMapCorners() {
    //         // this.$nextTick(() => {
    //             const mapContainer = this.$refs.mapContainer;
				// console.log(this.$refs)
    //             if (mapContainer) {
    //                 const rect = mapContainer.getBoundingClientRect();
    //                 this.mapCorners = {
    //                     topLeft: { x: rect.left, y: rect.top },
    //                     topRight: { x: rect.right, y: rect.top },
    //                     bottomLeft: { x: rect.left, y: rect.bottom },
    //                     bottomRight: { x: rect.right, y: rect.bottom }
    //                 };
    //                 console.log('Map corners:', this.mapCorners);
    //             } else {
				// 	console.log('Map container not found');
				// }
    //         // });
        },
        getPinStyle(pos) {
            // const { topLeft } = this.mapCorners;
            // const left = topLeft.x + pos.x * this.mapScale - this.pinWidth / 2;
            // const top = topLeft.y + pos.y * this.mapScale - this.pinHeight;
            // return {
            //     position: 'absolute',
            //     left: `${left}px`,
            //     top: `${top}px`,
            //     width: `${this.pinWidth}px`,
            //     height: `${this.pinHeight}px`
            // };
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