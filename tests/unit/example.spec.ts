import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/views/Home.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Home.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'Name'
    const wrapper = shallowMount(Home, {
      propsData: { name }
    })
    // Class Hello has Hello Name
    expect(wrapper.find('.hello').text()).toMatch(name)
  })
})
