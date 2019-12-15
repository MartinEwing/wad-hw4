import { mount } from '@vue/test-utils'
import Footer from '../../src/components/Footer.vue'


describe('Task 3 tests', ()=> {

    it('Open property check',()=>{
        const wrapper = mount(Footer)
        wrapper.find('span').trigger('click')
        expect(wrapper.vm.$data.open).toBe(true)
    })
})