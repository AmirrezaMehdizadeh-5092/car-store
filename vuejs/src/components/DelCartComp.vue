<template>
  <div id="Del"></div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "DelCartComp",
  metaInfo: {
    title: "حذف محصول",
  },
  data() {
    return {
      link: null,
      pro_id: null,
      token: null,
    };
  },
  mounted() {
    this.link = window.location.href;
    this.pro_id = this.link.substring(27, 55);
    this.token = this.$session.get("jwt");
    axios
      .post("http://localhost:9856/del_cart", {
        token: this.token,
        pro_id: this.pro_id,
      })
      .then((response) => {
        const status = JSON.parse(response.status);
        if (status === 200) {
          swal({
            title: "حذف از سبد خرید",
            icon: "success",
            text: response.data.error,
            buttons: "باشه",
          }).then(() => {
            window.location.href = '/cart';
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
  },
};
</script>
