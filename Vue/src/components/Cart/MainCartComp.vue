<template>
  <div id="cartt">
    <div class="title">
      <h2>سبد خرید</h2>
      <router-link to="/shop"
        ><div class="shop"><span>ادامه خرید</span></div></router-link
      >
    </div>
    <div class="sub">
      <div class="sub_left"><span>کالا</span></div>
      <div class="sub_right">
        <div class="sub_right1"><span>تعداد</span></div>
        <div class="sub_right2"><span>قیمت</span></div>
        <div class="sub_right3"><span>قیمت کل</span></div>
      </div>
    </div>
    <div class="show" v-for="item in cart" :key="item.id">
      <div class="sub_left">
        <div class="info">
          <div class="image">
            <img :src="require(`../../assets/cars/${item.car_image}`)" alt="" />
          </div>
          <div class="name">
            <h3>{{ item.car_name }}</h3>
            <h4>رنگ : {{ item.color }}</h4>
            <router-link :to="'/cart' + '/' + item.car_id">حذف</router-link>
          </div>
        </div>
      </div>
      <div class="sub_right">
        <div class="sub_right1">
          <span>{{ item.amount }}</span>
        </div>
        <div class="sub_right2">
          <span>{{ item.car_price }}</span>
        </div>
        <div class="sub_right3">{{ item.total }}</div>
      </div>
    </div>
    <div class="card2" v-for="(item,index) in cart" :key="item.id">
      <div class="til">
        <span style="margin-left: 20px;">محصول {{++index}}</span>
        <router-link :to="'/cart' + '/' + item.car_id">حذف</router-link>
      </div>
      <div class="subcard2">
        <div class="title" style="border-left: none;"><span>نام محصول</span></div>
        <div class="title" ><h3>{{item.car_name}}</h3></div>
      </div>
      <div class="subcard2">
        <div class="title" style="border-left: none;"><span>تعداد</span></div>
        <div class="title" ><h3>{{item.amount}}</h3></div>
      </div>
      <div class="subcard2">
        <div class="title" style="border-left: none;"><span>قیمت</span></div>
        <div class="title" ><h3>{{item.car_price}}</h3></div>
      </div>
      <div class="subcard2">
        <div class="title" style="border-left: none; border-bottom:1.5px solid #e1e1e1 ;"><span>قیمت کل</span></div>
        <div class="title" style="border-bottom:1.5px solid #e1e1e1 ;"><h3>{{item.total}}</h3></div>
      </div>
    </div>
    <div class="total">
      <div class="left">
        <br />
        <span>جمع کل خرید شما</span>
        <br />
        <br />
        <span>مبلغ قابل پرداخت</span>
      </div>
      <div class="right">
        <br />
        <span>{{ total }}</span>
        <br />
        <br />
        <span style="color: orangered">{{ total }}</span>
      </div>
    </div>
    <div v-on:click="order" class="checkout"><span>ثبت سفارش</span></div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "MainCartComp",
  metaInfo: {
    title: "سبد خرید",
  },
  data() {
    return {
      token: null,
      user: null,
      cart: null,
      arr: [],
      total: null,
      p: null,
      x: null,
    };
  },
  methods: {
    order() {
      axios
        .post("https://carstoreapi.iran.liara.run/order", {
          token: this.token,
        })
        .then((response) => {
          const status = JSON.parse(response.status);
          if (status === 200) {
            swal({
              title: "ثبت سفارش",
              text: response.data.error,
              icon: "success",
              buttons: "باشه",
            });
          }
        });
    },
    aa() {
      console.log(document.getElementById("tt").innerText);
    },
  },
  mounted() {
    if (!this.$session.get("jwt")) {
      swal({
        title: "احراز هویت تایید نشد",
        text: "ابتدا به حساب کاربری خود وارد شوید",
        icon: "error",
        buttons: "رفتن به صفحه اصلی",
      }).then(() => {
        window.location.href = "/login";
      });
    } else {
      this.token = this.$session.get("jwt");
      axios
        .post("https://carstoreapi.iran.liara.run/auth", {
          token: this.token,
        })
        .then((response) => {
          const status = JSON.parse(response.status);
          if (status === 200) {
            this.user = response.data;
            axios
              .post("https://carstoreapi.iran.liara.run/get_cart", {
                user_id: this.user.id,
              })
              .then((response) => {
                const status = JSON.parse(response.status);
                if (status === 200) {
                  this.cart = response.data;
                  this.arr = response.data;
                  this.total = 0;
                  for (let index = 0; index < this.arr.length; index++) {
                    this.p = parseInt(this.arr[index].total);
                    this.total = this.total + this.p;
                  }
                  this.total = this.total + ",000,000";
                }
              });
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            console.log(error.response.data.error);
          }
        });
    }
  },
};
</script>

