import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TopUniversities = ({ rummYData }) => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h3"
        className="section-title"
        sx={{ marginBottom: "3rem" }}
      >
        Top 5 Universities By User Count
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            paddingRight: "2rem",
            "& div": { fontSize: "1.4rem", color: "#646D72" },
          }}
        >
          <Box sx={{ width: "45%" }}>College Name</Box>
          <Box sx={{ width: "25%", textAlign: "center" }}>User Count</Box>
          <Box sx={{ width: "15%", textAlign: "center" }}>ML</Box>
          <Box sx={{ width: "15%", textAlign: "center" }}>RL</Box>
        </Box>
        {rummYData?.topFiveUniversities?.map((item) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
              backgroundColor: "#F6F4FD",
              padding: "1rem 0",
              paddingRight: "2rem",
              borderRadius: "7px",
              alignItems:'center',
              minHeight: '6.5rem',
              "& div": { fontSize: "1.6rem", color: "#3E3879" },
            }}
          >
            <Box sx={{ width: "45%", paddingLeft: "3.5rem" }}>
              {item.collegeName}
            </Box>
            <Box sx={{ width: "25%", textAlign: "center" }}>{item.users}</Box>
            <Box sx={{ width: "15%", textAlign: "center" }}>
              {item.marketListing}
            </Box>
            <Box sx={{ width: "15%", textAlign: "center" }}>
              {item.retailListing}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopUniversities;
