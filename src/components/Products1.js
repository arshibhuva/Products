import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Products1() {
   
    const data = [
        {
            id :1,
            titles : 'Indian Rice',
            innerdata : [
                {
                    link : '/basmatirice',
                    title: 'Basmati Rice',
                    img:[require("../imgs/basmati.png")],
                    // imges:[require("https://2.wlimg.com/product_images/bc-full/2019/8/947338/basmati-rice-1565251068-5017689.png")]
                },
                {
                    link : '/nonbasmatirice',
                    title: 'Non Basmati Rice',
                    img:[require("../imgs/nonbasmati.jpeg")],
                    // imges:[require("https://2.wlimg.com/product_images/bc-full/2019/8/947338/non-basmati-rice-1565251084-5017703.jpeg")]
                }
            ]
        },
        {
            id :2,
            titles : 'Grains',
            innerdata : [
                {
                    link : '/greenmillet',
                    title: 'Green Millet',
                    img:[require("../imgs/asset 42.jpeg")]
                },
                {
                    link : '/yellowmaize',
                    title: 'Yellow Maize',
                    img:[require("../imgs/yellow.jpeg")]
                },
                {
                    link : '/barley',
                    title: 'Barley',
                    img:[require("../imgs/asset 44.jpeg")]
                   },
                   {
                    link : '/sorghum',
                    title: 'Sorghum',
                    img:[require("../imgs/sorghum.jpeg")]
                   },
                   {
                    link : '/wheat',
                    title: 'Wheat',
                    img:[require("../imgs/asset 46.jpeg")]
                   },
                   {
                    link : '/sesameseeds',
                    title: 'Sesame Seeds',
                    img:[require("../imgs/asset 47.jpeg")]
                   },
            ]
        },
        {
            id:3,
            titles:'Fodder Seeds',
            innerdata : [
                {
                    link : '/AlfalfaGrassSeeds',
                    title: 'Alfalfa GrassSeeds',
                    img:[require("../imgs/asset 48.jpeg")]
                   },
                   {
                    link : '/PiperSudanGrassSeeds',
                    title: 'Piper Sudan Grass Seeds',
                    img:[require("../imgs/asset 49.jpeg")]
                   }
            ]
        },
        {
            id:4,
            titles:'Fresh Fruits',
            innerdata : [
                {
                    link : '/FreshPromegranate',
                    title: 'Fresh Promegranate',
                    img:[require("../imgs/asset 50.jpeg")]
                }
            ]
        },
        {
            id:5,
            titles : 'Fresh Vegetables',
            innerdata : [
                {
                    link : '/FreshGinger',
                    title: 'Fresh Ginger',
                    img:[require("../imgs/asset 51.jpeg")]
                 },{
                    link : '/FreshRedOnion',
                    title: 'Fresh Red Onion',
                    img:[require("../imgs/asset 52.jpeg")]
                  }
            ]
        }
    ];
    const data2 = [
        {
            id:1,
            titles : 'Indian Spices',
            innerdata : [
                {
                    link : '/AjwainSpeeds',
                    title: 'Ajwain Speeds',
                    img:[require("../imgs/ajwain.jpeg")]
                   },
                   {
                    link : '/AselioSpeeds',
                    title: 'Aselio Speeds',
                    img:[require("../imgs/aselio.jpeg")]
                   },{
                    link : '/CorianderSeeds',
                    title: 'Coriander Seeds',
                    img:[require("../imgs/cori.jpeg")]
                   },{
                    link : '/CuminSeeds',
                    title: 'Cumin Seeds',
                    img:[require("../imgs/cumin.jpeg")]
                   },
                   {
                    link : '/FennelSpeeds',
                    title: 'Fennel Speeds',
                    img:[require("../imgs/fennel.jpeg")]
                   },{
                    link : '/FenugreekSeeds',
                    title: 'Fenugreek Seeds',
                    img:[require("../imgs/fenu.jpeg")]
                   },{
                    link : '/BayLeaves',
                    title: 'Bay Leaves',
                    img:[require("../imgs/bay.jpeg")]
                   },{
                    link : '/SennaLeaves',
                    title: 'Senna Leaves',
                    img:[require("../imgs/senna.jpeg")]
                   },{
                    link : '/RedChilliPowder',
                    title: 'Red Chilli Powder',
                    img:[require("../imgs/red.jpeg")]
                   },{
                    link : '/TurmericPowder',
                    title: 'Turmeric Powder',
                    img:[require("../imgs/turmeric.jpeg")]
                   }
            ]
        }
    ];
  return (
    <>
{/* Header */}

<section>
      <div className="bg-img">
        <div className="container main-head">
          <div className="row p-0 head-product d-flex justify-content-space-between align-items-center">
            <div className="col-md-8 col-sm-4 col-xs-12 col-head">
              <h1 className="h1">Products</h1>
            </div>
            <div className="col-md-4 col-sm-8 col-xs-12 text-sm-end first-text-product">
              <Link to='/'>Home</Link>
              <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
              Products
            </div>
          </div>
        </div>
      </div>
</section>


<div className="container">
      
      
<div id="products-body">
{/* Indian Rice */}


{
    data.map((item,index)=>(
         
        <div className="row"  key={index}  id="indian"  >
    <div className="col-12 ps-3">
                <Link to='/indianrice' title='Indian Rice' className="title-product">
                 <p className="title-text-product">{item.titles}</p>
                </Link>
          
    </div>
    
       {
        item.innerdata.map((user,index)=>(
        
<div key={index} className="col-lg-3 col-md-4 col main-col">
    <Link to={user.link} title="Grains">
        <div className="main-single-product">
            <div className="single-product">
                <div className="back-img" style={{background:`url(${user.img})`}}  >
                    <div className="bluer-back-img"></div>
                    <img className="product-img" src={user.img} alt="" /> 
                </div>
               
                <p className="text-product pb-2">{user.title}</p>       
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>{user.title}</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>basmatirice</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                 <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
        </Link>
        </div>
      
        ))}
        
        </div>
 
    ))
}

{
    data2.map((item,index)=>(
         
        <div className="row"  key={index} >
    <div className="col-12 ps-3">
                <Link to='/indianrice' title='Indian Rice' className="title-product">
                 <p className="title-text-product">{item.titles}</p>
                </Link> 
    </div>
   
          <div className="row pe-0" id="indian" >
            <div className="col-12 pb-4 pe-0">
              <p className="pre text-justify ps-0 pt-0">The distinctiveness of quality of Indian spices remains gloriously un-replicated. India is heaven of exotic spices and has attracted countries of the globe for centuries and even wars have been fought for them. India coveted position in the world of quality spices still stands unchallenged. Other countries have tried to replicate Indian spices; even though they could produce spices, the distinctness of quality of Indian spices remains gloriously un-replicated. Mukhi Overseas manufacture and export wide range of Ground & Whole Spices.</p>
            </div>
          </div>
       {
        item.innerdata.map((user,index)=>(
        
<div key={index} className="col-lg-3 col-md-4 col main-col">
    <Link to={user.link} title="Grains">
        <div className="main-single-product">
            <div className="single-product">
                <div className="back-img" style={{background:`url(${user.img})`}}  >
                    <div className="bluer-back-img"></div>
                    <img className="product-img" src={user.img} alt="" /> 
                </div>
               
                <p className="text-product pb-2">{user.title}</p>       
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>{user.title}</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>basmatirice</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                 <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
        </Link>
        </div>
      
        ))}
    
        </div>
 
    ))
}
</div>
</div>






















<div className="container">

<div id="products-body">
{/* <div className="container">
    <div className="row">
    <div className="col-12">
                <Link to='/indianrice' title='Indian Rice' className="title-product">
                 <p className="title-text-product">Indian Rice</p>
                </Link>
           </div>
    </div>

    <div className="row" id="indianrice">
    Basmatirice Rice

    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
    <Link to="/basmatirice" title="Grains">
        <div className="main-single-product">
            <div className="single-product">
                <div className="back-img bg1"  >
                    <div className="bluer-back-img"></div>
                    <img className="product-img" src={require("../imgs/asset 2.png")} alt="" /> 
                </div>
               
                <p className="text-product pb-2">Basmati Rice</p>       
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b> Basmatirice Rice</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>basmatirice</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                 <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
        </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/nonbasmatirice" title="Indian Rice ">
        <div className="main-single-product">
            <div className="single-product">
                <div className="back-img bg2" >
                    <div className="bluer-back-img "></div>
                    <img className="product-img" src={require("../imgs/asset 3.jpeg")} alt="" />        
                </div>
                <div className="text-product pb-2">Non Basmati Rice</div>   
                <div className="card-body1">
                    <div className="card-title">
                  <h6 className="product-title-back"><b>Non Basmati Rice</b> </h6>
                  <div className="secound-back-body">
                  <p> <b>Type : </b>Non Basmati Rice</p>
                  <p> <b>Use : </b>Human Consumption</p>
                  <p> <b>style : </b>Dried</p>
                  <p> <b>Cultivation Type : </b>Organic</p>
                  <p> <b>Self Life : </b>1 Year</p>
                  <div className="btns">
                 <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
            
        </Link>
        </div>
    </div>
</div> */}

  {/* Grains */}
{/* 
 <div className="container">
    <div className="row product-title">
    <div className="col-12">
                <Link to='/' title='Grains' className="title-product">
                 <p className="title-text-product">Grains</p>
                </Link>
           </div>
    </div>

    <div className="row main-line-produc" id="grains">
    Green Millet
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/greenmillet" title="Indian Rice ">
            <div className="single-product">
                <div className="back-img bg3 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img" src={require("../imgs/asset 42.jpeg")} alt="" />
                </div>
                <p className="text-product pb-2">Green Millet</p>
                <div className="card-body1">
                    <div className="card-title">
                  <h6 className="product-title-back"><b>Green Millet</b> </h6>
                  <div className="secound-back-body">
                  <p> <b>Type : </b>Green Millet</p>
                  <p> <b>Use : </b>Human Consumption</p>
                  <p> <b>style : </b>Dried</p>
                  <p> <b>Cultivation Type : </b>Organic</p>
                  <p> <b>Self Life : </b>1 Year</p>
                  <div className="btns">
                 <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
             
        </Link>
        </div>
        Yellow Maize
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/yellowmaize" title="Grains">
            <div className="single-product">
                <div className="back-img bg4 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img" src={require("../imgs/asset 43.jpeg")} alt="" />   
                </div>
                <p className="text-product pb-2">Yellow Maize </p>       
                <div className="card-body1">
                    <div className="card-title">
                  <h6 className="product-title-back"><b>Yellow Maize</b> </h6>
                  <div className="secound-back-body">
                  <p> <b>Type : </b>Yellow Maize</p>
                  <p> <b>Use : </b>Human Consumption</p>
                  <p> <b>style : </b>Dried</p>
                  <p> <b>Cultivation Type : </b>Organic</p>
                  <p> <b>Self Life : </b>1 Year</p>
                  <div className="btns">
                 <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
            
        </Link>
        </div>
        Barley
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/barley" title="Grains">
            <div className="single-product">
                <div className="back-img bg5 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img" src={require("../imgs/asset 44.jpeg")} alt="" />
                  </div>
                  <p className="text-product pb-2"> Barley</p>
                  <div className="card-body1">
                    <div className="card-title">
                  <h6 className="product-title-back"><b>Barley</b> </h6>
                  <div className="secound-back-body">
                  <p> <b>Type : </b>Barley</p>
                  <p> <b>Use : </b>Human Consumption</p>
                  <p> <b>style : </b>Dried</p>
                  <p> <b>Cultivation Type : </b>Organic</p>
                  <p> <b>Self Life : </b>1 Year</p>
                  <div className="btns">
                 <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
        </Link>
        </div>
        Sorghum
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/sorghum" title="Grains ">
            <div className="single-product">
                <div className="back-img bg6 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img" src={require("../imgs/asset 45.jpeg")} alt="" />
                    </div>
                    <p className="text-product pb-2">Sorghum</p>
                <div className="card-body1">
                    <div className="card-title">
                  <h6 className="product-title-back"><b>Sorghum </b> </h6>
                  <div className="secound-back-body">
                  <p> <b>Type : </b>Sorghum </p>
                  <p> <b>Use : </b>Human Consumption</p>
                  <p> <b>style : </b>Dried</p>
                  <p> <b>Cultivation Type : </b>Organic</p>
                  <p> <b>Self Life : </b>1 Year</p>
                  <div className="btns">
                 <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
        </Link>
        </div>
        Wheat
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/wheat" title="Grains">
            <div className="single-product">
                <div className="back-img bg7 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img wheat" src={require("../imgs/asset 46.jpeg")} alt="" />
                </div>
                <p className="text-product pb-2">Wheat</p>
                
                <div className="card-body1">
                    <div className="card-title">
                  <h6 className="product-title-back"><b>Wheat</b> </h6>
                  <div className="secound-back-body">
                  <p> <b>Type : </b>Wheat</p>
                  <p> <b>Use : </b>Human Consumption</p>
                  <p> <b>style : </b>Dried</p>
                  <p> <b>Cultivation Type : </b>Organic</p>
                  <p> <b>Self Life : </b>1 Year</p>
                  <div className="btns">
                 <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
        </Link>
        </div>
        Sesame Seeds
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/sesameseeds " title="Grains ">
            <div className="single-product">
                <div className="back-img bg8 "></div>
                <p className="text-product pb-2">Sesame Seeds </p>
                <div className="card-body1">
                    <div className="card-title">
                  <h6 className="product-title-back"><b>Sesame Seeds </b> </h6>
                  <div className="secound-back-body">
                  <p> <b>Type : </b>Sesame Seeds </p>
                  <p> <b>Use : </b>Human Consumption</p>
                  <p> <b>style : </b>Dried</p>
                  <p> <b>Cultivation Type : </b>Organic</p>
                  <p> <b>Self Life : </b>1 Year</p>
                  <div className="btns">
                 <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
        </Link>
        </div>
    </div>
  </div>  */}

  {/* Fodder Seeds */}

  {/* <div className="container">
    <div className="row product-title">
    <div className="col-12">
                <Link to='/' title='Indian Rice' className="title-product">
                 <p className="title-text-product">Fodder Seeds</p>
                </Link>
           </div>
    </div>

    <div className="row main-line-product" id="fodderseeds">
   Alfalfa Grass Seeds
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/AlfalfaGrassSeeds" title="Fodder Seeds">
            <div className="single-product">
                <div className="back-img bg9 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img fs-img1" src={require("../imgs/asset 48.jpeg")} alt="" />
                </div>
                <p className="text-product pb-2">Alfalfa Grass Seeds</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Alfalfa Grass Seeds</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Alfalfa Grass Seeds</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
            
        </Link>
        </div>
    Piper Sudan Grass Seeds
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/PiperSudanGrassSeeds" title="Fodder Seeds">
            <div className="single-product">
                <div className="back-img bg10 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img fs-img2" src={require("../imgs/asset 49.jpeg")} alt="" />
                </div>
                <p className="text-product pb-2">Piper Sudan Grass Seeds</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Piper Sudan Grass Seeds</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Piper Sudan Grass Seeds</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
            
        </Link>
        </div>
    </div>
  </div> */}

  {/* Fresh Fruits */}
  {/* <div className="container">
    <div className="row product-title">
    <div className="col-12">
                <Link to='/' title='Indian Rice' className="title-product">
                 <p className="title-text-product">Fresh Fruits</p>
                </Link>
           </div>
    </div>

    <div className="row main-line-product" id="freshfruits">
    Fresh Promegranate
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/FreshPromegranate" title="Fresh Promegranate">
            <div className="single-product">
                <div className="back-img bg11 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img promegranate product-img2" src={require("../imgs/asset 50.jpeg")} alt="" />
                </div>
                <p className="text-product pb-2">Fresh Promegranate</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>FreshPromegranate</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>FreshPromegranate</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
            
        </Link>
        </div>
    </div>
  </div> */}

{/* FRESH VEGETABLE */}
   {/* <div className="container">
    <div className="row product-title">
    <div className="col-12">
                <Link to='/' title='Indian Rice' className="title-product">
                 <p className="title-text-product">Fresh Vegetable</p>
                </Link>
           </div>
    </div>

    <div className="row main-line-product" id="freshvegetable">
     Fresh Ginger
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/FreshGinger" title="Fresh Ginger">
            <div className="single-product">
                <div className="back-img bg12 "></div>
                <p className="text-product pb-2">Fresh Ginger</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b> Fresh Ginger </b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b> Fresh Ginger </p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
            
        </Link>
        </div>
       Fresh Red Onion
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/FreshRedOnion" title="Fresh Red Onion">
            <div className="single-product">
                <div className="back-img bg13 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img onion" src={require("../imgs/asset 52.jpeg")} alt="" />
                 </div>
                 <p className="text-product pb-2">Fresh Red Onion</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Fresh Red Onion</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Fresh Red Onion</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
    </div>
  </div> */}

{/* iNDIAN SPICES */}
{/* <div className="container">
    <div className="row product-title">
    <div className="col-12">
                <Link to='/' title='Indian Rice' className="title-product">
                 <p className="title-text-product">Indian Spices</p>
                </Link>
           </div>
    </div>
          <div className="row" id="indian">
            <div className="col-12 pb-4">
              <p className="pre text-justify ps-0">The distinctiveness of quality of Indian spices remains gloriously un-replicated. India is heaven of exotic spices and has attracted countries of the globe for centuries and even wars have been fought for them. India coveted position in the world of quality spices still stands unchallenged. Other countries have tried to replicate Indian spices; even though they could produce spices, the distinctness of quality of Indian spices remains gloriously un-replicated. Mukhi Overseas manufacture and export wide range of Ground & Whole Spices.</p>
            </div>
          </div>
        

    <div className="row main-line-product" id="indianspices">
   Ajwain Speeds
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/AjwainSpeeds" title=" Ajwain Speeds">
            <div className="single-product">
                <div className="back-img bg14 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img pro-img" src={require("../imgs/asset 53.jpeg")} alt="" />
                 </div>
                 <p className="text-product pb-2"> Ajwain Speeds</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b> Ajwain Speeds</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b> Ajwain Speeds</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
    Aselio Speeds
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/AselioSpeeds" title="Aselio Speeds">
            <div className="single-product">
                <div className="back-img bg15 "> </div>
                    <p className="text-product pb-2">Aselio Speeds</p>
                    <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Aselio Speeds</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Aselio Speeds</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
  Coriander Seeds
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/CorianderSeeds" title="Coriander Seeds">
            <div className="single-product">
                <div className="back-img bg16 ">
                </div>
                <p className="text-product pb-2">Coriander Seeds</p>  
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Coriander Seeds</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Coriander Seeds</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
    Cumin Seeds
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/CuminSeeds" title="Cumin Seeds">
            <div className="single-product">
                <div className="back-img bg17 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img" src={require("../imgs/asset 56.jpeg")} alt="" />
                </div>
                <p className="text-product pb-2">Cumin Seeds</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Cumin Seeds</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Cumin Seeds</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
  Fennel Speeds
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/FennelSpeeds" title="Fennel Speeds">
            <div className="single-product">
                <div className="back-img bg18 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img" src={require("../imgs/asset 57.jpeg")} alt="" />
                </div>
                <p className="text-product pb-2">Fennel Speeds</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Fennel Speeds </b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Fennel Speeds </p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
   Fenugreek Seeds
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/FenugreekSeeds" title="Fenugreek Seeds">
            <div className="single-product">
                <div className="back-img bg19 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img" src={require("../imgs/asset 58.jpeg")} alt="" />
                </div>
                <p className="text-product pb-2">Fenugreek Seeds</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Fenugreek Seeds</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Fenugreek Seeds</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
  BayLeaves
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/BayLeaves" title="BayLeaves">
            <div className="single-product">
                <div className="back-img bg20 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img pro-img" src={require("../imgs/asset 59.jpeg")} alt="" />
                </div>
                <p className="text-product pb-2">BayLeaves</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>BayLeaves</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>BayLeaves</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
Senna Leaves
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/SennaLeaves" title="Fresh Red Onion">
            <div className="single-product">
                <div className="back-img bg21 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img pro-img" src={require("../imgs/asset 60.jpeg")} alt="" />
                </div>
                <p className="text-product pb-2">Senna Leaves</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Senna Leaves</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Senna Leaves</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
 Red Chilli Powder
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/RedChilliPowder" title="Red Chilli Powder">
            <div className="single-product">
                <div className="back-img bg22 ">
                </div>
                <p className="text-product">Red Chilli Powder</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Red Chilli Powder</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Red Chilli Powder</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
          Turmeric Powder
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 main-col">
        <Link to="/TurmericPowder" title="Turmeric Powder">
            <div className="single-product">
                <div className="back-img bg23 ">
                    <div className="bluer-back-img "></div>
                    <img className="product-img-last"  src={require("../imgs/asset 62.jpeg")} alt="" />
                  </div>
                  <p className="text-product">Turmeric Powder</p>
                <div className="card-body1">
                    <div className="card-title">
                       <h6 className="product-title-back"><b>Turmeric Powder</b> </h6>
                      <div className="secound-back-body">
                      <p> <b>Type : </b>Turmeric Powder</p>
                      <p> <b>Use : </b>Human Consumption</p>
                      <p> <b>style : </b>Dried</p>
                      <p> <b>Cultivation Type : </b>Organic</p>
                      <p> <b>Self Life : </b>1 Year</p>
                      <div className="btns">
                          <Link to='/'><div className="btn btn1">Enquiry Now</div></Link> 
                      <div className="btn btn2">View More</div>
                  </div>
                  </div>
                </div>
            </div>
            </div> 
        </Link>
        </div>
    </div>
  </div> */}
</div>
</div>

    </>
  );
};

