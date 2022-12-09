<template>
  <div>
    <div class="picture">
      <div class="border"></div>
      <div class="noteBackground">
        <div class="slogen1">团队力量大<br />公益反响大</div>
        <div class="slogen2">让每个孩子都能享受更高水平、更有质量的教育</div>
        <div class="learnBackground">
          <div class="learnMore">了解更多</div>
          <div class="arrow">
            <!-- <i class="right iconfont">&#xe62c;</div> -->
          </div>
        </div>
      </div>
      <div class="roller1"></div>
      <div class="roller2"></div>
      <div class="roller3"></div>
    </div>

    <!-- <img class="picture"
        src="https://img.js.design/assets/img/636514531beac627deafba54.jpg#e228673ae2cf533f1f33bd1393df4df0"
        alt="图片加载失败"> -->

    <div class="data">
      <div class="aboutUs">
        <div class="aboutTitle">关于我们</div>
        <div class="article">
          以伴青少年发展中心始于2018年，由走出粤北山区的龚旺反哺发起，成立孵化于广州大学，目前是番禺区民办非企业单位（社会组织），接受广州团市委及番禺团区委等单位指导。<br /><br />
          四年实践，向上向善，现已形成心理学家领航、大学生为主体的青少年科学研究和志愿服务共同体。打造“1234”携手以伴公益模式，为医护、应急、警务、扶贫等一线英雄子女及留守、流动青少年等困难学生提供专业长效的心理与素养陪伴，培养具有社会责任感和志愿服务能力的优秀青年人才，为人民英雄解忧排难，为教育公平与乡村振兴大业贡献青年力量。<br /><br />
          团队自主研发3大智能化系统，拥有五项核心技术专利，出版24部专著教材，发起承接“携手以伴，援助湖北”“您为大家，我帮您家”等大型公益活动30余项，携手广州市工青妇等100余个重要力量，累计在全国28省建立258所网校，培育带动200多所高校的6万余名志愿者，受助学生逾10万余名。志愿服务事迹被人民日报等媒体报道618次，团队曾获得教育部司局函件表彰，荣获“中国国际互联网＋创新创业大赛公益组银奖”、“广东优秀战疫典型组织”等荣誉百余项，多次得到钟南山院士和广东省市主要领导的接见和鼓励。
        </div>
      </div>

      <div class="numberBackground">
        <div class="bigNumber number1">10087</div>
        <div class="smallNumber number11">累计陪伴学生10087人</div>

        <div class="bigNumber number2">2019</div>
        <div class="smallNumber number21">累计参加志愿者2019人</div>

        <div class="bigNumber number3">215</div>
        <div class="smallNumber number31">累计开展专项辅导陪伴项目215个</div>
      </div>
    </div>

    <div class="coreBusiness">
      <div class="coreTitle">我们的核心工作</div>
      <div class="spread spread01"></div>
      <div class="spread spread02"></div>
      <div class="spread spread03"></div>
      <div class="spread spread04"></div>
      <div class="spread spread05"></div>
      <div class="spread spread06"></div>
    </div>

    <div class="runningProject">
      <div class="runningTitle">我们的行动正在发生</div>
      <div class="project1">
        <div class="upPage upPage1"></div>
        <div class="underPage underPage1">
          <div class="projectTitle">以伴的项目名称</div>
        </div>
      </div>
      <div class="project2">
        <div class="upPage upPage2"></div>
        <div class="underPage underPage2">
          <div class="projectTitle">知乎APP</div>
        </div>
      </div>
      <div class="project3">
        <div class="upPage upPage3"></div>
        <div class="underPage underPage3">
          <div class="projectTitle">以伴的项目名称</div>
        </div>
      </div>
    </div>

    <div class="cooperationPartner">
      <div class="partnerTitle">合作伙伴</div>
      <img
        class="partnerImg"
        src="https://img.js.design/assets/img/6378c6dd6e9a5c7685b46cb0.png#de5e646163aafe80259239543453a409"
        alt="图片加载失败"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// scss 使用的例子：
%common-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  @extend %common-flex;
  width: 100%;
  min-height: 100vh;
  .con {
    @extend %common-flex;
    width: 100%;
    max-width: 1000px; //版心
    @media (max-width: 750%) {
      // 移动端适配
      max-width: unset;
      margin: 20px;
      box-sizing: border-box;
    }

    //  尽量使用子代选择器'>'
    > .item,
    p {
      margin: 0;
    }
  }
}

