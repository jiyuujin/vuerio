import JInput from '../components/JInput.vue'

export default {
  title: 'Example/Input',
  component: JInput,
  argTypes: {
    id: { control: 'string' },
    role: { control: 'string' },
    label: { control: 'string' },
    explain: { control: 'string' },
    placeholder: { control: 'string' },
    text: { control: 'string' },
  },
}

const Template = (args) => ({
  components: { JInput },
  setup() {
    return { args }
  },
  template: '<j-input v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  id: 'custom-input',
  role: 'textbox',
  label: 'input',
  explain: 'Input Form',
  text: 'Input',
}
