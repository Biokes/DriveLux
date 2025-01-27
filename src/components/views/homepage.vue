<script>
  import NavbarComponent from '../commons/navbar.vue'
  import HeroComponent from "../layouts/heroComponent.vue";

  export default {
    name:'HomePage',
    components:{
      NavbarComponent,
      HeroComponent
    }
  }
</script>
<template>
  <NavbarComponent index="0" />
  <HeroComponent/>
</template>