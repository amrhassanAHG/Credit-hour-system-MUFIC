import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from '../components/pages/NotFound'
import Home from '../components/pages/Home/Home'
import RegisterCourses from '../components/pages/RegisterCourses/RegisterCourses'
import Materials from '../components/pages/Materials/Materials'
import Courses from '../components/pages/Courses/Courses'
import CoursesInfo from '../components/pages/CoursesInfo/CoursesInfo'
import Result from '../components/pages/Result/Result'
import Excuse from '../components/pages/Excuse/Excuse'
import Department from '../components/pages/Department/Department'
import StudentMarks from '../components/pages/StudentMarks/StudentMarks'
import EditMaterial from '../components/pages/EditMaterial/EditMaterial'
import UploadMaterials from '../components/pages/UploadMaterials/UploadMaterials'
import WritePost from '../components/pages/WritePost/WritePost'
import ViewExcuses from '../components/pages/ViewExcuses/ViewExcuses'
import DashBoard from '../components/pages/DashBoard/DashBoard'
import Students from '../components/pages/Students/Students'
import AddStudent from '../components/pages/AddStudent/AddStudent'
import Sections from '../components/pages/Sections/Sections'
import Guides from '../components/pages/Guides/Guides'
import AdminCourses from '../components/pages/AdminCourses/AdminCourses'
import CoursesRegistered from '../components/pages/CoursesRegistered/CoursesRegistered'
import Widgets from '../components/pages/Widgets/Widgets'
import AddStudentSheet from '../components/pages/AddStudentSheet/AddStudentSheet'
import AddStudentManual from '../components/pages/AddStudentManual/AddStudentManual'
import Profile from '../components/pages/Profile/Profile'
import Terms from '../components/pages/Terms/Terms'
import AddTerm from '../components/pages/AddTerm/AddTerm'
import Payments from '../components/pages/Payments/Payments'
import RegistrationProvement from '../components/pages/RegistrationProvement/RegistrationProvement'
import Provement from '../components/pages/Provement/Provement'
import AddCourseManually from '../components/pages/AddCourseManually/AddCourseManually'
import Login from '../components/pages/Login/Login'
import ForgetPassword from '../components/pages/ForgetPassword/ForgetPassword'

const AppRouter = ()=>(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/registercourses" component={RegisterCourses} exact={true}/>
            <Route path="/materials" component={Materials} exact={true}/>
            <Route path="/courses" component={Courses} exact={true}/>
            <Route path="/courses-info" component={CoursesInfo} exact={true}/>
            <Route path="/first-semester-result" component={Result} exact={true} />
            <Route path="/second-semester-result" component={Result} exact={true} />
            <Route path="/summer-semester-result" component={Result} exact={true} />
            <Route path="/excuse" component={Excuse} exact={true} />
            <Route path="/department" component={Department} exact={true} />
            <Route path="/student-marks" component={StudentMarks} exact={true} />
            <Route path="/edit-material" component={EditMaterial} exact={true} />
            <Route path="/upload-materials" component={UploadMaterials} exact={true} />
            <Route path="/write-post" component={WritePost} exact={true} />
            <Route path="/view-excuses" component={ViewExcuses} exact={true} />
            <Route path="/dashboard" component={DashBoard} exact={true} />
            <Route path="/students" component={Students} exact={true} />
            <Route path="/add-student" component={AddStudent} exact={true} />
            <Route path="/sections" component={Sections} exact={true} />
            <Route path="/guides" component={Guides} exact={true} />
            <Route path="/admin-courses" component={AdminCourses} exact={true} />
            <Route path="/courses-registered" component={CoursesRegistered} exact={true} />
            <Route path="/widgets" component={Widgets} exact={true} />
            <Route path="/add-student-sheet" component={AddStudentSheet} exact={true} />
            <Route path="/add-student-manual" component={AddStudentManual} exact={true} />
            <Route path="/terms" component={Terms} exact={true} />
            <Route path="/add-term" component={AddTerm} exact={true} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/payments" component={Payments} exact={true} />
            <Route path="/registration-provement" component={RegistrationProvement} exact={true} />
            <Route path="/add-course-manually" component={AddCourseManually} exact={true} />
            <Route path="/provement" component={Provement} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/forget-password" component={ForgetPassword} exact={true} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;