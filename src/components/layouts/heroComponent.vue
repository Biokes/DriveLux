<script>

import {defineComponent} from "vue";
import ReusableButton from "@/components/commons/buttonComponent.vue";
import TopPicks from "@/components/layouts/topPicks.vue";
export default defineComponent({
  components: {ReusableButton, TopPicks}
})
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <article class="px-[10px] w-full md:w-[60%] flex flex-col items-center justify-center py-[30px] md:py-[40px] gap-[10px]">
      <p class="capitalize text-[30px] md:text-[5vw] font-[700] flex flex-col items-center justify-center">
        Drive Your Dreams
        <span>
          With <strong class="text-[#30C0B3] font-[700]">DriveLux</strong>
        </span>
      </p>
     <p class="text-[100%] font-[500] px-[10px] text-center">
       Experience the Thrill of the Open Road with DriveLux. Choose from our
       premium selection of luxury vehicles and explore the world in style. Book
       Now and Discover the Ultimate Driving Experience.
     </p>
    </article>
    <div class="flex gap-[20px] justify-center items-center">
      <ReusableButton link="/explore" text="explore cars"/>
      <ReusableButton link="/reserve" text="reserve now" class="hidden md:flex"/>
    </div>
    <img src="https://res.cloudinary.com/depwujqik/image/upload/v1737946222/footer-shape_yqhmsl.png" alt="">
    <img src="https://res.cloudinary.com/depwujqik/image/upload/v1737946224/banner-bg-2_pu4l5d.png" alt="">
    <img src="https://res.cloudinary.com/depwujqik/image/upload/v1737945961/car-image_h1wkso.png" alt="">
    <p>
      Ferrari 250 GTO
      Experience the Iconic Ferrari 250 GTO Book Your Adventure
    </p>
    <button>
      Reserve Now
    </button>
  </div>
  <TopPicks/>
</template>
