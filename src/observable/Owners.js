import Vue from 'vue'
const dataOwners = Vue.observable({
    data: [
        {
            url: 'images/home-testimonial-1.jpg',
            name: 'HARRY SMITH - NEW HOME OWNER',
            description: 'No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property.'
        },
        {
            url: 'images/home-testimonial-2.jpg',
            name: 'JOHN DOE - PROPERTY INVESTOR',
            description: 'Many novice real estate investors soon quit the profession and invest. When you invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving money shelter you from.'
        }
    ]
})
export default dataOwners;