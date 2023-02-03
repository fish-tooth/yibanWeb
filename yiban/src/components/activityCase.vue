<template>
    <div class="topBox">
        <div class="leftCube"></div>
        <div class="rightCube">
            <div class="stuNum">覆盖学生10000+</div>
            <div class="reportNum">媒体报道500余次</div>
            <div class="eduHelp">线上线下教学结合帮助学生考上理想大学</div>
            <div class="eduCoop">与校企政组形成良好合作共同营造良好的公益教育生态</div>
            <div class="course"><a href="#" class="courseTo">精品课堂 ></a></div>
            <div class="lecture"><a href="#" class="lectureTo">学霸讲座 ></a></div>
        </div>
        <div class="prePhoto"></div>
        <p class="caseText">伴学案例</p>
    </div>
    <div class="midBox">
        <div class="leftBox">
            <div class="title">以伴教育专项1</div>
            <div class="text">
                <p>
                    Let a rose by any other name would smell as sweet.
                    让玫瑰不叫玫瑰，依旧芳香如故。
                    功以才成，业由才广。党的二十大报告提出“实施科教兴国战略，强化现代化建设人才支撑”，对深入实施科教兴国战略、
                    人才强国战略、创新驱动发展战略进行系统集成，强化立体协同，作出统筹部署。这是我们党着眼全球化新变局、坚持
                    系统化新观念、聚焦现代化新内涵所作出的科学擘画，必将为以中国式现代化全面推进中华民族伟大复兴提供更雄厚人才
                    基础和更强大战略支撑。</p>
            </div>
            <div class="more">
                <div class="moreTo"><a href="#" style="text-decoration: none; color: black;">查看更多</a></div>
                <div class="icon1"></div>
                <!-- <img src="../../public/微信图片_20221216173825.png" alt=""> -->

            </div>
        </div>
        <div class="video" @mouseenter="enter" @mouseleave="leave">
            <!-- 添加视频 -->
            <div class="nameBg" v-show="seen">
                <div class="projectName">“以爱之名，伴你成长”青少年关爱帮扶活动</div>
            </div>
        </div>
    </div>
    <div class="dataShow">
        <div class="data1">
            <div class="dataNum1"><span style="border-bottom: 2px solid rgba(173, 106, 106, 1); ">4</span></div>
            <div class="dataTitle1">项目总数</div>
        </div>
        <div class="data2">
            <div class="dataNum2"><span style="border-bottom: 2px solid rgba(173, 106, 106, 1); ">5100</span>
            </div>
            <div class="dataTitle2">志愿者人数</div>
        </div>
        <div class="data3">
            <div class="dataNum3"><span style="border-bottom: 2px solid rgba(173, 106, 106, 1); ">3124</span>
            </div>
            <div class="dataTitle3">服务学生数</div>
        </div>
        <div class="data4">
            <div class="dataNum4"><span style="border-bottom: 2px solid rgba(173, 106, 106, 1); ">2140</span>
            </div>
            <div class="dataTitle4">课堂总量</div>
        </div>
    </div>
    <div class="botmBox">
        <div class="caseTitle">
            <div class="classicCaseTitleCh">经典案例</div>
            <div class="split" style="font-size: 60px;"> | </div>
            <div class="classicCaseTitleEn">CASE</div>
        </div>
        <div class="cases">
            <!-- 插入链接 -->
            <div class="case1">
                <div class="casePhoto1"></div>
                <div class="caseIntro1">
                    <div class="caseName">案例名称</div>
                </div>
            </div>
            <div class="case2">
                <div class="casePhoto2"></div>
                <div class="caseIntro2">
                    <div class="caseName">案例名称</div>
                </div>
            </div>
        </div>
        <div class="turn">
            <a href="#">
                <div class="last"><img src="../../public/last1.svg" alt=""></div>
            </a>
            <a href="#">
                <div class="next"><img src="../../public/next1.svg" alt=""></div>
            </a>
        </div>
    </div>
    <div class="blogBox">
        <div class="blogTitle">
            <div class="blogImg"></div>
            <div class="textBox">
                <div class="blogTextCh">志愿分享</div>
                <div class="split" style=" margin-top: 155px; font-size: 60px;"> | </div>
                <div class="blogTextEn">BLOG</div>
            </div>
            <!-- <span class="blogText">BLOG</span> -->
        </div>
        <div class="swiperBox">
            <Swiper></Swiper>
        </div>
    </div>

