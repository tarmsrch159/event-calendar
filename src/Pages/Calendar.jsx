import React from 'react'
import Header from '../Components/Header'
import Header_start from '../Components/Header_start'
import Sidebar from '../Components/Sidebar'
import Calendar_1 from "react-calendar";
import { useState, useEffect } from "react";
// import axios from 'axios'
import axios from '../api/axios'
// import '../assets/calendar.css'

import getDate from 'date-fns/getDate'
import getMonth from 'date-fns/getMonth'
import getYear from 'date-fns/getYear'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

import TestCalendar2 from './Test_calendar_2';
function Calendar({ obtaine_msg }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]); //Data from database
    const [mark_Event, setMark_Event] = useState([])
    const [show_Modal, setShow_Modal] = useState(false)
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

    //time
    const [timeValue, setTimeValue] = useState(dayjs())

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


    function handleModal() {
        setShow_Modal(!show_Modal)

    }

    const Update_Event_Fun = (eventId, event_name, event_room) => {
        if (event_name === '' || event_room === '') {
            alert('กรุณากรอกรายะเอียดให้ครบถ้วน')
            // location.reload()
            return false
        } else {
            try {
                axios.put(`/update_book_room`, {
                    id: eventId,
                    event: event_name,
                    room_name: event_room,
                }).then((res) => {
                    if (res.data.status === true) {
                        alert('แก้ไขข้อมูลเรียบร้อย')
                        location.reload()
                    } else {
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
            axios.delete(`/remove_event/${eventId}`).then((res) => {
                if (res.data.status == true) {
                    setMark_Event(updated_Events);
                    alert('ลบข้อมูลเรียบร้อย')
                    location.reload()
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
        const startTime = new Date(res.startTime)
        const endTime = new Date(res.endTime)
        //Change date in database as date for convert to string
        return {
            id: res.id,
            id_meeting: res.id_meeting,
            event: res.event,
            room_name: res.room_name,
            date: dt,
            name: res.name,
            lastname: res.lastname,
            tel: res.tel,
            department: res.department,
            dbStartTime: startTime,
            dbEndTime: endTime
        }
    })

    useEffect(() => {
        axios.get('/mark_event').then((res) => {
            setMark_Event(res.data)
        })

        axios.get('/all_meeting_room').then((res) => {
            setRoom(res.data)
        })

    }, [eventName, event_Room])

    console.log()
    return (
        <>
            < Header_start />
            < Header obtaine_msg={obtaine_msg} />
            < Sidebar />
            <div className="content-body">
                <div className="container-fluid mt-3">

                    <div className="card">
                        <div className="card-body">
                        <h3 className='mb-4' style={{ textAlign: 'center' }}>ดูรายการจองห้องประชุม (ตรวจสอบโดยการคลิก วันที่)</h3>
                        < TestCalendar2 />

                        </div>
                    </div>


                </div>
            </div >

        </>

    )
}

export default Calendar