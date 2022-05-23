const app = new Vue({
  el: '#app',
  data: {
    userInput: '',
    userEdit: '',
    todos: [
      {
        text: 'Andare dal veterinario',
        completed: true,
        processing: false,
      },
      {
        text: 'Fare la spesa',
        completed: false,
        processing: false,
      },
      {
        text: 'Pulire la camera',
        completed: false,
        processing: false,
      },
    ],
  },
  methods: {
    pushTodo() {
      if (this.userInput !== ' ' && this.userInput !== '') {
        this.todos.push({
          text: this.userInput,
          completed: false,
          processing: false,
        });
      }
      this.userInput = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    edit(index) {
      console.log(index);
      this.todos[index].text = this.userEdit;
      this.todos[index].processing = !this.todos[index].processing;
      this.userEdit = '';
    },
  },
});
