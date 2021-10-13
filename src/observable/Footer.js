import Vue from 'vue'
const dataFooter = Vue.observable({
    data: [
        {
            description: 'We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.'
        },
        {
            title: 'LATEST TWEETS',
        },
        {
            title: 'CONTACT US TODAY',
            info: [
                {
                    icon: 'fas fa-globe',
                    description: 'Corporate Location 1600 Amphitheatre Parkway London WC11BA'
                },
                {
                    icon: 'fas fa-home',
                    description: 'Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA'
                },
                {
                    icon: 'fas fa-phone',
                    description: '1.800.458.556 / 1.800.532.2112'
                },
                {
                    icon: 'far fa-envelope',
                    description: 'info@your-domain.com'
                },
                {
                    icon: 'far fa-clock',
                    description: 'Monday - Friday: 9:00 AM - 6:00 PM'
                },
                {
                    icon: 'far fa-clock',
                    description: 'Saturday - Sunday: 9:00 AM - 12:00 PM'
                }
            ]
        },
        {
            title: 'FIND US',
        }
    ]
})
export default dataFooter;