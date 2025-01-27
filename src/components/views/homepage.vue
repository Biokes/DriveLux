<script>
  import NavbarComponent from '@/components/commons/navbar.vue'
  import HeroComponent from "@/components/layouts/heroComponent.vue";

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