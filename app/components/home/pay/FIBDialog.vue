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
    <img src="/payments/fib.png" class="h-15 w-15 border rounded-full object-cover" alt="" srcset="">
    <div>
      <p class="text-sm text-#7B839E">
        رقم تحويل الFIB
      </p>

      <div class="flex gap-3">
        <h1 dir="ltr" class="text-2xl font-bold">
          0771 333 5684
        </h1>
        <i class="i-carbon-copy text-2xl text-primary" />
      </div>
    </div>
  </div>
  <AppInput v-model="body.amount" label="المبلغ" note="*الحد الأدني (100,000 د.ع) و الحد الأقصى (1,000,000 د.ع)" />
  <AppInput v-model="body.fibPhoneNumber" label="رقمك في الـ FIB" />
  <AppInput v-model="body.fibName" label="اسمك في الـ FIB" />
  <AppInput type="file" label="صورة عملية التحويل" />
</template>

<style></style>
