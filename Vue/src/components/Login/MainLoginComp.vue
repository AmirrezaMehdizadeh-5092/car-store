<template>
  <div id="acc">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="acc_log">
      <label for="phone">ورود به حساب کاربری</label>
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
      <div class="end">
        <span
          >ورود شما به معنای پذیرفتن
          <router-link to="/terms">قوانین</router-link> است</span
        >
        <div class="login_btn">
          <button v-on:click="login_fun">
            ورود
          </button>
        </div>
      </div>
      <div class="gotoreg">
        <router-link to="/register">حسابی ندارید؟</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";

export default {
  name: "MainLoginComp",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login_fun() {
      this.email = this.$refs.email.value;
      this.password = this.$refs.password.value;
      if (this.email == "" && this.password == "") {
        swal({
          title: "خطا",
          icon: "warning",
          text: "لطفا فیلدهای مورد نظر را پر کنید",
        });
      } else {
        axios
          .post("https://carstoreapi.iran.liara.run/login/", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            const status = JSON.parse(response.status);
            if (status === 200) {
              this.$session.start()
              this.$session.set("jwt", response.data);
              window.location.href = "/shop"
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
#acc {
  height: 500px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
#acc .acc_log {
  width: 500px;
  margin-right: 175px;
}
#acc .acc_log label {
  font-weight: 400;
  font-size: 14px;
  color: #1f1f1e;
}
#acc .acc_log .phone_div {
  margin-top: 35px;
  width: 350px;
  height: 50px;
  position: relative;
}
#acc .acc_log .phone_div i {
  position: absolute;
  left: 9px;
  top: 7px;
  font-size: 20px;
  padding: 10px;
}
#acc .acc_log .phone_div input {
  height: 50px;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 17px;
  color: black;
  width: 350px;
}
#acc .acc_log .end {
  height: 100px;
  margin-top: 30px;
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#acc .acc_log .end a {
  color: blue;
}
#acc .acc_log .end span {
  font-size: 14px;
  font-weight: 400;
  margin-left: 15px;
  word-spacing: -2px;
  color: #1f1f1e;
}
#acc .acc_log .end .login_btn {
  height: 60px;
  width: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: yellow;
}
#acc .acc_log .end .login_btn:hover {
  transition: 0.2s;
  box-shadow: 0 0 15px rgb(232, 164, 68);
  scale: 1.1;
}
#acc .acc_log .end .login_btn i {
  font-weight: 400;
  font-size: 25px;
  cursor: pointer;
}
#acc .acc_log .end .login_btn button {
  background-color: yellow;
  cursor: pointer;
  border: none;
}
#acc .acc_log .gotoreg {
  margin-right: -195px;
}
#acc .acc_log .gotoreg a {
  color: blue;
  display: flex;
  margin-top: 15px;
  justify-content: center;
  font-size: 13px;
}
#acc .acc_log .gotoreg a:hover{
  text-decoration: underline;
}


@media (min-width: 320px) and (max-width: 480px) {
  #acc .acc_log 
  {
    margin-right: 20px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  #acc .acc_log 
  {
    margin-right: 75px;
  }

}

</style>
