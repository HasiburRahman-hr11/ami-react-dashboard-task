import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RummyAnalytics from '../../components/RummyAnalytics/RummyAnalytics';


import {todaysData , yesterdayData, thisWeekData, thisMonthData} from '../../utils/dummy-data'
import TopUniversities from '../../components/TopUniversities/TopUniversities';
import TopSellers from '../../components/TopSellers/TopSellers';
import GenderRatio from '../../components/GenderRatio/GenderRatio';
import TopCategories from '../../components/TopCategories/TopCategories';
import TransactionDetails from '../../components/TransactionDetails/TransactionDetails';
const Home = () => {
    const [dateFilter , setDateFilter] = useState('today');
    const [rummYData , setRummyData] = useState({})
    useEffect(()=>{
        const fetchData = () =>{
            if(dateFilter === 'today'){
                setRummyData({...todaysData});
            }
            if(dateFilter === 'yesterday'){
                setRummyData({...yesterdayData})
            }
            if(dateFilter === 'yesterday'){
                setRummyData({...yesterdayData})
            }
            if(dateFilter === 'thisWeek'){
                setRummyData({...thisWeekData})
            }
            if(dateFilter === 'thisMonth'){
                setRummyData({...thisMonthData})
            }
        }
        fetchData();
    },[dateFilter])
  return (
    <div className='main'>
    <Sidebar/>
    <div className="content-wrapper">
        <Box sx={{
            backgroundColor:'#fff',
            padding:'5rem 4rem',
            borderRadius: '3rem'
        }}>
            <RummyAnalytics dateFilter={dateFilter} setDateFilter={setDateFilter} rummYData={rummYData} />

            <Box sx={{marginTop: '7rem', display:'flex', justifyContent:'space-between'}}>
                <Box sx={{width: '50%', paddingRight: "2rem" }}>
                    <TopUniversities rummYData={rummYData} />
                </Box>
                <Box sx={{width: '50%', paddingLeft:'2rem', borderLeft:'1px solid #E7E3F3'}}>
                    <TopSellers rummYData={rummYData} />
                </Box>
            </Box>

            <Box sx={{marginTop: '7rem', display:'flex'}}>
                <Box sx={{width: '50%', padding: "2rem", border:'1px solid #E7E3F3', borderRadius: '10px' }}>
                    <GenderRatio rummYData={rummYData} />
                </Box>
                <Box sx={{width: '50%', paddingLeft:'2rem'}}>
                    <TopCategories rummYData={rummYData} />
                </Box>
            </Box>

            <TransactionDetails rummYData={rummYData} />
        </Box>
    </div>
    </div>
  )
}

export default Home;