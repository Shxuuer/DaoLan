<template>
	<view class="bg">
		<BottomBar :selected='3'></BottomBar>
	</view>
</template>

<script>
import BottomBar from '../../components/BottomBar.vue';

export default {
	name: 'My',
	components: {BottomBar},
	data() {
		return {
			
		}
	},
	methods: {
		
	},
	onLoad: function() {
	    wx.hideHomeButton();  //隐藏home/返回主页按钮
	}
}
</script>

<style scoped>
.bg {
	background-color: #ffffff;
	min-height: 100vh;
	width: 100vw;
	position: relative;
}
</style>
