import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const TopSellers = ({ rummYData }) => {
  return (
    <Box component="div">
      <Typography
        variant="h3"
        component="h3"
        className="section-title"
        sx={{ marginBottom: "3rem" }}
      >
        Top 5 Sellers
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
          <Box sx={{ width: "15%" }}>User</Box>
          <Box sx={{ width: "50%" }}>Email</Box>

          <Box sx={{ width: "10%", textAlign: "center" }}>ML</Box>
          <Box sx={{ width: "10%", textAlign: "center" }}>RL</Box>
          <Box sx={{ width: "15%", textAlign: "center" }}>Payout</Box>
        </Box>

        {rummYData?.topFiveSellers?.map((item) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
              backgroundColor: "#F6F4FD",
              padding: "1rem 0",
              paddingRight: "2rem",
              borderRadius: "7px",
              minHeight: "6.5rem",
              "& div": { fontSize: "1.6rem", color: "#3E3879" },
            }}
          >
            <Box sx={{ width: "15%", paddingLeft: "1.5rem" }}>
              <Avatar
                alt={item.name}
                src={item.profilePicture}
                sx={{ width: "3.5rem", height: "3.5rem" }}
              />
            </Box>
            <Box sx={{ width: "50%" }}>{item.email}</Box>
            <Box sx={{ width: "10%", textAlign: "center" }}>{item.marketListing}</Box>
            <Box sx={{ width: "10%", textAlign: "center" }}>{item.retailListing}</Box>
            <Box sx={{ width: "15%", textAlign: "center" }}>${item.payout}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopSellers;
