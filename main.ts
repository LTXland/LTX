const App = {
    directory: "./src",
    routes: {
      "/": "./index.html",
    }
  }
  
  import Crate from "https://crate.land/mod";
  
  let crate = new Crate();
  crate.serve(App);