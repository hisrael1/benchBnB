import React from 'react';
import ReactDOM from 'react-dom';
// Phase 1:
  // Import Root and configure store once I create it

    // Did a bundle install and db:setup
    // It worked and I also got this: /Users/appacademystudent/benchBnB/db/schema.rb doesn't exist yet.
      // Run `rails db:migrate` to create it, then try again. If you do not intend to use a database, you 
      // should instead alter /Users/appacademystudent/benchBnB/config/application.rb to limit the frameworks that will be loaded.
    // Do I need to migrate shit or should I save that for later?



// Do I need to import or export anything?
// what about (e)=> instead of ()=>
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Root rendeereddd</h1>, root);
});