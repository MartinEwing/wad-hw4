import { mount } from '@vue/test-utils'
import List from '../../src/components/List.vue'

describe('Task 1 tests', ()=> {

    it('Text is shown when empty',()=>{
        const wrapper = mount(List)
        expect(wrapper.html()).toContain('Add your first Todo task')
    })
})