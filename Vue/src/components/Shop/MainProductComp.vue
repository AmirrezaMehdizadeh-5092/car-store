<template>
  <div id="pro">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="p1">
      <span> خودرو {{ getpro.name }}</span>
    </div>
    <div class="p2">
      <img :src="require(`../../assets/cars/${getpro.image}`)" alt="" />
    </div>
    <div class="info">
      <div class="disc">
        <p>{{ getpro.discription }}</p>
      </div>
      <div class="title">
        <div class="t1"><h3>مشخصات</h3></div>
      </div>
      <div id="future1" class="future">
        <div class="f1" id="f11">
          <div class="f1_1"><h4>طول</h4></div>
          <div class="f1_2">
            <h5>{{ getpro.height }} میلی متر</h5>
          </div>
        </div>
        <div class="f1">
          <div class="f1_1"><h4>عرض</h4></div>
          <div class="f1_2">
            <h5>{{ getpro.width }} میلی متر</h5>
          </div>
        </div>
        <div class="f1">
          <div class="f1_1"><h4>ارتفاع</h4></div>
          <div class="f1_2">
            <h5>{{ getpro.ertefa }} میلی متر</h5>
          </div>
        </div>
        <div class="f1">
          <div class="f1_1"><h4>وزن</h4></div>
          <div class="f1_2">
            <h5>{{ getpro.weight }} کیلوگرم</h5>
          </div>
        </div>
        <div class="f1">
          <div class="f1_1"><h4>حجم مخزن سوخت</h4></div>
          <div class="f1_2">
            <h5>{{ getpro.makhzan_sookht }} لیتر</h5>
          </div>
        </div>
        <div class="f1">
          <div class="f1_1"><h4>حجم صندوق بار</h4></div>
          <div class="f1_2">
            <h5>{{ getpro.sandoogh_bar }} لیتر</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="comment">
      <div class="box">
        <div class="no-comm">
          <span>{{ no_comment }}</span>
          <router-link :to="/comment/ + newlink">{{ list_comm }}</router-link>
        </div>
        <div class="title"><h3>ثبت نظر</h3></div>
        <div class="form">
          <div class="name">
            <div class="text1"><span>نام *</span></div>
            <div class="input1">
              <input required type="text" name="name" ref="name" />
            </div>
          </div>
          <div class="email">
            <div class="text1"><span>ایمیل *</span></div>
            <div class="input1">
              <input required type="email" name="email" ref="email" />
            </div>
          </div>
          <div class="msg">
            <div class="text1"><span>متن *</span></div>
            <div class="input1">
              <textarea required type="text" name="msg" ref="msg" />
            </div>
          </div>
          <div class="secure">
            <div class="text1"><span>کد امنیتی</span></div>
            <div v-on:click="ChangeSecure" class="code">
              <span>{{ rand }}</span>
            </div>
            <span id="tip1"
              >(اگر کد امنیتی خوانا نیست روی آن کلیک کنید تا عوض شود)</span
            >
          </div>
          <div class="secure2">
            <div class="input1">
              <input required type="text" name="secure" ref="secure" />
            </div>
          </div>
          <div v-on:click="SendComment" id="send" class="send">
            <span>ارسال</span>
          </div>
        </div>
      </div>
    </div>
    <div class="p3">
      <h4>خودرو {{ getpro.name }}</h4>
      <br />
      <h4>{{ getpro.price }} تومان</h4>
      <br />
      <h4 style="color: #878787">رنگ: {{ getpro.color }}</h4>
      <div class="order" v-on:click="open">
        <span>افزودن به سبد خرید</span>
      </div>
    </div>
    <div class="buy-box" id="buybox">
      <div class="buy-box-head">
        <span>سبد خرید</span>
        <i v-on:click="close" style="color: white" class="fa fa-close"></i>
      </div>
      <div class="buy-box-center">
        <div class="top">
          <div class="d1">
            <img :src="require(`../../assets/cars/${getpro.image}`)" alt="" />
          </div>
          <div class="d2">
            <span id="s1"> خودرو {{ getpro.name }}</span>
            <br />
            <br />
            <span id="s2">رنگ: {{ getpro.color }}</span>
          </div>
          <div class="d3">
            <span>تعداد :</span>
            <div class="num-div">
              <div class="num" style="cursor: pointer" v-on:click="plus">
                <span>+</span>
              </div>
              <div class="num">
                <span>{{ cnt }}</span>
              </div>
              <div class="num" style="cursor: pointer" v-on:click="mines">
                <span>-</span>
              </div>
            </div>
          </div>
          <span id="pr">{{ getpro.price }}</span>
        </div>
        <div class="bottom">
          <span>جمع کل</span>
          <span style="font-weight: bold">{{ new_price }}</span>
        </div>
      </div>
      <div class="buy-box-down">
        <div v-on:click="cart" class="left">
          <span>افزودن به سبد خرید</span>
        </div>
        <router-link to="/cart"
          ><div class="right"><span>مشاهده سبد خرید</span></div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "MainProductComp",
  metaInfo: {
    title: "محصول",
  },
  data() {
    return {
      link: null,
      newlink: null,
      getpro: null,
      cnt: 1,
      new_price: null,
      old_price: null,
      no_comment: null,
      list_comm: null,
      rand: null,
      name: null,
      email: null,
      message: null,
      code: null,
      min: null,
      max: null,
      token: null,
    };
  },
  methods: {
    open() {
      document.getElementById("buybox").style.display = "inline";
      this.new_price = this.getpro.price;
    },
    close() {
      document.getElementById("buybox").style.display = "none";
    },
    mines() {
      if (this.cnt == 1) {
        this.cnt = 1;
      } else {
        this.cnt--;
        this.old_price = parseInt(this.getpro.price);
        this.old_price = this.old_price + ",000,000";
        this.new_price = parseInt(this.new_price) - parseInt(this.old_price);
        this.new_price = this.new_price + ",000,000";
      }
    },
    plus() {
      this.cnt++;
      this.new_price = parseInt(this.new_price);
      this.old_price = parseInt(this.getpro.price);
      this.old_price = this.old_price + ",000,000";
      this.new_price = parseInt(this.new_price) + parseInt(this.old_price);
      this.new_price = this.new_price + ",000,000";
    },
    ChangeSecure() {
      this.min = Math.ceil(1000);
      this.max = Math.floor(9999);
      this.rand =
        Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },
    SendComment() {
      this.name = this.$refs.name.value;
      this.email = this.$refs.email.value;
      this.message = this.$refs.msg.value;
      this.code = this.$refs.secure.value;
      if (this.code != this.rand) {
        swal({
          title: "خطا",
          icon: "warning",
          text: "کد امنیتی اشتباه است",
        });
      } else {
        axios
          .post("https://carstoreapi.iran.liara.run/product/add_commnet", {
            name: this.name,
            email: this.email,
            message: this.message,
            pro_id: this.newlink,
          })
          .then((response) => {
            const status = JSON.parse(response.status);
            if (status === 200) {
              console.log(response.data);
              swal({
                title: "موفقیت آمیز",
                icon: "success",
                text: response.data.error,
              }).then(() => {
                window.location.reload();
                window.scrollTo(0, 10);
              });
            }
          })
          .catch((error) => {
            if (error.response.status === 400) {
              error.response.data.error;
              swal({
                title: "خطا",
                icon: "error",
                text: error.response.data.error,
              });
            }
          });
      }
    },
    cart() {
      //this.$session.start();
      /*if (this.$session.get(`car${this.i}`) && this.$session.get(`amount${this.i}`) && this.$session.get(`total${this.i}`)) 
      {
        this.i = this.i + 1;
        this.$session.set(`car${this.i}`, this.getpro);
        this.$session.set(`amount${this.i}`, this.cnt);
        this.$session.set(`total${this.i}`, this.new_price);
      } 
      else 
      {
        this.$session.set(`car${this.i}`, this.getpro);
        this.$session.set(`amount${this.i}` , this.cnt);
        this.$session.set(`total${this.i}` , this.new_price);
      }*/
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
          .post("https://carstoreapi.iran.liara.run/cart", {
            token: this.token,
            pro_id: this.newlink,
            amount: this.cnt,
            total: this.new_price,
          })
          .then((response) => {
            const status = JSON.parse(response.status);
            if (status === 200) {
              swal({
                title: "افزودن به سبد خرید",
                icon: "success",
                text: response.data.error,
                buttons: "باشه",
              });
            }
          })
          .catch((error) => {
            if (error.response.status === 400) {
              swal({
                title: "افزودن به سبد خرید",
                icon: "warning",
                text: error.response.data.error,
                buttons: ["باشه", "حذف محصول"],
              }).then((willDelete) => {
                if (willDelete) {
                  axios
                    .post("https://carstoreapi.iran.liara.run/del_cart", {
                      token: this.token,
                      pro_id: this.newlink,
                    })
                    .then((response) => {
                      const status = JSON.parse(response.status);
                      if (status === 200) {
                        swal({
                          title: "حذف از سبد خرید",
                          icon: "success",
                          text: response.data.error,
                          buttons: "باشه",
                        });
                      }
                    })
                    .catch((error) => {
                      if (error.response.status === 400) {
                        swal({
                          title: "خطا",
                          icon: "error",
                          text: error.response.data.error,
                        });
                      }
                    });
                } else {
                  swal.close();
                }
              });
            }
          });
      }
      /*swal({
        title: "افزودن به سبد خرید",
        icon: "success",
        text: "محصول به سبد خرید اضافه شد",
        buttons: "باشه",
      });*/
    },
  },
  mounted() {
    this.min = Math.ceil(1000);
    this.max = Math.floor(9999);
    this.rand = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.newlink = this.$route.params.id;
    axios
      .post("https://carstoreapi.iran.liara.run/product/", {
        link: this.newlink,
      })
      .then((response) => {
        const status = JSON.parse(response.status);
        if (status === 200) {
          this.getpro = response.data;
        }
      });
    axios
      .post("https://carstoreapi.iran.liara.run/product/show_comment", {
        pro_id: this.newlink,
      })
      .then((response) => {
        const status = JSON.parse(response.status);
        if (status === 200) {
          this.list_comm = "مشاهده نظرات";
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          this.no_comment = error.response.data.error;
        }
      });
  },
};
</script>

