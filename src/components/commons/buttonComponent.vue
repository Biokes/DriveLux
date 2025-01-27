<script>
export default {
  name: "ReusableButton"
}
</script>
<script setup>
  const props= defineProps({
    text: {type:String, required:true},
    link:{type:String, required: true}
  })
</script>
<template>
  <div class="background"></div>
  <router-link :to="props.link" class="dark-btn text-nowrap text-[12px] md:text-[17px] md:font-[700]">
    {{props.text}}
  </router-link>
</template>
<style scoped>
.dark-btn {
  padding: 10px 15px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  line-height: 100%;
  cursor: pointer;
  color: #FAFAFA;
  transition: all 1000ms;
  position: relative;
  overflow: hidden;
  background: #2C2D2F;
  text-transform: capitalize;
}
.dark-btn:hover {
  color: #ffffff;
  transform: scale(1.025);
  outline: 2px solid #57d3c9;
  box-shadow: 4px 5px 17px -4px #2CB9AD;
}
.dark-btn:hover::before {
  width: 200%;
}
.dark-btn::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #2CB9AD;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}
.dark-btn.primary {
  background: #FAFAFA;
  color: #2C2D2F;
}
.dark-btn.primary:hover {
  color: #FAFAFA;
  transform: scale(1.025);
  outline: 2px solid #57d3c9;
  box-shadow: 4px 5px 17px -4px #2CB9AD;
}
.dark-btn.primary:hover::before {
  width: 200%;
}
.dark-btn.primary::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #2C2D2F;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}
</style>