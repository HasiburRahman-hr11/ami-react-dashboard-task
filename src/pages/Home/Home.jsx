import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RummyAnalytics from "../../components/RummyAnalytics/RummyAnalytics";

import {
  todaysData,
  yesterdayData,
  thisWeekData,
  thisMonthData,
} from "../../utils/dummy-data";
import TopUniversities from "../../components/TopUniversities/TopUniversities";
import TopSellers from "../../components/TopSellers/TopSellers";
import GenderRatio from "../../components/GenderRatio/GenderRatio";
import TopCategories from "../../components/TopCategories/TopCategories";
import TransactionDetails from "../../components/TransactionDetails/TransactionDetails";
const Home = () => {
  const [dateFilter, setDateFilter] = useState("today");
  const [rummYData, setRummyData] = useState({});
  useEffect(() => {
    const fetchData = () => {
      if (dateFilter === "today") {
        setRummyData({ ...todaysData });
      }
      if (dateFilter === "yesterday") {
        setRummyData({ ...yesterdayData });
      }
      if (dateFilter === "yesterday") {
        setRummyData({ ...yesterdayData });
      }
      if (dateFilter === "thisWeek") {
        setRummyData({ ...thisWeekData });
      }
      if (dateFilter === "thisMonth") {
        setRummyData({ ...thisMonthData });
      }
    };
    fetchData();
  }, [dateFilter]);
  return (
    <div className="main">
      <Sidebar />
      <div className="content-wrapper">
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "5rem 4rem",
            borderRadius: "3rem",
          }}
        >
          <RummyAnalytics
            dateFilter={dateFilter}
            setDateFilter={setDateFilter}
            rummYData={rummYData}
          />

          <Box
            sx={{
              marginTop: "7rem",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                width: "50%",
                paddingRight: "2rem",
                "@media (max-width: 1199px)": {
                  width: "100%",
                  paddingRight: "0",
                },
              }}
            >
              <TopUniversities rummYData={rummYData} />
            </Box>
            <Box
              sx={{
                width: "50%",
                paddingLeft: "2rem",
                borderLeft: "1px solid #E7E3F3",
                "@media (max-width: 1199px)": {
                  width: "100%",
                  paddingLeft: "0",
                  borderLeft: "0",
                  marginTop: "5rem",
                },
              }}
            >
              <TopSellers rummYData={rummYData} />
            </Box>
          </Box>

          <Box sx={{ marginTop: "7rem", display: "flex", flexWrap: "wrap" }}>
            <Box
              sx={{
                width: "50%",
                padding: "2rem",
                border: "1px solid #E7E3F3",
                borderRadius: "10px",
                "@media (max-width: 1199px)": {
                  width: "100%",
                  marginBottom: "5rem",
                },
              }}
            >
              <GenderRatio rummYData={rummYData} />
            </Box>
            <Box
              sx={{
                width: "50%",
                paddingLeft: "2rem",
                "@media (max-width: 1199px)": {
                  width: "100%",
                  paddingLeft: "0",
                },
              }}
            >
              <TopCategories rummYData={rummYData} />
            </Box>
          </Box>

          <TransactionDetails rummYData={rummYData} />
        </Box>
      </div>
    </div>
  );
};

export default Home;
