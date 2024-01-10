<template>
  <div class="flex flex-center" style="height: 80dvh">
    <div class="row">
      <span class="text-h3 col-12">Łukasz Kuleński</span>
      <span class="text-h4 text-grey col-12 q-mb-xl">Frontend Developer</span>
      <q-img :src="require(`../assets/programming.svg`)" class="col-12 col-sm-10" style="margin: 0 auto" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: $breakpoint-xs-max) {
  .text-h3 {
    font-size: 2.75rem;
  }
}
</style>