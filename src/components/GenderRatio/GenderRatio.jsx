import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Male", 30],
  ["Female", 60],
  ["Other", 10],
];

export const options = {
  pieHole: 0.4,
  is3D: false,
  colors: ["#1F145E", "#FB8DB3", "#566FFE"],
  legend: "none",
  chartArea: {
    left: "0%",
    top: "5%",
    width: "100%",
    height: "90%",
  },
};

const GenderRatio = ({rummYData}) => {
  return (
    <Box component="div">
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box component="div" sx={{ width: "35%" }}>
          <Typography
            variant="h3"
            component="h3"
            className="section-title"
            sx={{ marginBottom: "5rem" }}
          >
            Gender Ratio
          </Typography>
          <Box component="ul" sx={{ "& li": { marginBottom: "1rem" } }}>
            <Box
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
                color: "#485058",
              }}
            >
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#1F145E",
                  display: "inline-block",
                  marginRight: "10px",
                }}
              ></Box>
              Male
            </Box>
            <Box
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
                color: "#485058",
              }}
            >
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#FB8DB3",
                  display: "inline-block",
                  marginRight: "10px",
                }}
              ></Box>
              Female
            </Box>
            <Box
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
                color: "#485058",
              }}
            >
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#566FFE",
                  display: "inline-block",
                  marginRight: "10px",
                }}
              ></Box>
              Other
            </Box>
          </Box>
        </Box>
        <Box component="div" sx={{ width: "65%" }}>
          <Chart
            chartType="PieChart"
            width="100%"
            height="250px"
            data={rummYData.genderRatio}
            options={options}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GenderRatio;
