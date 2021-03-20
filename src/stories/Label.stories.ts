import JLabel from '../components/JLabel.vue'

export default {
  title: 'Example/Label',
  component: JLabel,
  argTypes: {
    text: { control: 'string' }
  }
}

const Template = (args) => ({
  components: { JLabel },
  setup() {
    return { args }
  },
  template: '<j-label v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  text: 'Label'
}
