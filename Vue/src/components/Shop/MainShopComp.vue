<template>
  <div id="shop">
    <div class="shopp">
      <div class="right">
        <div class="sort">
          <select v-model="selected" id="select">
            <option v-bind:value="{ id: 1 }">
              پرفروش ترین ها</option>
            <option v-bind:value="{ id: 2 }">کمترین قیمت</option>
            <option v-bind:value="{ id: 3 }">بیشترین قیمت</option>
          </select>
          <button id="show" v-on:click="select_fun">نمایش</button>
        </div>
        <div class="pro">
          <div class="pro1" v-for="i in product" :key="i.id">
            <router-link :to="/shop/ + i._id"
              ><img :src="require(`../../assets/cars/${i.image}`)" alt=""
            /></router-link>
            <router-link :to="/shop/ + i._id"
              ><h3>{{ i.name }}</h3></router-link>
            <h5>{{ i.price }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainShopComp",
  data() {
    return {
      product: null,
      link: null,
      selected: {id : 1},
    };
  },
  methods: {
    select_fun() {
      axios.post("https://carstoreapi.iran.liara.run/select/", {
          sel : this.selected.id,
        })
        .then((response) => {
          const status = JSON.parse(response.status);
          if (status === 200) {
            this.product = response.data
            console.log(this.product)
          }
        });
    },
  },
  mounted() {
    fetch("https://carstoreapi.iran.liara.run/")
      .then((response) => response.json())
      .then((data) => {
        this.product = data;
      });
  },
};
</script>

<style>
.shopp {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.shopp .right {
  width: 100%;
}
.shopp .right .sort {
  display: flex;
  width: 95%;
  height: 125px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  margin-bottom: -125px;
}
.shopp .right .pro {
  display: flex;
  justify-content: space-evenly;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 125px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 75px;
}
.shopp .right .pro .pro1 {
  width: 475px;
  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 115px;
}
.shopp .right .pro .pro1 img {
  height: 350px;
  width: 475px;
}
.shopp .right .pro .pro1 img:hover {
  transition: 0.3s all ease-in-out;
  filter: brightness(55%);
  scale: 1.03;
}
.shopp .right .pro .pro1 h3 {
  display: flex;
  justify-content: center;
  color: black;
  margin-top: 30px;
  margin-bottom: 25px;
}
.shopp .right .pro .pro1 h5 {
  display: flex;
  justify-content: center;
  color: black;
}
.shopp .right .pro .pro1 h3:hover {
  color: rgb(100, 100, 237);
  text-shadow: 0 0 50px beige;
}
select {
  height: 50px;
  white-space: pre;
  margin-right: 205px;
  width: 200px;
  background-color: field;
  cursor: default;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
}
option {
  height: 50px;
}
#show {
  height: 50px;
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 7px;
  background-color: rgb(77, 77, 238);
  border: none;
  color: white;
}
#show:hover {
  transition: 0.2s;
  box-shadow: 0 0 15px rgba(227, 227, 45, 0.4);
}

@media (min-width: 320px) and (max-width: 480px) {
  .shopp .right .sort
  {
    margin-right: -130px;
  }
  .shopp .right .pro .pro1
  {
    margin: 0;
    padding: 0;
  }
  .shopp .right .pro .pro1 img 
  {
    height: 350px;
    width: 350px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .shopp .right .sort
  {
    margin-right: -90px;
  }
  .shopp .right .pro .pro1
  {
    margin: 0;
    padding: 0;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .shopp .right .sort
  {
    margin-right: 40px;
  }
  .shopp .right .pro .pro1
  {
    margin: 0;
    padding: 0;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {

}
</style>
