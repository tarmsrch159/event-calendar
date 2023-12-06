import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Header_start from '../Components/Header_start'
import Sidebar from '../Components/Sidebar'
import axios from 'axios'
function All_meeting_room({ obtaine_msg }) {
    const [all_Room, setAll_Room] = useState([])

    useEffect(() => {
        axios.get('http://localhost:7000/all_meeting_room').then((res) => {
            setAll_Room(res.data)
        })
    }, [])

    console.log(all_Room)
    return (
        <>
            < Header_start />
            < Header obtaine_msg={obtaine_msg} />
            < Sidebar />
            <div className="content-body">
                <div className="container-fluid mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h3>รายละเอียดห้องประชุม</h3>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>ลำดับ</th>
                                            <th>เลขที่ห้องประชุม</th>
                                            <th>ชื่อห้องประชุม</th>
                                            <th>แสดงรายละเอียด</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {all_Room.map((items) => {
                                            return <>
                                                <tr>
                                                    <td>{items.id}</td>
                                                    <td>{items.room_id}</td>
                                                    <td>{items.room_name}</td>
                                                    <td>x</td>
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