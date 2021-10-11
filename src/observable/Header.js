import Vue from 'vue'
const dataHeader = Vue.observable({
    link: [
        {
            name: 'HOME',
            active: true
        },
        {
            name: 'ABOUT',
            active: false
        },
        {
            name: 'SERVICES',
            active: false
        },
        {
            name: 'WORK',
            active: false
        },
        {
            name: 'ARTICLES',
            active: false
        }
    ]
})
export default dataHeader;