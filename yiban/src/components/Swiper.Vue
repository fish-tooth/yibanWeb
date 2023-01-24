<template>
  <!-- :direction= " screen.width>='992px'? 'horizontal':'vertical' " -->
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
      :loop="true"
    >
    <!-- 在原生组件上添加了swiperLast，volunName,volunShareText的css样式 -->
      <swiper-slide class="swiperLast">
        <div class="volunName">志愿者1</div>
        <div class="volunShareText">少年强则国强，在当前的世界形势下，中国正一步步走向世界舞台中心，这意味着着中国青年已经向着外面的世界更近了一步，这需要当代青年有着更大的担当与志向....</div>
        <img
          src="https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3" />
      </swiper-slide>
      <swiper-slide>
        <div class="volunName">志愿者1</div>
        <div class="volunShareText">少年强则国强，在当前的世界形势下，中国正一步步走向世界舞台中心，这意味着着中国青年已经向着外面的世界更近了一步，这需要当代青年有着更大的担当与志向....</div>
        <img
          src="https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3" />
      </swiper-slide>
      <swiper-slide class="swiperNext">
        <div class="volunName">志愿者1</div>
        <div class="volunShareText">少年强则国强，在当前的世界形势下，中国正一步步走向世界舞台中心，这意味着着中国青年已经向着外面的世界更近了一步，这需要当代青年有着更大的担当与志向....</div>
        <img
          src="https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3" />
      </swiper-slide>
      <swiper-slide class="swiperLast">
        <div class="volunName">志愿者1</div>
        <div class="volunShareText">少年强则国强，在当前的世界形势下，中国正一步步走向世界舞台中心，这意味着着中国青年已经向着外面的世界更近了一步，这需要当代青年有着更大的担当与志向....</div>
        <img
          src="https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3" />
      </swiper-slide>
      <swiper-slide class="swiperLast">
        <div class="volunName">志愿者1</div>
        <div class="volunShareText">少年强则国强，在当前的世界形势下，中国正一步步走向世界舞台中心，这意味着着中国青年已经向着外面的世界更近了一步，这需要当代青年有着更大的担当与志向....</div>
        <img
          src="https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3" />
      </swiper-slide>
      <!-- <swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
      > -->
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  
  import "../swiper.css";
  
  // import required modules
  import { EffectCoverflow, Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
  </script>
<style scoped>
/* 伴学案例轮播图 start*/
/* #app {
    height: 100%
}

html,
body {
    position: relative;
    height: 100%;
} */

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 95%;
    height: auto;
    /* padding-top: 50px;
    padding-bottom: 50px; */
}

.swiper-slide {
    /* 修改边距 */
    padding: 4%;
    background-position: center;
    background-size: cover;
    /* 改变边框为圆角 */
    border-radius: 13px;
    /* width: 300px;
    height: 300px; */
    background-color: #fff;
    width: 501px;
    height: 486px;
}

.swiper-slide img {
    display: block;
    margin: 0 auto;
    margin-top: 12%;
    width: 75%;
    height: 53%;
}

/* .swiper-silde-last {
    transform: translate3d(-500px, -0px, 0px) rotateX(0deg) rotateY(0deg) scale(1);
} */
.swiper .swiperNext {
    transform: translate3d(-90%, -80%, 0px);
}

/* 改变小圆点颜色 */
.swiper-pagination-bullet-active {
    --swiper-theme-color: rgba(209, 146, 146, 1);
}

/* 改变小圆点的大小 */
.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
}

/* 改变内部图片边框为圆角 */
img {
    border-radius: 13px;
}

.volunName {
    margin: 0 auto;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}

.volunShareText {
    margin-top: 6%;
    opacity: 1;
    /** 文本1 */
    font-size: 18px;
    font-weight: 400;
    color: rgba(56, 56, 56, 1);
    text-align: left;
    /* vertical-align: top; */

}

/* 透视深度 */
.swiper-3d {
    perspective: 600px;
}

@media(max-width: 992px) {

    /* .swiper-horizontal .swiper-pagination-bullets,
    .swiper-pagination-bullets .swiper-pagination-horizontal {
        width: auto;
    } */
    .swiper {
        height: 600px;
    }

    .swiper-horizontal .swiper-pagination {
        bottom: 40%;
        right: 0px;
        left: auto;
        width: 20px;
        height: auto;
    }

    .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        /* background-color: black; */
    }
}

@media(max-width: 768px) {}


/* 伴学案例轮播图 end*/
</style>