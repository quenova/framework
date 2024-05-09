//function add(a,b) {
//    return a+b;
//}

//const { useCallback } = require("react");

//let sum = add(10,20);
//console.log('sum =', sum);
//console.log('sum =',add(10,15));
//let sum = add(20,25);
//let avg = sum/2;
//console.log('Rata-rata =',avg);

//function luasLingkaran(r) {
  //  Const phi = 3,14;
    //return phi* r*r;
//}

//console.log('lusaLingkaran =',luasLingkaran(10));



//function add(a,b)
 //{
  //  return a+b;
 //}
 //let sum =(a,b) => a+b;

 //console.log('jumlah =',sum(20,20));


 //function multply(first, second) {
   // return first * second
 //}
 //console.log('hasil =', multply(3,4));

 //let multi = (first, second) => first *second;
 //console.log('hasil multi =', multi(5,7));


 //iee
 //((first, second) => {
   // console.log(first*second)
 //})(3,8);

 //const one = (Callback) => {
   //setTimeout(() => {
      //console.log("one");
     // Callback();
   //}, 2000);
 //}


 //const two = (Callback) => {
   //setTimeout(() => {
      //console.log("two");
     // Callback();
   //}, 3000);
 //}


 //const three = (Callback) => {
   //setTimeout(() => {
      //console.log("three");
    //  Callback();
  // }, 1000);
 //}

 //const four =() => {
   //one(3000);
   //two(2000);
   //three(1000);
   //console.log("four");
 //}

//one();
//two();
//three();
//four();
 
import logo from './stray.jpg';
  import './App.css';

  function App() {
    return (
      <div className="App">
        <h1>Heloo Ini Nova</h1>
        <p>STAY EVERYWHERE ALLROUND THE WORLD</p>
        <img src={logo} className="stray.jpg" alt='logo'></img>
        <img src={logo} className="stray.jpg" alt='logo'></img>
        <img src={logo} className="stray.jpg" alt='logo'></img>
      </div>
    );
  }

  export default App;
