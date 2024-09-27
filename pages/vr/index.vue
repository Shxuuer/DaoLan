<script>
import BottomBar from '../../components/BottomBar.vue';
import SearchInput from '../../components/SearchInput.vue';

export default {
	name: 'VR',
	components: {BottomBar, SearchInput},
	data() {
		return {
			schools: [
				{
					pic: 'https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0',
					name: '北京邮电大学',
					ico: 'https://www.bupt.edu.cn/__local/1/F4/62/05815E603799A29D53DDB1E0FAF_557A7220_102AD.png',
					id: 1
				},
				{
					pic: 'https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0',
					name: '北京邮电大学',
					ico: 'https://www.bupt.edu.cn/__local/1/F4/62/05815E603799A29D53DDB1E0FAF_557A7220_102AD.png',
					id: 2
				},
				{
					pic: 'https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0',
					name: '北京邮电大学',
					ico: 'https://www.bupt.edu.cn/__local/1/F4/62/05815E603799A29D53DDB1E0FAF_557A7220_102AD.png',
					id: 3
				},
				{
					pic: 'https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0',
					name: '北京邮电大学',
					ico: 'https://www.bupt.edu.cn/__local/1/F4/62/05815E603799A29D53DDB1E0FAF_557A7220_102AD.png',
					id: 4
				}
			]
		}
	},
	methods: {
		handleSearch (input) {
			console.log(input)
		}
	},
	onLoad: function() {
	    wx.hideHomeButton();
	}
}
</script>

<template>
	<view class="bg">
		<view class="main">
			<SearchInput class="search" placeholder='搜索位置' @search="handleSearch"></SearchInput>
			<view class="search-list">
				<view class="search-school" v-for="cell, index in schools" :key="index">
					<view style="width: 100%;height: 100%;">
						<image class="search-pic" :src="cell.pic" alt="学校图片"/>
					</view>
					<view class="search-school-info">
						<view class="search-ico">
							<image class="search-ico-ico" :src="cell.ico"/>
						</view>
						<view class="search-name">
							{{cell.name}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<BottomBar :selected='2'></BottomBar>
	</view>
</template>

<style scoped>
.search {
	width: 80%;
	margin-top: 100rpx;
	margin-bottom: 80rpx;
}

.bg {
	background-color: #222222;
	min-height: 100vh;
	width: 100vw;
	position: relative;
}
.main {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.search-list {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 70rpx;
	margin-bottom: 120px;
}

.search-school {
	position: relative;
	
	width: 650rpx;
	height: 500rpx;
	
	background: #333333;
	border-radius: 24px;
}

.search-pic {
	border-radius: 24px;
	position: relative;
	width: 100%;
	height: 100%;
}

.search-school-info {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 125rpx;
	background-color: rgba(51, 51, 51, 0.9);
	border-bottom-left-radius: 24px;
	border-bottom-right-radius: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.search-ico {
	position: absolute;
	width: 100rpx;
	height: 100rpx;
	left: 34rpx;
}

.search-ico-ico {
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 50%;
}

.search-name {
	
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: 0.75px;
	
	color: #FFFFFF;
}
</style>
