const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question= "Will the weather be nice today?";

welcome()
.then(console.log)
.then(()=> {
    goodbye().then(console.log);
});
   