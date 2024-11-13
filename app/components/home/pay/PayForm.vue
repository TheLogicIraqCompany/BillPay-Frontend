<script lang="ts" setup>
import { baseURL } from '~/constants'
import axiosInstance from '~/service/axios'
import { depositBodyInit, type DepositRequest, type PaymentType } from './types'

const props = defineProps<{
  type: PaymentType
}>()
const isDialogOpen = defineModel<boolean>({
  default: false,
})
const body = ref<DepositRequest>({
  ...depositBodyInit,
})

const isError = ref(false)
const isLoading = ref(false)
const isSuccessful = ref(false)

function resetBody() {
  body.value = {
    ...depositBodyInit,
  }
  isSuccessful.value = false
}
async function submit() {
  if (body.value.amount < 10000 || body.value.amount > 1000000) {
    isError.value = true
    return
  }
  // if (!body.value.image) {
  //   isError.value = true
  //   return
  // }
  try {
    isError.value = false
    isLoading.value = true
    body.value.paymentTypeId = props.type.id
    const formData = new FormData()
    formData.append('File', body.value.image)
    const fileRes = await axiosInstance.post('/file', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    body.value.image = fileRes.data
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

watch(() => isDialogOpen.value, resetBody)
const randomFromArr = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

const fieldsLabels = computed(() => {
  return {
    name: props.type.numbers.length > 0 ? `اسمك في ${props.type.name}` : 'اسمك الكامل',
    phone: props.type.numbers.length > 0 ? `رقمك في ${props.type.name}` : 'رقم الهاتف',
    image: props.type.numbers.length === 0 ? `صورة البطاقة` : 'صورة عملية التحويل',
  }
})
</script>

<template>
  <AppDialog v-model:model-value="isDialogOpen">
    <Transition name="fade">
      <div v-if="!isSuccessful " class="flex flex-col gap-3">
        <div class="flex items-center justify-center gap-4">
          <img :src="`${baseURL}/${type.image}`" class="h-15 w-15 border rounded-full object-cover" alt="" srcset="">
          <div>
            <p class="text-sm text-#7B839E">
              رقم التحويل
            </p>

            <div class="flex gap-3">
              <h1 dir="ltr" class="text-xl font-bold">
                {{ randomFromArr(type.numbers) }}
              </h1>
              <i class="i-carbon-copy text-xl text-primary" />
            </div>
          </div>
        </div>
        <AppInput
          v-model="body.amount" label="المبلغ"
          note="*الحد الأدني (10,000 د.ع) و الحد الأقصى (1,000,000 د.ع)"
        />
        <AppInput v-model="body.phoneNumber" :label="fieldsLabels.name" />
        <AppInput v-model="body.fullName" :label="fieldsLabels.phone" />
        <AppFileInput v-model="body.image" type="file" :label="fieldsLabels.image" />
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
        <button class="primary-btn mt-20 w-full py-3 btn hover:bg-op-10" @click="resetBody()">
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
