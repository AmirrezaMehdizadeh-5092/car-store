<template>
  <div class="main">
    <div class="sec1">
      <img src="../../assets/main.jpg" alt="" />
      <div class="sec1_down">
        <div class="title">
          <h2>گالــــری ماشیـــــن</h2>
        </div>
        <div class="center">
          <h3>پیشنهاد های جدید: همین امروز با ماشین رویاهات رانندگی کن !</h3>
        </div>
        <div class="down"></div>
      </div>
    </div>
    <div class="sec2">
      <div class="secc">
        <div class="sec2_1">
          <img src="../../assets/1.png" alt="" />
        </div>
        <div class="sec2_1">
          <img src="../../assets/2.png" alt="" />
        </div>
        <div class="sec2_1">
          <img src="../../assets/3.png" alt="" />
        </div>
        <div class="sec2_1">
          <img src="../../assets/4.png" alt="" />
        </div>
        <div class="sec2_1">
          <img src="../../assets/5.png" alt="" />
        </div>
      </div>
    </div>
    <div class="sec4">
      <div class="sec4_1">
        <div class="title">
          <span>بهترین پیشنهادات قیمت</span>
        </div>
        <div class="center">
          <span>خاص ترین ماشین ها با خاص ترین قیمت ها !</span>
        </div>
      </div>
      <div class="sec4_2">
        <div class="best-sellers" v-for="car in arr" :key="car.id">
          <a :href="/shop/ + car._id" target="_blank"
            ><img :src="require(`../../assets/cars/${car.image}`)" alt=""
          /></a>
          <a :href="/shop/ + car._id" target="_blank"
            ><h3>{{ car.name }}</h3></a
          >
          <h5>{{ car.price }}</h5>
        </div>
      </div>
      <div class="sec4_3">
        <router-link to="/shop"><span>تمام محصولات</span></router-link>
      </div>
    </div>
    <div class="sec5">
      <div class="sec5_1">
        <h3>چرا شرکت ما ؟</h3>
      </div>
      <div class="sec5_2"></div>
      <div class="sec5_3">
        <div class="sec5_3_1">
          <img src="../../assets/svg/1.svg" alt="" />
        </div>
        <div class="sec5_3_1">
          <img src="../../assets/svg/2.svg" alt="" />
        </div>
        <div class="sec5_3_1">
          <img src="../../assets/svg/3.svg" alt="" />
        </div>
        <div class="sec5_3_1">
          <img src="../../assets/svg/4.svg" alt="" />
        </div>
        <div class="sec5_3_1">
          <img src="../../assets/svg/5.svg" alt="" />
        </div>
        <div class="sec5_3_1 f">
          <span>تست رایگان رانندگی</span>
        </div>
        <div class="sec5_3_1 f">
          <span>یک هفته استفاده رایگان</span>
        </div>
        <div class="sec5_3_1 f">
          <span>ارسال رایگان</span>
        </div>
        <div class="sec5_3_1 f">
          <span>پیش تایید</span>
        </div>
        <div class="sec5_3_1 f">
          <span>موتور های تایید شده</span>
        </div>
      </div>
    </div>
    <div class="sec6">
      <img src="../../assets/main2.jpg" alt="" />
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "MainHomeComp",
  data() {
    return {
      cars: null,
      arr: [],
      arr2: [],
    };
  },
  mounted() {
    /* axios.get("http://localhost:9856/foods/hamberger").then((response) => {
      console.log(response.data);
      this.food = response.data;
    });*/
    fetch("https://carstoreapi.iran.liara.run/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.arr = data;
        this.arr.splice(6, 7);
      });
  },
};
</script>

