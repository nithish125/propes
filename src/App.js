import logo from './logo.svg';
import './App.css';
import Head from './header/head';
import Ban from './banner/ban';
import Content from './content/content';
import Content1 from './content/content1';
import Paren from './prop/paren';
function App() {
//   const producs = [sample={ name: "bmw", deail: "car", price: "23000" },{ name: "bmw", deail: "car", price: "23000" }
// ,{ name: "bmw", deail: "car", price: "23000" }]
  return (

    <div>
      <Head  />
      <Ban />
      <Content />
    
      <Paren />
    </div>
  );
}


export default App;
