<template>
  <Layout>
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
              <div class="right"></div>
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
          <div class="number1">10087</div>
          <div class="number11">累计陪伴学生10087人</div>
          <div class="number2">2019</div>
          <div class="number21">累计参加志愿者2019人</div>
          <div class="number3">215</div>
          <div class="number31">累计开展专项辅导陪伴项目215个</div>
        </div>
      </div>

      <div class="coreBusiness">
        <div class="coreTitle">我们的核心工作</div>
        <div class="spread01"></div>
        <div class="spread02"></div>
        <div class="spread03"></div>
        <div class="spread04"></div>
        <div class="spread05"></div>
        <div class="spread06"></div>
      </div>

      <div class="runningProject">
        <div class="runningTitle">我们的行动正在发生</div>
        <div class="project1">
          <div class="upPage1"></div>
          <div class="underPage1">
            <div class="projectTitle">以伴的项目名称</div>
            <div class="content">
              项目的详细介绍分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证产品本身内容有吸引力的核心前提下，仔细揣摩用户心理...
            </div>
          </div>
        </div>
        <div class="project2">
          <div class="upPage2"></div>
          <div class="underPage2">
            <div class="projectTitle">知乎APP</div>
            <div class="content">
              用户主动点击分享。绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮，由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身，比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享。我们从分享时机、分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。
            </div>
          </div>
        </div>
        <div class="project3">
          <div class="upPage3"></div>
          <div class="underPage3">
            <div class="projectTitle">以伴的项目名称</div>
            <div class="content">
              项目的详细介绍分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证产品本身内容有吸引力的核心前提下，仔细揣摩用户心理...
            </div>
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
  </Layout>
</template>

<script setup lang="ts">
import Layout from "@/layouts/default.vue";
useHead({
  title: "首页",
  titleTemplate(title) {
    return title ? `以伴-${title}` : "";
  },
  meta: [
    { name: "description", content: "网页的描述" },
    { name: "keywords", content: "关键字1" },
  ],
});
</script>

<style lang="scss" scoped>
%pos {
  position: absolute;
}

%align {
  text-align: left;
  vertical-align: top;
}

//color
$color255-1: rgba(255, 255, 255, 1);
$color255-04: rgba(255, 255, 255, 0.4);
$color128-1: rgba(128, 128, 128, 1);
$color77-1: rgba(77, 77, 77, 1);

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
}

.picture {
  @include size-position(1440px, 960px, 0, -105px);
  // @include size-position(100%, 50%, 0, -105px);
  @extend %pos;

  background: {
    image: url("https://img.js.design/assets/img/636514531beac627deafba54.jpg#e228673ae2cf533f1f33bd1393df4df0");
    size: 100% 100%;
  }

  > .border {
    @include size-position(523px, 9px, 142px, 439px);
    background: rgba(238, 106, 107, 1);
    @extend %pos;
  }

  > .noteBackground {
    @include size-position(523px, 305px, 142px, 448px);
    background: rgba(18, 18, 18, 0.45);
    @extend %pos;

    > .slogen1 {
      @include size-position(300px, 144px, 49px, 32px);
      @extend %align;
      font: 400 60px/72px $family1;
      color: $color255-1;
      @extend %pos;
    }

    > .slogen2 {
      @include size-position(414px, 28px, 49px, 193px);
      @extend %align;
      // font: 400 20px/28px $family2;
      font: 400 18px/28px $family2; //未设字体
      color: $color255-1;
      @extend %pos;
    }

    > .learnBackground {
      @include size-position(139px, 45px, 49px, 238px);
      background: rgba(219, 123, 123, 1);
      @extend %pos;

      > .learnMore {
        @include size-position(99px, 28px, 8px, 9px);
        @extend %align;
        // font: 400 20px/28px $family2;
        font: 400 19px/28px $family2; //未设字体
        letter-spacing: 5px;
        color: $color255-1;
        @extend %pos;
      }

      > .arrow {
        @include size-position(24px, 24px, 107px, 11px);
        @extend %pos;
      }

      // .right{
      //   border:9px solid $color255-1;
      //   width: 0;
      //   height: 0;
      //   border-color: transparent transparent transparent $color255-1 ;
      //   left: 9px;
      //   top: 6px;
      // }
      .right {
        @include size-position(9px, 12px, 9px, 6px);
        background: $color255-1;
        @extend %pos;
      }
    }
  }

  %roller {
    @include size-position(50px, 6px, auto, 910px);
    background: $color255-04;
    @extend %pos;
  }

  > .roller1 {
    @extend %roller;
    left: 1153px;
  }

  > .roller2 {
    @extend %roller;
    left: 1213px;
  }

  > .roller3 {
    @extend %roller;
    left: 1273px;
  }
}

