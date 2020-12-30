<template>
  <div>
    <div id="bg" class="login">
      <canvas id="canvas1"></canvas><canvas id="canvas2"></canvas><canvas id="canvas3"></canvas>
    </div>
    <div class="content">
      <p class="login-label">Login</p>
      <Form :model="userInfo" label-position="left" :label-width="60">
        <FormItem label="用户名" class="ss">
            <Input v-model="userInfo.userName"/>
        </FormItem>
        <FormItem label="密码">
            <Input v-model="userInfo.password"/>
        </FormItem>
        <Button type="primary" ghost class="login-submit" @click="submit">Login In</Button>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        userName: '',
        password: ''
      }
    }
  },
  mounted () {
    require('@/assets/js/canva_moving_effect')
  },
  methods: {
    submit () {
      if (!this.userInfo.userName) {
        this.$Message.error('请输入用户名')
        return
      } else if (this.userInfo.userName !== '欲求兮哉') {
        this.$Message.error('对方不想说话，并且向你抛出了一个异常')
        return
      }
      if (!this.userInfo.password) {
        this.$Message.error('请输入密码')
        return
      } else if (this.userInfo.password !== '435867') {
        this.$Message.error('对方不想说话，并且向你抛出了一个异常')
        return
      }
      this.$Message.success('登陆成功')
      this.$router.push({path: '/index'})
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/css/style.css'
  .login
    width 100%
    height 100%
  .content
    width 66%
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    text-align center
    background #5f98d370
    padding 30px
    max-width 400px
    color #ffffff
    .login-label
      font-size 25px
      margin-bottom 20px
    .ivu-form-item
      margin-bottom 15px
      >>> label.ivu-form-item-label
        color #fff
    .login-submit
      width 40%
</style>
