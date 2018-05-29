<template>
  <div class="login" id="login">
    <div class="log-bg">
        <div class="log-logo">VUE</div>
        <div class="log-text">xixi.vue@2018</div>
      </div>
      <el-form :model="formInline" label-width="100px" @keyup.enter.native="handleSubmit('formInline')" :rules="ruleInline" ref="formInline" class="demo-ruleForm">
        <el-form-item class="itemClass" label="用户名" prop="user">
          <el-input v-model="formInline.user" placeholder="admin"></el-input>
        </el-form-item>
        <el-form-item class="itemClass" label="密码" prop="password">
          <el-input type="password" v-model="formInline.password" placeholder="123"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="bthClass" :loading="isLoging" @click="handleSubmit('formInline')">{{!isLoging ? '登 录' : '加载中···'}}</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
  } from 'vuex'
  
  export default {
    name: 'Login',
    data() {
      return {
        isLoging: false,
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [{ required: true, message: '请输入用户名', trigger: 'blur' },],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 2, message: '最小长度两个字符', trigger: 'blur' }
          ]
        },
      }
    },
    computed: {
      ...mapState('login', {
        userInfo: 'userInfo'
      })
    },
    methods: {
      ...mapActions('login', ['getLogin']),
      //登录逻辑
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.toLogin();
          } else {
            this.$message.error('Fail!');
          }
        })
      },
      //登录请求
      toLogin() {

        let loginParam = {
          user: this.formInline.user,
          password: this.formInline.password
        }
        //设置在登录状态
        this.isLoging = true;
  
        setTimeout(() => {

          this.isLoging = false;
  
          // 把登录用户名和密码 传给action
          this.getLogin(loginParam)
  
          const infoUser = this.userInfo;
          const userKey = Object.keys(infoUser);
          if(userKey.includes(loginParam.user)) {
            if (infoUser[loginParam.user].password === loginParam.password) {
              // 设置 过期时间
              let expireDays = 1000 * 60;
              this.$session.set('session', expireDays);
              // 存储用户名 密码
              this.$session.set('loginU', loginParam)
              
              this.$router.push('/menus')
              this.$message.success('success!');
            }else {
              this.$message.error('用户名或密码错误');
            }
          } else {
            this.$message.error('用户名错误');
          }
        }, 1200)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    position: fixed;
    overflow: hidden;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    margin-top: -350px;
    width: 500px;
    min-height: 555px;
    z-index: 10;
    right: 140px;
    background: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 3px 16px -5px #070707;
    box-shadow: 0px 3px 16px -5px #070707;
  }
  
  .log-bg {
    width: 100%;
    height: 312px;
    overflow: hidden;
  }
  
  .log-logo {
    height: 80px;
    margin: 120px auto 25px;
    text-align: center;
    color: #2d8cf0;
    font-weight: bold;
    font-size: 40px;
  }
  
  .log-text {
    color: #2d8cf0;
    font-size: 13px;
    text-align: center;
    margin: 0 auto;
  }
  
  .log-logo,
  .log-text {
    z-index: 2
  }
  
  .formClass {
    width: 370px;
    margin: auto;
  }
  .itemClass {
    margin-right: 25px;
  }
  .bthClass {
    margin-right: 20%;
  }
</style>