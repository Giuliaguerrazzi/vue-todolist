
const app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        list: [
            'Fare la spesa',
            'Fare i compiti',
            'Comprare il pane',
        ]
    },
    methods: {
        addNewTodo() {
            this.list.push(this.newTodo)
        },
    }

});