import { mount } from '@vue/test-utils'

import JLabel from '@/components/JLabel.vue'

it('Label', async () => {
  const wrapper = await mount(JLabel)
  expect(wrapper.find('.tag')).toBeTruthy()
})
