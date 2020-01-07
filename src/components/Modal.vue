<template>
  <div>
    <button
      @click="$emit('close-modal')"
    >Close</button>
    <slot />
  </div>
</template>

