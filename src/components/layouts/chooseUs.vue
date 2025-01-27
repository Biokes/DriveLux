<script>
import ReusableButton from "@/components/commons/buttonComponent.vue";

export default {
  name: "ChooseUs",
  components: {ReusableButton},
  data(){
    return {
      dataMap:[
        {image:'', text:'Extensive Selection of Luxury Cars'},
        {image:'', text:'Well-Maintained & Clean Cars'},
        {image:'', text:'Easy and Intuitive Booking Process'},
        {image:'', text:'Extensive Selection of payments'},
      ]
    }
  }
}
</script>
<template>
  <section>
    <p>why choose us</p>
    <p>Discover the DriveLux Advantage: Unparalleled
      <br> Service & Unforgettable Experiences Await
    </p>
  </section>
  <section class="flex flex-col md:flex-row md:justify-between md:w-full">
    <div class="md:relative">
      <a href="www.whatsapp.me/2349112164332">+2349114297299</a>
      <p>call us</p>
      <p>we are always here to help you</p>
    </div>
    <div class="md:absolute">
      <p>
        Get Latest Update in your Mail Box
      </p>
      <input type="email" placeholder="Email">
      <div>
        <ReusableButton link="/register" text="register now"/>
      </div>
    </div>
  </section>

</template>