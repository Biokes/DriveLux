<script>
export default {
  name:'NavbarComponent',
  data(){
    return {
      links:[
          {labels: 'Home', path: "/"},
          {labels:'get a ride', path: '/getRide'},
          {labels:'about', path: '/about'},
          {labels:'contact', path: '/contact'}
      ]
  }
  }
}
</script>
<script setup>
const counter = defineProps({
  index: {type:String,required:true}
})
</script>
<template>
  <main>
    <div>
      <img src="https://res.cloudinary.com/depwujqik/image/upload/v1737942814/logo_1_p24miy.png" alt="logo">
    </div>
    <div>
        <router-link
            v-for="(link, index) in links" :key="index" :to="link.path"
            :class="{'text-[#2CB9AD] font-bold': counter === `${index}`, 'text-gray-800': counter.index !== `${index}`}" class="text-lg font-medium hover:text-[#2CB9AD] transition-colors"
        >
            {{links.label}}
        </router-link>
      <button>
        reserve now
      </button>
    </div>
  </main>
</template>
<style scoped>

</style>