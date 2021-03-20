<template>
  <div class="tag">
    {{ text }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  margin: 0.25rem;
  background-color: #68788d;
  color: #fff;
  border-radius: 9999px;
  border-width: 1px;
  border-color: #2e3439;
}
</style>
