import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
  ulStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    "& li:nth-child(1) .topCatIcon": { borderColor: "#E2892F" },
    "& li:nth-child(1) h5": { backgroundColor: "#FFECC0" },
    "& li:nth-child(2) .topCatIcon": { borderColor: "#F75864" },
    "& li:nth-child(2) h5": { backgroundColor: "#FFDCE8" },
    "& li:nth-child(3) .topCatIcon": { borderColor: "#007665" },
    "& li:nth-child(3) h5": { backgroundColor: "#D3F3E2" },
  },
  listStyle: {
    backgroundColor: "#F6F4FD",
    padding: "3rem 1rem",
    borderRadius: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem",
    width: "31%",
    alignItems: 'center',
    "@media (max-width: 600px)": {
      width: "100%",
      flexDirection: 'row',
      justifyContent:'space-between',
      flexWrap:'wrap',
      padding: '1.5rem 2rem'
    },
  },
  iconStyle: {
    width: "6rem",
    height: "6rem",
    borderRadius: "7px",
    border: "1px solid",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      marginLeft:'0',
      marginRight: '1rem'
    },
  },
  titleStyle: {
    fontSize: "2.5rem",
    color: "#3E3879",
    fontFamily: "Noir Pro",
    padding: "1.1rem 3rem",
    display: "inline-block",
    borderRadius: "1rem",
    width: 'max-content',
    "@media (max-width: 600px)":{
      padding: '1rem 2rem',
      fontSize: '2rem',
      borderRadius: '0.5rem'
    }
  },
  peraStyle: {
    color: "#3E3879",
    fontSize: "1.4rem",
    fontFamily: "Noir Pro",
    margin: "4rem 0",
    "@media (max-width: 600px)":{
      margin: '1rem 1rem'
    }
  },
};

const TopCategories = ({ rummYData }) => {
  return (
    <Box component="div">
      <Typography variant="h3" component="h3" className="section-title">
        Top 3 Categories
      </Typography>
      <Box component="ul" sx={styles.ulStyle}>
        {rummYData?.topThreeCategories?.map((item) => (
          <Box component="li" sx={styles.listStyle}>
            <Box className="topCatIcon" sx={styles.iconStyle}>
              <img src={item.icon} alt="" />
            </Box>

            <Typography variant="p" component="p" sx={styles.peraStyle}>
              {item.title}
            </Typography>

            <Typography variant="h5" component="h5" sx={styles.titleStyle}>
              {item.amount}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopCategories;
