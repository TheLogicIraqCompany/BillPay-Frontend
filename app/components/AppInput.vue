<script lang="ts" setup>
const props = defineProps<{
  label: string
  placeholder?: string
  note?: string
  disabled?: boolean
  type?: 'text' | 'file'
}>()
const generatedId = Math.random().toString(36).substring(7)
const type = computed(() => props.type || 'text')
const model = defineModel()
function foucs() {
  if (props.disabled)
    return
  document.getElementById(generatedId)?.focus()
}
</script>

<template>
  <div @click="foucs">
    <label class="text-sm" :for="`#${generatedId}`" @click="foucs">
      {{ label }}
    </label>
    <div class="input relative mt-2 w-full flex bg-#454B5E" @click="foucs">
      <input
        :id="generatedId"
        v-model="model"
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        locale="ar"

        class="w-full bg-transparent pa-3"
      >
      <div class="append w-full">
        <slot name="append" />
      </div>
    </div>
    <p class="mt-2 text-xs text-#7B839E">
      {{ note }}
    </p>
  </div>
</template>

<style lang="scss">
.input {
  background: url('/theme/input-bg.png') no-repeat;
  background-size: 100% 100%;
  background-position: center;
  border: none;

  .append {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3%;
  }
  input {
    background: none;
    border: none;
    color: white;
    margin-inline: 10%;
    outline: none;
    &:focus {
      outline: none;
    }
    // file input style
    &[type='file'] {
      cursor: pointer;
      content: 'test';
      width: 100%;
      height: 100%;
    }
  }
}
</style>
