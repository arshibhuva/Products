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
            id:6,
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
         
        <div className="row indian"  key={index}  id="indian"  >
    <div className="col-12 ps-3">
                <Link to='/indianrice' title='Indian Rice' className="title-product">
                 <p className="title-text-product">{item.titles}</p>
                </Link>
          
    </div>
    
       {
        item.innerdata.map((user,index)=>(
        
<div key={index} className="col-lg-3 col-md-4 col-sm-6 col main-col">
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
         
        <div className="row indian"  key={index} >
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
        
<div key={index} className="col-lg-3 col-md-4 col col-sm-6 main-col">
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

    </>
  );
};