// -------------------------------

.picture {
  left: 0px;
  top: -105px;
  width: 1440px;
  height: 960px;
  opacity: 1;

  /* overflow: hidden; */
  background-image: url("https://img.js.design/assets/img/636514531beac627deafba54.jpg#e228673ae2cf533f1f33bd1393df4df0");
  background-size: 100% 100%;
  position: absolute;
  /* top: 105px; */
}

.border {
  left: 142px;
  /* top: 334px; */
  width: 523px;
  height: 9px;
  opacity: 1;
  background: rgba(238, 106, 107, 1);

  position: absolute;
  /* 以picture为参照 */
  top: 439px;
}

.noteBackground {
  left: 142px;
  /* top: 343px; */
  width: 523px;
  height: 305px;
  opacity: 1;
  background: rgba(18, 18, 18, 0.45);

  position: absolute;
  /* 以picture为参照 */
  top: 448px;
}

.slogen1 {
  /* left: 191px;
    top: 375px; */
  width: 300px;
  height: 144px;
  opacity: 1;
  /** 文本1 */
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;

  position: absolute;
  line-height: 72px;
  /* 以noteBackground为参照 */
  left: 49px;
  top: 32px;
  font-family: 阿里妈妈数黑体;
}

.slogen2 {
  /* left: 191px;
    top: 536px; */
  width: 414px;
  height: 28px;
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;

  position: absolute;
  line-height: 28px;
  /* 以noteBackground为参照 */
  left: 49px;
  top: 193px;
  /* font-family: 阿里巴巴普惠体thin; */
  font-family: 阿里巴巴惠普体regular;
}

.learnBackground {
  /* left: 191px;
    top: 581px; */
  width: 139px;
  height: 45px;
  opacity: 1;
  background: rgba(219, 123, 123, 1);

  position: absolute;
  /* 以noteBackground为参照 */
  left: 49px;
  top: 238px;
}

.learnMore {
  /* left: 199px;
    top: 590px; */
  width: 99px;
  height: 28px;
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 5px;
  /* line-height: 0px; */
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;

  position: absolute;
  line-height: 28px;
  /* 以learnBackground为参照 */
  left: 8px;
  top: 9px;
  font-family: 阿里巴巴惠普体regular;
}

.arrow {
  /* arrow-right-fill */
  /* left: 298px;
    top: 592px; */
  width: 24px;
  height: 24px;
  opacity: 1;

  /* 以learnBackground为参照 */
  left: 107px;
  top: 11px;
  /* background-color: aqua; */
  position: absolute;
}

/* .right {
    left: 307px;
    top: 598px;
    width: 9px;
    height: 12px;
    opacity: 1;
    background: rgba(255, 255, 255, 1); */

/* 以arrow为参照 */
/* left: 9px;
    top: 6px;
    position: absolute;
} */

.roller1 {
  /* left: 1153px;
    top: 805px; */
  width: 50px;
  height: 6px;
  opacity: 1;
  background: rgba(255, 255, 255, 0.4);

  position: absolute;
  left: 1153px;
  top: 910px;
}

.roller2 {
  /* left: 1213px;
    top: 805px; */
  width: 50px;
  height: 6px;
  opacity: 1;
  background: rgba(255, 255, 255, 1);

  position: absolute;
  left: 1213px;
  top: 910px;
}

.roller3 {
  /* left: 1273px;
    top: 805px; */
  width: 50px;
  height: 6px;
  opacity: 1;
  background: rgba(255, 255, 255, 0.4);

  position: absolute;
  left: 1273px;
  top: 910px;
}

.aboutUs {
  left: 0px;
  top: 855px;
  width: 720px;
  height: 815px;
  opacity: 1;
  background: rgba(238, 106, 107, 1);

  position: absolute;
}

.aboutTitle {
  /* left: 69px;
    top: 925px; */
  width: 192px;
  height: 58px;
  opacity: 1;
  /** 文本1 */
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;

  position: absolute;
  line-height: 58px;
  left: 69px;
  top: 70px;
  font-family: 阿里妈妈数黑体;
}

.article {
  /* left: 69px;
    top: 1040px; */
  width: 534px;
  height: 514px;
  opacity: 1;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;

  position: absolute;
  line-height: 25.7px;
  left: 69px;
  top: 185px;
  white-space: pre-wrap;
  /* word-break: keep-all; */
  font-family: 思源黑体;
}