<style>
#pro {
  width: 100%;
  position: relative;
}
#pro .p1 {
  margin-top: 30px;
  z-index: -5;
  margin-right: 150px;
}
#pro .p1 span {
  font-size: 14px;
  font-weight: 400;
}
#pro .p2 {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#pro .p2 img {
  z-index: -2;
  height: 700px;
}
#pro .p3 {
  position: absolute;
  width: 300px;
  background-color: white;
  top: 60px;
  right: 150px;
}
#pro .p3 h4 {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-weight: 600;
}
#pro .p3 .order {
  height: 50px;
  width: 250px;
  background-color: rgb(253, 216, 13);
  border-style: solid;
  border-color: rgb(203, 172, 2);
  border-bottom-width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  cursor: pointer;
}
#pro .p3 .order span {
  color: rgb(255, 255, 255);
  text-shadow: 0px -2px rgb(203 172 2);
  text-align: center;
}
#pro .buy-box {
  position: sticky;
  top: 0;
  height: 750px;
  width: 350px;
  float: left;
  background-color: #edeff0;
  margin-top: -2700px;
  z-index: 5;
  display: none;
  animation: 0.2s ease-in 0.2s reverse both running slidein;
}
@keyframes slidein {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -325px;
  }
}
#pro .buy-box .buy-box-head {
  width: 350px;
  height: 120px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
