<template>
    <div class="heade">
      <div class="mainhead">
        <div class="right">
          <router-link to="/">
            <h1>گالری ماشین امیر</h1>
          </router-link>
        </div>
        <div class="left">
          <router-link to="/"><h2>شماره تلفن: 52294920-051</h2></router-link>
        </div>
      </div>
      <div class="subhead">
        <div class="subhead5">
          <router-link to="/">صفحه نخست</router-link>
          <span id="space-span">|</span>
        </div>
        <div class="subhead1">
          <router-link to="/shop"><span id="shop">محصولات</span></router-link>
          <span id="space-span">|</span>
        </div>
        <div class="subhead4">
          <router-link to="/contact">تماس با ما</router-link>
          <span id="space-span">|</span>
        </div>
        <div class="subhead2">
          <router-link to="/login">حساب کاربری</router-link>
        </div>
      </div>
      <!--<div id="subheadshop" class="subheadshop" v-bind:style="{ visibility: ChangeVis }" v-on:mouseleave="hide_box_shop"></div>-->
    </div>
</template>

<script>
export default {
  name: "HeaderComp",
  data() {
    return {
      //visibility:null,
    };
  },
  /*computed: 
  {
    ChangeVis: function () {
      return this.visibility;
    },
  },*/
};
</script>

<style>
.heade
{
  width: 100%;
}
.mainhead {
  height: 100px;
  margin-top: 0px;
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #e1e1e1;
  box-shadow: 0 0 10px rgba(136, 137, 120, 0.801);
  width: 100%;
}

.mainhead .right h1 {
  text-align: center;
  color: black;
}

.mainhead .left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mainhead .left a {
  margin-left: 15px;
  margin-right: 15px;
  color: black;
}

.subhead {
  position: relative;
  border: 3px solid rgb(254, 220, 74);
  height: 40px;
  background-color: rgb(254, 226, 74);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.subhead a {
  font-size: 14px;
  color: black;
}
.subhead a:hover {
  transition: 0.2s;
  color: rgb(144, 130, 51);
}
.subhead span {
  margin-right: 135px;
  font-weight: lighter;
  color: gray;
}
.subhead #shop {
  color: black;
  margin-right: 0px;
}
.subhead #shop:hover {
  transition: 0.2s;
  color: rgb(144, 130, 51);
}

@media (min-width:320px) and (max-width:480px)
{
  .heade
  {
    width: 100%;
    margin: 0;
  
  }
  .mainhead
  {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

  }
  .mainhead .left 
  {
    display: none;
    margin: 0;
  }
  .heade .subhead
  {
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
  } 
  .heade .subhead .subhead4 ,   .heade .subhead .subhead2
  {
    display: none;
  }
  .heade .subhead .subhead5 a ,   .heade .subhead .subhead1 a
  {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 15px;
  }
  #space-span
  {
    opacity: 0;
  }
  .subhead span , .subhead a 
  {
    margin: 0;
  }
  .subhead span 
  {
    margin: 0;
  }
}

@media (min-width:481px) and (max-width:768px)
{
  .heade
  {
    width: 100%;
    margin: 0;
  }
  .mainhead
  {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .mainhead .left 
  {
    display: none;
    margin: 0;
  }
  .heade .subhead .subhead4
  {
    display: none;
  }
  .heade .subhead
  {
    justify-content: center;
    align-items: center;
    margin: 0;
  } 
  .heade .subhead .subhead5 a ,   .heade .subhead .subhead1 a 
  {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 15px;
    padding: 0 30px;
  }
  .heade .subhead .subhead2 a 
  {
    padding: 0 30px;
  }
  #space-span
  {
    opacity: 0;
  }
  .subhead span , .subhead a 
  {
    margin: 0;
  }
}

@media (min-width:769px) and (max-width:1024px)
{
  .heade
  {
    width: 100%;
    margin: 0;
  }
  .mainhead
  {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .mainhead .left 
  {
    display: none;
    margin: 0;
  }
  .heade .subhead
  {
    justify-content: center;
    align-items: center;
    margin: 0;
  } 
  .heade .subhead .subhead5 a ,   .heade .subhead .subhead1 a ,  .heade .subhead .subhead2 a ,  .heade .subhead .subhead4 a 
  {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 15px;
    padding: 0 50px;
  }
  .heade .subhead .subhead2 a 
  {
    padding: 0 30px;
    margin-top: -5px;
  }
  #space-span
  {
    opacity: 0;
  }
  .subhead span , .subhead a 
  {
    margin: 0;
  }
}
/*-->.subheadshop {
  position: absolute;
  height: 90px;
  width: 1250px;
  top: 135px;
  visibility: hidden;
  right: 75px;
  background-color: rgb(254, 143, 74);
}*/
</style>
