<template>
  <div class="head">
    <!-- <div class="logo"> -->
    <img
      class="logo headLogo"
      src="https://img.js.design/assets/img/636513ba0b26ac3f6170fccb.png#078ed25b566af1b2b66771bf68cb21de"
      alt="图片加载失败"
    />
    <div class="name headName">以伴青少年<br />发展中心</div>
    <!-- </div> -->
    <div class="index">
      <div class="headList headAbout">关于我们</div>
      <div class="headList headNews">新闻中心</div>
      <div class="headList headRecruit">人才招聘</div>
      <div class="headList headContact">联系我们</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo {
  width: 40px;
  height: 40px;
  opacity: 1;

  position: absolute;
}

.name {
  width: 90px;
  height: 44px;
  opacity: 1;
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  text-align: left;
  vertical-align: top;

  /* float: left; */
  position: absolute;
  line-height: 22px;
  font-family: 阿里妈妈数黑体;
}

.head {
  left: 0px;
  top: 0px;
  width: 1440px;
  height: 84px;
  opacity: 1;
  background: rgba(255, 255, 255, 1);

  position: absolute;
  z-index: 1;
}

.headLogo {
  left: 38px;
  top: 24px;
}

.headName {
  left: 86px;
  top: 20px;
  color: rgba(0, 0, 0, 1);
}

/* 
.index {
    height: 29px;
    width: 400px;
    float: right;
    background-color: rgb(199, 153, 153);
    margin-right: 100px;
    display: flex;
} */

/* .list {
    left: 1075.33px;
    top: 28px;
    width: 80px;
    height: 29px;
    opacity: 1; */
/** 文本1 */
/* font-size: 20px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 29px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: middle;
    float: right;
    margin-right: 20px;


} */

.headList {
  top: 28px;
  width: 80px;
  height: 29px;
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: middle;

  /* float: right; */
  display: inline-block;
  /* display: block; */
  position: absolute;
  line-height: 29px;
  font-family: 思源黑体;
}

.headAbout {
  left: 970px;
}

.headNews {
  left: 1075.33px;
}

.headRecruit {
  left: 1180.67px;
}

.headContact {
  left: 1286px;
}
</style>