</template>

<script>
import Swiper from "../components/Swiper.vue";
export default {
    data() {
        return {
            seen: false,
        }
    },
    components: {
        Swiper
    },
    methods: {
        enter: function () {
            this.seen = true;
        },
        leave: function () {
            this.seen = false;
        }
    }
}
</script>

<style lang="scss" scoped>
//绝对定位
%pos {
    position: absolute;
    z-index: 2;
}

.topBox {
    display: flex;
    // top: 103px;
    width: 100%;
    height: 990px;
    opacity: 1;
    align-items: center;
    clear: both;
}

.leftCube {
    left: 121px;
    top: 103px;
    // margin-left: 121px;
    // margin-top: 19px;
    width: 546px;
    // width: 37%;
    height: 525px;
    opacity: 1;
    background: linear-gradient(-70deg, rgba(237, 157, 157, 1) 50%, rgba(224, 184, 184, 0.01) 100%);
    // box-shadow: 0px 4px 4px 10px rgba(0, 0, 0, 0.25);
    box-shadow: 10px 25px 8px 15px rgb(0 0 0 / 25%);
    //add
    position: absolute;
    z-index: 2;
}

.rightCube {
    left: 564px;
    // right: 1%;
    top: 133px;
    width: 816px;
    // width: 56%;
    height: 857px;
    opacity: 1;
    // background: rgba(148, 70, 70, 1);
    background: rgba(223, 114, 113, 1);
    box-shadow: 0px 4px 4px 10px rgba(0, 0, 0, 0.25);
    //add
    position: absolute;
    // position: relative;
    z-index: 1;
}

