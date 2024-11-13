<script setup lang="ts">
import ContactUs from '~/components/home/ContactUs.vue'
import type { PaymentType } from '~/components/home/pay/types'
import { baseURL } from '~/constants'

const isDialogOpen = ref(false)
const dialogType = ref<PaymentType | null>(null)
function openDialog(type: PaymentType) {
  dialogType.value = type
  isDialogOpen.value = true
}
const { data, status } = await useFetch<{ data: PaymentType[] }>(`${baseURL}/api/payment-types?isActive=true`)
</script>

<template>
  <div class="main-card md;px-10 w-full px-5 py-10 text-right md:h-150">
    <div class="grid gap-12 md:grid-cols-2 md:mt-9">
      <div class="flex flex-col gap-5">
        <HomeTabs />
        <h1 class="text-3xl font-bold">
          يمكنك شحن رصيدك من خلال
        </h1>
        <div v-if="status === 'success'" class="grid gap-5 md:grid-cols-2">
          <HomeMethodCard v-for="paymentType in data!.data" :key="paymentType.id" :title="paymentType.name" :image="`${baseURL}/${paymentType.image}`" @click="openDialog(paymentType)" />
        </div>
      </div>

      <ContactUs />
    </div>
    <HomePayForm v-model:model-value="isDialogOpen" :type="dialogType as PaymentType" />
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
