<template>
  <a
    :id="id"
    role="button"
    aria-pressed="true"
    class="atoms-button"
    @click.prevent="$emit('handle-click')"
  >
    {{ text }}
  </a>
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.atoms-button {
  display: inline-flex;
  align-items: center;
  padding: 0.8rem;
  width: auto;
  text-decoration: none;
  text-align: center;
  border: 1px solid #007bc7;
  border-radius: 4px;
  cursor: pointer;
  line-height: 1;
  white-space: nowrap;
}
</style>