<style>
.main {
  margin-top: -20px;
}
.main .sec1 {
  height: 1200px;
  position: relative;
  width: 100%;
}
.main .sec1 img {
  height: 1200px;
  width: 100%;
}
.main .sec1 .sec1_down {
  position: absolute;
  height: 300px;
  opacity: 1;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.514);
  bottom: 0px;
}
.main .sec1 .sec1_down .title {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.main .sec1 .sec1_down .title h2 {
  color: white;
  font-size: 40px;
}
.main .sec1 .sec1_down .center {
  display: flex;
  justify-content: center;
}
.main .sec1 .sec1_down .center h3 {
  color: white;
  font-size: 25px;
}
.main .sec1 .sec1_down .down {
  display: flex;
  margin-top: 35px;
  margin-right: 680px;
  height: 7px;
  width: 150px;
  background-color: yellow;
}
.main .sec2 {
  background-color: rgb(255, 249, 249);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.main .sec2 .secc {
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.main .sec2 .sec2_1 {
  height: 150px;
  width: 150px;
}
.main .sec2 .sec2_1 img {
  height: 150px;
  width: 150px;
}
.main .sec4 {
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin-bottom: 75px;
}
.main .sec4 .sec4_1 {
  height: 350px;
  width: 100%;
}
.main .sec4 .sec4_1 .title,
.main .sec4 .sec4_1 .center {
  display: flex;
  justify-content: center;
}
.main .sec4 .sec4_1 .title span {
  font-size: 35px;
  margin-top: 60px;
  margin-bottom: 50px;
}
.main .sec4 .sec4_1 .center span {
  font-size: 27px;
  margin-bottom: 40px;
}
.main .sec4 .sec4_1 .down {
  display: flex;
  margin-top: 35px;
  margin-right: 700px;
  height: 7px;
  width: 100px;
  background-color: yellow;
}
.main .sec4 .sec4_2 {
  margin-left: 150px;
  margin-right: 150px;
  padding-bottom: 105px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: -75px;
  flex-wrap: wrap;
  align-content: center;
}
.main .sec4 .sec4_2 .best-sellers {
  height: 300px;
  width: 350px;
  margin-top: 100px;
  margin-bottom: 25px;
}
.main .sec4 .sec4_2 .best-sellers:hover + .main .sec5 {
  visibility: hidden;
}
.main .sec4 .sec4_2 .best-sellers img {
  height: 300px;
  width: 350px;
}
.main .sec4 .sec4_2 .best-sellers img:hover {
  transition: 0.3s;
  border-radius: 10px;
  scale: 1.06;
  filter: brightness(60%);
}

.main .sec4 .sec4_2 .best-sellers h3,
.main .sec4 .sec4_2 .best-sellers h5 {
  text-align: center;
  color: black;
}
.main .sec4 .sec4_2 .best-sellers h3:hover {
  color: rgb(100, 100, 237);
  text-shadow: 0 0 50px beige;
}
.main .sec4 .sec4_3 {
  height: 40px;
  width: 200px;
  background-color: rgb(253, 216, 13);
  border-style: solid;
  border-color: rgb(203, 172, 2);
  border-bottom-width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
}
.main .sec4 .sec4_3 a {
  color: rgb(255, 255, 255);
  text-shadow: 0px -2px rgb(203 172 2);
  text-align: center;
}

.main .sec5 {
  background-color: rgb(242, 240, 240);
  width: 100%;
}
.main .sec5 .sec5_1 {
  display: flex;
  justify-content: center;
}
.main .sec5 .sec5_1 h3 {
  margin-top: 80px;
  font-size: 35px;
}
.main .sec5 .sec5_2 {
  display: flex;
  margin-top: 25px;
  margin-right: 700px;
  height: 7px;
  width: 100px;
  background-color: yellow;
}
.main .sec5 .sec5_3 {
  margin-top: 50px;
  margin-right: 200px;
  margin-left: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
}
.main .sec5 .sec5_3 .sec5_3_1 {
  height: 150px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main .sec5 .sec5_3 .f {
  margin-top: -50px;
}
.main .sec5 .sec5_3 .sec5_3_1 img {
  height: 150px;
  width: 150px;
}
.main .sec6,
.main .sec6 img {
  width: 100%;
  height: 750px;
}

@media (min-width: 320px) and (max-width: 480px) {
  .main .sec1 .sec1_down .down {
    display: none;
  }
  .main .sec1 .sec1_down .center {
    text-align: center;
  }
  .main .sec1 .sec1_down .center h3 {
    padding: 0 20px;
  }
  .sec4 .sec4_1 .title span {
    padding: 0 10px;
    text-align: center;
  }
  .sec4 .sec4_1 .center span {
    padding: 0 20px;
    text-align: center;
  }
  .main .sec5 .sec5_2 {
    display: none;
  }
  .main .sec5 .sec5_3 .f {
    display: none;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .main .sec1 .sec1_down .down {
    display: none;
  }
  .main .sec1 .sec1_down .center {
    text-align: center;
  }
  .main .sec1 .sec1_down .center h3 {
    padding: 0 20px;
  }
  .sec4 .sec4_1 .title span {
    padding: 0 10px;
    text-align: center;
  }
  .sec4 .sec4_1 .center span {
    padding: 0 20px;
    text-align: center;
  }
  .main .sec5 .sec5_2 {
    display: none;
  }
  .main .sec5 .sec5_3 .f {
    display: none;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .main .sec5 .sec5_2 {
    display: none;
  }
  .main .sec5 .sec5_3 .f {
    display: none;
  }
  .main .sec1 .sec1_down .down {
    display: none;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {

}
</style>
