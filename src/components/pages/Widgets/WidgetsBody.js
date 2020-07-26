import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class WidgetsBody extends Component {
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
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Courses </h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item ">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">Course</li>
                  <li className="breadcrumb-item active">Register</li>
                </ol>
              </div>
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
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title float-right">
                  إستبيان عن رأى الطلاب فى المقرر للعام الجامعى 2020/2019
                </h3>
              </div>
              <div className="card-body ">
                <div className="form-group">
                  <label className=" float-right">اختر الماده </label>
                  <select
                    className="form-control  "
                    data-dropdown-css-class="select2-primary"
                    style={{ width: "100%" }}
                    defaultValue="flutter"
                  >
                    <option value="flutter">flutter</option>
                    <option>java</option>
                    <option>c++</option>
                    <option>python</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="card card-primary">
              <form className="form" role="form">
                <div className="col">
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      اسم الطالب
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      أسم عضو الهيئة المعاونة (المعيد) للمقرر
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      هل المقرر مشوق؟
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      هل المقرر مرتبط بالتخصص ؟
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      هل المقرر يتضمن معلومات حديثة؟
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      هل المقرر يوفر أمثلة عملية؟{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      هل المقرر يقابل توقعاتك؟{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      هل المقرر مفيد فى التطبيق العملى؟{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      هل المقرر عموماً جيد؟{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      المقرر له أهداف واضحة ومعلنة{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      المقرر يزودني بالمعرفة المفيدة والفهم المتعمق للموضوع{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      المقرر يحفزني علي التفكير{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      يتم تقديم المحاضرات وفقاً لمواعيد الجداول المحددة المعلنة{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      تساهم المحاضرات في تفهم موضوع المقرر{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      تغطي المحاضرات كل الموضوعات التي اشتملت عليها قائمة
                      محتوياته{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      يتم تقديم المحاضرات بأسلوب مشوق{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      تضمنت المحاضرات المشاركة من جانب الطلاب
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      اشتملت المحاضرات علي حالات عملية
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      مقدار المعلومات المقدمة في المحاضرات مناسب{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      كتاب المقرر أو المذكرة يعتبر مناسباً{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      يلتزم المحاضر دائماً بمحتويات المقرر{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      يلتزم المحاضر دائما بمواعيد بدء وانتهاء المحاضرة{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      اشعر بأن المحاضر دائماً مستعد جيداً للمحاضرة{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      يعالج المحاضر موضوعات المقرر بعمق{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      يستثمر المحاضر وقت المحاضرة في التدريس الفعلي
                    </label>{" "}
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      يبدو المحاضر ذات معرفة عالية بموضوع المقر{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      يقدم المحاضر أمثلة وحالات علمية فعالة{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      يعتبر دور عضو الهيئة المعاونة فعالاً.{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      عضو الهيئة المعاونة دائماً علي استعداد للرد علي أي
                      استفسارات{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      يبدو عضو الهيئة المعاونة ملماً بموضوعات المقرر{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      عيوفر عضو الهيئة المعاونة المساعدة لكل طالب عند الحاجة
                      لذلك{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label className="float-right" htmlFor="exampleInputEmail1">
                      ما الذى لا تحبه فى هذا المقرر
                    </label>{" "}
                    <input
                      type="textarea"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <hr />
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                {/* /.modal-content */}
              </form>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}
