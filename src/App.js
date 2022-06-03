const App = (props)=>{
  fetch('https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product')
  .then(response=> response.json())
  .then(data=>console.dir(data));

  return <h1>Hello World</h1>
}



export default App;
