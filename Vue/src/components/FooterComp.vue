<template>
  <div id="footer">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="sec1">
      <span>به ما سر بزنید!</span>
    </div>
    <div class="sec2">
      <span>و با ماشین جدیدتون به خانه برگردید</span>
    </div>
    <div class="sec3">
      <div class="sec3_1">
        <div class="right1">
          <span>amirmehdizadeh969@gmail.com</span>
        </div>
        <div class="right2">
          <span>amirrezamehdizadeh969@yahoo.com</span>
        </div>
      </div>
      <div class="sec3_1">
        <div class="center1">
          <span>استان خراسان رضوی ، تربت حیدریه</span>
        </div>
        <div class="center2">
          <span> شهرک ولیعصر فاز دو</span>
        </div>
      </div>
      <div class="sec3_1">
        <div class="left1">
          <span>051-52294920</span>
        </div>
        <div class="left2"><span>09373905092</span></div>
      </div>
    </div>
    <div class="sec4">
      <div class="sec4_1">
        <a href="https://www.instagram.com" target="_blank"
          ><i class="fa fa-instagram"></i
        ></a>
      </div>
      <div class="sec4_1">
        <a href="https://www.youtube.com" target="_blank"
          ><i class="fa fa-youtube-play"></i
        ></a>
      </div>
      <div class="sec4_1">
        <a href="https://www.twitter.com" target="_blank"
          ><i class="fa fa-twitter"></i
        ></a>
      </div>
      <div class="sec4_1">
        <a href="https://www.telegram.org"><i class="fa fa-telegram"></i></a>
      </div>
    </div>
    <div class="sec6">
      <i v-on:click="Scroll" class="fa fa-arrow-circle-up"></i>
    </div>
    <div class="sec5"><span>تمامی حقوق سایت محفوظ است</span></div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  methods: {
    Scroll() {
      window.scrollTo(0, 5);
    },
  },
};
</script>

<style>
#footer {
  width: 100%;
  background-color: rgba(47, 44, 44, 0.89);
}
#footer .sec1 {
  display: flex;
  justify-content: center;
  padding-top: 75px;
}
#footer .sec1 span {
  font-size: 56px;
  color: rgb(237, 237, 9);
}
#footer .sec2 {
  display: flex;
  justify-content: center;
  margin-top: -175px;
  margin-bottom: 100px;
}
#footer .sec2 span {
  font-size: 23px;
  color: white;
  padding-top: 20px;
}
#footer .sec3 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
  margin-left: auto;
  margin-top: 60px;
  margin-right: auto;
  flex-wrap: wrap;
  flex-direction: row;
}
#footer .sec3 .sec3_1 {
  height: 90px;
  width: 450px;
  margin: 0 5px;
}
#footer .sec3 .sec3_1 .right1,
#footer .sec3 .sec3_1 .right2,
#footer .sec3 .sec3_1 .center1,
#footer .sec3 .sec3_1 .center2,
#footer .sec3 .sec3_1 .left1,
#footer .sec3 .sec3_1 .left2 {
  display: flex;
  padding-top: 15px;
  justify-content: center;
}
#footer .sec3 .sec3_1 .right1 span,
#footer .sec3 .sec3_1 .right2 span,
#footer .sec3 .sec3_1 .center1 span,
#footer .sec3 .sec3_1 .center2 span,
#footer .sec3 .sec3_1 .left1 span,
#footer .sec3 .sec3_1 .left2 span {
  font-size: 18px;
  color: white;
}
#footer .sec4 {
  height: 100px;
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
#footer .sec4 .sec4_1 {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer .sec4 .sec4_1 i {
  font-size: 40px;
  color: rgb(185, 181, 181);
}
#footer .sec4 .sec4_1 i:hover {
  transition: 0.3s all ease-in-out;
  scale: 1.2;
  color: aqua;
}
#footer .sec5 {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  align-items: center;
}
#footer .sec5 span {
  color: white;
  font-size: 12px;
  font-weight: lighter;
}
#footer .sec6 {
  height: 50px;
  width: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer .sec6 i {
  font-size: 30px;
  cursor: pointer;
  color: rgb(17, 232, 17);
}

@media (min-width: 320px) and (max-width: 480px) {
  #footer .sec1 span
  {
    font-size: 45px;
  }
  #footer .sec2 span
  {
    font-size: 22px;
  }
  #footer .sec2 
  {
    margin-bottom: 0px;
  }
  #footer .sec3
  {
    width: 100%;
  }
  #footer .sec3 .sec3_1
  {
    margin: 10px 0;
  }
  #footer .sec4 .sec4_1
  {
    margin: 0 15px;
  }
  #footer .sec4 .sec4_1 i 
  {
    font-size: 30px;
  }
  #footer .sec6 
  {
    display: none;
  }
  #footer .sec5 
  {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  #footer .sec4 .sec4_1
  {
    margin: 0 30px;
  }
  #footer .sec5 
  {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #footer .sec4 .sec4_1 i 
  {
    font-size: 30px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  #footer .sec4 .sec4_1
  {
    margin: 0 40px;
  }
  #footer .sec5 
  {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #footer .sec4 .sec4_1 i 
  {
    font-size: 30px;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  #footer .sec4 .sec4_1
  {
    margin: 0 40px;
  }
  #footer .sec5 
  {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #footer .sec4 .sec4_1 i 
  {
    font-size: 30px;
  }
}
</style>