#pro .buy-box .buy-box-head span {
  color: white;
  font-size: 23px;
  text-shadow: 0 0 10px white;
  font-weight: 400px;
}
#pro .buy-box .buy-box-head i {
  position: absolute;
  font-size: 35px;
  font-weight: 50;
  left: 20px;
  cursor: pointer;
}
#pro .buy-box .buy-box-head i:hover {
  transition: 0.2s;
  text-shadow: 0 0 20px white;
}
#pro .buy-box .buy-box-center {
  width: 350px;
  height: 480px;
  position: relative;
}
#pro .buy-box .buy-box-center .top {
  width: 310px;
  display: flex;
  height: 210px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
#pro .buy-box .buy-box-center .top .d1 {
  height: 100px;
  width: 100px;
  margin-left: 10px;
  margin-right: -10px;
}
#pro .buy-box .buy-box-center .top .d1 img {
  height: 100px;
  width: 100px;
}
#pro .buy-box .buy-box-center .top .d2 {
  height: 100px;
  width: 180px;
  margin-left: 10px;
}
#pro .buy-box .buy-box-center .top .d2 #s1 {
  color: #5e5e5e;
  font-size: 17px;
}
#pro .buy-box .buy-box-center .top .d2 #s2 {
  color: #7d7b7b;
  font-size: 14px;
}
#pro .buy-box .buy-box-center .top .d3 {
  height: 100px;
  width: 200px;
  margin-left: -90px;
}
#pro .buy-box .buy-box-center .top .d3 .num-div {
  height: 40px;
  width: 100px;
  margin-right: 65px;
  margin-top: -20px;
  display: flex;
  justify-content: space-evenly;
}
#pro .buy-box .buy-box-center .top .d3 .num-div .num {
  height: 40px;
  width: 35px;
  background-color: white;
  margin-left: 1px;
  margin-right: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#pro .buy-box .buy-box-center .top #pr {
  font-size: 12px;
  margin-top: 60px;
  margin-right: -110px;
  font-weight: bold;
}
#pro .buy-box .buy-box-center .bottom {
  width: 350px;
  display: flex;
  height: 100px;
  margin-top: 175px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#pro .buy-box .buy-box-down {
  width: 350px;
  height: 110px;
  position: relative;
  border-top: 2px solid #e1e1e1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#pro .buy-box .buy-box-down .left {
  height: 55px;
  width: 145px;
  border-radius: 10px;
  background-color: #758996;
  display: flex;
  justify-content: center;
  align-items: center;
}
#pro .buy-box .buy-box-down .left span {
  cursor: pointer;
}
#pro .buy-box .buy-box-down .right {
  height: 55px;
  width: 145px;
  border-radius: 10px;
  background-color: #62af65;
  display: flex;
  justify-content: center;
  align-items: center;
}
#pro .buy-box .buy-box-down .left span,
#pro .buy-box .buy-box-down .right span {
  font-size: 14px;
  color: #edeff0;
}
#pro .buy-box .buy-box-down .left:hover,
#pro .buy-box .buy-box-down .right:hover {
  transition: 0.2s ease-in-out;
  box-shadow: 0 0 15px rgb(43, 64, 169);
}

