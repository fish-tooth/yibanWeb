<template>
  <div class="header">
    <div class="title">
      <img class="logo" src="/logo.png" alt="logo" />
      <div class="name">以伴青少年<br />发展中心</div>
    </div>
    <div class="index">
      <a class="index-item" href="/#/">首页</a>
      <a class="index-item" href="/#/activityCase">伴学案例</a>
      <a class="index-item" href="/#/">新闻中心</a>
      <a class="index-item" href="/#/">人才招聘</a>
      <a class="index-item" href="/#/">联系我们</a>
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

$hover-color: rgba(238, 106, 107, 1);

%common-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  width: 100%;
  min-height: 80px;
  @extend %common-flex;
  justify-content: space-between;
  color: black;
  box-sizing: border-box;
  padding: 0 20px;
  .title {
    @extend %common-flex;
    .logo {
      width: 40px;
      height: 40px;
    }
    .name {
      margin-left: 10px;
      font-size: 18px;
      font-weight: 400;
      text-align: left;
      font-family: $family1;
    }
  }
  .index {
    @extend %common-flex;

    .index-item {
      display: block;
      color: black;
      margin: 0 20px;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
      font-family: $family3;
      &:hover {
        color: $hover-color;
      }
    }
  }
}

// @mixin size-position($width: auto, $height: auto, $left: auto, $top: auto) {
//   width: $width;
//   height: $height;
//   left: $left;
//   top: $top;
//   position: absolute;
// }

// .head {
//   // @include size-position(1440px, 84px, 0, 0);
//   @include size-position(1440px, 84px, 0, 0);
//   background: rgba(255, 255, 255, 1);
//   z-index: 1;

//   .logo {
//     @include size-position(40px, 40px, 38px, 24px);
//   }

//   .name {
//     @include size-position(90px, 44px, 86px, 20px);
//     color: rgba(0, 0, 0, 1);
//     font: 400 18px/22px $family1;
//     text-align: left;
//     vertical-align: top;
//   }
// }

// %headList {
//   top: 28px;
//   width: 80px;
//   height: 29px;
//   font: 400 20px/29px $family3;
//   color: rgba(0, 0, 0, 1);
//   text-align: left;
//   vertical-align: middle;
//   display: inline-block;
//   // position: $position;
// }

// .headAbout {
//   @extend %headList;
//   left: 970px;
// }

// .headNews {
//   @extend %headList;
//   left: 1075.33px;
// }

// .headRecruit {
//   @extend %headList;
//   left: 1180.67px;
// }

// .headContact {
//   @extend %headList;
//   left: 1286px;
// }
</style>
