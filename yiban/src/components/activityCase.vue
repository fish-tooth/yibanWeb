<template>
    <div style="margin: 0 auto" >
    <div class="topBox">
        <div class="leftCube"></div>
        <div class="rightCube">
                <div class="stuNum">覆盖学生10000+</div>
                <div class="reportNum">媒体报道500余次</div>
                <div class="eduHelp">线上线下教学结合帮助学生考上理想大学</div>
                <div class="eduCoop">与校企政组形成良好合作共同营造良好的公益教育生态</div>
                <div class="course"><a href="#" class="courseTo">精品课堂  ></a></div>
                <div class="lecture"><a href="#" class="lectureTo">学霸讲座  ></a></div>
        </div>
        <div class="prePhoto"></div>
        <p class="caseText">伴学案例</p>    
    </div>
    <div class="midBox">
            <div class="title">以伴教育专项1</div>
            <div class="text"><p>
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
            <div class="video">
               <!-- 添加视频 -->
               <div class="nameBg"><div class="projectName">“以爱之名，伴你成长”青少年关爱帮扶活动</div></div>
            </div>
        <div class="dataShow">
            <div class="data1"><div class="dataNum1"><span style="border-bottom: 2px solid rgba(173, 106, 106, 1); ">4</span></div><div class="dataTitle1">项目总数</div></div>
            <div class="data2"><div class="dataNum2"><span style="border-bottom: 2px solid rgba(173, 106, 106, 1); ">5100</span></div><div class="dataTitle2">志愿者人数</div></div>
            <div class="data3"><div class="dataNum3"><span style="border-bottom: 2px solid rgba(173, 106, 106, 1); ">3124</span></div><div class="dataTitle3">服务学生数</div></div>
            <div class="data4"><div class="dataNum4"><span style="border-bottom: 2px solid rgba(173, 106, 106, 1); ">2140</span></div><div class="dataTitle4">课堂总量</div></div>
        </div>
    </div>
    
    <div class="botmBox">
    <div class="classicCaseText">经典案例 ｜CASE</div>
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
            <a href="#"><div class="last"><img src="../../public/last1.svg" alt=""></div></a>
            <a href="#"><div class="next"><img src="../../public/next1.svg" alt=""></div></a>
        </div>
    </div>
    <div class="blogBox">
        <div class="blogTitle">
            <span class="blogImg"></span>
            <span class="blogText">志愿分享 | BLOG</span>
            <!-- <span class="blogText">BLOG</span> -->
        </div>
        
    </div>
</div>
</template>

<!-- Swiper JS -->
<script src="./js/swiper.min.js"></script>


<!--    test    -->
<!-- Initialize Swiper -->
<script>
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    }
});
</script>
<!--    test    -->

