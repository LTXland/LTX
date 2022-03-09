const App = {
    directory: "./src",
    routes: {
      "/": "./index.html",
    }
}
  
import Crate from "https://crate.land/mod";
  
const crate = new Crate();
crate.serve(App);