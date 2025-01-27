<script>
export default {
  name:"TopPicks"
}
</script>
<template>
  <main>
    <section class="heading text-end pr-[10px]">
      <p>Top Picks</p>
      <p>
        Handpicked Selection, Discover Our Finest <br>
        Cars for an Unforgettable Drive
      </p>
    </section>
  </main>
</template>
<style>
.heading.text-end {
  justify-content: end;
}
@media (max-width: 992px) {
  .heading {
    flex-direction: column;
  }
}
.heading {
  margin-bottom: 45px;
  overflow: hidden;
  display: flex
;
}
.text-end {
  text-align: right !important;
}
*, ::after, ::before {
  box-sizing: border-box;
}
</style>