<template>
	<div class="manage_page fillcontain">
		<Header />
		<el-row class="fixed">
	  		<el-col :span="4" class="col4">
				<el-menu :default-active="defaultActive" style="min-height: 100% ; border: none;" theme="dark" router>
					<el-menu-item style="box-shadow: 0px 2px 7px #eee" index="menus"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-menu-item index="line">多条阶梯折线图</el-menu-item>
                    <el-menu-item index="stacked">堆叠条形图</el-menu-item>
                    <el-menu-item index="pie">饼图</el-menu-item>
                    <el-menu-item index="piece_hot">分块热力图</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%; overflow: auto; margin-left: 16.66667%">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
import Header from '../components/Header'

    export default {
		components: {
			Header
		},
		data() {
			return {
			}
		},
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			},
			dataUser: function() {
				return this.$session.get('dataUser')
			}
		},
    }
</script>


<style scoped>
	.fixed {
		margin-top: 64px;
	}
	.col4 {
		height: 100%;
		position: fixed;
		border-right: 1px solid #eeee;
	}
</style>
