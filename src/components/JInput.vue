<template>
  <input
    :id="id"
    :role="role"
    :aria-label="label"
    :aria-labelledby="explain"
    :value="inputText"
    :placeholder="placeholder"
    type="text"
    class="atoms-input"
    @input="update"
  />
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    explain: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputText() {
      return this.text
    }
  },
  methods: {
    update() {
      this.$emit('handle-input')
    }
  }
}
</script>

<style lang="scss" scoped>
.atoms-input {
  appearance: none;
  background: transparent;
  padding: 0.8rem 0.2rem;
  background-color: #fff;
  color: #000;
  z-index: 1;
  border: 1px solid #007bc7;
  border-radius: 4px;
  outline: 0;
  line-height: 1;

  :placeholder-shown {
    color: #ddd;
    font-style: italic;
    font-weight: 100;
  }

  ::-webkit-input-placeholder {
    color: #ddd;
    font-style: italic;
    font-weight: 100;
  }

  :-moz-placeholder {
    color: #ddd;
    font-style: italic;
    font-weight: 100;
  }

  ::-moz-placeholder {
    color: #ddd;
    font-style: italic;
    font-weight: 100;
  }

  :-ms-input-placeholder {
    color: #ddd;
    font-style: italic;
    font-weight: 100;
  }
}
</style>