.prePhoto {
    left: 58px;
    top: 562px;
    width: 569px;
    height: 357px;
    opacity: 1;
    background: url(https://img.js.design/assets/img/6380d03ba34f1378224817e9.png#0146474d33854765a8ea9969abccb7ac);
    //add
    z-index: 3;
    position: absolute;


}

.caseText {
    left: 528px;
    // left: 35%;
    top: 412px;
    width: 242px;
    height: 49px;
    opacity: 1;
    /** 文本1 */
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;
    position: absolute;
    z-index: 3;
}

//简介文本样式
%font1 {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    // line-height: 0px;
    color: rgba(255, 255, 255, 1);
    text-align: right;
    // vertical-align: top;
}

.stuNum {
    right: 53px;
    top: 390px;
    width: 140px;
    height: 26px;
    // border: 1px solid pink;
    @extend %font1;
    @extend %pos;
}

.reportNum {
    right: 53px;
    top: 420px;
    width: 140px;
    height: 26px;
    @extend %font1;
    @extend %pos;
}

.eduHelp {
    // width: 180px;
    right: 53px;
    top: 466px;
    width: 180px;
    height: 53px;
    @extend %font1;
    @extend %pos;

}

.eduCoop {
    right: 53px;
    top: 536px;
    width: 234px;
    height: 53px;
    @extend %font1;
    @extend %pos;
}

//【精品课堂 学霸讲座】字体样式
%font2 {
    font-size: 24px;
    font-weight: 400;
    // letter-spacing: 0px;
    line-height: 66px;
    color: rgba(255, 255, 255, 1);
}

.course {
    right: 53px;
    top: 676px;
    width: 207px;
    height: 65px;
    opacity: 1;
    border: 2px solid rgba(255, 255, 255, 1);
    //add
    @extend %pos;
    justify-content: center;

}

.lecture {
    right: 53px;
    top: 740px;
    width: 207px;
    height: 65px;
    opacity: 1;
    border: 2px solid rgba(255, 255, 255, 1);
    border-top: 0px;
    @extend %pos;

}

.courseTo,
.lectureTo {
    text-decoration: none;
    @extend %font2;
}

.midBox {
    display: flex;
    width: 100%;
    height: 827px;

}

.leftBox {
    // width: 33%;
    // height: 65%;
    margin-left: 63px;
    width: 472px;
    height: 589px;
    // background-color: pink;
}

.projectIntro {
    // left: 70px;
    // left: 20%;
    top: 1141px;
    width: 465px;
    height: 589.25px;
    opacity: 1;
}

.title {
    margin-left: 7px;
    margin-top: 150px;
    width: 448px;
    height: 100px;
    opacity: 1;
    /** 文本1 */
    font-size: 36px;
    font-weight: 700;
    // letter-spacing: 0px;
    // line-height: 0px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
}

.text {
    left: 90px;
    top: 250px;
    width: 465px;
    height: 400px;
    opacity: 1;
    /* 文本1 */
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0px;
    // line-height: 0px;
    color: rgba(0, 0, 0, 1);
    // text-align: left;
    text-align: justify;
    vertical-align: top;
}

.more {
    left: 90px;
    top: 650px;
    width: 230px;
    height: 64.25px;
    opacity: 1;
    background: rgba(209, 146, 146, 0.56);
}

.moreTo {
    display: inline-block;
    margin-left: 46px;
    width: 100px;
    height: 64px;
    opacity: 1;
    /** 文本1 */
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 0px;
    line-height: 64px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
}

.icon1 {
    display: inline-block;
    // left: 140px;
    width: 64px;
    height: 64px;
    line-height: 64px;
    background: url(../../public/arrow.png) no-repeat;
    background-position: center;
    background-size: 60%;
}

.video {
    // left: 670px;
    // display: flex;
    position: relative;
    margin-top: 193px;
    margin-left: 48px;
    width: 732px;
    height: 549px;
    opacity: 1;
    border-radius: 13px;
    // background: url(https://img.js.design/assets/img/63841db370139645b61f7887.png#68c43d6f1a06b5512316ea25cbdc98d5);
    background: url(https://img.js.design/assets/img/63841db370139645b61f7887.png#68c43d6f1a06b5512316ea25cbdc98d5);
}

.nameBg {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 60px;
    opacity: 0.6;
    background-color: rgb(98, 98, 98);
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
}

.projectName {
    left: 40px;
    opacity: 1;
    /** 文本1 */
    font-size: 18px;
    font-weight: 400;
    // letter-spacing: 0px;
    line-height: 60px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;
    position: absolute;

}


.dataShow {
    display: flex;
    // position: absolute;
    // bottom: 0px;
    width: 100%;
    height: 171px;
    margin: 0 auto;
    opacity: 1;
    background: linear-gradient(180deg, rgba(223, 114, 113, 0) 0%, rgba(222, 115, 113, 0.08) 28.57%, rgba(222, 115, 113, 0.15) 84.45%);
    align-items: center;
}

%num {
    display: flex;
    justify-content: center;
    // width: 40px;
    height: 72px;
    opacity: 1;
    /** 文本1 */
    font-size: 60px;
    font-weight: 400;
    line-height: 72px;
    color: rgba(0, 0, 0, 1);
    // border-bottom: 2px solid rgba(173, 106, 106, 1); 
}

.dataNum1,
.dataNum2,
.dataNum3,
.dataNum4 {
    @extend %num;
}

%dataTitle {
    display: flex;
    justify-content: center;
    top: 60%;
    // width: 125px;
    height: 44px;
    opacity: 1;
    /** 文本1 */
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 44px;
    color: rgba(0, 0, 0, 1);
}

.dataTitle1,
.dataTitle2,
.dataTitle3,
.dataTitle4 {
    @extend %dataTitle;
}

.data1 {
    width: 25%;
    height: 171px;
    line-height: 171px;
}

.data2 {
    position: relative;
    width: 25%;
    height: 171px;
    line-height: 171px;
}

.data3 {
    position: relative;
    width: 25%;
    height: 171px;
    line-height: 171px;
}

.data4 {
    position: relative;
    width: 25%;
    height: 171px;
    line-height: 171px;
}

.botmBox {
    margin-top: 139px;
    width: 100%;
    height: 840px;
    // background-color: lightgreen;

}

.caseTitle {
    height: 75px;
    display: flex;
    justify-content: center;
}

.classicCaseTitleCh {
    // left: 456px;
    width: 199px;
    height: 75px;
    opacity: 1;
    /** 文本1 */
    font-size: 48px;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    justify-content: center;
}

.classicCaseTitleEn {
    width: 129px;
    height: 75px;
    font-size: 48px;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    justify-content: center;
}

.cases {
    display: flex;
    // flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 501px;
    // background-color: rgb(118, 144, 166);
}

%case {
    margin: 0 auto;
    width: 628px;
    height: 501px;
}

.case1 {
    @extend %case;
}

.casePhoto1 {
    width: 628px;
    height: 419px;
    opacity: 1;
    border-radius: 13px;
    background: url(https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3);

}

.caseIntro1 {
    // left: 60px;
    // left: 4%;
    // top: 2708px;
    width: 618px;
    height: 84px;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);

}

.caseName {
    line-height: 84px;
    opacity: 1;
    /** 文本1 */
    font-size: 24px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    vertical-align: top;

}

.case2 {
    @extend %case;
}

.casePhoto2 {
    width: 628px;
    height: 419px;
    opacity: 1;
    border-radius: 13px;
    background: url(https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3);
}

.caseIntro2 {
    width: 618px;
    height: 84px;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
}

.turn {
    display: flex;
    justify-content: center;
    vertical-align: middle;
    margin-top: 40px;
}

.turn .last {
    width: 97px;
    height: 54px;
    opacity: 1;
    border: 1px solid rgba(237, 157, 157, 1);
    text-align: center;
}

.turn .next {
    width: 97px;
    height: 54px;
    opacity: 1;
    background: rgba(223, 114, 113, 0.8);
    border: 1px solid rgba(237, 157, 157, 1);
    text-align: center;
}

//志愿分享blog
.blogBox {
    width: 100%;
    height: 1024px;
    opacity: 1;
    background: rgba(223, 114, 113, 0.15);
}

.blogTitle {
    // padding-top: 31px;
    width: 100%;
    height: 272px;
    display: flex;
}

.blogImg {
    display: inline-block;
    margin-top: 100px;
    margin-left: -57px;
    width: 258px;
    height: 171px;
    opacity: 1;
    // background: url(https://img.js.design/assets/img/6384510a5bcbfa4c60fab5fa.png#ee85aa49dae8f3a60383b8a15c5dadb6) no-repeat;
    background: url(../../public/flower.png) no-repeat;
    background-blend-mode: multiply;
    background-size: 100%;

}

.textBox {
    width: 400px;
    display: flex;
}

.blogTextCh,
.blogTextEn {
    display: inline-block;
    margin-top: 138px;
    // margin-left: 100px;
    width: 199px;
    height: 73px;
    opacity: 1;
    /** 文本1 */
    font-size: 48px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 74px;
    color: rgba(0, 0, 0, 1);
    // text-align: left;
    // vertical-align: top;
}



.swiperBox {
    margin: 0 auto;
    // width: 1336px;
    // height: 300px;
    // background-color: blue;
}

// 1200px
@media screen and (min-width: 992px) {

    .leftCube {
        // left: 41px;
        left: 5%;
        top: 181px;
        // width: 315px;
        width: 40%;
        height: 675px;
        // background: linear-gradient(-50deg, rgba(237, 157, 157, 1) 70%, rgba(224, 184, 184, 0.01) 100%);
    }

    .rightCube {
        // left: 564px;
        // right: 1%;
        top: 210px;
        // left: 309px;
        left: 30%;
        // width: 446px;
        width: 56%;
        height: 918px;
        position: absolute;
    }

    .prePhoto {
        // left: 15px;
        left: 2%;
        top: 694px;
        // width: 318px;
        width: 40%;
        height: 389px;
    }

    // 伴学案例四个字
    .caseText {
        // left: 211px;
        left: 27%;
        font-size: 48px;
    }

    .video {
        margin-left: 7%;
        margin-right: 14%;
        // width: 574px;
        width: 73%;

    }

    %case {
        // width: 628px;
        width: 40%;
        // height: 501px;
        height: 450px;
    }

    .case1 {
        margin-left: 4%;

    }

    .casePhoto1,
    .casePhoto2 {
        width: 100%;
        // height: 432px;
    }

    .caseIntro1,
    .caseIntro2 {
        width: 100%;
    }

    .case2 {
        margin-left: 4%;
    }

}

// 992px
@media screen and (max-width: 992px) {

    .leftCube {
        // left: 41px;
        left: 5%;
        top: 181px;
        // width: 315px;
        width: 40%;
        height: 675px;
        background: linear-gradient(-80deg, rgba(237, 157, 157, 1) 50%, rgba(224, 184, 184, 0.01) 100%);
    }

    .rightCube {
        // left: 564px;
        top: 210px;
        // left: 309px;
        left: 30%;
        // width: 446px;
        width: 56%;
        height: 918px;
        position: absolute;
    }

    .prePhoto {
        // left: 15px;
        left: 2%;
        top: 694px;
        // width: 318px;
        width: 40%;
        height: 389px;
    }

    .caseText {
        // left: 211px;
        left: 27%;
        // top: 519px;
    }

    .midBox {
        margin-top: 153px;
        // height: 783px;
    }

    .leftBox {
        // margin-top: 44px;
        margin-top: 3%;
        // margin-left: 36px;
        margin-left: 5%;
        // width: 259px;
        width: 33%;
        // height: 577px;
        height: auto;
    }

    .title {
        // width: 255px;
        width: 100%;

        height: 60px;
    }

    .text {
        // width: 256px;
        width: 100%;
        height: 440px;
    }

    .more {
        width: 175px;
        height: 38px;
    }

    .moreTo {
        margin-left: 14px;
        width: 75px;
        height: 38px;
        line-height: 38px;
        font-size: 18px;
    }

    .botmBox {
        height: 1294px;
    }


    .icon1 {
        width: 30px;
        height: 30px;
        margin-top: 4px;
    }

    .video {
        // width: 405px;
        width: 51%;
        // height: 564px;
        height: 65%;
    }

    .dataShow {
        height: 93px;
    }

    %num {
        font-size: 36px;
    }

    %dataTitle {
        font-size: 20px;
    }

    .caseTitle {
        flex-wrap: wrap;
        margin: 0 auto;
        width: 198px;
        height: auto;
        justify-content: center;
    }

    .classicCaseTitleCh,
    .classicCaseTitleEn {
        width: 198px;
    }

    .split {
        display: none;
    }

    .cases {
        margin: 0 auto;
        height: auto;
        flex-wrap: wrap;
        justify-content: center;
    }

    %case {
        // width: 635px;
        width: 80%;
        height: 517px;
    }

    .case2 {
        margin-top: 14px;
        margin-top: 10;
    }

    .casePhoto1,
    .casePhoto2 {
        // width: 635px;
        width: 100%;
        height: 432px;
    }

    .caseIntro1,
    .caseIntro2 {
        width: 100%;
    }

    .turn {
        // display: flex;
        // justify-content: center;
        // vertical-align: middle;
        // margin-top: 40px;
    }

    .turn .last {
        width: 97px;
        height: 54px;
        opacity: 1;
        border: 1px solid rgba(237, 157, 157, 1);
        text-align: center;
    }

    .blogTitle {
        // flex-wrap: wrap;
        // width: 456px;
        font-size: 40px;
        height: auto;
        // justify-content: center;
    }

    .blogImg {
        margin-top: 18px;
    }

    .textBox {
        width: 199px;
        flex-wrap: wrap;

    }

    .blogBox {
        margin-top: 20%;
        height: auto;
    }

    .blogTextCh {
        // margin-top: 18px;
        margin-top: 10%;
        font-size: 38px;
    }

    .blogTextEn {
        margin-top: 0px;
        margin-left: 0px;
        font-size: 38px;
    }
}

// 768px
@media screen and (max-width: 768px) {
    .leftCube {
        background: linear-gradient(-90deg, rgba(237, 157, 157, 1) 50%, rgba(224, 184, 184, 0.01) 100%);
    }

    .midBox {
        width: 100%;
        height: auto;
        flex-wrap: wrap;
        justify-content: center;
    }

    .leftBox {
        // width: 650px;
        width: 83%;
        height: auto;
        margin: 118px auto;
        // margin-left: 61px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .title {
        width: 100%;
    }

    .text {
        // width: 640px;
        width: 81%;
        // height: 181px;
    }

    .video {
        margin-top: 0px;
        margin-bottom: 145px;
        margin-left: auto;
        margin-right: auto;
        // width: 574px;
        width: 73%;
        // 待修改（比例？)
        height: 608px;
    }

    .cases {
        margin: 0 auto;
        height: auto;
        flex-wrap: wrap;
        justify-content: center;
    }

    %case {
        // width: 635px;
        width: 80%;
        height: 517px;
    }

    .case2 {
        margin-top: 14px;
        margin-top: 10;
    }

    .casePhoto1,
    .casePhoto2 {
        // width: 635px;
        width: 100%;
        height: 432px;
    }

    .caseIntro1,
    .caseIntro2 {
        width: 100%;
    }

    .textBox {
        width: 199px;
        flex-wrap: wrap;

    }


}
</style>