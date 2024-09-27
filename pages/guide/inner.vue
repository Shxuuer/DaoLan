<template>
	<view style="position: relative;">
		<view class="floor">
			<TopBar :name="name"></TopBar>
			<SelectGroup :types="types"></SelectGroup>
		</view>
		<!-- 地图 -->
		<view class="map" style="z-index: -1;position: fixed;top: 280rpx;">
			<image src="../../static/test/image 6.png" style="width: 100vw;"></image>
		</view>
		<!-- 附近地点 -->
		<view class="near-by" style="z-index: 0;top: 800rpx;">
			<view style="position: relative;align-items: center;">
				<view class="nearby-text">附近地点</view>
				<view class="back-to">回到室外</view>
			</view>
			<NearbyPosition :nearby_position="nearby_position" style="top: 80rpx; position: relative;" :isInner="true"></NearbyPosition>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/TopBar.vue'
import SelectGroup from '../../components/SelectGroup.vue'
import NearbyPosition from '../../components/NearbyPosition.vue'

export default {
	name: 'inner',
	components: {TopBar, SelectGroup, NearbyPosition},
	data() {
		return {
			name: '',
			types: ['1F', '2F', '3F', '4F', '5F'],
			nearby_position: [
				{
					pic: 'https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0',
					name: '图书馆',
					detail: '北京邮电大学图书馆建于1955年。现有建设面积5.22万平方米（沙河校区图书馆3.67万平方米）。'
				},
				{
					pic: 'https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0',
					name: '图书馆',
					detail: '北京邮电大学图书馆建于1955年。现有建设面积5.22万平方米（沙河校区图书馆3.67万平方米）。'
				},
				{
					pic: 'https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0',
					name: '图书馆',
					detail: '北京邮电大学图书馆建于1955年。现有建设面积5.22万平方米（沙河校区图书馆3.67万平方米）。'
				},
				{
					pic: 'https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0',
					name: '图书馆',
					detail: '北京邮电大学图书馆建于1955年。现有建设面积5.22万平方米（沙河校区图书馆3.67万平方米）。'
				}
			]
		}
	},
	onLoad: function(option) {
		this.name = option.name
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