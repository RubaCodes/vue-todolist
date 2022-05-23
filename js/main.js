const app = new Vue({
  el: '#app',
  data: {
    userInput: '',
    todos: [
      {
        text: 'Andare dal veterinario',
        completed: true,
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
      if (this.userInput !== ' ' && this.userInput !== '') {
        this.todos.push({
          text: this.userInput,
          completed: false,
        });
      }
      this.userInput = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
});
