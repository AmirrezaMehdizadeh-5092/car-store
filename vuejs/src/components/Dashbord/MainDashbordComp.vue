<template>
  <div id="dash">
    <span>{{ user }}</span>
    <br />
    <br />
    <br />
    <span>{{ order }}</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainDashboardComp",
  data() {
    return {
      token: null,
      user: null,
      order: null,
    };
  },
  mounted() {
    this.token = this.$session.get("jwt");
    if (!this.token) {
      window.location.href = "/login";
    } else {
      axios
        .post("http://localhost:9856/dash", {
          token: this.token,
        })
        .then((response) => {
          const status = JSON.parse(response.status);
          if (status === 200) {
            this.user = response.data;
            axios
              .post("http://localhost:9856/dash2", {
                token: this.token,
              })
              .then((response) => {
                const status = JSON.parse(response.status);
                if (status === 200) {
                  this.order = response.data;
                }
              });
          }
        });
    }
  },
};
</script>

<style></style>
