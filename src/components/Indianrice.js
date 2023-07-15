import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Indianrice({props}) {

  const name = props[0].maintitle;
  console.log(name);
  return (
    <>
    
       {/* Header */}
       <section>
        <div className="bg-img">
          <div className="container">
            <div className="row head-product d-flex justify-content-space-between align-items-center">
              <div className="col-sm-5 col-xs-12 ">
                <h1 className="h1">{name}</h1>
              </div>
              <div className="col-sm-7 col-xs-12 text-sm-end first-text-product  first-text-product2">
                <Link to="/">Home</Link>
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                <Link to="/"> Products</Link>
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                <Link to="/inadianrice">{name}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Header */}
      <section>
        
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <p className="first-line">
                Leading Manufacturer of Basmati Rice and Non Basmati Rice from
                Ahmedabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Basmati rice  */}
      {
        props.map((data, index) =>(
        
 
        <div className="container">
          <div className="main-basmati-box" id="inner-box-Product">
            <div className="row mt-3 row-box">
              <div className="col-lg-5 col basmti-main-img">
                <div className="basmati-rice-img sticky-top">
                 
                  
                    <img src={data.img}   className="basmti-img" alt="" />
            
                </div>
              </div>
              <div className="col-lg-7 col main-basmti-body">
                <div className="basmati-body">
                  <p className="fn-26 mb-1 bt ">{data.title}</p>
                  <div className="brbtn">Get Bebst Price</div>
                  <div className="fs-14">
                    <span className="gray-text">MOQ : </span>
                    <b>24 Ton</b>
                    <table className="mt-4 main-table">
                    <tbody>
                    <tr className="tb">
                      <td className="gray-text">Business Type </td>
                      <td>
                        <b>Manufacturer</b>
                      </td>
                    </tr>
                    <tr className="tb">
                      <td className="gray-text">Type </td>
                      <td>
                        <b>Basmati</b>
                      </td>
                    </tr>
                    <tr className="tb">
                      <td className="gray-text">Use </td>
                      <td>
                        <b>Human Consumption</b>
                      </td>
                    </tr>
                    <tr className="tb">
                      <td className="gray-text">Style </td>
                      <td>
                        <b>Dried</b>
                      </td>
                    </tr>
                    <tr className="tb">
                      <td className="gray-text">Cultivation Type </td>
                      <td>
                        <b>Organic</b>
                      </td>
                    </tr>
                    <tr className="tb">
                      <td className="gray-text">Shelf Life </td>
                      <td>
                        <b>1 Year</b>
                      </td>
                    </tr>
                    <tr className="tb">
                      <td className="gray-text">Color </td>
                      <td>
                        <b>White</b>
                      </td>
                    </tr>
                    <tr className="tb">
                      <td className="gray-text">Speciality </td>
                      <td>
                        <b>Gluten Free, High In Protein</b>
                      </td>
                    </tr>
                  </tbody>
                    </table>
                    <div className="link-view-more">
                  <Link className="link" to="/" target="#basmati-table">
                    Click to view more
                  </Link>
                </div>
                  </div>
                  <p className="text-red">Preferred Buyer From</p>
                  <table className="w-100 mt-0">
                    <tbody>
                      <tr className="tb">
                        <td className="gray-text">Location :</td>
                        <td>
                          <b>Worldwide</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
  
                  <div className="row">
                    <p className="col-12 pre pt-3 table-pre">
                      For nearly half the world’s population, rice is life. Rice
                      provides one of the main sources of calories for billions of
                      people. It is a staple, a comfort food, a side dish and a
                      main meal. It’s also a highly nutritious component of a
                      healthy diet, if you choose the right source.
                    </p>
  
                    <div className="col-12 pt-2">
                      <strong>Range:</strong>
                      <p className="table-pre">
                        1For nearly half the world’s population, rice is life.
                        Rice provides one of the main sources of calories for
                        billions of people. It is a staple, a comfort food, a side
                        dish and a main meal. It’s also a highly nutritious
                        component of a healthy diet, if you choose the right
                        source.
                      </p>
                    </div>
                    <div className="col-12">
                      <strong>Range: </strong>
                      <ul className="main-line">
                        <li>1121</li>
                        <li>Pusa</li>
                        <li>Sugandha</li>
                        <li>Raw</li>
                        <li>Steam</li>
                        <li>Boiled</li>
                        <li>Traditional121</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                  <div id="basmati-btn-last" className="col-12 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="brbtn2 ms-0">Yes! i am interested</div>
                </div>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div> 
      ) 
      )
   }

    </>
  );
}
