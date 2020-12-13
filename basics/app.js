// Vue.createApp // available because of vue cdn or script
const app = Vue.createApp({
    // data, funtions 
    //template: '<h2> I am the template</h2>'
    data() { // helps to add the data dynamically in the template
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            title: 'The final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                {title: 'name of the wind', author: 'petrick rothfuss', img: 'assets/1.png', isFav: true},
                {title: 'the way of kings', author: 'petrick rothfuss', img: 'assets/2.png', isFav: false},
                {title: 'final emperor', author: 'petrick rothfuss', img: 'assets/3.png', isFav: true},
            ],
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'New one';
            this.title = title;
        },
        toogleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, val=1) {
            console.log(e, val);
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: { // the compute method are like get in flutter and the diff is that in this it will dynamically give us the computed value
        filteredBooks() { 
           return this.books.filter((book) => book.isFav); 
        }
    }
});

// here we saying take app instance and mount it into the dom
app.mount('#app'); // because of this our Vue app anything control inside this div
