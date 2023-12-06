import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
function Sidebar() {

    const [dashboard_Ac, setDasboard_Ac] = useState('')
    const [ul_Ac, setUl_Ac] = useState('collapse')
    const [expand_Ac, setexpand_Ac] = useState('false')

    const toggle_active = () => {
        if (dashboard_Ac == '') {
            setDasboard_Ac('active')
            setUl_Ac('collapse in')
            setexpand_Ac('true')
        } else {
            setDasboard_Ac('')
            setUl_Ac('collapse')
            setexpand_Ac('false')
        }
    }

    return (
        <>

            <div className="nk-sidebar">
                <div className="nk-nav-scroll">

                    <ul className="metismenu" id="menu">
                        <li className="nav-label">Dashboard</li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'mega-menu mega-menu-sm active' : 'inactive')}>
                            <li className="">
                                <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-calendar-week"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                    </svg>



                                    <span className="nav-text">ปฎิทินการใช้ห้อง</span>
                                </a>
                            </li>
                        </NavLink>

                        

                        <NavLink to='/book_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            <li className="mega-menu mega-menu-sm">
                                <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-calendar-check"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                    </svg>
                                    <span className="nav-text">จองห้องประชุม</span>
                                </a>
                            </li>
                        </NavLink>

                        <NavLink to='/all_meeting_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                            <li className="mega-menu mega-menu-sm">
                                <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-file-earmark-richtext"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                                        <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
                                    </svg>

                                    <span className="nav-text">รายละเอียดห้องประชุม</span>
                                </a>
                            </li>
                        </NavLink>

                        <NavLink to='/add_meeting_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                            <li className="mega-menu mega-menu-sm">
                                <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-file-earmark-plus"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5" />
                                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                                    </svg>

                                    <span className="nav-text">เพิ่มข้อมูลห้องประชุม</span>
                                </a>
                            </li>
                        </NavLink>


                        {/* <li className={dashboard_Ac} onClick={toggle_active}>
                            <a className="has-arrow active" href="#" aria-expanded={expand_Ac}>
                                <i className="icon-speedometer menu-icon" />
                                <span className="nav-text">xxxx-xxx</span>
                            </a>
                            <ul className={ul_Ac} aria-expanded="false">
                                <li>
                                    <a href="./index.html">Home 1</a>
                                </li>
                            </ul>
                        </li> */}

                        {/* <li className="nav-label">เข้าสู่ระบบ / ออกจากระบบ</li> */}

                        {/* <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : undefined)}>
                            <li  >
                                <a className="" href="#" aria-expanded="false">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-box-arrow-in-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                                        />
                                    </svg>
                                    <span className="nav-text">เข้าสู่ระบบ</span>
                                </a>

                                
                                
                            </li>
                        </NavLink>

                        <li>
                        <a className="" href="#" aria-expanded="false">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-box-arrow-in-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                                        />
                                    </svg>
                                    <span className="nav-text">ออกจากระบบ</span>
                                </a>
                        </li> */}








                        {/* <li className="mega-menu mega-menu-sm">
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <i className="icon-globe-alt menu-icon" />
                                <span className="nav-text">Layouts</span>
                            </a>
                            <ul aria-expanded="false">
                                <li>
                                    <a href="./layout-blank.html">Blank</a>
                                </li>
                                <li>
                                    <a href="./layout-one-column.html">One Column</a>
                                </li>
                                <li>
                                    <a href="./layout-two-column.html">Two column</a>
                                </li>
                                <li>
                                    <a href="./layout-compact-nav.html">Compact Nav</a>
                                </li>
                                <li>
                                    <a href="./layout-vertical.html">Vertical</a>
                                </li>
                                <li>
                                    <a href="./layout-horizontal.html">Horizontal</a>
                                </li>
                                <li>
                                    <a href="./layout-boxed.html">Boxed</a>
                                </li>
                                <li>
                                    <a href="./layout-wide.html">Wide</a>
                                </li>
                                <li>
                                    <a href="./layout-fixed-header.html">Fixed Header</a>
                                </li>
                                <li>
                                    <a href="layout-fixed-sidebar.html">Fixed Sidebar</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-label">Apps</li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <i className="icon-envelope menu-icon" />{" "}
                                <span className="nav-text">Email</span>
                            </a>
                            <ul aria-expanded="false">
                                <li>
                                    <a href="./email-inbox.html">Inbox</a>
                                </li>
                                <li>
                                    <a href="./email-read.html">Read</a>
                                </li>
                                <li>
                                    <a href="./email-compose.html">Compose</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <i className="icon-screen-tablet menu-icon" />
                                <span className="nav-text">Apps</span>
                            </a>
                            <ul aria-expanded="false">
                                <li>
                                    <a href="./app-profile.html">Profile</a>
                                </li>
                                <li>
                                    <a href="./app-calender.html">Calender</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <i className="icon-graph menu-icon" />{" "}
                                <span className="nav-text">Charts</span>
                            </a>
                            <ul aria-expanded="false">
                                <li>
                                    <a href="./chart-flot.html">Flot</a>
                                </li>
                                <li>
                                    <a href="./chart-morris.html">Morris</a>
                                </li>
                                <li>
                                    <a href="./chart-chartjs.html">Chartjs</a>
                                </li>
                                <li>
                                    <a href="./chart-chartist.html">Chartist</a>
                                </li>
                                <li>
                                    <a href="./chart-sparkline.html">Sparkline</a>
                                </li>
                                <li>
                                    <a href="./chart-peity.html">Peity</a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <li className="nav-label">UI Components</li>
                        
              <li>
                  <a class="has-arrow" href="#" aria-expanded="false">
                      <i class="icon-layers menu-icon"></i><span class="nav-text">Components</span>
                  </a>
                  <ul aria-expanded="false"> */}



                        {/* <li>
                                    <a href="./uc-nestedable.html">Nestedable</a>
                                </li>
                                <li>
                                    <a href="./uc-noui-slider.html">Noui Slider</a>
                                </li>
                                <li>
                                    <a href="./uc-sweetalert.html">Sweet Alert</a>
                                </li>
                                <li>
                                    <a href="./uc-toastr.html">Toastr</a>
                                </li>
                            </ul>
                        </li> */}



                        {/* <li>
                            <a href="widgets.html" aria-expanded="false">
                                <i className="icon-badge menu-icon" />
                                <span className="nav-text">Widget</span>
                            </a>
                        </li> 
                        <li className="nav-label">Forms</li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <i className="icon-note menu-icon" />
                                <span className="nav-text">Forms</span>
                            </a>
                            <ul aria-expanded="false">
                                <li>
                                    <a href="./form-basic.html">Basic Form</a>
                                </li>
                                <li>
                                    <a href="./form-validation.html">Form Validation</a>
                                </li>
                                <li>
                                    <a href="./form-step.html">Step Form</a>
                                </li>
                                <li>
                                    <a href="./form-editor.html">Editor</a>
                                </li>
                                <li>
                                    <a href="./form-picker.html">Picker</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-label">Table</li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <i className="icon-menu menu-icon" />
                                <span className="nav-text">Table</span>
                            </a>
                            <ul aria-expanded="false">
                                <li>
                                    <a href="./table-basic.html" aria-expanded="false">
                                        Basic Table
                                    </a>
                                </li>
                                <li>
                                    <a href="./table-datatable.html" aria-expanded="false">
                                        Data Table
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-label">Pages</li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <i className="icon-notebook menu-icon" />
                                <span className="nav-text">Pages</span>
                            </a>
                            <ul aria-expanded="false">
                                <li>
                                    <a href="./page-login.html">Login</a>
                                </li>
                                <li>
                                    <a href="./page-register.html">Register</a>
                                </li>
                                <li>
                                    <a href="./page-lock.html">Lock Screen</a>
                                </li>
                                <li>
                                    <a
                                        className="has-arrow"
                                        href="#"
                                        aria-expanded="false"
                                    >
                                        Error
                                    </a>
                                    <ul aria-expanded="false">
                                        <li>
                                            <a href="./page-error-404.html">Error 404</a>
                                        </li>
                                        <li>
                                            <a href="./page-error-403.html">Error 403</a>
                                        </li>
                                        <li>
                                            <a href="./page-error-400.html">Error 400</a>
                                        </li>
                                        <li>
                                            <a href="./page-error-500.html">Error 500</a>
                                        </li>
                                        <li>
                                            <a href="./page-error-503.html">Error 503</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Sidebar