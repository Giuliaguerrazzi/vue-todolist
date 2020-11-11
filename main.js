const app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        list: [ {
            nome: 'fare la spesa',
        },
        {
            nome: 'fare i compiti',
        },
        {
            nome: 'comprare il pane',
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
    }

});