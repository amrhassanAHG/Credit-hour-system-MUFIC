import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ProvementBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6"></div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <div className="content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-body">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: 20,
                    textAlign: "center",
                    border: "10px solid #787878",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: 20,
                      textAlign: "center",
                      border: "5px solid #787878",
                    }}
                  >
                    <div className="row">
                      <div className="col-sm-4">
                        <span style={{ fontSize: 15 }}> جامعة المنوفية</span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }} />
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 15 }}> MENOFIA UNIVERSTY</span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}>
                          كلية الحاسبات و المعلومات
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}></span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}>
                          {" "}
                          Faculty of Computing and Information
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}>شؤن الطلاب</span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}></span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}>STUDENTS AFFAIRS</span>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <hr />
                    <span style={{ fontSize: 50, fontWeight: "bold" }}>
                      إفادة
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: 20, fontWeight: "bold" }}>
                      **********************************************
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: 25 }}>
                      <i>/السيد الاستاذ مدير </i>
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: 30 }}>
                      <b>مصلحه التضامن الاجتماعي -اشمون -ساقيه ابو شعرة</b>
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: 25 }}>
                      <i>تحية طيبه وبعد </i>
                    </span>
                    <br />
                    <span style={{ fontSize: 20, fontWeight: "bold" }}>
                      **********************************************
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: 25 }}>
                      <i>
                        نحيط علم سيادتكم بأن الطالب /ادهم سلامه بيومي مقيد
                        بالكليه بالفرقه الثانيه عام 2019/2020{" "}
                      </i>
                    </span>{" "}
                    <br />
                    <br />
                    <span style={{ fontSize: 25 }}>
                      {" "}
                      مرسل للعلم واتخاذ اللازم
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: 25 }}>
                      {" "}
                      وتفضلو سيادتكم بقبول فائق الاحترام
                    </span>{" "}
                    <br />
                    <br /> <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}> شؤن الطلاب</span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}>مدير الاداره</span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}> امين الكليه</span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}>.........</span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}>......... </span>
                      </div>
                      <div className="col-sm-4">
                        <span style={{ fontSize: 25 }}> .........</span>
                      </div>
                    </div>
                    <br />
                    <br /> <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <button
              onclick="window.print()"
              className="btn btn-primary  "
              style={{ width: 100, paddingTop: 10, paddingBottom: 10 }}
            >
              Print
            </button>
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
      </div>
    );
  }
}
