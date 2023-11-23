const { Client } = require('node-osc');
const client = new Client('127.0.0.1', 3333);

const {createServer} = require("http");
let server = createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
    <button onclick=console.log("A") style="background-color: green;"> A </button>
    <button onclick=bClick() style="background-color: red;"> B </button>


    <script>
    function bClick(){
      console.log("b")
  }
    </script>
    `);
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");

client.send("A")