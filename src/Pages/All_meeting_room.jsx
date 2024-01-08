import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Header_start from '../Components/Header_start'
import Sidebar from '../Components/Sidebar'
// import axios from 'axios'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'


function All_meeting_room({ obtaine_msg }) {
    const [all_Room, setAll_Room] = useState([])
    const [change_Box, setChange_Box] = useState(false)
    const navigate = useNavigate()
    const handleChangeBox = () => {
        setChange_Box(!change_Box)
    }

    const remove_room = async (id) => {
        try {
            if (confirm('คุณต้องการจะลบข้อมูลลใช่หรือไม่ ?')) {
                await axios.delete('/remove_room/' + id).then((res) => {

                    if (res.data.status == true) {
                        alert('ลบข้อมูลเรียบร้อย')
                        location.reload()
                    } else {
                        alert('เกิดช้อผิดพลาด')
                    }
                })
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    const handleDataChange = (id, type, value) => {
        setAll_Room((prevData) => {
            return prevData.map((data) => {
                if (data.id == id) {
                    return {
                        ...data,
                        [type]: value
                    }
                }
                return data
            })
        })
    }

    const newData = all_Room.map((data) => {
        return {
            id: data.id,
            room_id: data.room_id,
            room_name: data.room_name
        }
    })

    const UpdateData = async () => {
        try {
            await axios.put('/update_meetingRoom', newData)
                .then((res) => {
                    console.log(res)
                    if (res.status == 200) {
                        alert('บันทึกข้อมูลเรียบร้อย')
                        location.reload()
                    }
                })
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        axios.get('/all_meeting_room').then((res) => {
            setAll_Room(res.data)
        })
    }, [])

    console.log(newData)
    return (
        <>
            < Header_start />
            < Header obtaine_msg={obtaine_msg} />
            < Sidebar />
            <div className="content-body">
                <div className="container-fluid mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">

                                <div className="col-6 d-flex justify-content-around ">
                                <h3 >รายละเอียดห้องประชุม</h3>

                                    <button className='btn btn-primary' onClick={() => navigate('/protectRoute/add_meeting_room')}>เพิ่มห้องประชุม</button>
                                    <button className='btn btn-primary' onClick={handleChangeBox}>แก้ไขหลายรายการ</button>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    {change_Box
                                        ? <>
                                            <button className='btn btn-success' onClick={UpdateData}>บันทึกข้อมูล</button>
                                        </>
                                        : null}
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-bordered verticle-middle">
                                    <thead>
                                        <tr style={{ textAlign: 'center' }}>
                                            <th>ลำดับ</th>
                                            <th>เลขที่ห้องประชุม</th>
                                            <th>ชื่อห้องประชุม</th>
                                            {/* <th>แสดงรายละเอียด</th> */}
                                            <th>-</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {all_Room.map((items, index) => {
                                            return <>
                                                <tr key={index} style={{ textAlign: 'center' }}>
                                                    {change_Box
                                                        ? <>
                                                            <td>{items.id}</td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    className="form-control input-default"
                                                                    placeholder={items.room_id}
                                                                    onChange={(e) => handleDataChange(items.id, 'room_id', e.target.value)}
                                                                />

                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    className="form-control input-default"
                                                                    placeholder={items.room_name}
                                                                    onChange={(e) => handleDataChange(items.id, 'room_name', e.target.value)}
                                                                />
                                                            </td>
                                                        </>
                                                        : <>
                                                            <td>{items.id}</td>
                                                            <td>{items.room_id}</td>
                                                            <td>{items.room_name}</td>
                                                        </>}

                                                    {/* <td></td> */}

                                                    <td >

                                                        <button type="button" className="btn mb-1 btn-danger" onClick={() => remove_room(items.id)}>
                                                            ลบข้อมูล{" "}
                                                            <span className="btn-icon-right">
                                                                <i className="fa fa-close" />
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default All_meeting_room