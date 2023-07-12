
import css from './css/style.css';
import meadia from "./css/meadiaquery.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ReactImageMagnify from 'react-image-magnify';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Basmatirice from "./components/Basmatirice";
import Indianrice from "./components/Indianrice";
import Products1 from "./components/Products1";
import Form from './components/Form';

function App() {
 const data1 = [
    {
     title: 'first',
     img:[require("./imgs/asset 2.png")]
    },
    {
     title: 'second',
     img:[require("./imgs/asset 3.jpeg")]
    }
   ]
 const dataTwo = [
    {
     title: 'third',
     img:[require("./imgs/asset 42.jpeg")]
    },
    {
     title: 'fourth',
     img:[require("./imgs/asset 43.jpeg")]

    },
    {
      title: 'seven',
      img:[require("./imgs/asset 44.jpeg")]
 
     },
   ]
  return (
    <>
      <Routes>
        <Route path="/" element={<Products1/>} />
        <Route path="/form" element={<Form/>} />

        <Route path="/inadianrice" element={<Indianrice data='data1' pro='Indian Rice' props ={data1}/> } />
        <Route path="/grains" element={<Indianrice  data='data2' title='Grains' props={dataTwo}/> } />








        <Route path="/basmatirice"  exact={true} element={<Basmatirice title='Basmati Rice' titleline='/inadianrice' maintitle='Indian Rice' img={require("./imgs/asset 2.png")}/>} />
        <Route path="/nonbasmatirice"  exact={true} element={<Basmatirice title='Non Basmati Rice' titleline='/inadianrice' maintitle='Indian Rice' img={require("./imgs/asset 3.jpeg")}/>} />
        
        <Route path="/greenmillet" element={<Basmatirice title='Green Millet' titleline='/grains' maintitle='Grains' img={require("./imgs/asset 42.jpeg")}/>} />
        <Route path="/yellowmaize" element={<Basmatirice title='Yellow Maize' titleline='/grains' maintitle='Grains' img={require("./imgs/asset 43.jpeg")}/>} />
        <Route path="/barley" element={<Basmatirice title='Barley' titleline='/grains'  maintitle='Grains' img={require("./imgs/asset 44.jpeg")}/>} />
        <Route path="/sorghum" element={<Basmatirice title='Sorghum' titleline='/grains'  maintitle='Grains' img={require("./imgs/asset 45.jpeg")}/>} />
        <Route path="/wheat" element={<Basmatirice title='Wheat' titleline='/grains'  maintitle='Grains' img={require("./imgs/asset 46.jpeg")}/>} />
        <Route path="/sesameseeds" element={<Basmatirice title='Sesame Seeds' titleline='/grains'  maintitle='Grains' img={require("./imgs/asset 47.jpeg")}/>} />

        <Route path="/AlfalfaGrassSeeds" element={<Basmatirice title='Alfalfa Grass Seeds'  maintitle='Fooder Seeds' img={require("./imgs/asset 48.jpeg")}/>} />
        <Route path="/PiperSudanGrassSeeds" element={<Basmatirice title='Piper Sudan Grass Seeds'  maintitle='Fooder Seeds' img={require("./imgs/asset 49.jpeg")}/>} />

        <Route path="/FreshPromegranate" element={<Basmatirice title='Fresh Promegranate'  maintitle='Fresh Fruits' img={require("./imgs/asset 50.jpeg")}/>} />
        
        <Route path="/FreshGinger" element={<Basmatirice title='Fresh Ginger'  maintitle='Fresh Vegetables' img={require("./imgs/asset 51.jpeg")}/>} />
        <Route path="/FreshRedOnion" element={<Basmatirice title='Fresh Red Onion'  maintitle='Fresh Vegetables' img={require("./imgs/asset 52.jpeg")}/>} />

        <Route path="/AjwainSpeeds" element={<Basmatirice title='Ajwain Speeds'  maintitle='Indian Spices' img={require("./imgs/asset 15.jpeg")}/>} />
        <Route path="/AselioSpeeds" element={<Basmatirice title='Aselio Speeds'  maintitle='Indian Spices' img={require("./imgs/asset 16.jpeg")}/>} />
        <Route path="/CorianderSeeds" element={<Basmatirice title='Coriander Seeds'  maintitle='Indian Spices' img={require("./imgs/asset 17.jpeg")}/>} />
        <Route path="/CuminSeeds" element={<Basmatirice title='Cumin Seeds'  maintitle='Indian Spices' img={require("./imgs/asset 18.jpeg")}/>} />
        <Route path="/FennelSpeeds" element={<Basmatirice title='Fennel Speeds'  maintitle='Indian Spices' img={require("./imgs/asset 19.jpeg")}/>} />
        <Route path="/FenugreekSeeds" element={<Basmatirice title='Fenugreek Seeds'  maintitle='Indian Spices' img={require("./imgs/asset 20.jpeg")}/>} />
        <Route path="/BayLeaves" element={<Basmatirice title='Bay Leaves'  maintitle='Indian Spices' img={require("./imgs/asset 21.jpeg")}/>} />
        <Route path="/SennaLeaves" element={<Basmatirice title='Senna Leaves'  maintitle='Indian Spices' img={require("./imgs/asset 22.jpeg")}/>} />
        <Route path="/RedChilliPowder" element={<Basmatirice title='Red Chilli Powder'  maintitle='Indian Spices' img={require("./imgs/asset 23.jpeg")}/>} />
        <Route path="/TurmericPowder" element={<Basmatirice title='Turmeric Powder'  maintitle='Indian Spices' img={require("./imgs/asset 24.jpeg")}/>} />

      </Routes>
    </>
  );
}

export default App;
