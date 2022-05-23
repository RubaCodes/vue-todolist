const app = new Vue({
  el: '#app',
  data: {
    userInput: '',
    newTodo: {
      text: '',
      completed: false,
    },
    todos: [
      {
        text: 'Andare dal veterinario',
        completed: false,
      },
      {
        text: 'Fare la spesa',
        completed: false,
      },
      {
        text: 'Pulire la camera',
        completed: false,
      },
    ],
  },
  methods: {
    pushTodo() {
      if (this.userInput !== ' ') {
        this.newTodo.text = this.userInput;
        this.todos.push(this.newTodo);
      }
      this.userInput = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
});
