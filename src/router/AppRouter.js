import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { studentRole, lecturerRole, adminRole } from "../staticData";

import NotFound from "../components/pages/NotFound";
import Home from "../components/pages/Home/Home";
import RegisterCourses from "../components/pages/RegisterCourses/RegisterCourses";
import Materials from "../components/pages/Materials/Materials";
import Courses from "../components/pages/Courses/Courses";
import CoursesInfo from "../components/pages/CoursesInfo/CoursesInfo";
import Result from "../components/pages/Result/Result";
import Excuse from "../components/pages/Excuse/Excuse";
import Department from "../components/pages/Department/Department";
import StudentMarks from "../components/pages/StudentMarks/StudentMarks";
import EditMaterial from "../components/pages/EditMaterial/EditMaterial";
import UploadMaterials from "../components/pages/UploadMaterials/UploadMaterials";
import WritePost from "../components/pages/WritePost/WritePost";
import ViewExcuses from "../components/pages/ViewExcuses/ViewExcuses";
import Students from "../components/pages/Students/Students";
import AddStudent from "../components/pages/AddStudent/AddStudent";
import AdminCourses from "../components/pages/AdminCourses/AdminCourses";
import CoursesRegistered from "../components/pages/CoursesRegistered/CoursesRegistered";
import AddStudentSheet from "../components/pages/AddStudentSheet/AddStudentSheet";
import AddStudentManual from "../components/pages/AddStudentManual/AddStudentManual";
import Profile from "../components/pages/Profile/Profile";
import Terms from "../components/pages/Terms/Terms";
import AddTerm from "../components/pages/AddTerm/AddTerm";
import Payments from "../components/pages/Payments/Payments";
import RegistrationProvement from "../components/pages/RegistrationProvement/RegistrationProvement";
import Provement from "../components/pages/Provement/Provement";
import AddCourseManually from "../components/pages/AddCourseManually/AddCourseManually";
import Login from "../components/pages/Login/Login";
import ForgetPassword from "../components/pages/ForgetPassword/ForgetPassword";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <ProtectedRoute
        role={studentRole}
        path="/registercourses"
        component={RegisterCourses}
        exact={true}
      />
      <ProtectedRoute
        role={studentRole}
        path="/materials"
        component={Materials}
        exact={true}
      />
      <ProtectedRoute
        role={studentRole}
        path="/courses"
        component={Courses}
        exact={true}
      />
      <ProtectedRoute
        role={studentRole}
        path="/courses-info"
        component={CoursesInfo}
        exact={true}
      />
      <ProtectedRoute
        role={studentRole}
        path="/first-semester-result"
        component={Result}
        exact={true}
      />
      <ProtectedRoute
        role={studentRole}
        path="/second-semester-result"
        component={Result}
        exact={true}
      />
      <ProtectedRoute
        role={studentRole}
        path="/summer-semester-result"
        component={Result}
        exact={true}
      />
      <ProtectedRoute
        role={studentRole}
        path="/excuse"
        component={Excuse}
        exact={true}
      />
      <ProtectedRoute
        role={studentRole}
        path="/department"
        component={Department}
        exact={true}
      />
      <ProtectedRoute
        role={lecturerRole}
        path="/student-marks"
        component={StudentMarks}
        exact={true}
      />
      <ProtectedRoute
        role={lecturerRole}
        path="/edit-material"
        component={EditMaterial}
        exact={true}
      />
      <ProtectedRoute
        role={lecturerRole}
        path="/upload-materials"
        component={UploadMaterials}
        exact={true}
      />
      <ProtectedRoute
        role={[lecturerRole, adminRole]}
        path="/write-post"
        component={WritePost}
        exact={true}
      />
      <ProtectedRoute
        role={lecturerRole}
        path="/view-excuses"
        component={ViewExcuses}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/students"
        component={Students}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/add-student"
        component={AddStudent}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/admin-courses"
        component={AdminCourses}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/courses-registered"
        component={CoursesRegistered}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/add-student-sheet"
        component={AddStudentSheet}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/add-student-manual"
        component={AddStudentManual}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/terms"
        component={Terms}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/add-term"
        component={AddTerm}
        exact={true}
      />
      <ProtectedRoute
        role={studentRole}
        path="/profile"
        component={Profile}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/payments"
        component={Payments}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/registration-provement"
        component={RegistrationProvement}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/add-course-manually"
        component={AddCourseManually}
        exact={true}
      />
      <ProtectedRoute
        role={adminRole}
        path="/provement"
        component={Provement}
        exact={true}
      />
      <Route
        path="/login"
        component={Login}
        exact={true}
      />
      <Route
        path="/forget-password"
        component={ForgetPassword}
        exact={true}
      />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
