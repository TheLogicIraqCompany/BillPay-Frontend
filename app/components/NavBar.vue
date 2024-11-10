<script lang="ts" setup>

</script>

<template>
  <div class="navbar mt-5 h-105px w-full flex items-center justify-between md:px-5 px-2">
    <div v-motion="new Motion('slideX').execute()" class="flex items-center">
      <img src="/logo.png" alt="AnkawaBet Logo" class="h-10 w-28 md:h-13 md:w-65">
    </div>
    <div>
      <button v-motion="new Motion('slideX').execute()" class="flex md:hidden items-center gap-5">
        <i class="i-carbon-menu text-2xl text-primary" />
      </button>
    </div>
    <div class="mx-10 hidden items-center gap-5 md:flex">
      <div v-motion="new Motion('slideX').execute()" class="flex gap-2">
        <a href="#" class="flex rounded-lg bg-#0088CC p-3 text-white">
          <i class="i-logos-telegram" />
        </a>
        <a href="#" class="flex rounded-lg bg-#349934 p-3 text-white">
          <i class="i-logos-whatsapp-icon" />
        </a>
      </div>
      <div v-motion="new Motion('slideX').execute()" class="h-40px w-1px bg-gray" />
      <div v-motion="new Motion('slideX').execute()" class="flex cursor-pointer items-center gap-2">
        <i class="i-twemoji:flag-iraq" />
        العربية
        <i class="i-carbon-chevron-down" />
      </div>
      <div v-motion="new Motion('slideX').execute()" class="h-40px w-1px bg-gray" />
      <div v-motion="new Motion('slideX').execute()" class="flex cursor-pointer items-center gap-2 bg-success pa-3 btn">
        عينكاوا بت
        <i class="i-carbon-chevron-left" />
      </div>
    </div>
  </div>
</template>

<style>
.navbar {
  background: url('/theme/nav-bg.png') no-repeat;
  background-position: right center;
  background-size: 0% 98%;
  animation: bg-width 1s forwards;
}
@media (max-width: 600px) {
  .navbar {
    background: url('/theme/nav-m-bg.png') no-repeat;
    background-position: right center;
    background-size: 0% 98%;
    animation: bg-width 1s forwards;
  }
}
@keyframes bg-width {
  0% {
    background-size: 0% 98%;
    background-position: right center;
  }

  100% {
    background-size: 100% 98%;
    background-position: right center;
  }
}
</style>
