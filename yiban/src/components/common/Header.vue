<template>
  <div class="head">
    <!-- <div class="logo"> -->
    <img class="logo"
      src="https://img.js.design/assets/img/636513ba0b26ac3f6170fccb.png#078ed25b566af1b2b66771bf68cb21de"
      alt="图片加载失败" />
    <div class="name">以伴青少年<br />发展中心</div>
    <!-- </div> -->
    <div class="index">
      <div class="headAbout">关于我们</div>
      <div class="headNews">新闻中心</div>
      <div class="headRecruit">人才招聘</div>
      <div class="headContact">联系我们</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
// font-family
$family1: 阿里妈妈数黑体;
$family2: 阿里巴巴惠普体regular;
$family3: 思源黑体;
$family4: 优设标题圆;

@mixin size-position($width: auto, $height: auto, $left: auto, $top: auto) {
  width: $width;
  height: $height;
  left: $left;
  top: $top;
  position: absolute;
}

.head {
  // @include size-position(1440px, 84px, 0, 0);
  @include size-position(1440px, 84px, 0, 0);
  background: rgba(255, 255, 255, 1);
  z-index: 1;


  .logo {
    @include size-position(40px, 40px, 38px, 24px);
  }

  .name {
    @include size-position(90px, 44px, 86px, 20px);
    color: rgba(0, 0, 0, 1);
    font: 400 18px/22px $family1;
    text-align: left;
    vertical-align: top;
  }
}

%headList {
  top: 28px;
  width: 80px;
  height: 29px;
  font: 400 20px/29px $family3;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: middle;
  display: inline-block;
  position: $position;
}

.headAbout {
  @extend %headList;
  left: 970px;
}

.headNews {
  @extend %headList;
  left: 1075.33px;
}

.headRecruit {
  @extend %headList;
  left: 1180.67px;
}

.headContact {
  @extend %headList;
  left: 1286px;
}
</style>
