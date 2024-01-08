import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthService from '../context/Auth_2'
function Sidebar() {

    const [dashboard_Ac, setDasboard_Ac] = useState('')
    const [ul_Ac, setUl_Ac] = useState('collapse')
    const [expand_Ac, setexpand_Ac] = useState('false')
    const isAuthenticated = AuthService.isAuthenticated()
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

    const handleLogout = () =>{
        AuthService.logout()
    }

    return (
        <>

            <div className="nk-sidebar">
                <div className="nk-nav-scroll">
                    {isAuthenticated
                        ? <>
                            
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

                                <NavLink to='/protectRoute/all_meeting_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
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

                                <NavLink to='/using_meeting_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
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

                                            <span className="nav-text">การใช้ห้องประชุม</span>
                                        </a>
                                    </li>
                                </NavLink>

                                <hr />

                                <NavLink to='/login_admin' className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleLogout} >
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

                                            <span className="nav-text">ออกจากระบบ</span>
                                        </a>
                                    </li>
                                </NavLink>

                                
                            </ul>
                            
                        </>

                        : <>
                            (
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

                                <NavLink to='/using_meeting_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
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

                                            <span className="nav-text">การใช้ห้องประชุม</span>
                                        </a>
                                    </li>
                                </NavLink>

                                <hr />

                                <NavLink to='/login_admin' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
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

                                            <span className="nav-text">เข้าสู่ระบบ (สำหรับผู้ดูแล)</span>
                                        </a>
                                    </li>
                                </NavLink>
                            </ul>
                            )
                        </>
                    }

                    {/* render the sidebar for users is not authorized */}


                </div>
            </div>
        </>

    )
}

export default Sidebar