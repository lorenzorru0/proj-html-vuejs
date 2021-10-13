import Vue from 'vue'
const dataLatestNews = Vue.observable({
    data: [
        {
            url: 'images/blog-post-1-400x241.jpg',
            title: "Redeveloping Florida's Remote Southern Coast",
            date: 'December 7th 2015',
            description: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed',
            categories: 'Architecture, Buildings, Construction, News'
        },
        {
            url: 'images/blog-post-2-400x241.jpg',
            title: "How We Manage Large Costruction Projects",
            date: 'December 7th 2015',
            description: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed',
            categories: 'Architecture, Construction, Engineering'
            
        },
        {
            url: 'images/blog-post-3-400x241.jpg',
            title: "Future Proofing A Modern Home",
            date: 'December 6th 2015',
            description: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed',
            categories: 'Architecture, Construction, Marketing'            
        }
    ]
})
export default dataLatestNews;