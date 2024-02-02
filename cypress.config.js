const { defineConfig } = require("cypress");

module.exports = defineConfig({
 env: {
    token: 'Bearer 44eff269d12d844e923eb83c52f487c1d53003b3af2f4811ac53c3c7a0eeaef0'
       //implement node event listeners here
    },
    e2e:{
      baseUrl:'https://gorest.co.in/public/v2'
    }
  });
