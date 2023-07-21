import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PhoneInput from 'react-phone-input-2';
import { useLocation } from "react-router";
import 'react-phone-input-2/lib/style.css';
export default function Indianrice({props}) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const name = props[0].maintitle;
  console.log(name);
  return (
    <>
    
       {/* Header */}
       <section>
        <div className="bg-img">
          <div className="container main-head">
            <div className="row head-product d-flex justify-content-space-between align-items-center">
              <div className="col-sm-5 col-xs-12">
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
            <div className="col basmti-main-img">
            <div className="zoom-gallery sticky-top">
            <div className="zoom-box"  style={{width:props.width}}>
            <div className="zoom-gallery-slider active">
            <div className="magic-zoom">
            <figure className="m-z-figure">
         
            <img src={data.img} alt="" className="img-fluid" style={{width:data.width}}/>
            </figure>
            </div>
            </div>
            </div>
            </div>
              {/* <div className="basmati-rice-img">
              <div className="img-second">
              <img src={props.img} alt="" className="img-fluid" />
              </div>
              </div> */}
            </div>
              {/* <div className="col-lg-5 col basmti-main-img">
                <div className="basmati-rice-img sticky-top">
                 
                  
                    <img src={data.img}   className="basmti-img" alt="" />
            
                </div>
              </div> */}
              <div className="col main-basmti-body">
                <div className="basmati-body">
                  <p className="fn-26 mb-1 bt title-box1">{data.title}</p>
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
                <div className="row" id="inner-form-full">
                <div className="col-12">
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog ">
                      <div className="modal-content">
                        <div className="modal-body">
                        <div className="scoll-tree">
                          <div className="row" id="inner-box-form">
                            <div className="col col-form-img">
                              <div className="back-img back-img-box" style={{background:`url(${data.img})`}}>
                                <div className="bluer-back-img "></div>
                                <img
                                  className="product-img product-2"
                                  src={data.img}
                                  alt=""
                                />
                                <p className="title-interested">
                                  {data.title}
                                </p>
                              </div>
                              <div className='text-inner-form'>
                      
                                <p className="text-gray pt-2 m-0">
                                  <b className="">Preferred Buyer From</b>
                                </p>
                                <p className="text-gray mt-0 m-0">
                                  <span> Location :</span><span className="text-gray "> Worldwide</span>
                                </p>
                              </div>
                            </div>
                            <div className="col col-form">
                              <p className="title-interested2">
                                <b>Get a Quick Quote</b>
                              </p>
                              
                              <form>
                              <div id="inner-forn" className="inner-form">
                              <div className="row form-row">
                <div className="col-12 col form-box">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1">
                      <label className="name">Name </label>
                    </div>
                    <div className="input-main-name">
                      <input
                        className="inpute-name-box1"
                        type="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1">
                      <label className="name">Email</label>
                    </div>
                    <div className="input-main-name">
                      <input
                        className="inpute-name-box1"
                        type="name"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row">
                <div className="col-12 col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1">
                      <label className="name">Mobile No.</label>
                    </div>
                    <div className="input-main-name mobail-box">

                    <PhoneInput  className="icon-flag" country={'in'} />
                     <input
                        className="inpute-name-box1 number-box"
                        type="text"
                        placeholder="Enter Mobail no."
                        required
                      />
                      
                    </div>
                  </div>
                </div>
                <div className="col-12 col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1 gray-text">
                      <label className="name">Quantity</label>
                    </div>
                    <div className="input-main-name d-flex">
                      <input
                        className="inpute-name-box1 mr-3"
                        type="name"
                        placeholder="Estimated Quantity"
                        required
                      />
                      <input
                        className="inpute-name-box1"
                        type="name"
                        placeholder="Ton"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row form-row-radio m-0">
                <div className="col-12 col col-radio p-0">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1 textarea-box-text">
                      <label className="name">Purpose of Requirement</label>
                    </div>
                    <div className="input-main-name input-main-name-radio">
                      <span className="radio-btn">
                        <input
                          className="fs"
                          type="radio"
                          name="1"
                          placeholder="Name"
                          required
                        />
                        <span className="radio-text">Reselling</span>
                      </span>
                      <span className="radio-btn">
                        <input
                          className="fs"
                          type="radio"
                          name="1"
                          placeholder="Name"
                          required
                        />
                        <span className="radio-text">End Use</span>
                      </span>
                      <span className="radio-btn">
                        <input
                          className="fs"
                          type="radio"
                          name="1"
                          placeholder="Name"
                          required
                        />
                        <span className="radio-text">Raw Material</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row">
                <div className="col-12 col">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1 textarea-box-text">
                      <label className="name">Requirement Details</label>
                    </div>
                    <div className="input-main-name">
                      <textarea
                        className="inpute-name-box1 textarea-box"
                        placeholder="I am interested. Kindly send the quotation for the same."
                        name=""
                        id=""
                        cols="20"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-row" id="inner-btn-enquiry">
                <div className="col-sm-12">
                  <div id="box-btn">
                    <div className="box-btn">Send Enquiry</div>
                  </div>
                </div>
              </div>
                              </div>
                               
                              </form>
                            </div>
                          </div>
                          </div>
                        </div>
                        <button type="button" class="btn-close  btn-close-model" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                    </div>
                  </div>
                </div>
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
