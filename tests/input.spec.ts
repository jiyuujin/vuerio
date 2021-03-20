import { mount } from '@vue/test-utils'

import JInput from '@/components/JInput.vue'

it('Input', async () => {
  const wrapper = await mount(JInput)
  expect(wrapper.find('.atoms-input')).toBeTruthy()
})
