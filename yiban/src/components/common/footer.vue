<template>
  <div class="footer">
    <img
      class="logo footLogo"
      src="https://img.js.design/assets/img/636513ba0b26ac3f6170fccb.png#078ed25b566af1b2b66771bf68cb21de"
      alt="图片加载失败"
    />

    <div class="name footName">以伴青少年<br />发展中心</div>
    <img
      class="license"
      src="https://img.js.design/assets/img/6378c723234a79bb072f82fb.png#07d825d97c552a8344f21e56c2de69cb"
      alt="图片加载失败"
    />
    <div class="more">
      <div class="moreTitle">更多页面</div>
      <div class="footList footAbout">关于我们</div>
      <div class="footList footRecruit">人才招聘</div>
      <div class="footList footNews">新闻中心</div>
      <div class="footList footContact">联系我们</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

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

.footer {
  left: 0px;
  top: 3555px;
  width: 1440px;
  height: 137px;
  opacity: 1;
  background: rgba(47, 46, 52, 1);

  position: absolute;
}

.footLogo {
  left: 37px;
  /* top: 3603px; */

  /* 以footer为参照 */
  top: 48px;
}

.footName {
  left: 85px;
  /* top: 3599px; */
  color: rgba(255, 255, 255, 1);

  /* 以footer为参照 */
  top: 44px;
}

.license {
  left: 217px;
  /* top: 3579px; */
  width: 407px;
  height: 85px;
  opacity: 1;

  position: absolute;
  /* 以footer为参照 */
  top: 24px;
}

.more {
  left: 683px;
  /* top: 3590px; */
  width: 168px;
  height: 64px;
  opacity: 1;

  position: absolute;
  /* 以footer为参照 */
  top: 35px;
}

.moreTitle {
  /* left: 683px; */
  /* top: 3590px; */
  width: 80px;
  height: 21px;
  opacity: 1;
  /** 文本1 */
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 0px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: middle;

  position: absolute;
  /* 以more为参照 */
  top: 0;
  left: 0;
}

.footList {
  width: 80px;
  height: 18px;
  opacity: 1;
  /** 文本1 */
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(179, 179, 179, 1);
  text-align: left;
  vertical-align: middle;

  position: absolute;
  line-height: 18px;
}

.footAbout {
  /* left: 683px; */
  /* top: 3617px; */

  /* 以more为参照 */
  top: 27px;
  left: 0;
}

.footRecruit {
  /* left: 771px; */
  /* top: 3617px; */

  /* 以more为参照 */
  top: 27px;
  left: 88px;
}

.footNews {
  /* left: 683px; */
  /* top: 3635px; */

  /* 以more为参照 */
  top: 45px;
  left: 0;
}

.footContact {
  /* left: 771px; */
  /* top: 3636px; */

  /* 以more为参照 */
  top: 45px;
  left: 88px;
}
</style>
