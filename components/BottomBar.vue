<template>
	<view class="bottom">
		<view class="main" :style="{backgroundColor: colors.bgc, boxShadow: colors.bgshw}">
			<view class="daolan" @click="routerTo('pages/guide/index')">
				<image class="daolan-pic" src="../static/compass.svg" v-if="colors.guide!=='#3182CE'"></image>
				<image class="daolan-pic" src="../static/compass_selected.svg" v-else></image>
				<view class="daolan-text" :style="{color: colors.guide}">导览</view>
			</view>
			<view class="vr" @click="routerTo('pages/vr/index')">
				<image class="vr-pic" src="../static/VR.png"></image>
				<view class="vr-text" :style="{color: colors.vr}">实景</view>
			</view>
			<view class="daolan" @click="routerTo('pages/my/index')">
				<image class="daolan-pic" src="../static/home.svg" v-if="colors.my!=='#3182CE'"></image>
				<image class="daolan-pic" src="../static/home_selected.svg" v-else></image>
				<view class="daolan-text" :style="{color: colors.my}">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'BottomBar',
	props: ['selected'],
	data() {
		return {
			colors: {
				guide: '#888888',
				my: '#888888',
				vr: '#888888',
				bgc: '#FFFFFF',
				bgshw: '0px -4px 4px rgba(0, 0, 0, 0.05)'
			}
		}
	},
	methods: {
		routerTo(path) {
			const page = getCurrentPages()
			if (page[page.length - 1].route === path) return
			path = '/'+path
			uni.redirectTo({
				animationDuration: 500,
				url: path
			})
		}
	},
	created() {
		if (this.selected === 1) {
			this.colors = {
				guide: '#3182CE',
				my: '#888888',
				vr: '#888888',
				bgc: '#FFFFFF',
				bgshw: '0px -4px 4px rgba(0, 0, 0, 0.05)'
			}
		} else if (this.selected === 2) {
			this.colors = {
				guide: '#888888',
				my: '#888888',
				vr: '#fcfcfc',
				bgc: '#222222',
				bgshw: '0px -4px 4px rgba(255, 255, 255, 0.05)'
			}
		} else if (this.selected === 3) {
			this.colors = {
				guide: '#888888',
				my: '#3182CE',
				vr: '#888888',
				bgc: '#FFFFFF',
				bgshw: '0px -4px 4px rgba(0, 0, 0, 0.05)'
			}
		}
	}
}
</script>

<style scoped>
	.bottom {
		position: fixed;
		width: 100vw;
		height: 80px;
		left: 0px;
		bottom: 0px;
	}
	.main {
		position: relative;
		width: 100vw;
		height: 80px;
		left: 0px;
		top: 0px;
		background: #FFFFFF;
		box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.daolan {
		position: relative;
		width: 125px;
		height: 80px;
		left: 0px;
		top: 0px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.daolan-pic {
		position: relative;
		width: 29px;
		height: 29px;
	}
	.daolan-text {
		position: relative;
		top: 3px;
		font-family: 'Source Code Pro';
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 19px;
		display: flex;
		align-items: center;
		text-align: center;
		color: #888888;
	}
	.vr {
		position: relative;
		width: 125px;
		height: 89px;
		display: flex;
		flex-direction: column;
		align-items: center;
		top: -12px;
	}
	.vr-pic {
		position: relative;
		width: 61px;
		height: 61px;
	}
	.vr-text {
		/* 实景 */
		
		position: relative;
		
		font-family: 'Source Code Pro';
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 19px;
		display: flex;
		align-items: center;
		text-align: center;
		
		color: #888888;
	}

</style>