.numberBackground {
  left: 720px;
  top: 855px;
  width: 720px;
  height: 815px;
  opacity: 1;
  /* background: rgba(135, 135, 135, 0); */

  /* background-color: rgb(11, 6, 6); */
  position: absolute;
}

.bigNumber {
  height: 94px;
  opacity: 1;
  /** 文本1 */
  font-size: 72px;
  font-weight: 400;
  letter-spacing: 5px;
  /* line-height: 0px; */
  color: rgba(47, 46, 52, 1);
  text-align: left;
  vertical-align: top;

  position: absolute;
  line-height: 94px;
  font-family: 优设标题圆;
}

.smallNumber {
  height: 21px;
  opacity: 1;
  /** 文本1 */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(166, 166, 166, 1);
  text-align: left;
  vertical-align: top;

  position: absolute;
  font-family: 思源黑体;
  line-height: 21px;
}

.number1 {
  top: 133px;
  left: 261px;
  width: 258px;
}

.number11 {
  width: 137px;
  left: 322px;
  top: 217px;
}

.number2 {
  left: 286px;
  top: 357px;
  width: 207px;
}

.number21 {
  left: 322px;
  top: 441px;
  width: 144px;
}

.number3 {
  left: 315px;
  top: 584px;
  width: 149px;
}

.number31 {
  left: 286px;
  top: 668px;
  width: 206px;
}

.coreTitle {
  left: 69px;
  top: 1684px;
  width: 336px;
  height: 58px;
  opacity: 1;
  /** 文本1 */
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(47, 46, 52, 1);
  text-align: left;
  vertical-align: top;

  position: absolute;
  line-height: 58px;
  font-family: 阿里妈妈数黑体;
}

.spread {
  width: 108px;
  height: 420px;
  opacity: 1;

  position: absolute;
}

.spread01 {
  left: 70px;
  top: 1814px;
  background: rgba(128, 128, 128, 1);
}

.spread02 {
  left: 720px;
  top: 1815px;
  background: rgba(128, 128, 128, 1);
}

.spread03 {
  left: 849px;
  top: 1815px;
  background: rgba(144, 144, 144, 1);
}

.spread04 {
  left: 978px;
  top: 1815px;
  background: rgba(160, 160, 160, 1);
}

.spread05 {
  left: 1107px;
  top: 1814px;
  background: rgba(176, 176, 176, 1);
}

.spread06 {
  left: 1236px;
  top: 1815px;
  background: rgba(192, 192, 192, 1);
}

.runningTitle {
  left: 69px;
  top: 2435px;
  width: 432px;
  height: 58px;
  opacity: 1;
  /** 文本1 */
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(77, 77, 77, 1);
  text-align: left;
  vertical-align: top;

  position: absolute;
  line-height: 58px;
  font-family: 阿里妈妈数黑体;
}

.upPage {
  top: 2590px;
  width: 359px;
  height: 189px;
  opacity: 1;
  background-image: url(https://img.js.design/assets/smartFill/img348164da74c4b8.jpeg);
  background-color: rgba(204, 204, 204, 1);

  position: absolute;
  background-size: 100% 100%;
}

.underPage {
  top: 2779px;
  width: 359px;
  height: 280px;
  opacity: 1;
  background: rgba(238, 106, 107, 1);

  position: absolute;
}

.upPage1,
.underPage1 {
  left: 87px;
}

.upPage2,
.underPage2 {
  left: 541px;
}

.upPage3,
.underPage3 {
  left: 995px;
}

.projectTitle {
  /* width: 166px; */
  height: 33px;
  opacity: 1;
  /** 文本1 */
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;

  width: auto;
  line-height: 33px;
  position: absolute;
  font-family: 阿里巴巴普惠体regular;
  left: 25px;
  top: 28px;
}

.partnerTitle {
  left: 87px;
  top: 3146px;
  width: 192px;
  height: 58px;
  opacity: 1;
  /** 文本1 */
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 0px; */
  color: rgba(77, 77, 77, 1);
  text-align: left;
  vertical-align: top;

  position: absolute;
  line-height: 58px;
  font-family: 阿里妈妈数黑体;
}

.partnerImg {
  left: 135px;
  top: 3237px;
  width: 1219px;
  height: 245px;
  opacity: 1;

  position: absolute;
}
</style>