<style>
#cartt .title {
  height: 100px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  width: 75%;
  justify-content: space-between;
  align-items: center;
}
#cartt .title h2 {
  font-weight: lighter;
}
#cartt .title .shop {
  height: 40px;
  width: 200px;
  background-color: rgb(253, 216, 13);
  border-style: solid;
  border-color: rgb(203, 172, 2);
  border-bottom-width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#cartt .title a {
  color: rgb(255, 255, 255);
  text-shadow: 0px -2px rgb(203 172 2);
  text-align: center;
}
#cartt .title a:hover {
  transition: 0.3s all ease-in-out;
  scale: 1.03;
}
#cartt .card2
{
  display: none;
  margin: 50px 20px;
}
#cartt .subcard2 
{
  border-bottom: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-left: none;
  margin-bottom: -25px;
}
#cartt .subcard2 .title
{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #e1e1e1;
  border-bottom: none;
}
#cartt .sub {
  height: 75px;
  width: 75%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
  border: 1.5px solid #e1e1e1;
}
#cartt .sub .sub_left {
  height: 75px;
  width: 50%;
  display: flex;
  border-left: 1.5px solid #e1e1e1;
  justify-content: right;
  align-items: center;
}
#cartt .sub .sub_left span {
  margin-right: 25px;
  font-size: 15px;
  color: black;
}
#cartt .sub .sub_right {
  height: 75px;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#cartt .sub .sub_right .sub_right1 {
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1.5px solid #e1e1e1;
}
#cartt .sub .sub_right .sub_right1 span {
  font-size: 15px;
  color: black;
}
#cartt .sub .sub_right .sub_right2 {
  height: 75px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1.5px solid #e1e1e1;
}
#cartt .sub .sub_right .sub_right2 span {
  font-size: 15px;
  color: black;
}
#cartt .sub .sub_right .sub_right3 {
  height: 75px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#cartt .sub .sub_right .sub_right3 span {
  font-size: 15px;
  color: black;
}
#cartt .show {
  height: 125px;
  width: 75%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
  border: 1.5px solid #e1e1e1;
  border-top: none;
}
#cartt .show .sub_left {
  height: 125px;
  width: 50%;
  border-left: 1.5px solid #e1e1e1;
}
#cartt .show .sub_left .info {
  height: 125px;
  width: 80%;
  display: flex;
  justify-content: start;
  align-items: center;
}
#cartt .show .sub_left .info .name {
  height: 125px;
  width: 100%;
}
#cartt .show .sub_left .info .name h3,
#cartt .show .sub_left .info .name h4 {
  font-weight: lighter;
  margin-right: 25px;
}
#cartt .show .sub_left .info .image {
  height: 125px;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#cartt .show .sub_left .info a {
  color: blue;
  margin-right: 25px;
  cursor: pointer;
}
#cartt .show .sub_left .info a:hover
{
  text-decoration: underline;
}
#cartt .show .sub_left .info span:hover {
  color: purple;
}
#cartt .show .sub_left .info .image img {
  height: 90px;
  width: 115px;
}
#cartt .show .sub_right {
  height: 125px;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#cartt .show .sub_right .sub_right1 {
  height: 125px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1.5px solid #e1e1e1;
}
#cartt .show .sub_right .sub_right2 {
  height: 125px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1.5px solid #e1e1e1;
}
#cartt .show .sub_right .sub_right3 {
  height: 125px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#cartt .total {
  height: 100px;
  width: 30.1%;
  display: flex;
  margin-right: 881px;
  justify-content: space-evenly;
  align-items: center;
  border: 1.5px solid #e1e1e1;
  border-top: none;
}
#cartt .total .left {
  height: 100px;
  width: 50%;
}
#cartt .total .left span {
  margin-right: 50px;
}
#cartt .total .right {
  height: 100px;
  width: 50%;
}
#cartt .total .right span {
  margin-right: 60px;
}
#cartt .checkout {
  height: 50px;
  width: 250px;
  background-color: #62af65;
  margin-top: 35px;
  margin-bottom: 85px;
  margin-right: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#cartt .checkout:hover {
  transition: 0.2s all ease-in-out;
  background-color: #51a054;
}
#cartt .checkout span {
  color: white;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
}

@media (min-width: 320px) and (max-width: 480px) {
  #cartt .sub , #cartt .show
  {
    display: none;
  }
  #cartt .card2 
  {
    display: block;
  }
  #cartt .total
  {
    margin: 0;
    width: 100%;
    border: none;
  }
  #cartt .checkout 
  {
    margin: 0;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  #cartt .sub , #cartt .show
  {
    display: none;
  }
  #cartt .card2 
  {
    display: block;
  }
  #cartt .total
  {
    margin: 0;
    width: 100%;
    border: none;
  }
  #cartt .checkout 
  {
    margin: 0;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  #cartt .sub , #cartt .show
  {
    display: none;
  }
  #cartt .card2 
  {
    display: block;
  }
  #cartt .total
  {
    margin: 0;
    width: 100%;
    border: none;
  }
  #cartt .checkout 
  {
    margin: 0;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  #cartt .sub , #cartt .show
  {
    display: none;
  }
  #cartt .card2 
  {
    display: block;
  }
  #cartt .total
  {
    margin: 0;
    width: 100%;
    border: none;
  }
  #cartt .checkout 
  {
    margin: 0;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1026px) and (max-width: 1495px) {
  #cartt .sub , #cartt .show
  {
    display: none;
  }
  #cartt .card2 
  {
    display: block;
  }
  #cartt .total
  {
    margin: 0;
    width: 100%;
    border: none;
  }
  #cartt .checkout 
  {
    margin: 0;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
