<template>
  <div id="main">
    <div class="sec1">
      <img src="../../assets/contact.jpg" alt="" />
      <div class="sec1_1">
        <div class="center"><span>تماس با ما</span></div>
        <div class="down"></div>
      </div>
    </div>
    <div class="sec2">
      <div class="form">
        <div class="input_div">
          <label for="name">نام *</label>
          <div class="input">
            <input id="name" type="text" name="name" required ref="name" />
          </div>
        </div>
        <div class="input_div">
          <label for="email">ایمیل *</label>
          <div class="input">
            <input type="email" name="email" required ref="email" />
          </div>
        </div>
        <div class="input_div">
          <label for="subject"> موضوع </label>
          <div class="input">
            <input type="text" name="subject" ref="subject" />
          </div>
        </div>
        <div class="input_div">
          <label for="msg"> پیغام *</label>
          <div class="input">
            <textarea name="msg" required ref="msg"></textarea>
          </div>
        </div>
        <div class="input_div">
          <button v-on:click="test" class="sub">ارسال</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "MainContactComp",
  data() {
    return {
      name: null,
      email: null,
      subject: null,
      msg: null,
      aa: null,
    };
  },
  methods: {
    test() {
      this.name = this.$refs.name.value;
      this.email = this.$refs.email.value;
      this.subject = this.$refs.subject.value;
      this.msg = this.$refs.msg.value;
      if (!this.name || !this.email || !this.msg) {
        swal({
          title: "خطا",
          icon: "warning",
          text: "لطفا فیلدهای ستاره دار را پر کنید",
        });
      } else {
        axios
          .post("https://carstoreapi.iran.liara.run/contact/", {
            name: this.$refs.name.value,
            email: this.$refs.email.value,
            subject: this.$refs.subject.value,
            msg: this.$refs.msg.value,
          })
          .then((response) => {
            const status = JSON.parse(response.status);
            console.log(status);
            if (status === 200) {
              swal({
                title: "موفقیت آمیز",
                text: response.data.error,
                icon: "success",
                buttons: ["بستن", "رفتن به صفحه اصلی"],
              }).then((willDelete) => {
                if (willDelete) {
                  window.location.href = "/";
                } else {
                  window.location.href = "/contact";
                }
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
      }
    },
  },
};
</script>

<style>
#main {
  height: 950px;
  width: 100%;
}
.sec1 {
  height: 350px;
  width: 100%;
  position: relative;
}
.sec1 img {
  height: 350px;
  width: 100%;
}
.sec1 .sec1_1 {
  height: 350px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.603);
}
.sec1 .sec1_1 .center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
.sec1 .sec1_1 .center span {
  color: white;
  font-size: 50px;
}
.sec1 .sec1_1 .down {
  display: flex;
  margin-left: auto;
  margin-top: -50px;
  margin-right: auto;
  height: 7px;
  width: 150px;
  background-color: yellow;
}
#main .sec2 {
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#main .sec2 .form {
  height: 500px;
  width: 500px;
}

.form .input_div {
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: -20px;
  height: 75px;
  width: 400px;
}
.form .input_div:last-child {
  height: 200px;
}
.form .input_div .input {
  height: 40px;
  width: 300px;
  position: absolute;
  top: 28px;
}
.form .input_div .input input {
  height: 35px;
  width: 400px;
  border: 1px solid black;
  border-radius: 7px;
  padding-right: 7px;
  font-size: 16px;
}
textarea {
  height: 135px;
  width: 400px;
  border: 1px solid black;
  border-radius: 7px;
  padding-right: 7px;
  font-size: 16px;
  resize: none;
}
.form .sub {
  margin-top: 100px;
  height: 50px;
  width: 150px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: rgb(253, 216, 13);
  border-style: solid;
  border-color: rgb(203, 172, 2);
  border-bottom-width: 5px;
}
.form .sub:hover {
  transition: 0.1s all ease-in-out;
  scale: 1.1;
}

@media (min-width: 320px) and (max-width: 480px) {
  #main .sec2 .form .input_div input ,  #main .sec2 .form .input_div textarea
  {
    width: 350px;
  }
  #main .sec2 .form .input_div input ,  #main .sec2 .form .input_div textarea , #main .sec2 .form .input_div label
  {
    margin-right: 25px;
  }
  #main .sec2 .form .input_div .sub
  {
    margin-right: 25px;
  }
}

</style>
