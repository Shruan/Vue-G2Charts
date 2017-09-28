<template>
  <div class="nav">
    <el-menu class="el-menu-vertical-demo"
    :router="true"
    :default-active="nowRoute"
    :collapse="isCollapse"
    :style="pageStyle"
    theme="dark"
    @open="handleOpen"
    @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">线性图</span>
        </template>
        <el-menu-item-group>
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item index="/">单线图</el-menu-item>
          <el-menu-item index="/multipleLine">多线图</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="/home/1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="/home/1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="/pie">
        <i class="el-icon-menu"></i>
        <span slot="title">饼图　</span>
      </el-menu-item>
      <el-menu-item index="/histogram">
        <i class="el-icon-menu"></i>
        <span slot="title">柱状图</span>
      </el-menu-item>
      <!-- <el-menu-item index="/home/4">
        <i class="el-icon-setting"></i>
        <span slot="title">设置　</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'nav',
  props: {
    isCollapse: Boolean,
    pageStyle: String
  },
  data () {
    return {
      user: {},
      nowRoute: ''
    }
  },
  // created () {
  //   this.user = this.getUser()
  // },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    updateRouter () {
      console.log(this.$route)
      this.nowRoute = this.$route.path
    }
  },
  watchs: {
    '$route': 'updateRouter'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /*min-height: 1000px;*/
}
</style>
