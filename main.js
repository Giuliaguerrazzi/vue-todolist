const app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        list: [ {
            nome: 'fare la spesa',
            done: '',
        },
        {
            nome: 'fare i compiti',
            done: '',
        },
        {
            nome: 'comprare il pane',
            done: '',
        },

        ],

        emptyList: false,
    },
    methods: {
        addNewTodo() {
            if (this.newTodo.trim() !== '') {
                this.list.push(
                    {nome: this.newTodo}
                    );

                this.newTodo = '';
            }
            
        },
        removeTodo(index) {
            this.list.splice(index, 1);
            if(this.list.length == 0){
                this.emptyList = true
              }
        },
        doneTodo(index) {
            if (this.list[index].done === '') {
                this.list[index].done = 'line'
            }
            else {
                this.list[index].done = null
            }
        }
    }

});