<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
onMounted(() => {
  localStorage.setItem('nuxt-color-mode', 'dark')
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  direction: rtl;
  font-family: 'Noto Kufi Arabic', sans-serif;
}

html.dark {
  background: radial-gradient(
      100.89% 100.89% at 50.83% 52.56%,
      rgba(11, 14, 19, 0) 0%,
      rgba(11, 14, 19, 0.825242) 0%,
      #0b0e13 63%
    )
    no-repeat center center fixed;

  color: white;
}
*::-webkit-scrollbar {
  height: 10px;
  width: 4px;
}

*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #dfe9eb25;
}

*::-webkit-scrollbar-track:hover {
  background-color: #dfe9eb41;
}

*::-webkit-scrollbar-track:active {
  background-color: #dfe9eb41;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #397524;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #62a34b;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #62a34b;
}
</style>
