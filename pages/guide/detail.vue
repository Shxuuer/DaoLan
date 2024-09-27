<template>
	<TopBar :name="place.Title" style="position: fixed; z-index: 1;top: 0;"></TopBar>
	<view style="position: relative;">
		<view style="display: flex;flex-direction: column;align-items: center;position: fixed;top: 200rpx;z-index: -1;width: 100vw;">
			<image class="image" :src="place.Resource.CoverImages[0]"></image>
		</view>
		<view class="main">
			<view class="select-bar">
				<view :style="{backgroundColor: selectedID === 0 ? '#dfdfdf' : '#ffffff'}" @click="changeSelected(0)">介绍</view>
				<view :style="{backgroundColor: selectedID === 1 ? '#dfdfdf' : '#ffffff'}" @click="changeSelected(1)">位置</view>
				<view :style="{backgroundColor: selectedID === 2 ? '#dfdfdf' : '#ffffff'}" @click="changeSelected(2)">相关地点</view>
				<view :style="{backgroundColor: selectedID === 3 ? '#dfdfdf' : '#ffffff'}" @click="changeSelected(3)">VR</view>
			</view>
			<view class="content">
				<template v-if="selectedID === 0" style="position: relative;width: 100%;">
					<view class="reader">
						{{place.Description}}
					</view>
				</template>
				<template v-if="selectedID === 1" style="position: relative;width: 100%;">
					<MyMap/>
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
			place: {
				ID: '1',
				Title: '图书馆',
				Resource: {
					CoverImages: ['https://ts1.cn.mm.bing.net/th/id/R-C.211e37dababa0991421d4de9ec64fab0?rik=6oBHvKLFxHnuNA&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180531%2f3e700b36b785457088295f21f583adc7.jpeg&ehk=DrCzUw5Vlr6HWP%2bSVWCncq6VuufnDytKScUeqhlrxiY%3d&risl=&pid=ImgRaw&r=0'],
				},
				Description: "       北京邮电大学图书馆建于1955年。现有建设面积5.22万平方米（西土城校区图书馆1.55万平方米，沙河校区图书馆3.67万平方米。）馆员60余人，高级职称人员和研究生以上学历人员占一半以上；全馆共设综合办公室、资源建设部、文献借阅部（西土城）、文献借阅部（沙河）、情报服务部、技术支持部、知识产权服务中心7个部门。\n	学校图书馆建有千兆光纤接入、百兆到桌面的高性能网络支撑环境，实现了无线网服务全覆盖；采用先进的跨平台HTML5技术架构，建立了高性能的数字图书馆平台；自助借还书设备极大地方便了师生们对图书馆的利用；智慧图书馆服务导航系统实现实体图书馆与虚拟图书馆之间的互联互通,提供全面的、智能的信息服务感知平台,让读者随时、随地、随心发现并利用图书馆资源与服务。图书馆自主研发了“悦读书院”经典阅读实践教学系统平台、现代电子图书馆信息网络系统（MELINETS），建设了包括移动图书馆系统、数字图书馆联盟服务平台等在内的数字图书馆基础软件，实现了三个校区间图书的通借通还，方便三个校区之间学生借还图书。先进的技术设备、智能化的服务环境、书香校园文化和深层次的情报分析服务，使图书馆与师生学习环境、科研环境平滑对接，为读者建立了随时随地获得多方位信息服务的智慧图书馆服务。"
			},
			nearbys: [{
				ID: '1',
				Title: '图书馆',
				Resource: {
					CoverImages: ['https://ts1.cn.mm.bing.net/th/id/R-C.211e37dababa0991421d4de9ec64fab0?rik=6oBHvKLFxHnuNA&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180531%2f3e700b36b785457088295f21f583adc7.jpeg&ehk=DrCzUw5Vlr6HWP%2bSVWCncq6VuufnDytKScUeqhlrxiY%3d&risl=&pid=ImgRaw&r=0'],
				},
				Description: '这是北邮的图书馆'
			}]
		}
	},
	onLoad: function(option) {
		this.id = option.id
		
		// uni.request({
		// 	method: 'GET',
		// 	url: _const.baseURL + 'api/miniapp/outdoor-place?id=' + option.id,
		// 	data: {},
		// 	success: (res) => {
		// 		this.place = res.data.Place
		// 		this.nearbys = res.data.Nearby
		// 		console.log(res.data)
		// 	}
		// });
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
	min-height: 40vh;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.select-bar {
	box-sizing: border-box;
	background: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 12px;
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