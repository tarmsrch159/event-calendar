import React from 'react'
import Header from '../Components/Header'
import Header_start from '../Components/Header_start'
import Sidebar from '../Components/Sidebar'
import Calendar_1 from "react-calendar";
import { useState, useEffect } from "react";
import axios from 'axios'
import '../assets/calendar.css'

import getDate from 'date-fns/getDate'
import getMonth from 'date-fns/getMonth'
import getYear from 'date-fns/getYear'

function Calendar({ obtaine_msg }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]); //Data from database
    const [mark_Event, setMark_Event] = useState([])
    const [show_Modal, setShow_Modal] = useState()
    const [room, setRoom] = useState([])
    const [event_Change, setEvent_Change] = useState('')

    
    const [event_Room, setEvent_Room] = useState("")



    const [day_m_y, setDay_M_Y] = useState({
        day: '',
        month: '',
        year: ''
    })

    const j_month = [
        {
            id: '1',
            month_n: 'มกราคม'
        },
        {
            id: '2',
            month_n: 'กุมภาพันธ์'
        },
        {
            id: '3',
            month_n: 'มีนาคม'
        },
        {
            id: '4',
            month_n: 'เมษายน'
        },
        {
            id: '5',
            month_n: 'พฤษภาคม'
        },
        {
            id: '6',
            month_n: 'มิถุนายน'
        },
        {
            id: '7',
            month_n: 'กรกฎาคม'
        },
        {
            id: '8',
            month_n: 'สิงหาคม'
        },
        {
            id: '9',
            month_n: 'กันยายน'
        },
        {
            id: '10',
            month_n: 'ตุลาคม'
        },
        {
            id: '11',
            month_n: 'พฤศจิกายน'
        },
        {
            id: '12',
            month_n: 'ธันวาคม'
        },
    ]
    const [m_th, setM_th] = useState('')

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);

        j_month.map((val) => {
            return <>
                {getMonth(new Date(date)) + 1 == val.id
                    ? setM_th(val.month_n)
                    : undefined}
            </>
        })

        setDay_M_Y({
            day: getDate(new Date(date)),
            month: m_th,
            year: getYear(new Date(date)) + 543
        })
    };

    const Event_Data_Update = (event) => {
        setEventName(event.target.value);
    };

    const Create_Event_Fun = () => {
        if (selectedDate && eventName) {
            const newEvent = {
                id: new Date().getTime(),
                date: selectedDate,
                title: eventName,
            };
            setEvents([...events, newEvent]);
            setSelectedDate(null);
            setEventName("");
            setSelectedDate(newEvent.date);
        }
    };

    const Update_Event_Fun = (eventId, event_name, event_room) => {
        setShow_Modal(true)
        if (event_name === '' || event_room === '' ) {
            return false
        } else {
            try {
                axios.put(`http://localhost:7000/update_book_room`, {
                    id: eventId,
                    event: event_name,
                    room_name: event_room,
                }).then((res) => {
                    if(res.data.status === true){
                        alert('แก้ไขข้อมูลเรียบร้อย')
                        location.reload()
                    }else{
                        alert('เกิดข้อผิดพลาด')
                    }
                })

            } catch (error) {
                console.log(error)
            }
        }

    };

    const Delete_Event_Fun = (eventId) => {
        const updated_Events = mark_Event.filter((event) => event.id !== eventId);
        if (confirm('ต้องการจะลบข้อมูลใช่หรือไม่') == true) {
            axios.delete(`http://localhost:7000/remove_event/${eventId}`).then((res) => {
                if (res.data.status == true) {
                    setMark_Event(updated_Events);
                    alert('ลบข้อมูลเรียบร้อย')
                    window.location.reload(false)
                } else {
                    alert('เกิดข้อผิดพลาด')
                }
            })
        } else {
            return false
        }

    };


    const map_event = mark_Event.map((res) => {
        const dt = new Date(res.date)
        //Change date in database as date for convert to string
        return {
            id: res.id,
            id_meeting: res.id_meeting,
            event: res.event,
            room_name: res.room_name,
            date: dt,
            name:res.name,
            lastname: res.lastname
        }
    })

    useEffect(() => {
        axios.get('http://localhost:7000/mark_event').then((res) => {
            setMark_Event(res.data)
        })

        axios.get('http://localhost:7000/all_meeting_room').then((res) => {
            setRoom(res.data)
        })
    }, [])

    console.log(map_event)
    return (
        <>
            < Header_start />
            < Header obtaine_msg={obtaine_msg} />
            < Sidebar />
            <div className="content-body">
                <div className="container-fluid mt-3">

                    <div className="row">
                        <div className="col-2 col-sm6"></div>
                        <div className="col-8 col-sm6">
                            <div className="card">
                                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <h3 className='mb-4'>ดูรายการจองห้องประชุม (ตรวจสอบโดยการคลิก วันที่)</h3>
                                    <div className="calendar-container">
                                        <Calendar_1
                                            value={selectedDate}
                                            onClickDay={Date_Click_Fun}
                                            tileClassName={({ date }) =>
                                                selectedDate &&
                                                    date.toDateString() === selectedDate.toDateString()
                                                    ? "selected"
                                                    : map_event.some(
                                                        (event) =>
                                                            event.date.toDateString() ===
                                                            date.toDateString(),
                                                    )
                                                        ? "event-marked"
                                                        : ""
                                            }

                                        />{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 col-sm6"></div>
                    </div>



                    <div className="row mt-3">
                        <div className="col-2 col-sm6">
                        </div>

                        <div className="col-8 col-sm6">

                            {" "}
                            {selectedDate && (
                                <div className="card">
                                    <div className="card-body">

                                        <div className="event-container">
                                            <div className="event-form">
                                                <h2 style={{ color: 'black' }}> รายการจองห้องประชุม </h2>{" "}
                                                <p style={{ color: 'black' }}>
                                                    {" "}
                                                    วันที่: {day_m_y.day} {m_th} {day_m_y.year}{" "}
                                                </p>{" "}
                                                {map_event.map((items) => {
                                                    return <>
                                                        {selectedDate.toDateString() == items.date.toDateString()
                                                            ? <>
                                                                {show_Modal
                                                                    ? <>
                                                                        <h4>ห้องประชุม: <span>{items.room_name}</span></h4>
                                                                        <h4>วาระการประชุม: <span>{items.event}</span></h4>
                                                                        <hr />
                                                                        <h4>ชื่อ-นามสกุล (ผู้จองห้องประชุม) : <span>{items.name} {items.lastname}</span></h4>
                                                                        <hr />
                                                                        <div style={{ display: 'flex' }}>
                                                                            <h5 style={{ marginRight: '30px' }}>กรุณากรอก วาระการประชุม:</h5>
                                                                            <input className='form-control input-default' type="text" onChange={(e) => setEvent_Change(e.target.value)} />
                                                                        </div>
                                                                        <div style={{ display: 'flex', marginTop: '25px' }}>
                                                                            <h5 style={{ marginRight: '75px' }}>เลือกห้องประชุม:</h5>
                                                                            <select onChange={(e) => setEvent_Room(e.target.value)} className="form-control" aria-label="Default select example">
                                                                                <option select="">ห้องที่ประชุม</option>
                                                                                {room.map((res) => {
                                                                                    return <option value={res.room_name}>{res.room_name}</option>
                                                                                })}
                                                                            </select>
                                                                        </div>

                                                                        <p className="event-title">
                                                                            {" "}
                                                                            {items.title}{" "}
                                                                        </p>{" "}
                                                                    </>
                                                                    : <>
                                                                        <h4>ห้องประชุม: <span>{items.room_name}</span></h4>
                                                                        <h4>วาระการประชุม: <span>{items.event}</span></h4>
                                                                        <hr />
                                                                        <h4>ชื่อ-นามสกุล (ผู้จองห้องประชุม) : <span>{items.name} {items.lastname}</span></h4>
                                                                    </>}


                                                                <div>
                                                                    <button className='btn btn-success mr-3 ' onClick={() => Update_Event_Fun(items.id, event_Change, event_Room)}>แก้ไขการประชุม</button>

                                                                    <button className='btn btn-danger ' onClick={() => Delete_Event_Fun(items.id)}>ลบการประชุม</button>
                                                                </div>
                                                            </>
                                                            : null
                                                        }
                                                    </>
                                                })}
                                            </div>

                                        </div>


                                        {/* <div>
                                            <img src="https://static.wixstatic.com/media/b6f9ae_d1e7bd6b4e1e4c448695432724ce4d55~mv2.jpg/v1/fill/w_3840,h_2160,al_c,q_90/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87Kbank.JPG" class="img-fluid" alt="..." />
                                        </div> */}

                                    </div>
                                </div>
                            )}


                            {events.length > 0 && selectedDate && (
                                <div className="event-list">
                                    <h2> รายการจองห้องประชุม </h2>{" "}
                                    <div className="event-cards">
                                        {" "}
                                        {events.map((event) =>
                                            event.date.toDateString() ===
                                                selectedDate.toDateString() ? (
                                                <div
                                                    key={event.id}
                                                    className="event-card"
                                                >
                                                    {/* <div className="event-card-header">
                                                    <span className="event-date">
                                                        {" "}
                                                        {event.date.toDateString()}{" "}
                                                    </span>{" "}
                                                    <div className="event-actions">
                                                        <button
                                                            className="update-btn"
                                                            onClick={() =>
                                                                Update_Event_Fun(
                                                                    event.id,
                                                                    prompt(
                                                                        "ENTER NEW TITLE",
                                                                    ),
                                                                )
                                                            }
                                                        >
                                                            Update Event{" "}
                                                        </button>{" "}
                                                        <button
                                                            className="delete-btn"
                                                            onClick={() =>
                                                                Delete_Event_Fun(
                                                                    event.id,
                                                                )
                                                            }
                                                        >
                                                            Delete Event{" "}
                                                        </button>{" "}
                                                    </div>{" "}
                                                </div>{" "} */}
                                                    <div className="event-card-body">
                                                        <h4>ห้องประชุม: <span>xxx</span></h4>
                                                        <h4>วันที่ขอใช้: <span>xxx</span></h4>
                                                        <h4>ห้องประชุม: <span>xxx</span></h4>
                                                        <p className="event-title">
                                                            {" "}
                                                            {event.title}{" "}
                                                        </p>{" "}
                                                    </div>{" "}
                                                </div>
                                            ) : null,
                                        )}{" "}
                                    </div>{" "}
                                </div>
                            )}{" "}

                        </div>
                        <div className="col-2 col-sm6"></div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Calendar