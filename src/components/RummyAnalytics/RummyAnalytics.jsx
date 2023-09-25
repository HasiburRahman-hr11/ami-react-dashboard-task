import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BsCalendar4 } from "react-icons/bs";

const styles = {
  filterBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #E7E3F3",
    paddingLeft: "10px",
    borderRadius: "7px",
    width: "max-content",
    marginLeft: { xs: "0", sm: "auto" },
  },
};

const RummyAnalytics = ({ dateFilter, setDateFilter, rummYData }) => {
  const handleFilterChange = (event) => {
    setDateFilter(event.target.value);
  };
  return (
    <Box component="div" className="rummy-analytics-section">
      <Grid
        className="section-header"
        container
        spacing={4}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "3rem",
        }}
      >
        <Grid item xs={12} sm={8}>
          <Typography
            variant="h3"
            component="h3"
            className="section-title"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            Rummy App Analytics
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className="filter-box" sx={styles.filterBox}>
            <span className="filter-icon">
              <BsCalendar4 style={{ fontSize: "1.5rem", color: "#D3CFE2" }} />
            </span>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={dateFilter}
                label="Age"
                onChange={handleFilterChange}
                sx={{ fontSize: "1.4rem" }}
              >
                <MenuItem value="today" sx={{ fontSize: "1.4rem" }}>
                  Today
                </MenuItem>
                <MenuItem value="yesterday" sx={{ fontSize: "1.4rem" }}>
                  Yesterday
                </MenuItem>
                <MenuItem value="thisWeek" sx={{ fontSize: "1.4rem" }}>
                  This Week
                </MenuItem>
                <MenuItem value="thisMonth" sx={{ fontSize: "1.4rem" }}>
                  This Month
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Box
        component="ul"
        className="rummy-analytics-list"
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Box component="li" sx={{ backgroundColor: "#FFECC0" }}>
          <Box component="div">
            <Typography variant="p" component="p">
              Total <br /> Users
            </Typography>
            <Typography variant="h4" component="h4">
              {rummYData.totalUsers}
            </Typography>
          </Box>
        </Box>
        <Box component="li" sx={{ backgroundColor: "#FFDCE8" }}>
          <Box component="div">
            <Typography variant="p" component="p">
              Total <br />
              Marketplace Listing
            </Typography>
            <Typography variant="h4" component="h4">
              {rummYData.totalMarketPlace}
            </Typography>
          </Box>
        </Box>
        <Box component="li" sx={{ backgroundColor: "#D3F3E2" }}>
          <Box component="div">
            <Typography variant="p" component="p">
              Total <br />
              Rental listing
            </Typography>
            <Typography variant="h4" component="h4">
              {rummYData.totalMarketPlace}
            </Typography>
          </Box>
        </Box>
        <Box component="li" sx={{ backgroundColor: "#D9CAFF" }}>
          <Box component="div">
            <Typography variant="p" component="p">
              total <br />
              transaction amount
            </Typography>
            <Typography variant="h4" component="h4">
              {rummYData.totalTransaction}
            </Typography>
          </Box>
        </Box>
        <Box component="li" sx={{ backgroundColor: "#B5E9F9" }}>
          <Box component="div">
            <Typography variant="p" component="p">
              Average <br /> Session Time
            </Typography>
            <Typography variant="h4" component="h4">
              {rummYData.avarageSession}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RummyAnalytics;
