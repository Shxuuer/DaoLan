<template>
	<!-- 场所类型选择 -->
	<view class="type-select">
		<template v-for="cell,index in types" :key="index">
			<view class="select-cell" @click="handleSelect(index)" :style="{
					backgroundColor: selected === index ? '#3e3e3e' : '#ffffff',
					color: selected === index ? '#e3e3e3' : '#333333'}"
			>
				{{cell}}
			</view>
		</template>
	</view>
</template>

<script>
export default {
	name: 'SelectGroup',
	props: ['types'],
	emits: ['select'],
	methods: {
		handleSelect(index) {
			if (this.selected === index) {
				this.selected = -1
				this.$emit('select', undefined)
				return
			}
			this.selected = index
			this.$emit('select', this.types[index])
		}
	},
	data() {
		return {
			selected: -1
		}
	}
}
</script>

<style scoped>
.type-select {
	height: 130rpx;
	width: 100vw;
	display: flex;
	justify-content: safe;
	align-items: center;
	gap: 20rpx;
	overflow: scroll;
}
::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  color: transparent;
}

.select-cell {
	position: relative;
	width: 140rpx;
	height: 63rpx;
	
	flex-shrink: 0;
	flex-grow: 0;
	
	background: #F8F8F8;
	border: 1px solid rgba(136, 136, 136, 0.2);
	border-radius: 25px;
	
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 63rpx;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	
	color: #333333;
}
</style>