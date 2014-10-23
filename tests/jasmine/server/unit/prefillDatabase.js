describe("prefillTodos", function() {

  beforeEach(function() {
    spyOn(Todos, "insert");
    spyOn(Todos, "find").and.returnValue({count: function() { return 0; }})

    prefillTodos();
  });

  it("inserts into the database", function() {
    expect(Todos.insert).toHaveBeenCalledWith({name: "Create a todo"});
    expect(Todos.insert).toHaveBeenCalledWith({name: "Learn MeteorJS"});
  });

})
