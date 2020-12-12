// Vue.createApp // available because of vue cdn or script
const app = Vue.createApp({
    // data, funtions 
    //template: '<h2> I am the template</h2>'
    data() { // helps to add the data dynamically in the template
        return {
            showBooks: true,
            title: 'The final Empire',
            author: 'Brandon Sanderson',
            age: 45,
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'New one';
            this.title = title;
        },
        toogleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
});

// here we saying take app instance and mount it into the dom
app.mount('#app'); // because of this our Vue app anything control inside this div
