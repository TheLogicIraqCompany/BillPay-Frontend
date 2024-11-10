<script lang="ts" setup>
import { depositBodyInit, type DepositRequest } from './types'

const body = defineModel<DepositRequest>(
  {
    default: {
      ...depositBodyInit,
    },
  },
)
</script>

<template>
  <div class="flex items-center justify-center gap-4">
    <img src="/payments/zain.png" class="h-15 w-15 border rounded-full object-cover" alt="" srcset="">
    <div>
      <p class="text-sm text-#7B839E">
        الشحن من خلال
      </p>

      <h1 class="text-2xl font-bold">
        رصيد زين
      </h1>
    </div>
  </div>
  <AppInput
    v-model:model-value="body.amount" label="المبلغ"
    note="*الحد الأدني (100,000 د.ع) و الحد الأقصى (1,000,000 د.ع)"
  />
  <AppInput v-model:model-value="body.cardNumber" label="رقم الكارت" />
  <AppInput type="file" label="صورة الكارت" />
</template>

<style></style>
