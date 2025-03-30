import { Injectable } from '@angular/core';
import { routes } from '../routes/routes';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { apiResultFormat } from '../model/pages.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getDataTable() {
    return this.http.get<apiResultFormat>('assets/json/data-tables.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getApproveRequest() {
    return this.http
      .get<apiResultFormat>('assets/json/approve-request.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getAcademicData() {
    return this.http
      .get<apiResultFormat>('assets/json/academic-data.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCites() {
    return this.http.get<apiResultFormat>('assets/json/cities.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getHolidays() {
    return this.http.get<apiResultFormat>('assets/json/holidays.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getGuardian() {
    return this.http
      .get<apiResultFormat>('assets/json/guardian-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }

  public getAttendanceReport() {
    return this.http
      .get<apiResultFormat>('assets/json/attendance-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getClass() {
    return this.http.get<apiResultFormat>('assets/json/classes.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getBlogCategories() {
    return this.http
      .get<apiResultFormat>('assets/json/blog-categories.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getClassHomeWork() {
    return this.http
      .get<apiResultFormat>('assets/json/class-home-work.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getBlogComments() {
    return this.http
      .get<apiResultFormat>('assets/json/blog-comments.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTransportVechile() {
    return this.http
      .get<apiResultFormat>('assets/json/transport-vehicle.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTransportVechileDrivers() {
    return this.http
      .get<apiResultFormat>('assets/json/transport-vehicle-drivers.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUsers() {
    return this.http.get<apiResultFormat>('assets/json/user.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getRolesPermission() {
    return this.http
      .get<apiResultFormat>('assets/json/roles-permission.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getBlogTags() {
    return this.http.get<apiResultFormat>('assets/json/blog-tags.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getClassReport() {
    return this.http.get<apiResultFormat>('assets/json/class-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getContactMessages() {
    return this.http
      .get<apiResultFormat>('assets/json/contact-messages.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCountries() {
    return this.http.get<apiResultFormat>('assets/json/countries.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getClassReportDate() {
    return this.http
      .get<apiResultFormat>('assets/json/class-report-data.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDailyAttendance() {
    return this.http
      .get<apiResultFormat>('assets/json/daily-attendance.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDeleteAccount() {
    return this.http
      .get<apiResultFormat>('assets/json/delete-account.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDepartments() {
    return this.http.get<apiResultFormat>('assets/json/departments.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTransactionData() {
    return this.http
      .get<apiResultFormat>('assets/json/accounts_transactions_data.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getIncomeData() {
    return this.http
      .get<apiResultFormat>('assets/json/accountincome.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getInvoiceData() {
    return this.http
      .get<apiResultFormat>('assets/json/account_invoice.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDesignation() {
    return this.http.get<apiResultFormat>('assets/json/designation.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getClassRoom() {
    return this.http.get<apiResultFormat>('assets/json/class_room.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getHostelRoom() {
    return this.http.get<apiResultFormat>('assets/json/hostel-room.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getClassSyllabus() {
    return this.http
      .get<apiResultFormat>('assets/json/class_syllabus.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getFeesGroup() {
    return this.http.get<apiResultFormat>('assets/json/fees-group.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getClassSubject() {
    return this.http
      .get<apiResultFormat>('assets/json/class_subject.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getHostelRoomType() {
    return this.http
      .get<apiResultFormat>('assets/json/hostel-room-type.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getClassSection() {
    return this.http
      .get<apiResultFormat>('assets/json/class_section.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getFeesMaster() {
    return this.http.get<apiResultFormat>('assets/json/fees-master.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getClassRoutine() {
    return this.http
      .get<apiResultFormat>('assets/json/class_routine.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getHostelList() {
    return this.http.get<apiResultFormat>('assets/json/hostel-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getFeesReport() {
    return this.http.get<apiResultFormat>('assets/json/fees-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getFeesType() {
    return this.http.get<apiResultFormat>('assets/json/fees-type.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getGrade() {
    return this.http.get<apiResultFormat>('assets/json/grade.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getFeesCollect() {
    return this.http.get<apiResultFormat>('assets/json/collect_fees.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getGradeReport() {
    return this.http.get<apiResultFormat>('assets/json/grade-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getParentList() {
    return this.http.get<apiResultFormat>('assets/json/parents-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getMembershipTransactions() {
    return this.http
      .get<apiResultFormat>('assets/json/membership-transactions.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPayroll() {
    return this.http.get<apiResultFormat>('assets/json/payroll.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPlayers() {
    return this.http.get<apiResultFormat>('assets/json/players.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPermission() {
    return this.http.get<apiResultFormat>('assets/json/permission.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPages() {
    return this.http.get<apiResultFormat>('assets/json/pages.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getFaqData() {
    return this.http.get<apiResultFormat>('assets/json/faq.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStates() {
    return this.http.get<apiResultFormat>('assets/json/states.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSports() {
    return this.http.get<apiResultFormat>('assets/json/sports.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffAttendance() {
    return this.http
      .get<apiResultFormat>('assets/json/staff-attendance.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getFeesAssignData() {
    return this.http.get<apiResultFormat>('assets/json/assign_fees.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffDayWise() {
    return this.http
      .get<apiResultFormat>('assets/json/staff-day-wise.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getstudentLeaveAttendance() {
    return this.http
      .get<apiResultFormat>('assets/json/studentLeaveAttendance.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getStudentDayWise() {
    return this.http
      .get<apiResultFormat>('assets/json/studentDayWiseData.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getExpenceData() {
    return this.http.get<apiResultFormat>('assets/json/expense_data.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getFeesRecord() {
    return this.http.get<apiResultFormat>('assets/json/studentfeesRecord.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffLeaves() {
    return this.http.get<apiResultFormat>('assets/json/staff-leaves.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffPayroll() {
    return this.http
      .get<apiResultFormat>('assets/json/staff-payroll.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getExpenceCategoryData() {
    return this.http
      .get<apiResultFormat>('assets/json/expenses_category_data.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }

  public getExamAttedance() {
    return this.http
      .get<apiResultFormat>('assets/json/exam_attendance.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getExamResult() {
    return this.http.get<apiResultFormat>('assets/json/exam-result.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getExamSchedule() {
    return this.http
      .get<apiResultFormat>('assets/json/exam_schedule.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getExamData() {
    return this.http.get<apiResultFormat>('assets/json/exam.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getLanguageData() {
    return this.http.get<apiResultFormat>('assets/json/language.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getLibraryMemberList() {
    return this.http
      .get<apiResultFormat>('assets/json/libraryMemberList.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getBookIssueList() {
    return this.http
      .get<apiResultFormat>('assets/json/bookIssueList.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getBookList() {
    return this.http.get<apiResultFormat>('assets/json/bookList.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getListLeaves() {
    return this.http.get<apiResultFormat>('assets/json/list_leaves.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getLeaveReport() {
    return this.http
      .get<apiResultFormat>('assets/json/leave_report_data.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getStudentReports() {
    return this.http
      .get<apiResultFormat>('assets/json/student_reports.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTeacherAttendance() {
    return this.http
      .get<apiResultFormat>('assets/json/teacher-attendance.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getScheduleClass() {
    return this.http
      .get<apiResultFormat>('assets/json/scheduleClass.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getStaffList() {
    return this.http.get<apiResultFormat>('assets/json/staff.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStudentAttendnceType() {
    return this.http
      .get<apiResultFormat>('assets/json/student-attendance-type.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getStaffsAttendance() {
    return this.http
      .get<apiResultFormat>('assets/json/staffs-attendance.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getStaffReport() {
    return this.http.get<apiResultFormat>('assets/json/staff-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStudentAttendance() {
    return this.http
      .get<apiResultFormat>('assets/json/student-attendance.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTeacherDayWise() {
    return this.http
      .get<apiResultFormat>('assets/json/teacher-day-wise.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTransportVehicle() {
    return this.http
      .get<apiResultFormat>('assets/json/transport-assign-vehicle.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTransportPickupPoints() {
    return this.http
      .get<apiResultFormat>('assets/json/transport-pickup-points.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTeacherLeaves() {
    return this.http
      .get<apiResultFormat>('assets/json/teacher-leaves.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTeacherReport() {
    return this.http
      .get<apiResultFormat>('assets/json/teacher-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTeachersList() {
    return this.http
      .get<apiResultFormat>('assets/json/teachers-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTeacherSalary() {
    return this.http
      .get<apiResultFormat>('assets/json/teacher-salary.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTestimonials() {
    return this.http.get<apiResultFormat>('assets/json/testimonials.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTransportRoutes() {
    return this.http
      .get<apiResultFormat>('assets/json/transport-routes.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getStudent() {
    return this.http
      .get<apiResultFormat>('assets/json/student-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getFile(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/files.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getCallHistory(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/call-history.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public sidebarData1 = [
    {
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: false,
      base:'',
      page:'99',
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'layout-2',
          base:'dashboard',
          page:'1',
          subMenus: [
            // {
            //   menuValue: 'Admin Dashboard',
            //   route: routes.adminDashboard,
            //   page: 'index',
            // },
            // {
            //   menuValue: 'Teacher Dashboard',
            //   route: routes.teacherDashboard,
            //   page: 'teacher-dashboard',
            // },
            // {
            //   menuValue: 'Student Dashboard',
            //   route: routes.studentDashboard,
            //   page: 'student-dashboard',
            // },
            {
              menuValue: 'Parent Dashboard',
              route: routes.parentDashboard,
              page: 'parent-dashboard',
            },
          ],
        },
        // {
        //   menuValue: 'Application',
        //   hasSubRouteTwo: true,
        //   showSubRoute: false,
        //   base: 'application',
        //   icon: 'layout-list',
        //   page:'19',
        //   subMenus: [
        //     {
        //       menuValue: 'Chat',
        //       route: routes.chat,
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       customSubmenuTwo: false,
        //     },
        //     {
        //       menuValue: 'Call',
        //       route: routes.audioCall,
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       customSubmenuTwo: false,
        //     },
            
        //     {
        //       menuValue: 'Calendar',
        //       route: routes.calendar,
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       customSubmenuTwo: false,
        //     },
        //     {
        //       menuValue: 'Email',
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       route: routes.email,
        //       customSubmenuTwo: false,
        //       subRoutes: [],
        //     },
        //     {
        //       menuValue: 'To Do',
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       route: routes.toDo,
        //       customSubmenuTwo: false,
        //       subRoutes: [],
        //     },
        //     {
        //       menuValue: 'Notes',
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       route: routes.notes,
        //       customSubmenuTwo: false,
        //       subRoutes: [],
        //     },
        //     {
        //       menuValue: 'File Manager',
        //       hasSubRoute: false,
        //       showSubRoute: false,
        //       route: routes.fileManager,
        //       customSubmenuTwo: false,
        //       subRoutes: [],
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   tittle: 'Layout',
    //   showAsTab: false,
    //   separateRoute: false,
    //   hasSubRoute: false,
    //   showSubRoute: true,
    //   base:'',
    //   page:'9',
     
    //   menu: [
    //     {
    //       menuValue: 'Default',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.layoutDefault,
    //       customSubmenuTwo: false,
    //       icon: 'layout-sidebar',
    //       base:'layout-default',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Mini',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.layoutMini,
    //       customSubmenuTwo: false,
    //       icon: 'layout-align-left',
    //       base:'layout-mini',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'RTL',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.layoutRtl,
    //       customSubmenuTwo: false,
    //       icon: 'text-direction-rtl',
    //       base:'layout-rtl',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Box',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.layoutBox,
    //       customSubmenuTwo: false,
    //       base:'layout-box',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //       icon: 'layout-distribute-vertical',
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Dark',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.layoutDark,
    //       customSubmenuTwo: false,
    //       base:'layout-dark',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //       icon: 'moon',
    //       subRoutes: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Peoples',
    //   showAsTab: false,
    //   separateRoute: false,
    //   hasSubRoute: false,
    //   showSubRoute: true,
    //   base:'peoples',
    //   menu: [
    //     {
    //       menuValue: 'Students',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'school',
    //       page:'students',
         
    //       subMenus: [
    //         {
    //           menuValue: 'All Students',
    //           route: routes.studentsGrid,
    //           // page1: 'add-student',
              
    //         },
    //         {
    //           menuValue: 'Student List',
    //           route: routes.studentList,
            
    //         },
    //         {
    //           menuValue: 'Student Details',
    //           route: routes.studentDetails,
    //           page1: 'student-time-table',
    //           // page2: 'student-leaves',
    //           // page3: 'student-fees',
    //           // page4: 'student-library',
    //           // page5: 'exam-results',

    //         },
    //         {
    //           menuValue: 'Student Promotion',
    //           route: routes.studentPromotion,
             
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Parents',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       icon: 'user-bolt',
    //       page: 'parents',
    //       subMenus: [
    //         {
    //           menuValue: 'All Parents',
    //           route: routes.parentGrid,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           customSubmenuTwo: false,
    //         },
    //         {
    //           menuValue: 'Parent List',
    //           route: routes.parentList,
    //           customSubmenuTwo: false,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Guardians',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       page: 'guardians',
    //       icon: 'user-shield',
    //       subMenus: [
    //         {
    //           menuValue: 'All Guardians',
    //           route: routes.guardiansGrid,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           customSubmenuTwo: false,
    //         },
    //         {
    //           menuValue: 'Guardian List',
    //           route: routes.guardiansList,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           customSubmenuTwo: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Teachers',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       page: 'teachers',
    //       icon: 'users',
    //       subMenus: [
    //         {
    //           menuValue: 'All Teachers',
    //           route: routes.teacherGrid,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           customSubmenuTwo: false,
              
    //         },
    //         {
    //           menuValue: 'Teacher List',
    //           route: routes.teachersList,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           customSubmenuTwo: false,
             
    //         },
    //         {
    //           menuValue: 'Teacher Details',
    //           route: routes.teacherDetails,
    //           customSubmenuTwo: false,
    //           hasSubRoute: false,
    //           showSubRoute: false,
              
    //         },
    //         {
    //           menuValue: 'Routine',
    //           customSubmenuTwo: false,
    //           route: routes.teacherRoutine,
    //           hasSubRoute: true,
    //           showSubRoute: false,
             
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      tittle: 'Academic',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: false,
      menu: [
        // {
        //   menuValue: 'Classes',
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'school-bell',
        //   page:'classes',
        //   subMenus: [
        //     {
        //       menuValue: 'All Classes',
        //       route: routes.classes,
        //     },
        //     {
        //       menuValue: 'Schedule',
        //       route: routes.scheduleClasses,
        //     },
        //   ],
        // },
        // {
        //   menuValue: 'Class Room',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'building',
        //   route: routes.classRoom,
        //   base: 'class-room',
        //   base2:"",
        //   base3:"",
        //   base4:"",
        //   base5:"",
        //   base6:"",
        //   base7:"",
        //   base8:"",
        //   base9:"",
        //   customSubmenuTwo: false,
        //   subRoutes: [],
        // },
        // {
        //   menuValue: 'Class Routine',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'bell-school',
        //   route: routes.classRoutine,
        //   base: 'class-routine',
        //   base2:"",
        //   base3:"",
        //   base4:"",
        //   base5:"",
        //   base6:"",
        //   base7:"",
        //   base8:"",
        //   base9:"",
        //   customSubmenuTwo: false,
        //   subRoutes: [],
        // },
        // {
        //   menuValue: 'Section',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   icon: 'square-rotated-forbid-2',
        //   route: routes.classSection,
        //   base: 'class-section',
        //   base2:"",
        //   base3:"",
        //   base4:"",
        //   base5:"",
        //   base6:"",
        //   base7:"",
        //   base8:"",
        //   base9:"",
        //   customSubmenuTwo: false,
        //   subRoutes: [],
        // },
        {
          menuValue: 'Subject',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'book',
          route: routes.classSubject,
          base: 'class-subject',
          base2:"",
          base3:"",
          base4:"",
          base5:"",
          base6:"",
          base7:"",
          base8:"",
          base9:"",
          subRoutes: [],
        },
        {
          menuValue: 'Syllabus',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'book-upload',
          route: routes.classSyllabus,
          base: 'class-syllabus',
          base2:"",
          base3:"",
          base4:"",
          base5:"",
          base6:"",
          base7:"",
          base8:"",
          base9:"",
          customSubmenuTwo: false,
          subRoutes: [],
        },
        {
          menuValue: 'Time Table',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'table',
          route: routes.classTimeTable,
          base: 'class-time-table',
          base2:"",
          base3:"",
          base4:"",
          base5:"",
          base6:"",
          base7:"",
          base8:"",
          base9:"",
          customSubmenuTwo: false,
          subRoutes: [],
        },
        {
          menuValue: 'Home Work',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'license',
          route: routes.classHomeWork,
          customSubmenuTwo: false,
          base2:"",
          base3:"",
          base4:"",
          base5:"",
          base6:"",
          base7:"",
          base8:"",
          base9:"",
          base: 'class-home-work',
          subRoutes: [],
        },
        // {
        //   menuValue: 'Examinations',
        //   hasSubRoute: true,
        //   showSubRoute: false,
        //   icon: 'hexagonal-prism-plus',
        //   page: 'examinations',
        //   subMenus: [
        //     {
        //       menuValue: 'Exam',
        //       route: routes.examList,
        //     },
        //     {
        //       menuValue: 'Exam Schedule',
        //       route: routes.examSchedule,
        //     },
        //     {
        //       menuValue: 'Grade',
        //       route: routes.grade,
        //     },
        //     {
        //       menuValue: 'Exam Attendance',
        //       route: routes.examAttendance,
        //     },
        //     {
        //       menuValue: 'Exam Results',
        //       route: routes.examResults,
        //     },
        //   ],
        // },
        // {
        //   menuValue: 'Reason',
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   base: 'academic-reasons',
        //   base2:"",
        //   base3:"",
        //   base4:"",
        //   base5:"",
        //   base6:"",
        //   base7:"",
        //   base8:"",
        //   base9:"",
        //   icon: 'lifebuoy',
        //   route: routes.academicReasons,
        //   customSubmenuTwo: false,
        //   subRoutes: [],
        // },
      ],
    },
    // {
    //   tittle: 'Management',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Fees Collection',
    //       page: 'fees-collection',
    //       icon: 'report-money',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Fees Group',
    //           icon: 'package',
    //           route: routes.feesGroup,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Fees Type',
    //           icon: 'clipboard',
    //           route: routes.feesType,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Fees Master',
    //           icon: 'truck',
    //           route: routes.feesMaster,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Fees Assign',
    //           icon: 'truck',
    //           route: routes.feesAssign,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Collect Fees',
    //           icon: 'truck',
    //           route: routes.collectFees,
    //           base: 'collect-fees',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Library',
    //       page: 'library',
    //       icon: 'notebook',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Library Members',
    //           icon: 'package',
    //           route: routes.libraryMembers,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Books',
    //           icon: 'clipboard',
    //           route: routes.Books,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Issue Book',
    //           icon: 'truck',
    //           route: routes.issueBook,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Return',
    //           icon: 'truck',
    //           route: routes.returnBook,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Sports',
    //       icon: 'run',
    //       route: routes.sports,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'sports',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Players',
    //       icon: 'play-football',
    //       route: routes.players,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'players',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Hostel',
    //       page: 'hostel',
    //       icon: 'building-fortress',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Hostel List',
    //           icon: 'package',
    //           route: routes.hostelList,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           base: 'hostel-list',
    //         },
    //         {
    //           menuValue: 'Hostel Rooms',
    //           icon: 'clipboard',
    //           route: routes.hostelRooms,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           base: 'hostel-rooms',
    //         },
    //         {
    //           menuValue: 'Room Type',
    //           icon: 'truck',
    //           route: routes.hostelRoomType,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           base: 'hostel-room-type',
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Transport',
    //       page: 'transport',
    //       icon: 'bus',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Routes',
    //           icon: 'package',
    //           route: routes.transportRoutes,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           base: 'trasnsport-routes',
    //         },
    //         {
    //           menuValue: 'Pickup Points',
    //           icon: 'clipboard',
    //           route: routes.transportPickupPoints,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           base: 'transport-pickup-points',
    //         },
    //         {
    //           menuValue: 'Vehicle Drivers',
    //           icon: 'truck',
    //           route: routes.transportVehicleDrivers,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           base: 'transport-vehicle-drivers',
    //         },
    //         {
    //           menuValue: 'Vehicle',
    //           icon: 'truck',
    //           route: routes.transportVehicle,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           base: 'transport-vehicle',
    //         },
    //         {
    //           menuValue: 'Assign Vehicle',
    //           icon: 'truck',
    //           route: routes.transportAssignVehicle,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           base: 'transport-assign-vehicle',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'HRM',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Staffs',
    //       icon: 'users-group',
    //       route: routes.staffList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'staff',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Departments',
    //       icon: 'layout-distribute-horizontal',
    //       route: routes.departments,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'departments',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Designation',
    //       icon: 'user-exclamation',
    //       route: routes.designation,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'designation',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Attendance',
    //       page: 'attendance',
    //       icon: 'calendar-share',
    //       hasSubRoute: true,
    //       showSubRoute: false,
          
    //       subMenus: [
    //         {
    //           menuValue: 'Student Attendance',
    //           route: routes.studentAttendance,
    //         },
    //         {
    //           menuValue: 'Teacher Attendance',
    //           route: routes.teacherAttendance,
    //         },
    //         {
    //           menuValue: 'Staff Attendance',
    //           route: routes.staffAttendance,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Leaves',
    //       icon: 'calendar-stats',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       page:'leaves',
    //       subMenus: [
    //         {
    //           menuValue: 'List of leaves',
    //           route: routes.listLeaves,
    //         },
    //         {
    //           menuValue: 'Approve Request',
    //           route: routes.approveRequest,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Holidays',
    //       icon: 'briefcase',
    //       route: routes.holiday,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'holidays',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Payroll',
    //       icon: 'moneybag',
    //       route: routes.payRoll,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'payroll',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Finance & Accounts',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Accounts',
    //       base: 'accounts',
    //       icon: 'swipe',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       base1: 'Blog',
    //       page:'7',
    //       subMenus: [
    //         {
    //           menuValue: 'Expenses',
    //           route: routes.expenses,
    //         },
    //         {
    //           menuValue: 'Expense Category',
    //           route: routes.expensesCategory,
    //         },
    //         {
    //           menuValue: 'Income',
    //           route: routes.income,
    //         },
    //         {
    //           menuValue: 'Invoices',
    //           route: routes.accountsInvoices,
    //         },
    //         {
    //           menuValue: 'Invoice View',
    //           route: routes.invoice,
    //         },
    //         {
    //           menuValue: 'Transactions',
    //           route: routes.transactions,
    //           base: 'transactions',
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      tittle: 'Announcements',
      showAsTab: true,
      hasSubRoute: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Notice Board',
          icon: 'clipboard-data',
          route: routes.noticeBoard,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'notice-board',
          base2:"",
          base3:"",
          base4:"",
          base5:"",
          base6:"",
          base7:"",
          base8:"",
          base9:"",
        },
        {
          menuValue: 'Events',
          icon: 'users',
          route: routes.events,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'event',
          base2:"",
          base3:"",
          base4:"",
          base5:"",
          base6:"",
          base7:"",
          base8:"",
          base9:"",
        },
      ],
    },
    // {
    //   tittle: 'Reports',
    //   showAsTab: true,
    //   separateRoute: false,
    //   page:'10',
    //   menu: [
    //     {
    //       menuValue: 'Attendance Report',
    //       icon: 'calendar-due',
    //       route: routes.attendanceReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'attendance-report',
    //       base2: 'student-attendance-type',
    //       base3: 'daily-attendance',
    //       base5: 'student-day-wise',
    //       base6: 'teacher-day-wise',
    //       base7: 'teacher-report',
    //       base8:'staff-day-wise',
    //       base9:'staff-report'
         
    //     },
    //     {
    //       menuValue: 'Class Report',
    //       icon: 'graph',
    //       route: routes.classReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'class-report',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Student Report',
    //       icon: 'chart-infographic',
    //       route: routes.studentReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'student-report',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Grade Report',
    //       icon: 'calendar-x',
    //       route: routes.gradeReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'grade-report',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Leave Report',
    //       icon: 'line',
    //       route: routes.leaveReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'leave-report',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Fees Report',
    //       icon: 'mask',
    //       route: routes.feesReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'fees-report',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //   ],
    // },
    // {
    //   tittle: 'USER MANAGEMENT',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Users',
    //       icon: 'users',
    //       route: routes.users,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'users',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Roles & Permissions',
    //       icon: 'navigation-cog',
    //       route: routes.rolesPermision,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'roles-permission',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'Delete Account Request',
    //       icon: 'flag-question',
    //       route: routes.deleteAccount,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'delete-account',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //   ],
    // },
    // {
    //   tittle: 'MEMBERSHIP',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Membership Plans',
    //       base:'membership-plans',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //       icon: 'page-break',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.membershipPlans,
    //     },
    //     {
    //       menuValue: 'Membership Addons',
    //       base:'membership-addons',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //       icon: 'page-break',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.membershipAddons,
    //     },
    //     {
    //       menuValue: 'Transactions',
    //       base:'membership-transactions',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //       icon: 'page-break',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.membershipTransactions,
    //     },
    //   ],
    // },
    // {
    //   tittle: 'CONTENT',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Pages',
    //       base: 'pages',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //       icon: 'page-break',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       page:'2',
    //       route: routes.pagesMain,
    //     },
    //     {
    //       menuValue: 'Blog',
    //       base: 'expense',
    //       page:'3',
    //       icon: 'map-pin-pin',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       base1: 'Blog',
    //       subMenus: [
    //         {
    //           menuValue: 'All Blogs',
    //           route: routes.allBlog,
    //         },
    //         {
    //           menuValue: 'Categories',
    //           route: routes.blogCategories,
    //         },
    //         {
    //           menuValue: 'Comments',
    //           route: routes.blogComments,
    //         },
    //         {
    //           menuValue: 'Tags',
    //           route: routes.blogTags,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Location',
         
    //       icon: 'map-pin-pin',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       page: 'location',
    //       subMenus: [
    //         {
    //           menuValue: 'Countries',
    //           route: routes.countries,
    //         },
    //         {
    //           menuValue: 'States',
    //           route: routes.states,
    //         },
    //         {
    //           menuValue: 'Cities',
    //           route: routes.cities,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Testimonials',
    //       base: 'testimonials',
    //       icon: 'quote',
    //       route: routes.testimonials,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //     {
    //       menuValue: 'FAQ',
    //       base: 'faq',
    //       icon: 'question-mark',
    //       route: routes.faq,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //   ],
    // },
    // {
    //   tittle: 'SUPPORT',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Contact Messages',
    //       icon: 'page-break',
    //       route: routes.contactMessages,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       base: 'contact-messages',
    //       base2:"",
    //       base3:"",
    //       base4:"",
    //       base5:"",
    //       base6:"",
    //       base7:"",
    //       base8:"",
    //       base9:"",
    //     },
    //   ],
    // },

  ];

  public videocall = [
    {
      img: 'assets/img/users/user-01.jpg',
      name: 'Barbara',
    },
    {
      img: 'assets/img/users/user-02.jpg',
      name: 'Linnea',
    },
    {
      img: 'assets/img/users/user-05.jpg',
      name: 'Richard',
    },
    {
      img: 'assets/img/users/user-03.jpg',
      name: 'Freda',
    },
  ];
}
