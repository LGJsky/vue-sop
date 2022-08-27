<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单 -->
      <el-form
        ref="loginFormRef"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
        :model="loginForm"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont el-icon-user-solid"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="iconfont el-icon-s-cooperation"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data(){
    return {
      //登录表单数据绑定对象
      loginForm: {
        username: 'admin',
        password:'123456',
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户账号', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    //点击重置表单
    resetLoginForm(){
      this.$refs.loginFormRef.resetFields()
    },
    //登录
     login(){
      this.$refs.loginFormRef.validate(async valid=>{
        if(!valid) return;
        const {data:res} = await this.$API.user.login(this.loginForm)
        console.log(res);
        if(res.meta.status !== 200)return this.$message.error({message:res.meta.msg})
        this.$message({message:res.meta.msg,type:'success'})
        window.sessionStorage.setItem('token',res.data.token)
        this.$router.push('/home')
      })
    }
  }
}

</script>

<style lang="less" scoped>
.login_container {
  background-color: #264a6b;
  height: 100%;
  .login_box {
    width: 400px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 25px 0 rgb(0, 0, 0);
    .avatar_box {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 130px;
      height: 130px;
      background-color: #fff;
      border: 1px solid #ccc;
      box-shadow: 0px 0px 10px 0px #ccc;
      border-radius: 50%;
      padding: 10px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .avatar_box:hover {
      box-shadow: 0px 0px 25px -5px #000;
      top: -5px;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  // box-sizing: content-box;
  .btns {
    display: flex;
    justify-content: end;
  }
}
</style>