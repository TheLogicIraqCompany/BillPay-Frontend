<script lang="ts" setup>
const activeTab = ref(0)

const tabs = [
  {
    title: 'شحن رصيد',
    component: 'ChargeBalance',
  },
  {
    title: 'سحب الارباح',
    component: 'WithdrawProfits',
  },
]
</script>

<template>
  <div class="home-tabs relative h-12 w-full flex flex justify-around pt-2">
    <div
      v-for="(tab, i) in tabs" :key="i" class="relative h-full cursor-pointer transition-all-500 hover:op-100"
      :class="{ 'op-80': activeTab !== i }
      " @click="activeTab = i"
    >
      <p>
        {{ tab.title }}
      </p>
      <div
        class="absolute bottom-0 right-[-50px] h-0.5 w-200%" :class="{
          'bg-success': activeTab === i,
          'bg-gray': activeTab !== i,
        }"
      />
    </div>
  </div>
</template>

<style>
.home-tabs {
  position: relative;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  background: #6240cf;
}
</style>
