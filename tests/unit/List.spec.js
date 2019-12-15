import { mount } from '@vue/test-utils'
import List from '../../src/components/List.vue'
import Item from '../../src/models/Item.js'

describe('Task 1 tests', ()=> {

    it('Text is shown when empty',()=>{
        const wrapper = mount(List)
        expect(wrapper.html()).toContain('Add your first Todo task')
    })

    it('When an item in the list is marked as done item is updated correctly',async ()=>{
        const wrapper = mount(List)

        let emptyList = []
        expect(wrapper.props().list).toEqual(emptyList) // Empty list

        let TestItem = new Item("TEXT")
        wrapper.props().list.push(TestItem)

        await wrapper.vm.$nextTick()

        expect(wrapper.props().list[0].done).toBe(false)

        wrapper.find('span').trigger('click')

        await wrapper.vm.$nextTick()

        expect(wrapper.props().list[0].done).toBe(true)
    })

})
