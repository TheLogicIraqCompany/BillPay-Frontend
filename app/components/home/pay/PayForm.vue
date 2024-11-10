<script lang="ts" setup>
import axiosInstance from '~/service/axios'
import AsiaCellDialog from './AsiaCellDialog.vue'
import FIBDialog from './FIBDialog.vue'
import { depositBodyInit, type DepositRequest, type DialogType } from './types'
import ZainCashDialog from './ZainCashDialog.vue'
import ZainDialog from './ZainDialog.vue'

const props = defineProps<{
  type: DialogType
}>()
const isDialogOpen = defineModel<boolean>({
  default: false,
})

function currentForm() {
  switch (props.type) {
    case 'fib':
      return FIBDialog
    case 'asiacell':
      return AsiaCellDialog
    case 'zain':
      return ZainDialog
    case 'zaincash':
      return ZainCashDialog
  }
}
const body = ref<DepositRequest>({
  ...depositBodyInit,
})

watch(() => isDialogOpen.value, () => {
  body.value = {
    ...depositBodyInit,
  }
})
const isError = ref(false)
const isLoading = ref(false)
const isSuccessful = ref(false)
async function submit() {
  if (body.value.amount < 10000 || body.value.amount > 1000000) {
    isError.value = true
    return
  }
  try {
    isError.value = false
    isLoading.value = true
    await axiosInstance.post('/deposit', body.value)
    isSuccessful.value = true
  }
  catch (e) {
    isError.value = true
    JSON.stringify(e)
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <AppDialog v-model:model-value="isDialogOpen">
    <Transition name="fade">
      <div v-if="!isSuccessful " class="flex flex-col gap-3">
        <component :is="currentForm()" v-model="body" />
        <div>
          <p v-if="isError" class="mb-1 text-sm text-danger">
            يرجى التأكد من ادخال المعلومات بشكل صحيح
          </p>
          <button :disabled="isLoading" class="primary-btn w-full py-3 btn hover:bg-op-10" @click="submit">
            <span v-if="!isLoading">
              شحن الرصيد
            </span>
            <div v-else class="flex justify-center">
              <div class="h-7 w-7 animate-spin border-2 border-black border-t-transparent rounded-full" />
            </div>
          </button>
        </div>
      </div>
      <div v-else class="mt-10 flex flex-col items-center justify-center gap-5">
        <div class="flex">
          <i class="i-ph-check h-5 w-5 text-lg text-primary" />
        </div>

        <h1 class="text-xl text-primary font-bold">
          تمت ارسال طلب عملية الشحن بنجاح
        </h1>
        <p class="text-center text-sm">
          سيتم التواصل معكم في اقرب وقت ممكن
        </p>
        <button class="primary-btn mt-20 w-full py-3 btn hover:bg-op-10" @click="isSuccessful = false">
          ارسال طلب جديد
        </button>
      </div>
    </Transition>
  </AppDialog>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  overflow: hidden;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
