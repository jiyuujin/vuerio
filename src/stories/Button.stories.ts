import JButton from '../components/JButton.vue'

export default {
  title: 'Example/Button',
  component: JButton,
  argTypes: {
    id: { control: 'string' },
    text: { control: 'string' }
  }
}

const Template = (args) => ({
  components: { JButton },
  setup() {
    return { args }
  },
  template: '<j-button v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  id: 'custom-button',
  text: 'Button'
}