#pro .info {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
#pro .info .disc {
  width: 100%;
}
#pro .info .disc p {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 26px;
  font-size: 14px;
  margin-top: 25px;
}
#pro .info .title {
  height: 75px;
  width: 23%;
  display: flex;
  justify-content: start;
  align-items: center;
}
#pro .info .title .t1 {
  height: 60px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #d2cfcf solid;
  cursor: pointer;
}
#pro .info .title .t2 {
  height: 60px;
  width: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #d2cfcf solid;
  cursor: pointer;
}
#pro .info .title .t1 h3,
#pro .info .title .t2 h3 {
  font-weight: 600;
  font-size: 19px;
  color: black;
}
#pro .info .future {
  height: 450px;
  width: 100%;
  border: 1px #d2cfcf solid;
  margin-top: -8px;
  visibility: visible;
}
#f11 {
  margin-top: 75px;
}
#pro .info .future .f1 {
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
#pro .info .future .f1 .f1_1 {
  height: 50px;
  width: 35%;
  border: 1px #e1e1e1 solid;
  display: flex;
  justify-content: right;
  align-items: center;
}
#pro .info .future .f1 .f1_1 h4 {
  margin-right: 20px;
}
#pro .info .future .f1 .f1_2 {
  height: 50px;
  width: 65%;
  border: 1px #e1e1e1 solid;
  display: flex;
  justify-content: right;
  align-items: center;
}
#pro .info .future .f1 .f1_2 h5 {
  margin-right: 20px;
  font-weight: 400;
}
#pro .comment {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}
#pro .comment .box {
  background-color: #e1e1e1b5;
}
#pro .comment .box .no-comm {
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#pro .comment .box .no-comm a {
  font-weight: bold;
  color: blue;
}
#pro .comment .box .no-comm a:hover {
  transition: all 0.3s;
  scale: 1.1;
}
#pro .comment .box .title {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
}
#pro .comment .box .title h3 {
  color: blueviolet;
}
#pro .comment .box .form {
  width: 100%;
  height: 650px;
  position: relative;
}
#pro .comment .box .form .name {
  position: absolute;
  top: 50px;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#pro .comment .box .form .email {
  position: absolute;
  top: 100px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#pro .comment .box .form .msg {
  position: absolute;
  top: 215px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#pro .comment .box .form .secure {
  position: absolute;
  top: 375px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}
