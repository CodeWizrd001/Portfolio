import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/views/Home.vue'


import About from '@/components/Home/About.vue'
import Card from '@/components/Home/Card.vue'

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
  it('renders About component', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.findComponent(About)).toBeTruthy() 
  })

  it('renders Card component', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.findComponent(Card)).toBeTruthy()
  })
})