import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Header_start from '../Components/Header_start'
import Sidebar from '../Components/Sidebar'
import axios from '../api/axios'

//Chart_JS
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)



function DashboardRoom({ obtaine_msg }) {
    const [room, setRoom] = useState([])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'แผนผังการใช้ห้องประะชุมแต่ละห้อง'
            }
        }
    }
    
    
   
    // const labels = ['ห้องxxx', 'February', 'March', 'April', 'May', 'June', 'July'];

    const fetchRoom = room.map((res) => {
        return res
    })
    
    const data = {
        labels: fetchRoom.map((res) => res.room_name), // Use fetchRoom array instead of hardcoded labels
        datasets: [
            // {
            //     label: 'Dataset 1',
            //     data: fetchRoom.map((res) => res.room_count),
            //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
            // },
            {
                label: 'การใช้ห้องประชุมแต่ละห้อง',
                data: fetchRoom.map((res) => res.room_count),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    useEffect(() => {
         axios.get('/count_using_room').then((res) => {
            setRoom(res.data)
            // res.data.map((items) => {
            //     console.log(items)
            // })
        })

        
    }, [])
    
    console.log(fetchRoom)
    // console.log(labels)

    return (
        <div>
            < Header_start />
            < Header obtaine_msg={obtaine_msg} />
            < Sidebar />
            <div className="content-body">
                <div className="container-fluid mt-3">

                    <div className="card">
                        <div className="card-body">
                            <Bar options={options} data={data} />
                        </div>
                    </div>




                </div>
            </div >
        </div>
    )
}

export default DashboardRoom