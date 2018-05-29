<template>
    <div class="header_container">
        <div class="topBg">
            <img src="../assets/logo.png" alt="bind.ai">
        </div>
        <el-dropdown class="user" @command="handleCommand" menu-align='start'>
            <span class="el-dropdown-link avator">
                <div class="imgUser">
                    <span>{{userImg || ''}}</span>
                </div>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="home">首页</el-dropdown-item>
                <el-dropdown-item @click="handleCommand" command="logout" v-loading.fullscreen.lock="fullscreenLoading">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        
    </div>
</template>

<script>
    
    export default {    
        data() {        
            return {            
                fullscreenLoading: false,
            }    
        },
        computed: {
            userImg: function () {
                const userData = this.$session.get('loginU')
                return userData.user.charAt(0).toUpperCase()
            }
        },
        methods: {
            handleCommand(command) {
                if (command == 'home') {
                    this.$router.push('/menus');
                } else if (command == 'logout') {
                    this.fullscreenLoading = true
                    setTimeout(() => {
                        this.$message({
                            type: 'success',
                            message: '退出成功'
                        });
                        this.fullscreenLoading = false
                        this.$router.push('/');
                    }, 1000)
                }
            },
        }
    }
</script>

<style scoped>
    .header_container {
        background: #495060;
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 30px;
        width: 100%;
        position: fixed;
        z-index: 99;
        top: 0;
    }
    
    .user {
        margin-right: 60px;
    }
    
    .avator {
        margin-right: 37px;
        cursor: pointer;
        color: #efefef;
    }
    
    .el-dropdown-menu__item {
        text-align: center;
    }
    
    .topBg {
        height: 64px;
        background: #495060;
    }
    .topBg img {
        height: 30px;
        padding: 17px 0 17px 40px;
    }
    .imgUser {
        width: 36px;
        height: 36px;
        background: #fff;
        border-radius:18px;
    }
    .imgUser span {
        color: #444;
        font-size: 24px;
        font-family: 'Microsoft YaHei'
    }
</style>