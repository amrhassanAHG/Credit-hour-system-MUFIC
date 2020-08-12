import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Provement.css";

export default class ProvementBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "(اسم الشخص)",
      to: "(الجهه المقصوده)",
      level: "(الفرقه)",
      dep: "(القسم)",
      year: "(العام الجامعي)",
    };
  }

  componentDidMount() {
    const params = this.props.history.location.search;

    if (params) {
      let idx = 1;
      let cnt = 1;
      for (let i = 1; i <= params.length; ++i) {
        if (i === params.length || params[i] === "?") {
          const newValue = params.slice(idx, i);
          idx = i + 1;

          if (cnt === 1) {
            this.setState({ name: newValue });
          } else if (cnt === 2) {
            this.setState({ to: newValue });
          } else if (cnt === 3) {
            let newLevel = "";
            switch (newValue) {
              case "1":
                newLevel = "الفرقه الاولي";
                break;
              case "2":
                newLevel = "الفرقه التانيه";
                break;
              case "3":
                newLevel = "الفرقه التالته";
                break;
              default:
                newLevel = "الفرقه الرابعه";
            }
            this.setState({ level: newLevel });
          } else if (cnt === 4) {
            let newDep = "";
            switch (newValue) {
              case "1":
                newDep = "عام";
                break;
              case "2":
                newDep = "علوم الحاسب";
                break;
              case "3":
                newDep = "نظم المعلومات";
                break;
              case "4":
                newDep = "تكنولوجيا المعلومات";
                break;
              case "5":
                newDep = "هندسه البرمجيات";
                break;
              default:
                newDep = "المعلوماتيه الحيويه";
            }
            this.setState({ dep: newDep });
          } else if (cnt === 5) {
            this.setState({ year: newValue });
          }
          ++cnt;
        }
      }
    }
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
                      <b>{this.state.to}</b>
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
                        نحيط سيادتكم علما بان الطالب / {this.state.name} مقيد ب{" "}
                        {this.state.level} قسم {this.state.dep} العام الجامعي{" "}
                        {this.state.year}
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
              onClick={() => {
                window.print();
              }}
              className="btn btn-primary noprint"
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
