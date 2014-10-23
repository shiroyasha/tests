Todos = new Mongo.Collection("todos")

function Todo(name) {
  this.name = name;
}

Todo.prototype = {
  valid: function() {
    return this.name && this.name != "";
  },

  save: function() {
    Todos.insert({name: this.name});
  }
};





function setUpTemplates() {
  Template.todos.helpers({
    todos: function () {
      return Todos.find();
    }
  });

  Template.createTodo.events({
    'click button': function() {
      var input = $("#newTodo");
      var name = input.val();

      input.val("")

      new Todo(name).save();
    }
  });
}




function prefillTodos() {
  if(Todos.find().count() !== 0) return;

  var todos = ["Create a todo", "Learn MeteorJS"];

  todos.forEach(function(todo) { new Todo(todo).save(); });
}


if (Meteor.isServer) Meteor.startup(prefillTodos);
if (Meteor.isClient) setUpTemplates();
