<script>
import BottomBar from '../../components/BottomBar.vue'
import _const from '../../static/const'

export default {
	data() {
		return {
			_const,
			schools: [{
				ID: '123',
				Title: '北京邮电大学',
				Description: '这是北邮，这是北邮，这是北邮，这是北邮，这是北邮，这是北邮，这是北邮，这是北邮',
				Resource: {
					CoverImages: ['https://ts1.cn.mm.bing.net/th/id/R-C.d99db076401aecf04e4477010084fa67?rik=a49Hry%2bbPSjBWg&riu=http%3a%2f%2fwww.jdxzz.com%2fuploads%2fallimg%2f190719%2f8-1ZG9140J9.jpg&ehk=0AFrRzTQ3jFtqXOcGX3cCGmCCgQgwFaZFwxN65tirG4%3d&risl=&pid=ImgRaw&r=0'],
				}
			}]
		}
	},
	components: {
		BottomBar
	},
	methods: {
		handleClick (id,name) {
			uni.navigateTo({
				url: `/pages/guide/nearby?id=${id}&name=${name}`
			})
		}
	},
	onLoad: function() {
	    wx.hideHomeButton();  //隐藏home/返回主页按钮
		// uni.request({
		//     url: _const.baseURL + 'api/miniapp/home',
		//     data: {},
		//     success: (res) => {
		//         console.log(res.data);
		//         this.schools = res.data.Regions
		//     }
		// });
	}
}
</script>

<template>
	<view class="bg">
		<view class="main">
			<view class="pic">
				<image src="https://th.bing.com/th/id/R.dbdc398dbbbf6f9bd71055e8bd532cd8?rik=6hjTjhOaYy%2fF7w&riu=http%3a%2f%2fedu.cnr.cn%2feduzt%2fyddx%2fyddxxyyy%2f20170527%2fW020170527533291504115.jpg&ehk=1ZuMM1%2bGR7kccHjroOZvTzEaBPNYMd%2f3PqfOxcpuw4k%3d&risl=&pid=ImgRaw&r=0"/>
			</view>
			<view class="content">
				<view class="content-name">沙河高教园</view>
				<view class="list">
					<template v-for="cell, index in schools" :key="index">
						<view class="school" @click="handleClick(cell.ID, cell.Title)">
							<view class="school-pic">
								<image class="school-image" :src="cell.Resource.CoverImages[0]"></image>
							</view>
							<view class="school-text">
								<view class="school-name">
									{{cell.Title}}
								</view>
								<view class="school-detail">
									{{cell.Description}}
								</view>
							</view>
						</view>
					</template>
				</view>
			</view>
		</view>
	</view>
	<BottomBar :selected='1'/>
</template>

<style scoped>
.bg {
	position: relative;
	background-color: #EAF0F4;
	width: 100%;
}

.list {
	margin-top: 15px;
	margin-bottom: 120px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	gap: 50rpx;
}

.school {
	position: relative;
	width: 85vw;
	height: 300rpx;
	
	background: #EAF0F4;
	border-radius: 10px;
	flex: none;
	flex-grow: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30rpx;
	gap: 15rpx;
}

.school-pic {
	position: relative;
}

.school-image {
	position: relative;
	height: 220rpx;
	width: 264rpx;
	border-radius: 8px;
}
.school-text {
	display: flex;
	flex-direction: column;

	position: relative;
	height: 238rpx;
	left: 0px;
	overflow: hidden;
	text-overflow: ellipsis;
}
.school-name {
	position: relative;

	font-family: 'Source Sans Pro';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	display: flex;
	align-items: center;

	color: #333333;
	flex: none;
	order: 0;
	flex-grow: 0;
}

.school-detail {
	position: relative;
	width: 100%;
	/* height: 140rpx; */
	left: 0px;
	top: 10px;
	
	font-family: 'Source Sans Pro';
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
	line-height: 15px;
	
	color: #555555;
}

.main {
	position: relative;
}
.pic {
	position: fixed;
}

.pic image {
	position: relative;
	width: 100vw;
	height: 400rpx;
	left: 0px;
	top: 0px;
	background: linear-gradient(0deg, rgba(49, 130, 206, 0.1), rgba(49, 130, 206, 0.1));
}
.content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 22px;

	position: absolute;
	width: 100%;
	min-height: 100vh;
	left: 0px;
	top: 350rpx;
	
	background: #F8F8F8;
	box-shadow: 0px -12px 19px rgba(0, 0, 0, 0.25);
	border-radius: 30px 30px 0px 0px;
}
.content-name {
	height: 40px;
	
	font-family: 'Abhaya Libre ExtraBold';
	font-style: normal;
	font-weight: 800;
	font-size: 24px;
	line-height: 35px;
	display: flex;
	align-items: center;
	letter-spacing: 0.16em;
	
	color: #262C4A;
	
	backdrop-filter: blur(2px);
	
	/* Inside auto layout */
	flex: none;
	order: 0;
	flex-grow: 0;
	position: relative;
	top: 12px;
	left: 30px;
}

</style>
