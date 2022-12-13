<template>
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
        <p class="caseText">办学案例</p>    
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
            <div class="more"><a href="#"><div class="moreTo">查看更多</div></a></div>
            <div class="video"></div>
        <div class="dataShow">
            <div class="data1"></div>
            <div class="data2"></div>
            <div class="data3"></div>
            <div class="data4"></div>
        </div>
    </div>
    
    <div class="botmBox">
        <div class="classicCaseText">经典案例 ｜CASE</div>
        <div class="cases">
            <div class="case1">
                <div class="casePhoto"></div>
                <div class="caseIntro"></div>
            </div>
            <div class="case2">
                <div class="casePhoto"></div>
                <div class="caseIntro"></div>
            </div>
        </div>
        <div class="turn">
            <div class="last"></div>
            <div class="next"></div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

//绝对定位
%pos {
    position: absolute;
    z-index: 2;
}
.topBox {
    left: 0px;
    // top: 0px;
    top: 103px;
    width: 1440px;
    height: 906px;
    opacity: 1;
    //add
    position: absolute;
}
.leftCube {
    left: 121px;
    top: 19px;
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
    left: 564px;
    top: 49px;
    width: 816px;
    height: 857px;
    opacity: 1;
    // background: rgba(148, 70, 70, 1);
    background: rgba(223, 114, 113, 1);
    box-shadow: 0px 4px 4px 10px rgba(0, 0, 0, 0.25);
    //add
    position: absolute;
    z-index: 1;
}
.prePhoto {
    left: 58px;
    top: 478px;
    width: 569px;
    height: 357px;
    opacity: 1;
    background: url(https://img.js.design/assets/img/6380d03ba34f1378224817e9.png#0146474d33854765a8ea9969abccb7ac);
    //add
    @extend %pos;
    

}
.caseText {
    left: 547px;
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
    right: 70px;
    top: 390px;
    width: 140px;
    height: 26px;
    // border: 1px solid pink;
    @extend %font1;
    @extend %pos;
}
.reportNum {
    right: 70px;
    top: 420px;
    width: 140px;
    height: 26px;
    @extend %font1;
    @extend %pos;
}
.eduHelp {
    // width: 180px;
    right: 70px;
    top: 466px;
    width: 180px;
    height: 53px;
    @extend %font1;
    @extend %pos;

}
.eduCoop {
    right: 70px;
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
    left: 536px;
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
    left: 536px;
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
    left: 0px;
    top: 1010px;
    width: 1440px;
    height: 998px;
    //add
    position: absolute;
}
.projectIntro {
    left: 70px;
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
    width: 298px;
    height: 64.25px;
    opacity: 1;
    background: rgba(209, 146, 146, 0.56);
    position: absolute;

}
.video {
    left: 670px;
    top: 192px;
    width: 600px;
    height: 400px;
    // left: 582.65px;
    // top: 192px;
    // width: 732.38px;
    // height: 549px;
    opacity: 1;
    border-radius: 13px;
    background: url(https://img.js.design/assets/img/63841db370139645b61f7887.png#68c43d6f1a06b5512316ea25cbdc98d5);
    position: absolute;
}
.moreTo {
    left: 46px;
    top: 17px;
    width: 210px;
    height: 35px;
    opacity: 1;
    /** 文本1 */
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 0px;
    // line-height: 0px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
    //add
    position: absolute;


}
.dataShow {
    display: flex;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 171px;
    opacity: 1;
    background: linear-gradient(180deg, rgba(223, 114, 113, 0) 0%, rgba(222, 115, 113, 0.08) 28.57%, rgba(222, 115, 113, 0.15) 84.45%);

}

.data1 {
    margin-left: 130px;
    width: 300px;
    height: 171px;
    line-height: 171px;
    background-color: pink;
}
.data2 {
    
    width: 300px;
    height: 171px;
    line-height: 171px;
    background-color: pink;
}
.data3 {
    
    width: 300px;
    height: 171px;
    line-height: 171px;
    background-color: pink;
}
.data4 {
    
    width: 300px;
    height: 171px;
    line-height: 171px;
    background-color: pink;
}

.botmBox {
    position: absolute;
    // top: 2127px;
    top: 2157px;
    left: 61px;
    width: 1316px;
    height: 863px;
    // background-color: yellow;

}
.classicCaseText {
    left: 456px;
    top: 0px;
    width: 399px;
    height: 75px;
    opacity: 1;
    /** 文本1 */
    font-size: 48px;
    font-weight: 500;
    letter-spacing: 0px;
    // line-height: 0px;
    color: rgba(0, 0, 0, 1);
    justify-content: center;
    // text-align: center;
    // vertical-align: top;
    position: absolute;
}
.cases {
    display: flex;
    position: absolute;
    top: 88px;
    width: 100%;
    height: 501px;
    // background-color: rgb(118, 144, 166);
}
%case {
    top: 2290px;
    width: 628px;
    height: 501px;
}
.case1 {
    left: 61px;
    @extend %case;
}
.case1 .casePhoto{
    width: 628px;
    height: 419px;
    opacity: 1;
    border-radius: 13px;
    background: url(https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3);

}
.case1 .caseIntro {
    left: 62px;
    // top: 2708px;
    width: 618px;
    height: 84px;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);

}
.case2 {
    margin-left: 41px;
    @extend %case;
}
.case2 .casePhoto {
    width: 628px;
    height: 419px;
    opacity: 1;
    border-radius: 13px;
    background: url(https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3);
}
.case2 .caseIntro {
    width: 618px;
    height: 84px;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
}
.turn {
    display: flex;
    position: absolute;
    left: 538px;
    top: 700px;
   
}
.turn .last{
    
    
    width: 97px;
    height: 54px;
    opacity: 1;
    border: 1px solid rgba(237, 157, 157, 1);     
}
.turn .next {
    width: 97px;
    height: 54px;
    opacity: 1;
    background: rgba(223, 114, 113, 0.8);
    border: 1px solid rgba(237, 157, 157, 1);   
}
</style>