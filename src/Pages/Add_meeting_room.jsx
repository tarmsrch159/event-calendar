import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Header_start from '../Components/Header_start'
import Sidebar from '../Components/Sidebar'
// import axios from 'axios'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Add_meeting_room({ obtaine_msg }) {

    const [room_Id, setRoom_Id] = useState('')
    const [room_Name, setRoom_Name] = useState('')
    const navigate = useNavigate()
    function handleAdd_Room(e) {
        if (room_Name == '' || room_Id == '') {
            alert('กรุณากรอกข้อมูลให้ครบ')
            location.reload();
            return;
        } else if (room_Name != '' && room_Id != '') {
            try {
                e.preventDefault()
                axios.post('/insert_meeting_room', {
                    room_id: room_Id,
                    room_name: room_Name
                }).then((res) => {

                    if (res.data.status == true) {
                        alert('เพิ่มข้อมูลห้องประชุมเรียบร้อย')
                        location.reload()
                    } else {
                        alert('เกิดข้อผิดพลาด')
                        return false
                    }
                })
            } catch (error) {
                console.error(error)
            }
        }


    }


    return (
        <>
            < Header_start />
            < Header obtaine_msg={obtaine_msg} />
            < Sidebar />
            <div className="content-body">
                <div className="container-fluid mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>เพิ่มข้อมูลห้องประชุม</h3>

                            <div className="form-validation">
                                <form
                                    className="form-valide"
                                    noValidate="novalidate"
                                >
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-username">
                                            เลขที่ห้องประชุม <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="กรุณาใส่เลขที่ห้องประชุม"
                                                onChange={(e) => setRoom_Id(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-email">
                                            ชื่อห้องประชุม <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="กรุณาใส่ชื่อห้องประชุม"
                                                onChange={(e) => setRoom_Name(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-password">
                                            Password <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="val-password"
                                                name="val-password"
                                                placeholder="Choose a safe one.."
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            className="col-lg-4 col-form-label"
                                            htmlFor="val-confirm-password"
                                        >
                                            Confirm Password <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="val-confirm-password"
                                                name="val-confirm-password"
                                                placeholder="..and confirm it!"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-suggestions">
                                            Suggestions <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <textarea
                                                className="form-control"
                                                id="val-suggestions"
                                                name="val-suggestions"
                                                rows={5}
                                                placeholder="What would you like to see?"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-skill">
                                            Best Skill <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <select className="form-control" id="val-skill" name="val-skill">
                                                <option value="">Please select</option>
                                                <option value="html">HTML</option>
                                                <option value="css">CSS</option>
                                                <option value="javascript">JavaScript</option>
                                                <option value="angular">Angular</option>
                                                <option value="angular">React</option>
                                                <option value="vuejs">Vue.js</option>
                                                <option value="ruby">Ruby</option>
                                                <option value="php">PHP</option>
                                                <option value="asp">ASP.NET</option>
                                                <option value="python">Python</option>
                                                <option value="mysql">MySQL</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-currency">
                                            Currency <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-currency"
                                                name="val-currency"
                                                placeholder="$21.60"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-website">
                                            Website <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-website"
                                                name="val-website"
                                                placeholder="http://example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-phoneus">
                                            Phone (US) <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-phoneus"
                                                name="val-phoneus"
                                                placeholder="212-999-0000"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-digits">
                                            Digits <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-digits"
                                                name="val-digits"
                                                placeholder={5}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-number">
                                            Number <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-number"
                                                name="val-number"
                                                placeholder={5.0}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-range">
                                            Range [1, 5] <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-range"
                                                name="val-range"
                                                placeholder={4}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label">
                                            <a href="#">Terms &amp; Conditions</a>{" "}
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-8">
                                            <label
                                                className="css-control css-control-primary css-checkbox"
                                                htmlFor="val-terms"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="css-control-input"
                                                    id="val-terms"
                                                    name="val-terms"
                                                    defaultValue={1}
                                                />{" "}
                                                <span className="css-control-indicator" /> I agree to the terms
                                            </label>
                                        </div>
                                    </div> */}
                                    <div className="form-group row">
                                        <div className="col-lg-6 ml-auto d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary" onClick={(e) => handleAdd_Room(e)}>
                                                ยืนยัน
                                            </button>

                                            
                                        </div>
                                        <div className="col-lg-6 ml-auto">
                                            <button type="submit" className="btn btn-warning" onClick={() => navigate('/all_meeting_room')}>
                                                กลับ
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_meeting_room