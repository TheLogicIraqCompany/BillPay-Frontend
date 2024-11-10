<script lang="ts" setup>
const isDialogOpen = defineModel<boolean>({
  default: false,
})
watch(isDialogOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('overflow-hidden')
  }
  else {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>

<template>
  <Transition name="scale">
    <div v-if="isDialogOpen" class="dialog">
      <div class="dialog-content">
        <div class="dialog-header">
          <button class="flex rounded-full bg-danger p-2 text-white btn" @click="isDialogOpen = false">
            <i class="i-carbon-close text-lg text-white" />
          </button>
        </div>
        <div class="dialog-body my-2 px-1">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
  <div v-if="isDialogOpen" class="overlay" />
</template>

<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 442;
}
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.4s ease;
}

.scale-enter-from {
  transform: scale(0.5);
}
.scale-leave-to {
  transform: scale(0.3);
}
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 443;
}
.dialog-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  min-height: 90%;
  z-index: 444;
  width: 400px;
  height: 95%;
  background: url('/theme/dialog-bg.png') no-repeat;
  background-position: center;
  background-size: 100% 100%;
  .dialog-body {
    max-height: 750px;
    overflow-y: auto;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: url('/theme/dialog-border.png') no-repeat;
    background-position: center;
    background-size: 100% 100%;
    z-index: -1;
  }
}
@media (max-width: 600px) {
  .dialog-content {
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
