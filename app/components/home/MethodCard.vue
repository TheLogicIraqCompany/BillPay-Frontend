<script lang="ts" setup>
defineProps<{
  title: string
  image: string
}>()
</script>

<template>
  <div
    class="cursor-pointer border-1 border-gray rounded-xl bg-gray transition-all-500 hover:transform-scale-103 hover:border-2 hover:border-#6240cf">
    <img :src="image" class="h-30 w-full rounded-t-xl object-cover" alt="">
    <h1 class="mt-1 text-center text-lg text-black font-bold">
      {{ title }}
    </h1>
  </div>
</template>
