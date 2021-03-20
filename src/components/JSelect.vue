<template>
  <div class="select-wrapper">
    <select
      :id="id"
      v-model="selectValues"
      :aria-label="label"
      :aria-labelledby="explain"
      class="atoms-select"
      @input="update"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: {
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
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    values: {
      type: Number,
      default: 0
    }
  },
  computed: {
    selectValues() {
      return this.values
    }
  },
  methods: {
    update(e: any) {
      this.$emit('handle-select', this.options[e.target.selectedIndex].value)
    }
  }
}
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;

  &:after {
    content: '';
    width: 6px;
    height: 6px;
    border: 0;
    border-bottom: solid 2px #b4b3b3;
    border-right: solid 2px #b4b3b3;
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    margin-top: -4px;
    margin-left: -14px;
  }
}

.atoms-select {
  appearance: none;
  background: transparent;
  padding: 0.8rem 2.8rem 0.8rem 0.2rem;
  width: 100%;
  background-color: #fff;
  color: #000;
  position: relative;
  border: 1px solid #0084cf;
  border-radius: 4px;
  outline: 0;
  line-height: 1;
}

.atoms-select::-ms-expand {
  display: none;
}
</style>
