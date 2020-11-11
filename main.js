const app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        list: [
            'Fare la spesa',
            'Fare i compiti',
            'Comprare il pane',
        ],

        emptyList: false,
    },
    methods: {
        addNewTodo() {
            if (this.newTodo.trim() !== '') {
                this.list.push(this.newTodo);

                this.newTodo = '';
            }
            
        },
        removeTodo(index) {
            this.list.splice(index, 1);
            if(this.list.length == 0){
                this.emptyList = true
              }
          },
    }

});