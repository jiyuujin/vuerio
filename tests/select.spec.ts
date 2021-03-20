import { mount } from '@vue/test-utils'

import JSelect from '@/components/JSelect.vue'

it('Select', async () => {
  const wrapper = await mount(JSelect)
  expect(wrapper.find('.atoms-select')).toBeTruthy()
})
