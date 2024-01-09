import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import format from 'date-fns/format';
import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startOfWeek';
// import getDay from 'date-fns/getDay';
import { isWithinInterval, startOfDay, endOfDay, format, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import thLocale from 'date-fns/locale/th';



import ReactModal from 'react-modal';
import isValid from 'date-fns/isValid';
// import axios from 'axios'
import axios from '../api/axios'

//Css React-big-calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

//Alert
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




ReactModal.setAppElement('#root');

const thaiLocale = {
    ...thLocale,
    formatLongDate: { // ปรับแต่งรูปแบบวันที่
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    },
    header: { // ปรับแต่งข้อความ Header
        dayNames: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
        monthNames: [
            'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
            'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม',
        ],
    },
};


const locales = {
    'th-TH': thaiLocale,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,

});

localizer.formats.timeGutterFormat = 'HH:mm';
localizer.formats.eventTimeRangeFormat = ({ start, end }, culture, local) =>
    local.format(start, 'HH:mm', culture) + ' – ' + local.format(end, 'HH:mm', culture);




function TestCalendar2() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [view, setView] = useState('month');
    const [editStart, setEditStart] = useState('');
    const [editEnd, setEditEnd] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [draggedEvent, setDraggedEvent] = useState(null);
    //Alert
    const notify = () => toast("Wow so easy!");



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:7000/mark_event');
                const result = await response.json();

                setEvents(
                    result.map((res) => {
                        const start = new Date(res.startTime);
                        const end = new Date(res.endTime);

                        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
                            console.error('Invalid date');
                        } else {
                            // console.log('valid date', start)
                        }

                        return {
                            event_id: res.id,
                            title: res.event,
                            room_name: res.room_name,
                            name: res.name,
                            lastname: res.lastname,
                            tel: res.tel,
                            department: res.department,
                            start: start,
                            end: end,
                        };
                    })
                );
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    const handleNavigate = (date, view, action) => {
        if (view === 'month' && action === 'click') {
            // Handle navigation for day view
            setView('day');
        }
        // Add more conditions or logic based on your requirements
    };

    const updateStartEnd = (event_id) => {
        if (editStart == '' || editEnd == '') {
            toast.error('กรุณาเลือกวันและเวลา')
            return
        }
        const updateTime = {
            event_id: event_id,
            start: editStart,
            end: editEnd
        }

        //Put for updating data
        axios.put('/updateStartEnd', updateTime).then((res) => {
            location.reload()
        })
    }

    const handleSelectSlot = (slotInfo, event_id, name, lastname, room_name, tel, department) => {
        // setSelectedSlot({ start: slotInfo.start, end: slotInfo.end });
        setEditStart(slotInfo.start)
        setEditEnd(slotInfo.end)
        toast.info(`อัพเดตเวลา การจองห้องประชุม: ${slotInfo.start.toLocaleString()} - ${slotInfo.end.toLocaleString()}`, { autoClose: false })

    };


    const handleEventClick = (event) => {
        const optionsToastWarning = {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
            onClose: () => {
                setSelectedEvent(event);
                setIsModalOpen(true);
            }
        }

        const overlappingEvents = events.filter(
            (e) =>
                e.event_id !== event.event_id &&
                ((event.start >= e.start && event.start < e.end) ||
                    (event.end > e.start && event.end <= e.end) ||
                    (event.start <= e.start && event.end >= e.end))
        );

        if (overlappingEvents.length === 0) {
            setSelectedEvent(event);
            setIsModalOpen(true);
        } else {
            toast.warning(
                <div>
                    <div>
                        <span>หมายเหตุ: การประชุมได้มีการจองทับกัน กรุณาเลือกวันและเวลาในการประชุมใหม่</span>
                    </div>
                    <div className='mt-3'>
                        <button className='btn btn-success px-4'>OK</button>
                    </div>
                </div>, optionsToastWarning);

            // Handle overlapping events (e.g., show a warning)
        }
    };

    const eventStyleGetter = (event, start, end, isSelected) => {
        const overlappingEvents = events.filter(
            (e) =>
                e.event_id !== event.event_id &&
                ((event.start >= e.start && event.start < e.end) ||
                    (event.end > e.start && event.end <= e.end) ||
                    (event.start <= e.start && event.end >= e.end))
        );

        const isOverlapping = overlappingEvents.length > 0;

        return {
            style: {
                backgroundColor: isOverlapping ? 'red' : 'blue',
                borderRadius: '0px',
                opacity: 0.8,
                color: 'black',
                border: '0px',
                display: 'block'
            },
        }

    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const EventModal = ({ event, isOpen, onClose }) => {

        return (
            <ReactModal isOpen={isOpen} onRequestClose={onClose}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000
                    },
                    content: {
                        width: '80%',
                        margin: 'auto',
                        padding: '20px',
                        borderRadius: '8px',
                    },
                    '@media (max-width: 600px)': {
                        content: {
                            width: '100%'
                        }
                    }
                }}
            >
                {event ? (
                    <>
                        <div className='mb-5'>
                            <h2 style={{ textAlign: 'center' }}>เลือกการลงเวลาห้องประชุม <span><i className="icon-note menu-icon"></i></span></h2>
                            <h4>ห้องประชุม: <span>{event.room_name}</span></h4>
                            <h4>หัวข้อการประชุม: <span>{event.title}</span></h4>
                            <hr />
                            <h4>ชื่อ-นามสกุล (ผู้จองห้องประชุม) : <span>{event.name} {event.lastname}</span></h4>
                            <h4>เบอร์โทร (สำหรับติดต่อ) : <span>{event.tel}</span></h4>
                            <h4>หน่วยงาน : <span>{event.department}</span></h4>
                            <p>{event.start.toLocaleString()}</p>
                            {/* <h4>เริ่มการประชุม: {format(event.start, 'dd-MM-yyyy HH:mm:ss')}</h4>
                        <h4>สิ้นสุดการประชุม: {format(event.end, 'dd-MM-yyyy HH:mm:ss')}</h4> */}
                        </div>
                        <hr />
                        <Calendar
                            localizer={localizer}
                            // events={[{
                            //     start: new Date(event.start),
                            //     end: new Date(event.end)
                            // }
                            // ]}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                            onSelectEvent={handleEventClick}
                            selectable
                            defaultView={'day'}
                            onNavigate={handleNavigate}
                            // onSelecting={handleSelecting}
                            onSelectSlot={(slotInfo) => handleSelectSlot(slotInfo, event.event_id, event.name, event.lastname, event.room_name, event.tel, event.department)}
                            eventPropGetter={eventStyleGetter}
                            defaultDate={event.start}
                        // onSelecting={handleSelecting}


                        />
                    </>
                ) : (
                    <>
                        <h2>No data</h2>
                        <p>Start: No data</p>
                        <p>End: No data</p>
                    </>
                )}
                <button className="btn btn-danger mt-3" onClick={onClose}>
                    Cancel
                </button>
                <button className="btn btn-success mt-3 ml-3" onClick={() => updateStartEnd(event.event_id)}>
                    Confirm
                </button>
            </ReactModal>
        );
    };


    return (
        <div>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={handleEventClick}
                selectable
                onView={(view) => console.log('Current view:', view)}
                onNavigate={handleNavigate}
                onSelectSlot={handleSelectSlot}
                eventPropGetter={eventStyleGetter}
            />
            <EventModal
                event={selectedEvent}
                isOpen={isModalOpen}
                onClose={handleModalClose}
            />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                newestOnTop={false}
                hideProgressBar
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
                transition:Zoom
            />

        </div>
    );
}

export default TestCalendar2;
