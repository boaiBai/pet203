<style scoped>
@import "../css/login.css";
</style>

<!--登录模块-->
<template>
    <div id="login">
       <!-- {{title}} -->
      <div class="login-box">
         <div class="title">{{title}}</div>
         <ul class="login-form">
            <div class="error">{{error}}</div>
            <li>
                <span class="for-name">用户名：</span>
                <input type="text" v-on:keyup.enter="login" class="Admin-User" v-model="userName" placeholder="请输入用户名"/>
            </li>
            <li>
              <span  class="for-name">密码：</span>
              <input type="password" v-on:keyup.enter="login" class="psw" v-model="pwd" placeholder="请输入密码"/></li>
            <li>
              <span  class="for-name">验证码：</span>
              <input type="text" v-on:keyup.enter="login" class="vue-code" v-model="number" placeholder="请输入验证码"/>
               <a v-on:click="randow">{{v_code}}</a>
            </li>
            <li>
                <div  class="my-checkbox">
                  <input type="checkbox" id="remeber" v-model="checked"/>
                  <label for="remeber">记住密码</label>
                </div>
                <button v-on:click="login" >登&nbsp;&nbsp;录</button>
                <a>忘记密码</a>
             </li>
          </ul>
      </div>      
    </div>
</template>

<script>
import {getV_Code} from "../js/v-fm.js"  
export default {
  name: "pet-Login",
  data() {
    return {
      userName: "Admin", //登录名
      pwd: "", //密码
      title: "pet203后台管理系统--您的宠物小助手", //title名称
      number: "", //用书输入的验证码
      error: "", //错误信息
      v_code: "", //生成的验证码
      checked: false, //用户是否选中记住密码
    };
  },
  methods: {
    //执行登录
    login: function() {
      if (this.number == "") {
        this.error = "请输入验证码";
        return false;
      }
      if (this.number.toLowerCase() !== this.v_code.toLowerCase()) {
        this.error = "验证码错误";
        this.v_code =getV_Code();
        return false;
      }
      if (this.userName === "" || this.pwd === "") {
        this.error = "用户名或密码错误";
        return false;
      }
      if (this.userName === "Admin") {
        //   this.$router.push({path:'/Footer.vue'})
        alert("登录成功");
      }
    },
    randow: function() {
      this.v_code = getV_Code();
    }
  },
  //加载完成事件
  mounted: function() {
    this.v_code =getV_Code();
  }
};
</script>




