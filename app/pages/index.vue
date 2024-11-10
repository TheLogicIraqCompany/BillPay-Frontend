<script setup lang="ts">
import ContactUs from '~/components/home/ContactUs.vue'
import type { DialogType } from '~/components/home/pay/types'

const isDialogOpen = ref(false)
const dialogType = ref<DialogType>('asiacell')
function openDialog(type: DialogType) {
  dialogType.value = type
  isDialogOpen.value = true
}
</script>

<template>
  <div class="main-card md;px-10 w-full px-5 py-10 text-right md:h-150">
    <div class="grid gap-12 md:grid-cols-2 md:mt-9">
      <div class="flex flex-col gap-5">
        <HomeTabs />
        <h1 class="text-3xl font-bold">
          يمكنك شحن رصيدك من خلال
        </h1>
        <div class="grid gap-5 md:grid-cols-2">
          <HomeMethodCard title="زين كاش" image="/payments/zaincash.png" @click="openDialog('zaincash')" />
          <HomeMethodCard title="مصرف العراق الأول FIB" image="/payments/fib.png" @click="openDialog('fib')" />
          <HomeMethodCard title="رصيد اسيا" image="/payments/asiacell.png" @click="openDialog('asiacell')" />
          <HomeMethodCard title="رصيد زين" image="/payments/zain.png" @click="openDialog('zain')" />
        </div>
      </div>

      <ContactUs />
    </div>
    <HomePayForm v-model:model-value="isDialogOpen" :type="dialogType" />
  </div>
</template>

<style>
.main-card {
  background: url('/theme/3.png') no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.primary-btn {
  background: url('/theme/primary-button-bg.png') no-repeat;
  background-size: 100% 100%;
  background-position: center;
  color: black;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.5;
    background: url('/theme/primary-button-bg.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }
}
@media (max-width: 600px) {
  .main-card {
    background: none;
    background-size: 100% 100%;
    background-position: center;
  }
}
</style>