#pro .comment .box .form .secure #tip1 {
  font-size: 13px;
  font-weight: 400;
}
#pro .comment .box .form .secure .code {
  height: 50px;
  width: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(
    132deg,
    rgb(251, 137, 2) 20%,
    rgb(114, 6, 130) 22.06%,
    rgb(248, 235, 5) 40%,
    rgb(5, 75, 249) 53.48%,
    rgb(0, 127, 38) 64.15%,
    rgb(221, 2, 3) 93.8%
  );
}
#pro .comment .box .form .secure .code span {
  letter-spacing: 25px;
  font-size: 20px;
  font-weight: bold;
}
#pro .comment .box .form .secure2 {
  position: absolute;
  top: 450px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 25px;
}
#pro .comment .box .form .send {
  position: absolute;
  top: 575px;
  width: 15%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  align-items: center;
  margin-right: 25px;
  background-color: red;
  margin-right: 10px;
  border: 2px solid transparent;
}
#pro .comment .box .form .send span {
  color: white;
}
#pro .comment .box .form .send span:hover {
  scale: 1.15;
}
#pro .comment .box .form .name .text1,
#pro .comment .box .form .email .text1,
#pro .comment .box .form .msg .text1,
#pro .comment .box .form .secure .text1 {
  height: 75px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#pro .comment .box .form .name .input1,
#pro .comment .box .form .email .input1,
#pro .comment .box .form .secure2 .input1 {
  height: 75px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#pro .comment .box .form .name .input1 input,
#pro .comment .box .form .email .input1 input,
#pro .comment .box .form .secure2 .input1 input {
  height: 35px;
  width: 300px;
  border: 2px solid #e1e1e1;
  padding: 10px;
  font-size: 17px;
}
#pro .comment .box .form .msg textarea {
  height: 125px;
  width: 250px;
  border: 2px solid #e1e1e1;
  padding: 10px;
  font-size: 17px;
}
input:focus-visible,
textarea:focus-visible {
  outline: 0.5px solid rgb(71, 243, 71);
  border-radius: 7px;
  box-shadow: 0 0 15px beige;
}

