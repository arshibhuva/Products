import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Indianrice() {
  return (
    <>
      {/* Header */}
      <section>
        <div className="bg-color">
          <div className="container">
            <div className="row  wrap">
              <div className="col-lg-9 col-md-9  col-sm-12 ">
                <h2>Indian Rice</h2>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-12 text-link">
                <div className="link-creat d-flex">
                  <p>
                    <Link to="/" className="link-disgn">
                      Home
                    </Link>
                  </p>
                  <p className="icon-arrow">
                    {" "}
                    <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                  </p>
                  <p>
                    {" "}
                    <Link to="/products" className="link-disgn">
                      {" "}
                      Products
                    </Link>
                  </p>
                  <p className="icon-arrow">
                    <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                  </p>
                  <p>
                    {" "}
                    <div className="link-disgn">Indian Rice</div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 pt-4">
              <p className="first-line">
                Leading Manufacturer of Basmati Rice and Non Basmati Rice from
                Ahmedabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Basmati rice  */}

      <div className="container" id="indianrice">
        <div className="row mt-0 pt-0 main-basmati-box">
          <div className="col-lg-4 col-md-6 col-sm-7 basmti-main-img">
            <div className="basmati-rice-img sticky-top">
              <img
                className="basmti-img"
                src={require("../imgs/asset 2.png")}
                alt="basmati rice"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-5">
            <div className="basmati-body">
              <h3>Basmati Rice</h3>
              <div className="brbtn">Get Bebst Price</div>
              <span className="mt-gray-text">MOQ : </span>
              <b>24 Ton</b>
              <table className="w-100 mt-4">
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
              <p className="text-red">Preferred Buyer From</p>
              <table className="w-100 mt-2">
                <tbody>
                  <tr className="tb">
                    <td className="gray-text">Location :</td>
                    <td>
                      <b>Worldwide</b>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="col-12 pre pt-3">
                For nearly half the world’s population, rice is life. Rice
                provides one of the main sources of calories for billions of
                people. It is a staple, a comfort food, a side dish and a main
                meal. It’s also a highly nutritious component of a healthy diet,
                if you choose the right source.
              </p>
              <b className="pt-3 fs pl-3">Range:</b>
              <p className="col-12 pt-2 pre">
                1For nearly half the world’s population, rice is life. Rice
                provides one of the main sources of calories for billions of
                people. It is a staple, a comfort food, a side dish and a main
                meal. It’s also a highly nutritious component of a healthy diet,
                if you choose the right source.
              </p>
              <div className="col-12">
                <b className="pt-3 fs pl-1">Range: </b>
                <ul className="main-line pl-5 ">
                  <li>1121</li>
                  <li>Pusa</li>
                  <li>Sugandha</li>
                  <li>Raw</li>
                  <li>Steam</li>
                  <li>Boiled</li>
                  <li>Traditional121</li>
                </ul>
              </div>
              <div id="basmati-btn-last" className="col-12 mb-3">
                <div className="brbtn2">Yes! i am interested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Non Basmati rice  */}

      <div className="container" id="indianrice">
        <div className="row mt-5 main-basmati-box">
          <div className="col-lg-4 col-md-6 col-sm-7 basmti-main-img">
            <div className="basmati-rice-img sticky-top">
              <img
                className="basmti-img"
                src={require("../imgs/asset 3.jpeg")}
                alt="basmati rice"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-5">
            <div className="basmati-body">
              <h3>Non Basmati Rice</h3>
              <div className="brbtn">Get Bebst Price</div>
              <span className="mt-gray-text">MOQ : </span>
              <b>24 Ton</b>
              <table className="w-100 mt-4">
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
              <p className="text-red">Preferred Buyer From</p>
              <table className="w-100 mt-2">
                <tbody>
                  <tr className="tb">
                    <td className="gray-text">Location :</td>
                    <td>
                      <b>Worldwide</b>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="col-12 pre pt-3">
                For nearly half the world’s population, rice is life. Rice
                provides one of the main sources of calories for billions of
                people. It is a staple, a comfort food, a side dish and a main
                meal. It’s also a highly nutritious component of a healthy diet,
                if you choose the right source.
              </p>
              <b className="pt-3 fs pl-3">Range:</b>
              <p className="col-12 pt-2 pre">
                1For nearly half the world’s population, rice is life. Rice
                provides one of the main sources of calories for billions of
                people. It is a staple, a comfort food, a side dish and a main
                meal. It’s also a highly nutritious component of a healthy diet,
                if you choose the right source.
              </p>
              <div className="col-12">
                <b className="pt-3 fs pl-1">Range: </b>
                <ul className="main-line pl-5 ">
                  <li>1121</li>
                  <li>Pusa</li>
                  <li>Sugandha</li>
                  <li>Raw</li>
                  <li>Steam</li>
                  <li>Boiled</li>
                  <li>Traditional121</li>
                </ul>
              </div>
              <div id="basmati-btn-last" className="col-12 mb-3">
                <div className="brbtn2">Yes! i am interested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
