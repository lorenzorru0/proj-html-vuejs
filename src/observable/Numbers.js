import Vue from 'vue'
const dataNumbers = Vue.observable({
    data: [
        {
            icon: 'fas fa-suitcase',
            count: '3534',
            title: 'PLANNING APPLICATIONS'
        },
        {
            icon: 'far fa-building',
            count: '896',
            title: 'COMPLETED PROJECTS'
        },
        {
            icon: 'fas fa-users',
            count: '172',
            title: 'TRAINED PROFESSIONALS'
        },
        {
            icon: 'fas fa-globe',
            count: '19',
            title: 'INTERNATIAL OFFICES'
        }
    ]
})
export default dataNumbers;