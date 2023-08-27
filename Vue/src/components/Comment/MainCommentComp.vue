<template>
  <div id="comm">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="p1">
      <span> خودرو {{ getpro2.name }}</span>
    </div>
    <div class="p2">
      <img :src="require(`../../assets/cars/${getpro2.image}`)" alt="" />
    </div>
    <div class="info">
      <div class="disc">
        <p>{{ getpro2.discription }}</p>
      </div>
      <div class="title">
        <div class="t1"><h3>مشخصات</h3></div>
      </div>
      <div id="future1" class="future">
        <div class="f1" id="f11">
          <div class="f1_1"><h4>طول</h4></div>
          <div class="f1_2">
            <h5>{{ getpro2.height }} میلی متر</h5>
          </div>
        </div>
        <div class="f1">
          <div class="f1_1"><h4>عرض</h4></div>
          <div class="f1_2">
            <h5>{{ getpro2.width }} میلی متر</h5>
          </div>
        </div>
        <div class="f1">
          <div class="f1_1"><h4>ارتفاع</h4></div>
          <div class="f1_2">
            <h5>{{ getpro2.ertefa }} میلی متر</h5>
          </div>
        </div>
        <div class="f1">
          <div class="f1_1"><h4>وزن</h4></div>
          <div class="f1_2">
            <h5>{{ getpro2.weight }} کیلوگرم</h5>
          </div>
        </div>
        <div class="f1">
          <div class="f1_1"><h4>حجم مخزن سوخت</h4></div>
          <div class="f1_2">
            <h5>{{ getpro2.makhzan_sookht }} لیتر</h5>
          </div>
        </div>
        <div class="f1">
          <div class="f1_1"><h4>حجم صندوق بار</h4></div>
          <div class="f1_2">
            <h5>{{ getpro2.sandoogh_bar }} لیتر</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="box-comm" v-for="item in show" :key="item.id">
      <div class="part1">
        <div class="name">
          <i class="fa fa-user"></i>
          <h3>{{ item.name }}</h3>
        </div>
        <div class="date">
          <span>در تاریخ:</span>
          <span>{{ item.joinDate }}</span>
        </div>
      </div>
      <div class="part2">
        <div class="left">
          <img src="../../assets/comment.png" alt="" />
        </div>
        <div class="right">
          <p>{{ item.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainCommentComp",
  metaInfo: {
    title: "نظرات",
  },
  data() {
    return {
      link2: null,
      newlink2: null,
      getpro2: null,
      show: null,
    };
  },
  mounted() {
    this.newlink2 = this.$route.params.id;
    axios
      .post("https://carstoreapi.iran.liara.run/product2/", {
        link2: this.newlink2,
      })
      .then((response) => {
        const status = JSON.parse(response.status);
        if (status === 200) {
          this.getpro2 = response.data;
        }
      });
    axios
      .post("https://carstoreapi.iran.liara.run/product/show_comment2", {
        pro_id2: this.newlink2,
      })
      .then((response) => {
        const status = JSON.parse(response.status);
        if (status === 200) {
          this.show = response.data;
          for (let index = 0; index < this.show.length; index++) {
            this.show[index].joinDate = this.show[index].joinDate.substring(0,16);
            this.show[index].joinDate = this.show[index].joinDate.replace("T"," ** ");
          }
        }
      });
  },
};
</script>

<style>
#comm {
  width: 100%;
  position: relative;
}
#comm .p1 {
  margin-top: 30px;
  z-index: -5;
  margin-right: 150px;
}
#comm .p1 span {
  font-size: 14px;
  font-weight: 400;
}
#comm .p2 {
  height: 475px;
  width: 75%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
#comm .p2 img {
  height: 475px;
  z-index: -2;
  width: 100%;
}
#comm .info {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
#comm .info .disc {
  width: 100%;
  height: 75px;
}
#comm .info .disc p {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 26px;
  font-size: 14px;
  margin-top: 25px;
}
#comm .info .title {
  height: 75px;
  width: 23%;
  display: flex;
  justify-content: start;
  align-items: center;
}
#comm .info .title .t1 {
  height: 60px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #d2cfcf solid;
  cursor: pointer;
}
#comm .info .title .t2 {
  height: 60px;
  width: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #d2cfcf solid;
  cursor: pointer;
}
#comm .info .title .t1 h3,
#comm .info .title .t2 h3 {
  font-weight: 600;
  font-size: 19px;
  color: black;
}
#comm .info .future {
  height: 450px;
  width: 100%;
  border: 1px #d2cfcf solid;
  margin-top: -8px;
  visibility: visible;
}
#f11 {
  margin-top: 75px;
}
#comm .info .future .f1 {
  height: 50px;
  width: 95%;
  border: 1px #e1e1e1 solid;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#comm .info .future .f1 .f1_1 {
  height: 50px;
  width: 35%;
  border: 1px #e1e1e1 solid;
  display: flex;
  justify-content: right;
  align-items: center;
}
#comm .info .future .f1 .f1_1 h4 {
  margin-right: 20px;
}
#comm .info .future .f1 .f1_2 {
  height: 50px;
  width: 65%;
  border: 1px #e1e1e1 solid;
  display: flex;
  justify-content: right;
  align-items: center;
}
#comm .info .future .f1 .f1_2 h5 {
  margin-right: 20px;
  font-weight: 400;
}
#comm .box-comm {
  height: 250px;
  margin-top: 25px;
  width: 35%;
  background-color: beige;
  margin-bottom: 25px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  position: relative;
}
#comm .box-comm .part1 {
  height: 50px;
  border-bottom: 1px dashed #a8a7a7;
  width: 95%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
}
#comm .box-comm .part1 .name {
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#comm .box-comm .part1 .name h3 {
  color: black;
  font-weight: 400;
}
#comm .box-comm .part1 .date {
  height: 50px;
  width: 240px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#comm .box-comm .part2 {
  height: 200px;
  width: 100%;
  top: 50px;
  position: absolute;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#comm .box-comm .part2 .left {
  height: 200px;
  width: 23%;
  display: flex;
  justify-content: center;
}
#comm .box-comm .part2 .left img {
  height: 80px;
  width: 85px;
}
#comm .box-comm .part2 .right {
  height: 200px;
  width: 82%;
  border: 1px solid #f2f2f2;
  background: rgba(249, 249, 249, 0.38);
  box-shadow: 0 0 2px 2px rgba(220, 220, 220, 0.16);
  border-right: 3px rgba(82, 12, 12, 0.795) solid;
}
#comm .box-comm .part2 .right p {
  padding: 10px;
}
</style>
