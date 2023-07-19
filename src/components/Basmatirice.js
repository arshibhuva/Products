import React, { useRef, useState } from "react";
import { useEffect } from "react";

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import css from "../css/style.css";
import meadia from "../css/meadiaquery.css";
import { useLocation } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Basmatirice(props ) {
  //   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  //   const imageRef = useRef(null);
  //   const magnifierRef = useRef(null);
  // const handleMouseMove = (e) => {
  //   const { left, top, width, height } = imageRef.current.getBoundingClientRect();
  //   const { clientX, clientY } = e;

  //   const x = ((clientX - left) / width) * 100;
  //   const y = ((clientY - top) / height) * 100;

  //   setCursorPosition({ x, y });

  //   const magnifier = magnifierRef.current;
  //   magnifier.style.backgroundPosition = `-${x * zoomFactor}% -${y * zoomFactor}%`;
  // };

  const slider = [
    { 
    link : '/basmatirice',
     title: 'Basmati Rice',
     width: '100%',
     img:[require("../imgs/asset 2.png")]},
    {
    link : '/nonbasmatirice',
     title: 'Non Basmati Rice',
     width: '100%',
     img:[require("../imgs/asset 3.jpeg")]
    },
    {
      link : '/greenmillet',
      title: 'Green Millet',
      img:[require("../imgs/asset 42.jpeg")]
     },
     {
      link : '/yellowmaize',
      title: 'Yellow Maize',
      img:[require("../imgs/asset 43.jpeg")]
     },
      {
      link : '/barley',
      title: 'Barley',
      img:[require("../imgs/asset 44.jpeg")]
     },
     {
      link : '/sorghum',
      title: 'Sorghum',
      img:[require("../imgs/asset 45.jpeg")]
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
     {
      link : '/AlfalfaGrassSeeds',
      title: 'Alfalfa GrassSeeds',
      img:[require("../imgs/asset 48.jpeg")]
     },
     {
      link : '/PiperSudanGrassSeeds',
      title: 'Piper Sudan Grass Seeds',
      img:[require("../imgs/asset 49.jpeg")]
     },
     {
      link : '/FreshPromegranate',
      title: 'Fresh Promegranate',
      img:[require("../imgs/asset 50.jpeg")]
     },{
      link : '/FreshGinger',
      title: 'Fresh Ginger',
      img:[require("../imgs/asset 51.jpeg")]
     },{
      link : '/FreshRedOnion',
      title: 'Fresh Red Onion',
      img:[require("../imgs/asset 52.jpeg")]
     },{
      link : '/AjwainSpeeds',
      title: 'Ajwain Speeds',
      img:[require("../imgs/asset 15.jpeg")]
     },
     {
      link : '/AselioSpeeds',
      title: 'Aselio Speeds',
      img:[require("../imgs/asset 16.jpeg")]
     },{
      link : '/CorianderSeeds',
      title: 'Coriander Seeds',
      img:[require("../imgs/asset 17.jpeg")]
     },{
      link : '/CuminSeeds',
      title: 'Cumin Seeds',
      img:[require("../imgs/asset 18.jpeg")]
     },
     {
      link : '/FennelSpeeds',
      title: 'Fennel Speeds',
      img:[require("../imgs/asset 19.jpeg")]
     },{
      link : '/FenugreekSeeds',
      title: 'Fenugreek Seeds',
      img:[require("../imgs/asset 20.jpeg")]
     },{
      link : '/BayLeaves',
      title: 'Bay Leaves',
      img:[require("../imgs/asset 21.jpeg")]
     },{
      link : '/SennaLeaves',
      title: 'Senna Leaves',
      img:[require("../imgs/asset 22.jpeg")]
     },{
      link : '/RedChilliPowder',
      title: 'Red Chilli Powder',
      img:[require("../imgs/asset 23.jpeg")]
     },{
      link : '/TurmericPowder',
      title: 'Turmeric Powder',
      img:[require("../imgs/asset 24.jpeg")]
     },
   ]


  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [error, seterror] = useState("");

  const Validation = (e) => {
    e.preventDefault();

    if (name.length == 0) {
      console.log("hellow");
      seterror("Please Enter the name");
    } else {
      seterror("");
    }

    if (email.length == 0) {
      console.log("hellow");
      seterror("Please Enter the email");
    } else {
      seterror("");
    }
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1450 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1450, min: 1043},
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1043, min: 761 },
      items: 3,
    },
    table: {
      breakpoint: { max: 761, min: 500},
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* Header */}
      <section>
        <div className="bg-img">
          <div className="container main-head">
            <div className="row head-product d-flex justify-content-space-between align-items-center">
              <div className="col-sm-6 col-xs-12">
                <h1 className="h1">{props.title}</h1>
              </div>
              <div className="col-sm-6 col-xs-12 text-sm-end first-text-product  first-text-product2 ps-0">
                <Link to="/">Home</Link>
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                <Link to="/"> Products</Link>
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                <Link to= {props.titleline}> {props.maintitle}</Link>
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                <span className="link-disgn link-disgn3">{props.title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basmati rice  */}

      <div className="container"> 
        <div className="main-basmati-box mt-4">
          <div className="row row-box">
            <div className="col basmti-main-img">
            <div className="zoom-gallery">
            <div className="zoom-box">
            <div className="zoom-gallery-slider active">
            <div className="magic-zoom">
            <figure className="m-z-figure">
        
            <img src={props.img} alt="" className="img-fluid" style={{width:props.width}}/>
            <span id="lens"></span>
            </figure>
            
            </div>
            </div>
            </div>
            </div>

            <div className="">
              <div className="m-z-figure2">
              <img src={props.img} alt="" className="img-fluid" />
              </div>
              </div>






            {/* <figure className=" m-z-figure2">
        
            <img src={props.img} alt="" className="img-fluid" style={{width:props.width}}/>
            </figure> */}
              {/* <div className="basmati-rice-img">
              <div className="img-second">
              <img src={props.img} alt="" className="img-fluid" />
              </div>
              </div> */}
            </div>
            <div className="col main-basmti-body">
              <div className="basmati-body">
                <p className="fn-26 mb-0 fc-black title-box1">{props.title}</p>
                <div className="brbtn">Get Bebst Price</div>
                <div className="fs-14">
                  {/* <span className="gray-text">MOQ : </span>
                  <b className="fc-black">24 Ton</b> */}
                  <table className="mt-3 main-table" id="first-tbl">
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
                          <b>{props.title}</b>
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
                      <tr className="tb link-view-more ">
                        <td colSpan={2}>
                          <Link className="link" data-bs-target="#basmati-table">
                            Click to view more
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

                <div className="row" id="basmati-btn">
                  <div className=" col second-btn p-0 ">
                    <div
                      id="box-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div className="brbtn1"> REQUEST TO CALL </div>
                    </div>
                  </div>
                  <div className="col second-btn p-0">
                  <div
                      id="box-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                    <div className="brbtn2">SEND ENQUIRY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Basmati rice table */}

      <div id="basmati-table">
        <div className="container">
          <div className="main-basmati-box">
            <div className="row table-box" >
              <div className="col-12 main-line-text">
                <p>Product Details</p>
              </div>
              <div className="box-body-table">
                <div className="row table-box-line">
                  <div className="col main-line">
                    <div className="single-line">
                      <div className="gray-text">Cultivation Type</div>
                      <b> Organic</b>
                    </div>
                    <div className="single-line">
                      <div className="gray-text">Color</div>
                      <b> White</b>
                    </div>
                    <div className="single-line">
                      <div className="gray-text">Broken</div>
                      <b> 5/10/25/50/100%</b>
                    </div>
                    <div className="single-line">
                      <div className="gray-text">Packaging Details</div>
                      <b> 25/50 Kg in PP Bag</b>
                    </div>
                  </div>
                  <div className="col main-line">
                    <div className="single-line">
                      <div className="gray-text">Shelf Life</div>
                      <b> 1 Year</b>
                    </div>
                    <div className="single-line">
                      <div className="gray-text">Speciality</div>
                      <b> Gluten Free, High In Protein</b>
                    </div>
                    <div className="single-line">
                      <div className="gray-text">Sortex</div>
                      <b> 100%</b>
                    </div>
                  </div>
                </div>
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
              </div>
              {/* <!-- Button trigger modal --> */}

              <div
                id="basmati-btn-last"
                className="col-12 mb-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <div className="brbtn2">Yes! i am interested</div>
              </div>

              {/* <!-- Modal --> */}
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
                          <button type="button" class="btn-close  btn-close-model" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="col col-form-img">
                              <div className="back-img back-img-box" style={{background:`url(${props.img})`}}>
                                <div className="bluer-back-img "></div>
                                <img
                                  className="product-img product-2"
                                  src={props.img}
                                  alt=""
                                />
                                <p className="title-interested">
                                  {props.title}
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
                              
                              <form onSubmit={Validation}>
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
                      {/* <select
                        className="inpute-name-box1"
                        id="dynFrm_country"
                        name="dynFrm_country"
                      >
                        <option value="AF^93">Afghanistan + 93</option>
                        <option value="AL^335">Albania + 335</option>
                        <option value="DZ^213">Algeria + 213</option>
                        <option value="AS^684">American Samoa + 684</option>
                        <option value="AD^376">Andorra + 376</option>
                        <option value="AO^244">Angola + 244</option>
                        <option value="AI^264">Anguilla + 264</option>
                        <option value="AQ^672">Antarctica + 672</option>
                        <option value="AG^268">
                          Antigua and Barbuda + 268
                        </option>
                        <option value="AR^54">Argentina + 54</option>
                        <option value="AM^374">Armenia + 374</option>
                        <option value="AW^297">Aruba + 297</option>
                        <option value="AU^61">Australia + 61</option>
                        <option value="AT^43">Austria + 43</option>
                        <option value="AZ^994">Azerbaijan + 994</option>
                        <option value="BS^242">Bahamas + 242</option>
                        <option value="BH^973">Bahrain + 973</option>
                        <option value="BD^880">Bangladesh + 880</option>
                        <option value="BB^246">Barbados + 246</option>
                        <option value="BY^375">Belarus + 375</option>
                        <option value="BE^32">Belgium + 32</option>
                        <option value="BZ^501">Belize + 501</option>
                        <option value="BJ^229">Benin + 229</option>
                        <option value="BM^441">Bermuda + 441</option>
                        <option value="BT^975">Bhutan + 975</option>
                        <option value="BO^591">Bolivia + 591</option>
                        <option value="BA^387">
                          Bosnia and Herzegowina + 387
                        </option>
                        <option value="BW^267">Botswana + 267</option>
                        <option value="BV^47">Bouvet Island + 47</option>
                        <option value="BR^55">Brazil + 55</option>
                        <option value="IO^246">
                          British Indian Ocean Territory + 246
                        </option>
                        <option value="BN^673">Brunei Darussalam + 673</option>
                        <option value="BG^359">Bulgaria + 359</option>
                        <option value="BF^226">Burkina Faso + 226</option>
                        <option value="BI^257">Burundi + 257</option>
                        <option value="KH^855">Cambodia + 855</option>
                        <option value="CM^237">Cameroon + 237</option>
                        <option value="CA^1">Canada + 1</option>
                        <option value="CV^238">Cape Verde + 238</option>
                        <option value="KY^345">Cayman Islands + 345</option>
                        <option value="CF^236">
                          Central African Republic + 236
                        </option>
                        <option value="TD^235">Chad + 235</option>
                        <option value="CL^56">Chile + 56</option>
                        <option value="CN^86">China + 86</option>
                        <option value="CX^61">Christmas Island + 61</option>
                        <option value="CC^61">
                          Cocos (Keeling) Islands + 61
                        </option>
                        <option value="CO^57">Colombia + 57</option>
                        <option value="KM^269">Comoros + 269</option>
                        <option value="CG^242">Congo + 242</option>
                        <option value="CK^682">Cook Islands + 682</option>
                        <option value="CR^506">Costa Rica + 506</option>
                        <option value="CI^225">Cote D'Ivoire + 225</option>
                        <option value="HR^385">Croatia + 385</option>
                        <option value="CU^53">Cuba + 53</option>
                        <option value="CY^357">Cyprus + 357</option>
                        <option value="CZ^420">Czech Republic + 420</option>
                        <option value="DK^45">Denmark + 45</option>
                        <option value="DJ^253">Djibouti + 253</option>
                        <option value="DM^767">Dominica + 767</option>
                        <option value="DO^809">Dominican Republic + 809</option>
                        <option value="TP^670">East Timor + 670</option>
                        <option value="EC^593">Ecuador + 593</option>
                        <option value="EG^20">Egypt + 20</option>
                        <option value="SV^503">El Salvador + 503</option>
                        <option value="GQ^240">Equatorial Guinea + 240</option>
                        <option value="ER^291">Eritrea + 291</option>
                        <option value="EE^372">Estonia + 372</option>
                        <option value="ET^251">Ethiopia + 251</option>
                        <option value="FK^500">
                          Falkland Islands (Malvinas) + 500
                        </option>
                        <option value="FO^298">Faroe Islands + 298</option>
                        <option value="FJ^679">Fiji + 679</option>
                        <option value="FI^358">Finland + 358</option>
                        <option value="FR^33">France + 33</option>
                        <option value="FX^590">
                          France, Metropolitan + 590
                        </option>
                        <option value="GF^594">French Guiana + 594</option>
                        <option value="PF^689">French Polynesia + 689</option>
                        <option value="TF^590">
                          French Southern Territories + 590
                        </option>
                        <option value="GA^241">Gabon + 241</option>
                        <option value="GM^220">Gambia + 220</option>
                        <option value="GE^995">Georgia + 995</option>
                        <option value="DE^49">Germany + 49</option>
                        <option value="GH^233">Ghana + 233</option>
                        <option value="GI^350">Gibraltar + 350</option>
                        <option value="GR^30">Greece + 30</option>
                        <option value="GL^299">Greenland + 299</option>
                        <option value="GD^809">Grenada + 809</option>
                        <option value="GP^590">Guadeloupe + 590</option>
                        <option value="GU^1">Guam + 1</option>
                        <option value="GT^502">Guatemala + 502</option>
                        <option value="GN^224">Guinea + 224</option>
                        <option value="GW^245">Guinea-bissau + 245</option>
                        <option value="GY^592">Guyana + 592</option>
                        <option value="HT^509">Haiti + 509</option>
                        <option value="HM^61">
                          Heard and Mc Donald Islands + 61
                        </option>
                        <option value="HN^504">Honduras + 504</option>
                        <option value="HK^852">Hong Kong + 852</option>
                        <option value="HU^36">Hungary + 36</option>
                        <option value="IS^354">Iceland + 354</option>
                        <option value="IN^91" selected="selected">
                          India + 91
                        </option>
                        <option value="ID^62">Indonesia + 62</option>
                        <option value="IR^98">
                          Iran (Islamic Republic of) + 98
                        </option>
                        <option value="IQ^964">Iraq + 964</option>
                        <option value="IE^353">Ireland + 353</option>
                        <option value="IL^972">Israel + 972</option>
                        <option value="IT^39">Italy + 39</option>
                        <option value="JM^876">Jamaica + 876</option>
                        <option value="JP^81">Japan + 81</option>
                        <option value="JO^962">Jordan + 962</option>
                        <option value="KZ^7">Kazakhstan + 7</option>
                        <option value="KE^254">Kenya + 254</option>
                        <option value="KI^686">Kiribati + 686</option>
                        <option value="KP^850">
                          Korea, Democratic People's Republic of + 850
                        </option>
                        <option value="KR^82">Korea, Republic of + 82</option>
                        <option value="KW^965">Kuwait + 965</option>
                        <option value="KG^7">Kyrgyzstan + 7</option>
                        <option value="LA^856">
                          Lao People's Democratic Republic + 856
                        </option>
                        <option value="LV^371">Latvia + 371</option>
                        <option value="LB^961">Lebanon + 961</option>
                        <option value="LS^266">Lesotho + 266</option>
                        <option value="LR^231">Liberia + 231</option>
                        <option value="LY^218">Libya + 218</option>
                        <option value="LI^423">Liechtenstein + 423</option>
                        <option value="LT^370">Lithuania + 370</option>
                        <option value="LU^352">Luxembourg + 352</option>
                        <option value="MO^853">Macau + 853</option>
                        <option value="MK^389">
                          Macedonia, The Former Yugoslav Republic of + 389
                        </option>
                        <option value="MG^261">Madagascar + 261</option>
                        <option value="MW^265">Malawi + 265</option>
                        <option value="MY^60">Malaysia + 60</option>
                        <option value="MV^960">Maldives + 960</option>
                        <option value="ML^223">Mali + 223</option>
                        <option value="MT^356">Malta + 356</option>
                        <option value="MH^692">Marshall Islands + 692</option>
                        <option value="MQ^596">Martinique + 596</option>
                        <option value="MR^222">Mauritania + 222</option>
                        <option value="MU^230">Mauritius + 230</option>
                        <option value="YT^269">Mayotte + 269</option>
                        <option value="MX^52">Mexico + 52</option>
                        <option value="FM^691">
                          Micronesia, Federated States of + 691
                        </option>
                        <option value="MD^373">
                          Moldova, Republic of + 373
                        </option>
                        <option value="MC^377">Monaco + 377</option>
                        <option value="MN^976">Mongolia + 976</option>
                        <option value="ME^382">Montenegro + 382</option>
                        <option value="MS^664">Montserrat + 664</option>
                        <option value="MA^212">Morocco + 212</option>
                        <option value="MZ^258">Mozambique + 258</option>
                        <option value="MM^95">Myanmar + 95</option>
                        <option value="NA^264">Namibia + 264</option>
                        <option value="NR^674">Nauru + 674</option>
                        <option value="NP^977">Nepal + 977</option>
                        <option value="NL^31">Netherlands + 31</option>
                        <option value="AN^599">
                          Netherlands Antilles + 599
                        </option>
                        <option value="NC^687">New Caledonia + 687</option>
                        <option value="NZ^64">New Zealand + 64</option>
                        <option value="NI^505">Nicaragua + 505</option>
                        <option value="NE^227">Niger + 227</option>
                        <option value="NG^234">Nigeria + 234</option>
                        <option value="NU^683">Niue + 683</option>
                        <option value="NF^672">Norfolk Island + 672</option>
                        <option value="MP^670">
                          Northern Mariana Islands + 670
                        </option>
                        <option value="NO^47">Norway + 47</option>
                        <option value="OM^968">Oman + 968</option>
                        <option value="PK^92">Pakistan + 92</option>
                        <option value="PW^680">Palau + 680</option>
                        <option value="PS^970">Palestine + 970</option>
                        <option value="PA^507">Panama + 507</option>
                        <option value="PG^675">Papua New Guinea + 675</option>
                        <option value="PY^595">Paraguay + 595</option>
                        <option value="PE^51">Peru + 51</option>
                        <option value="PH^63">Philippines + 63</option>
                        <option value="PN^872">Pitcairn + 872</option>
                        <option value="PL^48">Poland + 48</option>
                        <option value="PT^351">Portugal + 351</option>
                        <option value="PR^787">Puerto Rico + 787</option>
                        <option value="QA^974">Qatar + 974</option>
                        <option value="RE^262">Reunion + 262</option>
                        <option value="RO^40">Romania + 40</option>
                        <option value="RU^7">Russian Federation + 7</option>
                        <option value="RW^250">Rwanda + 250</option>
                        <option value="KN^869">
                          Saint Kitts and Nevis + 869
                        </option>
                        <option value="LC^758">Saint Lucia + 758</option>
                        <option value="VC^784">
                          Saint Vincent and the Grenadines + 784
                        </option>
                        <option value="WS^685">Samoa + 685</option>
                        <option value="SM^378">San Marino + 378</option>
                        <option value="ST^239">
                          Sao Tome and Principe + 239
                        </option>
                        <option value="SA^966">Saudi Arabia + 966</option>
                        <option value="SN^221">Senegal + 221</option>
                        <option value="RS^381">Serbia + 381</option>
                        <option value="SC^248">Seychelles + 248</option>
                        <option value="SL^232">Sierra Leone + 232</option>
                        <option value="SG^65">Singapore + 65</option>
                        <option value="SK^421">
                          Slovakia (Slovak Republic) + 421
                        </option>
                        <option value="SI^386">Slovenia + 386</option>
                        <option value="SB^677">Solomon Islands + 677</option>
                        <option value="SO^252">Somalia + 252</option>
                        <option value="ZA^27">South Africa + 27</option>
                        <option value="GS^44">
                          South Georgia and the South Sandwich Islands + 44
                        </option>
                        <option value="SS^211">South Sudan + 211</option>
                        <option value="ES^34">Spain + 34</option>
                        <option value="LK^94">Sri Lanka + 94</option>
                        <option value="SH^290">St. Helena + 290</option>
                        <option value="PM^508">
                          St. Pierre and Miquelon + 508
                        </option>
                        <option value="SD^249">Sudan + 249</option>
                        <option value="SR^597">Suriname + 597</option>
                        <option value="SJ^47">
                          Svalbard and Jan Mayen Islands + 47
                        </option>
                        <option value="SZ^268">Swaziland + 268</option>
                        <option value="SE^46">Sweden + 46</option>
                        <option value="CH^41">Switzerland + 41</option>
                        <option value="SY^963">
                          Syrian Arab Republic + 963
                        </option>
                        <option value="TW^886">Taiwan + 886</option>
                        <option value="TJ^992">Tajikistan + 992</option>
                        <option value="TZ^255">
                          Tanzania, United Republic of + 255
                        </option>
                        <option value="TH^66">Thailand + 66</option>
                        <option value="TG^228">Togo + 228</option>
                        <option value="TK^64">Tokelau + 64</option>
                        <option value="TO^676">Tonga + 676</option>
                        <option value="TT^868">
                          Trinidad and Tobago + 868
                        </option>
                        <option value="TN^216">Tunisia + 216</option>
                        <option value="TR^90">Turkey + 90</option>
                        <option value="TM^993">Turkmenistan + 993</option>
                        <option value="TC^649">
                          Turks and Caicos Islands + 649
                        </option>
                        <option value="TV^688">Tuvalu + 688</option>
                        <option value="UG^256">Uganda + 256</option>
                        <option value="UA^380">Ukraine + 380</option>
                        <option value="AE^971">
                          United Arab Emirates + 971
                        </option>
                        <option value="UK^44">United Kingdom + 44</option>
                        <option value="US^1">United States + 1</option>
                        <option value="UM^1">
                          United States Minor Outlying Islands + 1
                        </option>
                        <option value="UY^598">Uruguay + 598</option>
                        <option value="UZ^998">Uzbekistan + 998</option>
                        <option value="VU^678">Vanuatu + 678</option>
                        <option value="VA^39">
                          Vatican City State (Holy See) + 39
                        </option>
                        <option value="VE^58">Venezuela + 58</option>
                        <option value="VN^84">Viet Nam + 84</option>
                        <option value="VG^1">
                          Virgin Islands (British) + 1
                        </option>
                        <option value="VI^1">Virgin Islands (U.S.) + 1</option>
                        <option value="WF^681">
                          Wallis and Futuna Islands + 681
                        </option>
                        <option value="EH^212">Western Sahara + 212</option>
                        <option value="YE^967">Yemen + 967</option>
                        <option value="YU^381">Yugoslavia + 381</option>
                        <option value="ZR^243">Zaire + 243</option>
                        <option value="ZM^260">Zambia + 260</option>
                        <option value="ZW^263">Zimbabwe + 263</option>
                      </select> */}
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
              <div className="row form-row form-row-radio">
                <div className="col-12 col col-radio">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lookin for basmati rice */}

      <div className="container">
        <div className="main-basmati-box" id="lookingfor">
          <div className="lookin-box">
            <div className="row">
              <div className="col-12 pt-3 text-center lookin-box-text">
                <h2>
                  Looking for"
                  <span className="inner-text">
                    <b>{props.title}</b>
                  </span>
                  "?
                </h2>
              </div>
              <div className="row form-row">
                <div className="col form-box">
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
                <div className="col">
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
                <div className="col">
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
                    {/* <PhoneInput  className="inpute-name-box1" country={'in'} /> */}
                      {/* <select
                        className="inpute-name-box1"
                        id="dynFrm_country"
                        name="dynFrm_country"
                      >
                        <option value="AF^93">Afghanistan + 93</option>
                        <option value="AL^335">Albania + 335</option>
                        <option value="DZ^213">Algeria + 213</option>
                        <option value="AS^684">American Samoa + 684</option>
                        <option value="AD^376">Andorra + 376</option>
                        <option value="AO^244">Angola + 244</option>
                        <option value="AI^264">Anguilla + 264</option>
                        <option value="AQ^672">Antarctica + 672</option>
                        <option value="AG^268">
                          Antigua and Barbuda + 268
                        </option>
                        <option value="AR^54">Argentina + 54</option>
                        <option value="AM^374">Armenia + 374</option>
                        <option value="AW^297">Aruba + 297</option>
                        <option value="AU^61">Australia + 61</option>
                        <option value="AT^43">Austria + 43</option>
                        <option value="AZ^994">Azerbaijan + 994</option>
                        <option value="BS^242">Bahamas + 242</option>
                        <option value="BH^973">Bahrain + 973</option>
                        <option value="BD^880">Bangladesh + 880</option>
                        <option value="BB^246">Barbados + 246</option>
                        <option value="BY^375">Belarus + 375</option>
                        <option value="BE^32">Belgium + 32</option>
                        <option value="BZ^501">Belize + 501</option>
                        <option value="BJ^229">Benin + 229</option>
                        <option value="BM^441">Bermuda + 441</option>
                        <option value="BT^975">Bhutan + 975</option>
                        <option value="BO^591">Bolivia + 591</option>
                        <option value="BA^387">
                          Bosnia and Herzegowina + 387
                        </option>
                        <option value="BW^267">Botswana + 267</option>
                        <option value="BV^47">Bouvet Island + 47</option>
                        <option value="BR^55">Brazil + 55</option>
                        <option value="IO^246">
                          British Indian Ocean Territory + 246
                        </option>
                        <option value="BN^673">Brunei Darussalam + 673</option>
                        <option value="BG^359">Bulgaria + 359</option>
                        <option value="BF^226">Burkina Faso + 226</option>
                        <option value="BI^257">Burundi + 257</option>
                        <option value="KH^855">Cambodia + 855</option>
                        <option value="CM^237">Cameroon + 237</option>
                        <option value="CA^1">Canada + 1</option>
                        <option value="CV^238">Cape Verde + 238</option>
                        <option value="KY^345">Cayman Islands + 345</option>
                        <option value="CF^236">
                          Central African Republic + 236
                        </option>
                        <option value="TD^235">Chad + 235</option>
                        <option value="CL^56">Chile + 56</option>
                        <option value="CN^86">China + 86</option>
                        <option value="CX^61">Christmas Island + 61</option>
                        <option value="CC^61">
                          Cocos (Keeling) Islands + 61
                        </option>
                        <option value="CO^57">Colombia + 57</option>
                        <option value="KM^269">Comoros + 269</option>
                        <option value="CG^242">Congo + 242</option>
                        <option value="CK^682">Cook Islands + 682</option>
                        <option value="CR^506">Costa Rica + 506</option>
                        <option value="CI^225">Cote D'Ivoire + 225</option>
                        <option value="HR^385">Croatia + 385</option>
                        <option value="CU^53">Cuba + 53</option>
                        <option value="CY^357">Cyprus + 357</option>
                        <option value="CZ^420">Czech Republic + 420</option>
                        <option value="DK^45">Denmark + 45</option>
                        <option value="DJ^253">Djibouti + 253</option>
                        <option value="DM^767">Dominica + 767</option>
                        <option value="DO^809">Dominican Republic + 809</option>
                        <option value="TP^670">East Timor + 670</option>
                        <option value="EC^593">Ecuador + 593</option>
                        <option value="EG^20">Egypt + 20</option>
                        <option value="SV^503">El Salvador + 503</option>
                        <option value="GQ^240">Equatorial Guinea + 240</option>
                        <option value="ER^291">Eritrea + 291</option>
                        <option value="EE^372">Estonia + 372</option>
                        <option value="ET^251">Ethiopia + 251</option>
                        <option value="FK^500">
                          Falkland Islands (Malvinas) + 500
                        </option>
                        <option value="FO^298">Faroe Islands + 298</option>
                        <option value="FJ^679">Fiji + 679</option>
                        <option value="FI^358">Finland + 358</option>
                        <option value="FR^33">France + 33</option>
                        <option value="FX^590">
                          France, Metropolitan + 590
                        </option>
                        <option value="GF^594">French Guiana + 594</option>
                        <option value="PF^689">French Polynesia + 689</option>
                        <option value="TF^590">
                          French Southern Territories + 590
                        </option>
                        <option value="GA^241">Gabon + 241</option>
                        <option value="GM^220">Gambia + 220</option>
                        <option value="GE^995">Georgia + 995</option>
                        <option value="DE^49">Germany + 49</option>
                        <option value="GH^233">Ghana + 233</option>
                        <option value="GI^350">Gibraltar + 350</option>
                        <option value="GR^30">Greece + 30</option>
                        <option value="GL^299">Greenland + 299</option>
                        <option value="GD^809">Grenada + 809</option>
                        <option value="GP^590">Guadeloupe + 590</option>
                        <option value="GU^1">Guam + 1</option>
                        <option value="GT^502">Guatemala + 502</option>
                        <option value="GN^224">Guinea + 224</option>
                        <option value="GW^245">Guinea-bissau + 245</option>
                        <option value="GY^592">Guyana + 592</option>
                        <option value="HT^509">Haiti + 509</option>
                        <option value="HM^61">
                          Heard and Mc Donald Islands + 61
                        </option>
                        <option value="HN^504">Honduras + 504</option>
                        <option value="HK^852">Hong Kong + 852</option>
                        <option value="HU^36">Hungary + 36</option>
                        <option value="IS^354">Iceland + 354</option>
                        <option value="IN^91" selected="selected">
                          India + 91
                        </option>
                        <option value="ID^62">Indonesia + 62</option>
                        <option value="IR^98">
                          Iran (Islamic Republic of) + 98
                        </option>
                        <option value="IQ^964">Iraq + 964</option>
                        <option value="IE^353">Ireland + 353</option>
                        <option value="IL^972">Israel + 972</option>
                        <option value="IT^39">Italy + 39</option>
                        <option value="JM^876">Jamaica + 876</option>
                        <option value="JP^81">Japan + 81</option>
                        <option value="JO^962">Jordan + 962</option>
                        <option value="KZ^7">Kazakhstan + 7</option>
                        <option value="KE^254">Kenya + 254</option>
                        <option value="KI^686">Kiribati + 686</option>
                        <option value="KP^850">
                          Korea, Democratic People's Republic of + 850
                        </option>
                        <option value="KR^82">Korea, Republic of + 82</option>
                        <option value="KW^965">Kuwait + 965</option>
                        <option value="KG^7">Kyrgyzstan + 7</option>
                        <option value="LA^856">
                          Lao People's Democratic Republic + 856
                        </option>
                        <option value="LV^371">Latvia + 371</option>
                        <option value="LB^961">Lebanon + 961</option>
                        <option value="LS^266">Lesotho + 266</option>
                        <option value="LR^231">Liberia + 231</option>
                        <option value="LY^218">Libya + 218</option>
                        <option value="LI^423">Liechtenstein + 423</option>
                        <option value="LT^370">Lithuania + 370</option>
                        <option value="LU^352">Luxembourg + 352</option>
                        <option value="MO^853">Macau + 853</option>
                        <option value="MK^389">
                          Macedonia, The Former Yugoslav Republic of + 389
                        </option>
                        <option value="MG^261">Madagascar + 261</option>
                        <option value="MW^265">Malawi + 265</option>
                        <option value="MY^60">Malaysia + 60</option>
                        <option value="MV^960">Maldives + 960</option>
                        <option value="ML^223">Mali + 223</option>
                        <option value="MT^356">Malta + 356</option>
                        <option value="MH^692">Marshall Islands + 692</option>
                        <option value="MQ^596">Martinique + 596</option>
                        <option value="MR^222">Mauritania + 222</option>
                        <option value="MU^230">Mauritius + 230</option>
                        <option value="YT^269">Mayotte + 269</option>
                        <option value="MX^52">Mexico + 52</option>
                        <option value="FM^691">
                          Micronesia, Federated States of + 691
                        </option>
                        <option value="MD^373">
                          Moldova, Republic of + 373
                        </option>
                        <option value="MC^377">Monaco + 377</option>
                        <option value="MN^976">Mongolia + 976</option>
                        <option value="ME^382">Montenegro + 382</option>
                        <option value="MS^664">Montserrat + 664</option>
                        <option value="MA^212">Morocco + 212</option>
                        <option value="MZ^258">Mozambique + 258</option>
                        <option value="MM^95">Myanmar + 95</option>
                        <option value="NA^264">Namibia + 264</option>
                        <option value="NR^674">Nauru + 674</option>
                        <option value="NP^977">Nepal + 977</option>
                        <option value="NL^31">Netherlands + 31</option>
                        <option value="AN^599">
                          Netherlands Antilles + 599
                        </option>
                        <option value="NC^687">New Caledonia + 687</option>
                        <option value="NZ^64">New Zealand + 64</option>
                        <option value="NI^505">Nicaragua + 505</option>
                        <option value="NE^227">Niger + 227</option>
                        <option value="NG^234">Nigeria + 234</option>
                        <option value="NU^683">Niue + 683</option>
                        <option value="NF^672">Norfolk Island + 672</option>
                        <option value="MP^670">
                          Northern Mariana Islands + 670
                        </option>
                        <option value="NO^47">Norway + 47</option>
                        <option value="OM^968">Oman + 968</option>
                        <option value="PK^92">Pakistan + 92</option>
                        <option value="PW^680">Palau + 680</option>
                        <option value="PS^970">Palestine + 970</option>
                        <option value="PA^507">Panama + 507</option>
                        <option value="PG^675">Papua New Guinea + 675</option>
                        <option value="PY^595">Paraguay + 595</option>
                        <option value="PE^51">Peru + 51</option>
                        <option value="PH^63">Philippines + 63</option>
                        <option value="PN^872">Pitcairn + 872</option>
                        <option value="PL^48">Poland + 48</option>
                        <option value="PT^351">Portugal + 351</option>
                        <option value="PR^787">Puerto Rico + 787</option>
                        <option value="QA^974">Qatar + 974</option>
                        <option value="RE^262">Reunion + 262</option>
                        <option value="RO^40">Romania + 40</option>
                        <option value="RU^7">Russian Federation + 7</option>
                        <option value="RW^250">Rwanda + 250</option>
                        <option value="KN^869">
                          Saint Kitts and Nevis + 869
                        </option>
                        <option value="LC^758">Saint Lucia + 758</option>
                        <option value="VC^784">
                          Saint Vincent and the Grenadines + 784
                        </option>
                        <option value="WS^685">Samoa + 685</option>
                        <option value="SM^378">San Marino + 378</option>
                        <option value="ST^239">
                          Sao Tome and Principe + 239
                        </option>
                        <option value="SA^966">Saudi Arabia + 966</option>
                        <option value="SN^221">Senegal + 221</option>
                        <option value="RS^381">Serbia + 381</option>
                        <option value="SC^248">Seychelles + 248</option>
                        <option value="SL^232">Sierra Leone + 232</option>
                        <option value="SG^65">Singapore + 65</option>
                        <option value="SK^421">
                          Slovakia (Slovak Republic) + 421
                        </option>
                        <option value="SI^386">Slovenia + 386</option>
                        <option value="SB^677">Solomon Islands + 677</option>
                        <option value="SO^252">Somalia + 252</option>
                        <option value="ZA^27">South Africa + 27</option>
                        <option value="GS^44">
                          South Georgia and the South Sandwich Islands + 44
                        </option>
                        <option value="SS^211">South Sudan + 211</option>
                        <option value="ES^34">Spain + 34</option>
                        <option value="LK^94">Sri Lanka + 94</option>
                        <option value="SH^290">St. Helena + 290</option>
                        <option value="PM^508">
                          St. Pierre and Miquelon + 508
                        </option>
                        <option value="SD^249">Sudan + 249</option>
                        <option value="SR^597">Suriname + 597</option>
                        <option value="SJ^47">
                          Svalbard and Jan Mayen Islands + 47
                        </option>
                        <option value="SZ^268">Swaziland + 268</option>
                        <option value="SE^46">Sweden + 46</option>
                        <option value="CH^41">Switzerland + 41</option>
                        <option value="SY^963">
                          Syrian Arab Republic + 963
                        </option>
                        <option value="TW^886">Taiwan + 886</option>
                        <option value="TJ^992">Tajikistan + 992</option>
                        <option value="TZ^255">
                          Tanzania, United Republic of + 255
                        </option>
                        <option value="TH^66">Thailand + 66</option>
                        <option value="TG^228">Togo + 228</option>
                        <option value="TK^64">Tokelau + 64</option>
                        <option value="TO^676">Tonga + 676</option>
                        <option value="TT^868">
                          Trinidad and Tobago + 868
                        </option>
                        <option value="TN^216">Tunisia + 216</option>
                        <option value="TR^90">Turkey + 90</option>
                        <option value="TM^993">Turkmenistan + 993</option>
                        <option value="TC^649">
                          Turks and Caicos Islands + 649
                        </option>
                        <option value="TV^688">Tuvalu + 688</option>
                        <option value="UG^256">Uganda + 256</option>
                        <option value="UA^380">Ukraine + 380</option>
                        <option value="AE^971">
                          United Arab Emirates + 971
                        </option>
                        <option value="UK^44">United Kingdom + 44</option>
                        <option value="US^1">United States + 1</option>
                        <option value="UM^1">
                          United States Minor Outlying Islands + 1
                        </option>
                        <option value="UY^598">Uruguay + 598</option>
                        <option value="UZ^998">Uzbekistan + 998</option>
                        <option value="VU^678">Vanuatu + 678</option>
                        <option value="VA^39">
                          Vatican City State (Holy See) + 39
                        </option>
                        <option value="VE^58">Venezuela + 58</option>
                        <option value="VN^84">Viet Nam + 84</option>
                        <option value="VG^1">
                          Virgin Islands (British) + 1
                        </option>
                        <option value="VI^1">Virgin Islands (U.S.) + 1</option>
                        <option value="WF^681">
                          Wallis and Futuna Islands + 681
                        </option>
                        <option value="EH^212">Western Sahara + 212</option>
                        <option value="YE^967">Yemen + 967</option>
                        <option value="YU^381">Yugoslavia + 381</option>
                        <option value="ZR^243">Zaire + 243</option>
                        <option value="ZM^260">Zambia + 260</option>
                        <option value="ZW^263">Zimbabwe + 263</option>
                      </select> */}
                    </div>
                  </div>
                </div>
                <div className="col">
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
              <div className="row form-row form-row-radio">
                <div className="col col-radio">
                  <div className="main-box1 d-flex">
                    <div className="inpute-name1  textarea-box-text">
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
              <div className="row form-row">
                <div className="col-sm-12">
                  <div id="box-btn">
                    <div className="box-btn">Send Enquiry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exprore More Products */}
      <div className="container">
        <div className="main-basmati-box hidden">
          <div className="row ">
            <div className="col-12 pt-3 text-center title-slide">
              <h2>Explore More Products</h2>
            </div>
          </div>

          <div className="row main-slider mt-4 mb-3">
            <div className="second-row-slider">
              <Carousel responsive={responsive}>
        {
          slider.map((user)=>(
            <div className="col-12 col-slider w-100 mb-5">
                  <Link
                    to= {user.link}
                    title="Grains"
                    className="slider-link"
                  >
                    <div className="single-product-slider ">
                      <div className="back-img-slider hidden">
                        <img
                          className="product-2"
                          src={user.img}
                          alt=""
                        />
                      </div>
                      <div id="basmati-btn-last-slider">
                        <b className="silder-text text-center">{user.title}</b>
                        <div className="brbtn2 btn-slider mt-3">
                          {" "}
                          Get Best Quote{" "}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
          ))
        }
               
              </Carousel>
            </div>
          </div>
        </div>
      </div>
  <div className="row"  id="last-button">
      <div id="basmati-btn-last"  className="col-12 mb-0 bottom-btn" data-bs-toggle="modal"  data-bs-target="#exampleModal" >
              <div className="brbtn2">Send Enquity</div>
       </div>
   </div>
    </>
  );
}
