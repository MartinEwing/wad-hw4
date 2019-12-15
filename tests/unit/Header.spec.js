import {mount} from '@vue/test-utils'
import Header from '../../src/components/Header.vue'

describe('Task 2 tests', () => {

    it('Date is correct', () => {

        const wrapper = mount(Header)

        let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
        let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]

        let now = new Date()

        let date = now.getDate()
        let year = now.getFullYear()
        let month = months[now.getMonth()]
        let weekday = days[now.getDay()]

        expect(wrapper.html()).toContain(date)
        expect(wrapper.html()).toContain(year)
        expect(wrapper.html()).toContain(month)
        expect(wrapper.html()).toContain(weekday)
    })
})
