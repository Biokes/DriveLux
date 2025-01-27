<script>
export default {
  data() {
    return {
      links: [
        {labels: 'Home', path: "/"},
        {labels:'get a ride', path: '/getRide'},
        {labels:'about', path: '/about'},
        {labels:'contact', path: '/contact'}
      ],
      counter: 0,
    };
  },
  methods: {
    setActive(index) {
      this.counter = index;
    },
  },
}
</script>
<script setup>
import ReusableButton from "@/components/commons/buttonComponent.vue";

const counter = defineProps({
  index: {type:String,required:true}
})
</script>
<template>
  <main class="flex justify-between items-center px-[5%] py-[15px] shadow-sm">
    <div class="w-[100px] md:w-[150px]">
      <img src="https://res.cloudinary.com/depwujqik/image/upload/v1737942814/logo_1_p24miy.png" alt="logo">
    </div>
    <div class="hidden md:flex gap-[10px]">
        <router-link
            v-for="(link, index) in links" :key="index" :to="link.path" @click="setActive(index)"
            :class="{'text-[#2CB9AD] font-bold': counter ===index, 'text-gray-800': counter.index !== index }" class="text-lg font-medium hover:text-[#2CB9AD] transition-colors"
        >
            {{links.labels}}
        </router-link>

    </div>
    <div class="flex ">
      <ReusableButton link="/reserve" text="reserve now"/>
    </div>
  </main>
</template>
<style scoped>

</style>
