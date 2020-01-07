import App from '../App'
import { shallowMount} from "@vue/test-utils";
import Modal from '../components/Modal'
describe('App.vue', () => {
  test('hides Modal when Modal emits close-modal', () => {
    const wrapper = shallowMount(App)
    wrapper.find(Modal).vm.$emit('close-modal')
    expect(wrapper.find(Modal).exists()).toBeFalsy()
  })
})
