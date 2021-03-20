import JSelect from '../components/JSelect.vue'

const SELECT_MENU = [
  { value: 1, text: 'abc' },
  { value: 2, text: 'def' },
  { value: 3, text: 'ghi' },
  { value: 4, text: 'jkl' },
  { value: 5, text: 'mno' }
]

export default {
  title: 'Example/Select',
  component: JSelect,
  argTypes: {
    id: { control: 'string' },
    label: { control: 'string' },
    explain: { control: 'string' },
    options: {
      control: {
        type: 'select',
        options: SELECT_MENU
      }
    },
    values: {
      control: {
        type: 'select',
        options: [0]
      }
    }
  }
}

const Template = (args) => ({
  components: { JSelect },
  setup() {
    return { args }
  },
  template: '<j-select v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  id: 'custom-select',
  label: 'select',
  explain: 'Select Form',
  options: SELECT_MENU,
  values: [0]
}