.aboutUs {
  @include size-position(720px, 764px, 0, 855px);
  background: rgba(238, 106, 107, 1);
  @extend %pos;

  > .aboutTitle {
    @include size-position(192px, 58px, 69px, 70px);
    @extend %align;
    font: 400 48px/58px $family1;
    color: $color255-1;
    @extend %pos;
  }

  > .article {
    @include size-position(534px, 514px, 69px, 185px);
    @extend %align;
    font: 400 18px/25.7px $family3;
    color: $color255-1;
    @extend %pos;
    white-space: pre-wrap;
  }
}

.numberBackground {
  @include size-position(720px, 764px, 720px, 855px);
  @extend %pos;

  %bigNumber {
    @extend %align;
    font: 400 72px/94px $family4;
    letter-spacing: 5px;
    color: rgba(47, 46, 52, 1);
    @extend %pos;
  }

  %smallNumber {
    @extend %align;
    font: 400 14px/21px $family3;
    color: rgba(166, 166, 166, 1);
    @extend %pos;
  }

  > .number1 {
    @extend %bigNumber;
    @include size-position(auto, 94px, 261px, 133px);
  }

  > .number11 {
    @extend %smallNumber;
    @include size-position(auto, 21px, 322px, 217px);
  }

  > .number2 {
    @extend %bigNumber;
    @include size-position(auto, 94px, 286px, 357px);
  }

  > .number21 {
    @extend %smallNumber;
    @include size-position(auto, 21px, 322px, 441px);
  }

  > .number3 {
    @extend %bigNumber;
    @include size-position(auto, 94px, 315px, 584px);
  }

  > .number31 {
    @extend %smallNumber;
    @include size-position(auto, 21px, 286px, 668px);
  }
}

.coreTitle {
  @include size-position(336px, 58px, 69px, 1684px);
  @extend %align;
  font: 400 48px/58px $family1;
  color: rgba(47, 46, 52, 1);
  @extend %pos;
}

%spread {
  @include size-position(108px, 420px, auto, 1815px);
  @extend %pos;
}

.spread01 {
  @include size-position(630px, 420px, 69px, 1815px);
  @extend %pos;
  background: rgba(238, 106, 107, 0.85);
}

.spread02 {
  @extend %spread;
  left: 720px;
  background: $color128-1;
}

.spread03 {
  @extend %spread;
  left: 849px;
  background: rgba(144, 144, 144, 1);
}

.spread04 {
  @extend %spread;
  left: 978px;
  background: rgba(160, 160, 160, 1);
}

.spread05 {
  @extend %spread;
  left: 1107px;
  background: rgba(176, 176, 176, 1);
}

.spread06 {
  @extend %spread;
  left: 1236px;
  background: rgba(192, 192, 192, 1);
}

.runningTitle {
  @include size-position(432px, 58px, 69px, 2435px);
  @extend %align;
  font: 400 48px/58px $family1;
  color: $color77-1;
  @extend %pos;
}

%upPage {
  @include size-position(359px, 189px, auto, 2590px);

  background: {
    image: url(https://img.js.design/assets/smartFill/img348164da74c4b8.jpeg);
    color: rgba(204, 204, 204, 1);
  }

  @extend %pos;
  background-size: 100% 100%;
}

%underPage {
  @include size-position(359px, 280px, auto, 2779px);
  background: rgba(238, 106, 107, 1);
  @extend %pos;
}

$left1: 87px;
$left2: 541px;
$left3: 995px;

.upPage1 {
  @extend %upPage;
  left: $left1;
}

.underPage1 {
  @extend %underPage;
  left: $left1;
}

.upPage2 {
  @extend %upPage;
  left: $left2;
}

.underPage2 {
  @extend %underPage;
  left: $left2;
}

.upPage3 {
  @extend %upPage;
  left: $left3;
}

.underPage3 {
  @extend %underPage;
  left: $left3;
}

.projectTitle {
  @include size-position(auto, 33px, 25px, 28px);
  @extend %align;
  font: 700 24px/33px $family2;
  color: $color255-1;
  @extend %pos;
}

.content {
  @include size-position(294px, 170px, 25px, 74px);
  font: 400 14px/21.25px $family3;
  @extend %align;
  color: rgba(255, 255, 255, 1);
  @extend %pos;
}

.partnerTitle {
  @include size-position(192px, 58px, 87px, 3146px);
  @extend %align;
  font: 400 48px/58px $family1;
  color: $color77-1;
  @extend %pos;
}

.partnerImg {
  @include size-position(1219px, 245px, 135px, 3237px);
  @extend %pos;
}
</style>
