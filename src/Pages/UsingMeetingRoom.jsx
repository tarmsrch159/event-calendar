import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Header_start from '../Components/Header_start'
import Sidebar from '../Components/Sidebar'
import axios from '../api/axios'
function UsingMeetingRoom({ obtaine_msg }) {

    const [dataBookRoom, setDataBookRoom] = useState([])
    let count = 1
    useEffect(  () => {
        try {
            axios.get('/using_meeting_room').then((res) => {
                setDataBookRoom(res.data)
            })
        } catch (error) {
            alert(error)
        }
    }, [])
    return (
        <div>
            < Header_start />
            < Header obtaine_msg={obtaine_msg} />
            < Sidebar />
            <div className="content-body">
                <div className='container-fluid'>
                    <div className="row justify-content-center">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h3>การใช้ห้องประชุม</h3>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover mx-auto">
                                        <thead>
                                            <tr>
                                                <th>ลำดับ</th>
                                                <th>หัวข้อการประชุม</th>
                                                <th>ห้องในการใช้ประชุม</th>
                                                <th>ชื่อ-นามสกุล และ แผนก ผู้ที่จอง</th>
                                                <th>วันและเวลาที่เริ่มการประชุม</th>
                                                <th>วันและเวลาที่จบการประชุม</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {dataBookRoom.map((items, index) => {
                                            const startTime = new Date(items.startTime).toLocaleString('en-US')
                                            const endTime = new Date(items.endTime).toLocaleString('en-US')
                                            return (
                                                <tr key={index}>
                                                    <th>{count++}</th>
                                                    <td>{items.event}</td>
                                                    <td>{items.room_name}</td>
                                                    <td>{items.name} {items.lastname} {items.department}</td>
                                                    <td>{startTime}</td>
                                                    <td>{endTime}</td>
                                                </tr>
                                            )
                                           })}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        {/* <div className="col-sm-6">
                            asd
                        </div>
                        <div className="col-sm-6">
                            
                        </div> */}

                    </div>

                </div>
            </div>

        </div>
    )
}

export default UsingMeetingRoom