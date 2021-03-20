import { mount } from '@vue/test-utils'

import JButton from '@/components/JButton.vue'

it('Button', async () => {
  const wrapper = await mount(JButton)
  expect(wrapper.find('.atoms-button')).toBeTruthy()
})
