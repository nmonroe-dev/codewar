function greet (name, owner) {
   const greeting = name === owner ? "your the boss" : "your not the boss";
   console.log(greeting);
  }

  greet("Nathan", "Nathan")