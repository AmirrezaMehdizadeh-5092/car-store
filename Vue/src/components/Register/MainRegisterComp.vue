<template>
  <div id="reg">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="reg_log">
      <label for="phone">ثبت نام</label>
      <div class="phone_div">
        <i class="fa fa-user"></i>
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          name="name"
          ref="name"
        />
      </div>
      <div class="phone_div">
        <i class="fa fa-user"></i>
        <input type="email" placeholder="ایمیل" name="email" ref="email" />
      </div>
      <div class="phone_div">
        <i class="fa fa-lock"></i>
        <input
          type="password"
          placeholder="پسورد"
          name="password"
          ref="password"
        />
      </div>
      <div class="phone_div">
        <i class="fa fa-lock"></i>
        <input
          type="password"
          placeholder="تکرار پسورد"
          name="password2"
          ref="password2"
        />
      </div>
      <div class="end">
        <span
          >ورود شما به معنای پذیرفتن
          <router-link to="/terms">قوانین</router-link> است</span
        >
        <div class="login_btn">
          <button v-on:click="reg_fun">ثبت نام</button>
        </div>
      </div>
      <div class="gotolog">
        <router-link to="/login">ورود به حساب</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";

export default {
  name: "MainRegisterComp",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password2: null,
    };
  },
  methods: {
    reg_fun() {
      this.name = this.$refs.name.value;
      this.email = this.$refs.email.value;
      this.password = this.$refs.password.value;
      this.password2 = this.$refs.password2.value;
      if (
        this.name == "" ||
        this.email == "" ||
        this.password == "" ||
        this.password2 == ""
      ) {
        swal({
          title: "خطا",
          icon: "warning",
          text: "لطفا فیلدهای مورد نظر را پر کنید",
        });
      } else if (this.password.length < 6 && this.password2.length < 6) {
        swal({
          title: "هشدار",
          icon: "warning",
          text: "طول پسورد باید از 6 بیشتر باشد",
        });
      } else if (this.password != this.password2) {
        swal({
          title: "خطا",
          icon: "error",
          text: "پسورد ها یکسان نیستند",
        });
      } else {
        axios
          .post("https://carstoreapi.iran.liara.run/register/", {
            name: this.name,
            email: this.email,
            password: this.password,
            password2: this.password2,
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
                  window.location.href = "/register";
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
#reg {
  height: 520px;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 80px;
}
#reg .reg_log {
  width: 500px;
  margin-right: 175px;
}
#reg .reg_log label {
  font-weight: 400;
  font-size: 14px;
  color: #1f1f1e;
}
#reg .reg_log .phone_div {
  margin-top: 20px;
  width: 350px;
  height: 50px;
  position: relative;
}
#reg .reg_log .phone_div i {
  position: absolute;
  left: 8px;
  top: 8px;
  font-size: 20px;
  padding: 10px;
}
#reg .reg_log .phone_div input {
  height: 50px;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 17px;
  color: black;
  width: 350px;
}
#reg .reg_log .end {
  height: 100px;
  margin-top: 40px;
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#reg .reg_log .end a {
  color: blue;
}
#reg .reg_log .end span {
  font-size: 14px;
  font-weight: 400;
  margin-left: 15px;
  word-spacing: -2px;
  color: #1f1f1e;
}
#reg .reg_log .end .login_btn {
  height: 60px;
  width: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: yellow;
}
#reg .reg_log .end .login_btn:hover {
  transition: 0.2s;
  box-shadow: 0 0 15px rgb(232, 164, 68);
  scale: 1.1;
}
#reg .reg_log .end .login_btn i {
  font-weight: 400;
  font-size: 25px;
  cursor: pointer;
}
#reg .reg_log .end .login_btn button {
  background-color: yellow;
  cursor: pointer;
  border: none;
}
#reg .reg_log .gotolog {
  margin-right: -195px;
}
#reg .reg_log .gotolog a {
  color: blue;
  display: flex;
  margin-top: 15px;
  justify-content: center;
  font-size: 13px;
}
#reg .reg_log .gotolog a:hover {
  text-decoration: underline;
}

@media (min-width: 320px) and (max-width: 480px) {
  #reg .reg_log {
    margin-right: 20px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  #reg .reg_log {
    margin-right: 75px;
  }
}
</style>