<style lang="scss" scoped>

    
//绝对定位
%pos {
    position: absolute;
    z-index: 2;
}
.topBox {
    display: flex;
    // justify-content: center;
    left: 0px;
    // top: 0px;
    top: 103px;
    width: 100%;
    height: 906px;
    opacity: 1;
    //add
    position: absolute;
    align-items: center;
}
.leftCube {
    // left: 121px;
    left: 10%;
    top: -155px;
    width: 546px;
    height: 525px;
    opacity: 1;
    background: linear-gradient(-50deg, rgba(237, 157, 157, 1) 50%, rgba(224, 184, 184, 0.01) 100%);
    // box-shadow: 0px 4px 4px 10px rgba(0, 0, 0, 0.25);
    box-shadow: 10px 25px 8px 15px rgb(0 0 0 / 25%);
    //add
    position: relative;
    z-index: 2;
}
.rightCube {
    // left: 564px;
    // right: 1%;
    top: 49px;
    width: 816px;
    height: 857px;
    opacity: 1;
    // background: rgba(148, 70, 70, 1);
    background: rgba(223, 114, 113, 1);
    box-shadow: 0px 4px 4px 10px rgba(0, 0, 0, 0.25);
    //add
    // position: absolute;
    position: relative;
    z-index: 1;
}
.prePhoto {
    left: 5%;
    top: 478px;
    width: 569px;
    height: 357px;
    opacity: 1;
    background: url(https://img.js.design/assets/img/6380d03ba34f1378224817e9.png#0146474d33854765a8ea9969abccb7ac);
    //add
    z-index: 3;
    position: absolute;
    

}
.caseText {
    // left: 547px;
    left: 35%;
    top: 330px;
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
    //add
    @extend %pos;
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
    right: 10%;
    top: 390px;
    width: 140px;
    height: 26px;
    // border: 1px solid pink;
    @extend %font1;
    @extend %pos;
}
.reportNum {
    right: 10%;
    top: 420px;
    width: 140px;
    height: 26px;
    @extend %font1;
    @extend %pos;
}
.eduHelp {
    // width: 180px;
    right: 10%;
    top: 466px;
    width: 180px;
    height: 53px;
    @extend %font1;
    @extend %pos;

}
.eduCoop {
    right: 10%;
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
    right: 10%;
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
    right: 10%;
    top: 740px;
    width: 207px;
    height: 65px;
    opacity: 1;
    border: 2px solid rgba(255, 255, 255, 1);  
    border-top: 0px;    
    @extend %pos;

}
.courseTo, .lectureTo {
    text-decoration: none;
    @extend %font2;
}
.midBox {
    display: flex;
    left: 0px;
    top: 1010px;
    width: 100%;
    // width: 100%;
    height: 998px;
    //add
    position: absolute;
}
.projectIntro {
    // left: 70px;
    left: 20%;
    top: 1141px;
    width: 465px;
    height: 589.25px;
    opacity: 1;
    //add
   

}
.title {
    left: 90px;
    top: 150px;
    width: 448px;
    height: 100px;
    opacity: 1;
    /** 文本1 */
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0px;
    // line-height: 0px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
    position: absolute;
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
    position: absolute;
}
.more {
    left: 90px;
    top: 650px;
    width: 230px;
    height: 64.25px;
    opacity: 1;
    background: rgba(209, 146, 146, 0.56);
    // position: absolute;
    position: relative;

}
.video {
    // left: 670px;
    display: flex;
    right: 10%;
    top: 192px;
    width: 600px;
    height: 400px;
    opacity: 1;
    border-radius: 13px;
    background: url(https://img.js.design/assets/img/63841db370139645b61f7887.png#68c43d6f1a06b5512316ea25cbdc98d5);
    position: absolute;
    // position: relative;
}
.nameBg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    opacity: 0.6;
    background-color: rgb(56, 56, 56);
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
.moreTo {
    left: 46px;
    width: 210px;
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
    //add
    position: absolute;
}

.icon1 {
    position: absolute;
    left: 140px;
    width: 64px;
    height: 64px;
    line-height: 64px;
    background: url(../../public/arrow.png) no-repeat;
    background-position: center;
    background-size: 60%;
}
.dataShow {
    display: flex;
    position: absolute;
    bottom: 0px;
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
.dataNum1, .dataNum2, .dataNum3, .dataNum4 {
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
.dataTitle1, .dataTitle2, .dataTitle3, .dataTitle4{
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
    position: absolute;
    top: 2127px;
    margin: 0 auto;
    // margin-left: 160px;
    width: 100%;
    // width: 100%;
    height: 840px;

}
.classicCaseText {
    // position: absolute;
    // top: 2127px;
    margin: 0 auto;
    // left: 456px;
    width: 399px;
    height: 75px;
    opacity: 1;
    /** 文本1 */
    font-size: 48px;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    justify-content: center;
}
.cases {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 501px;
    // background-color: rgb(118, 144, 166);
}
%case {
    width: 628px;
    height: 501px;
}
.case1 {
    // left: 61px;
    @extend %case;
}
.case1 .casePhoto1 {
    width: 628px;
    height: 419px;
    opacity: 1;
    border-radius: 13px;
    background: url(https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3);

}
.case1 .caseIntro1 {
    left: 60px;
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
    margin-left: 5%;
    @extend %case;
}
.case2 .casePhoto2 {
    width: 628px;
    height: 419px;
    opacity: 1;
    border-radius: 13px;
    background: url(https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3);
}
.case2 .caseIntro2 {
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
.turn .last{
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
    // left: -6px;
    display: flex;
    top: 2900px;
    width: 100%;
    // width: 100%;
    height: 624px;
    opacity: 1;
    background: rgba(223, 114, 113, 0.15);
    position: absolute;
}
.blogImg {
    display: inline-block;
    left: -57px;
    top: 3172px;
    width: 210px;
    height: 100px;
    opacity: 1;
    // background: url(https://img.js.design/assets/img/6384510a5bcbfa4c60fab5fa.png#ee85aa49dae8f3a60383b8a15c5dadb6) no-repeat;
    background: url(../../public/flower.png) no-repeat;
    background-blend-mode: multiply;
    background-size: 100%;

}
.blogText {
    position: absolute;
    // display: inline-block;
    display: flex;
    left: 161px;
    top: 20px;
    width: 393px;
    height: 74px;
    opacity: 1;
    /** 文本1 */
    font-size: 38px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 74px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
}

</style>