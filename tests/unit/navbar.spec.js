import { mount } from '@vue/test-utils'
import MyNavBar from '@/components/MyNavBar.vue'
//import LocalVue
//import vuex
//create mock vuex store
//wrapper, get logout button
//test if logout button.exists()

describe('MyNavBar.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(MyNavBar, {
      propsData: {
        msg: 'I am a test message'
      }
    })
    expect(wrapper.text()).toMatch('I am a test message')
  })
})
