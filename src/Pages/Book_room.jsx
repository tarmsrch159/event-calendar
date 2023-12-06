import React from 'react'
import Header from '../Components/Header'
import Header_start from '../Components/Header_start'
import Sidebar from '../Components/Sidebar'
import Calendar_1 from "react-calendar";
import { useState, useEffect } from "react";
import '../assets/calendar.css'
import axios from 'axios'


//Date-fns
import getDate from 'date-fns/getDate'
import getMonth from 'date-fns/getMonth'
import getYear from 'date-fns/getYear'

function Book_room({ obtaine_msg }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [meeting_Room, setMeeting_Room] = useState("")
    const [events, setEvents] = useState([]);
    const [mark_Event, setMark_Event] = useState([])
    const [day_m_y, setDay_M_Y] = useState({
        day: '',
        month: '',
        year: ''
    })
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')

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
    const [dp_meeting_Room, setDp_meeting_Room] = useState([])

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

    const Create_Event_Fun = async () => {
        if (selectedDate && eventName) {
            const newEvent = {
                id_meeting: new Date().getTime(),
                date: selectedDate,
                title: eventName,
                meeting_Room: meeting_Room,
                name: name,
                lastname: lastname
            };
            setEvents([...events, newEvent]);
            setSelectedDate(null);
            setEventName("");
            setSelectedDate(newEvent.date);

            try {

                const response = await axios.post('http://localhost:7000/book_room', newEvent)
                console.log(response.data)
                if (response.data.message == 'Room Booked') {
                    alert('ห้องประชุมถูกจองเรียบร้อย')
                    window.location.reload(false);
                }
            } catch (error) {
                console.error('Error:', error);
            }

        }



    };

    const Update_Event_Fun = (eventId, newName) => {
        const updated_Events = events.map((event) => {
            if (event.id_meeting === eventId) {
                return {
                    ...event,
                    title: newName,
                };
            }
            return event;
        });
        setEvents(updated_Events);
    };

    const Delete_Event_Fun = (eventId) => {
        const updated_Events = events.filter((event) => event.id_meeting !== eventId);
        setEvents(updated_Events);
    };

    useEffect(() => {
        axios.get('http://localhost:7000/all_meeting_room').then((res) => {
            setDp_meeting_Room(res.data)
        })

        axios.get('http://localhost:7000/mark_event').then((res) => {
            setMark_Event(res.data)
        })
    }, [])

    const map_event = mark_Event.map((res) => {
        const dt = new Date(res.date)
        //Change date in database as date for convert to string
        return {
            id: res.id,
            id_meeting: res.id_meeting,
            event: res.event,
            room_name: res.room_name,
            date: dt
        }
    })

    return (
        <>
            < Header_start />
            < Header obtaine_msg={obtaine_msg} />
            < Sidebar />
            <div className="content-body">
                {/* <h1> GeeksforGeeks Calendar Application </h1> */}
                <div className="container">
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
                    <div className="event-container">
                        {" "}
                        <div className="card">
                            <div className="card-body">
                                <h2> จองห้องประชุม </h2>{" "}
                                <h4>(คลิกเลือกวันที่ เพื่อจองห้องประชุม)</h4>


                                {selectedDate && (
                                    <div className="event-form">
                                        <p style={{ color: 'black' }}>
                                            {" "}
                                            วันที่: {day_m_y.day} {m_th} {day_m_y.year}{" "}
                                        </p>{" "}
                                        <div className="row">
                                            <div className="col-6">
                                                <input
                                                    type="text"
                                                    className="form-control input-default"
                                                    placeholder="วาระการประชุม"
                                                    value={eventName}
                                                    onChange={Event_Data_Update}
                                                />
                                            </div>

                                            <div className="col-6">
                                                <select className="form-control" onChange={(e) => setMeeting_Room(e.target.value)} aria-label="Default select example">
                                                    <option select="">ห้องที่ประชุม</option>
                                                    {dp_meeting_Room.map((items, index) => {
                                                        return (
                                                            <option value={items.room_name} key={index}>{items.room_name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>

                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>ลงชื่อบุคคลจองห้องประชุม</h5>
                                                <input
                                                    type="text"
                                                    className="form-control input-default"
                                                    placeholder="ชื่อ"
                                                    onChange={(e) => setName(e.target.value)}
                                                />

                                            </div>

                                            <div className="col-6">
                                                <h5>...</h5>
                                                <input
                                                    type="text"
                                                    className="form-control input-default"
                                                    placeholder="นามสกุล"
                                                    onChange={(e) => setLastname(e.target.value)}
                                                />

                                            </div>
                                        </div>


                                        {/* <button
                                            className="btn btn-primary"
                                            onClick={Create_Event_Fun}
                                        >
                                            จองห้องประชุม{" "}
                                        </button>{" "} */}

                                        <button type="button" onClick={Create_Event_Fun} className="btn mt-2 btn-success">
                                            จองห้องประชุม{" "}
                                            <span className="btn-icon-right">
                                                <i className="fa fa-check" />
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>



                        {/* {events.length > 0 && selectedDate && (
                            <div className="event-list">
                                <h2> My Created Event List </h2>{" "}
                                <div className="event-cards">
                                    {" "}
                                    {events.map((event) =>
                                        event.date.toDateString() ===
                                            selectedDate.toDateString() ? (
                                            <div
                                                key={event.id_meeting}
                                                className="event-card"
                                            >
                                                <div className="event-card-header">
                                                    <span className="event-date">
                                                        {" "}
                                                        {day_m_y.day} {m_th} {day_m_y.year}{" "}
                                                    </span>{" "}
                                                    <div className="event-actions">
                                                        <button
                                                            className="update-btn"
                                                            onClick={() =>
                                                                Update_Event_Fun(
                                                                    event.id_meeting,
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
                                                                    event.id_meeting,
                                                                )
                                                            }
                                                        >
                                                            Delete Event{" "}
                                                        </button>{" "}
                                                    </div>{" "}
                                                </div>{" "}
                                                <div className="event-card-body">
                                                    <p className="event-title">
                                                        {" "}
                                                        {event.title}{" "}
                                                    </p>{" "}

                                                    <p className="event-title">
                                                        {event.meeting_Room}
                                                    </p>
                                                </div>{" "}
                                            </div>
                                        ) : null,
                                    )}{" "}
                                </div>{" "}
                            </div>
                        )}{" "} */}
                    </div>{" "}
                </div>{" "}
            </div>
        </>
    )
}

export default Book_room