@media (min-width: 320px) and (max-width: 480px) {
  #pro .p1 {
    display: none;
  }
  #pro .p3 {
    right: 50px;
    top: -175px;
  }
  #pro .p2 {
    margin-top: 200px;
  }
  #pro .p2 img {
    height: 300px;
    width: 350px;
  }
  #pro .comment .box .no-comm span {
    padding: 0 20px;
    text-align: center;
  }
  #pro .comment .box .title {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  #pro .comment .box .title h3 {
    padding: 0 30px;
  }
  #pro .comment .box .form .name input {
    margin-right: 50px;
  }
  #pro .comment .box .form .email input {
    margin-right: 15px;
  }
  #pro .comment .box .form .msg textarea {
    margin-right: 25px;
  }
  #pro .comment .box .form .name span,
  #pro .comment .box .form .email span,
  #pro .comment .box .form .msg span {
    margin-right: 10px;
  }
  #pro .comment .box .form .secure
  {
    width: 80%;
  }
  #pro .comment .box .form .secure2
  {
    top: 480px;
  }
  #pro .comment .box .form .secure2 input 
  {
    margin-right: 50px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  #pro .p1 {
    display: none;
  }
  #pro .p3 {
    right: 50px;
    top: -175px;
  }
  #pro .p2 {
    margin-top: 200px;
  }
  #pro .p2 img {
    height: 300px;
  }
  #pro .comment .box .no-comm span {
    padding: 0 20px;
    text-align: center;
  }
  #pro .comment .box .title {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  #pro .comment .box .title h3 {
    padding: 0 30px;
  }
  #pro .comment .box .no-comm span {
    padding: 0 20px;
    text-align: center;
  }
  #pro .comment .box .title {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  #pro .comment .box .title h3 {
    padding: 0 30px;
  }
  #pro .comment .box .form .name input {
    margin-right: 50px;
  }
  #pro .comment .box .form .email input {
    margin-right: 15px;
  }
  #pro .comment .box .form .msg textarea {
    margin-right: 25px;
  }
  #pro .comment .box .form .name span,
  #pro .comment .box .form .email span,
  #pro .comment .box .form .msg span {
    margin-right: 10px;
  }
  #pro .comment .box .form .secure
  {
    width: 80%;
  }
  #pro .comment .box .form .secure2
  {
    top: 480px;
  }
  #pro .comment .box .form .secure2 input 
  {
    margin-right: 50px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  #pro .p1 {
    display: none;
  }
  #pro .p3 {
    right: 100px;
    top: -175px;
  }
  #pro .p2 {
    margin-top: 200px;
  }
  #pro .p2 img {
    height: 300px;
  }
  #pro .comment .box .no-comm span {
    padding: 0 20px;
    text-align: center;
  }
  #pro .comment .box .title {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  #pro .comment .box .title h3 {
    padding: 0 30px;
  }
  #pro .comment .box .form .name input {
    margin-right: 50px;
  }
  #pro .comment .box .form .email input {
    margin-right: 15px;
  }
  #pro .comment .box .form .msg textarea {
    margin-right: 25px;
  }
  #pro .comment .box .form .name span,
  #pro .comment .box .form .email span,
  #pro .comment .box .form .msg span {
    margin-right: 10px;
  }
  #pro .comment .box .form .secure
  {
    width: 80%;
  }
  #pro .comment .box .form .secure2
  {
    top: 480px;
  }
  #pro .comment .box .form .secure2 input 
  {
    margin-right: 50px;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  #pro .p1 {
    display: none;
  }
  #pro .p3 {
    right: 150px;
    top: -175px;
  }
  #pro .p2 {
    margin-top: 200px;
  }
  #pro .p2 img {
    height: 300px;
  }
  #pro .comment .box .no-comm span {
    padding: 0 20px;
    text-align: center;
  }
  #pro .comment .box .title {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  #pro .comment .box .title h3 {
    padding: 0 30px;
  }
  #pro .comment .box .form .name input {
    margin-right: 50px;
  }
  #pro .comment .box .form .email input {
    margin-right: 15px;
  }
  #pro .comment .box .form .msg textarea {
    margin-right: 25px;
  }
  #pro .comment .box .form .name span,
  #pro .comment .box .form .email span,
  #pro .comment .box .form .msg span {
    margin-right: 10px;
  }
  #pro .comment .box .form .secure
  {
    width: 80%;
  }
  #pro .comment .box .form .secure2
  {
    top: 480px;
  }
  #pro .comment .box .form .secure2 input 
  {
    margin-right: 50px;
  }
}

@media (min-width: 1201px) and (max-width: 1800px) {
  #pro .p1 {
    display: none;
  }
  #pro .p3 {
    right: 150px;
    top: -175px;
  }
  #pro .p2 {
    margin-top: 200px;
  }
  #pro .p2 img {
    height: 300px;
  }
  #pro .comment .box .no-comm span {
    padding: 0 20px;
    text-align: center;
  }
  #pro .comment .box .title {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  #pro .comment .box .title h3 {
    padding: 0 30px;
  }
  #pro .comment .box .form .name input {
    margin-right: 50px;
  }
  #pro .comment .box .form .email input {
    margin-right: 15px;
  }
  #pro .comment .box .form .msg textarea {
    margin-right: 25px;
  }
  #pro .comment .box .form .name span,
  #pro .comment .box .form .email span,
  #pro .comment .box .form .msg span {
    margin-right: 10px;
  }
  #pro .comment .box .form .secure
  {
    width: 80%;
  }
  #pro .comment .box .form .secure2
  {
    top: 480px;
  }
  #pro .comment .box .form .secure2 input 
  {
    margin-right: 50px;
  }
}
</style>
