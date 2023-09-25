import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
  listStyle: {
    width: "31.5%",
    padding: "3rem 3rem",
    borderRadius: "1rem",
    "& p, & h5": { color: "#3E3879" },
    "@media (max-width: 600px)":{
      width:'100%',
      marginBottom:'1.5rem',
      padding:'2rem 2rem',
      display:'flex',
      justifyContent: "space-between",
      flexWrap:'wrap',
      alignItems: 'center',
      borderRadius: '7px'
    }
  },
  peraSTyle: {
    fontSize: "1.4rem",
    fontFamily: "Noir Pro",
    textTransform: "capitalize",
  },
  headingStyle: {
    fontSize: "3rem",
    fontWeight: "500",
    fontFamily: "Noir Pro",
    marginTop: "0.5rem",
    "@media (max-width: 600px)":{
      marginTop: '0'
    }
  },
};

const TransactionDetails = ({ rummYData }) => {
  return (
    <Box component="div" sx={{ marginTop: "5rem" }}>
      <Typography variant="h3" component="h3" className="section-title">
        Transaction Details
      </Typography>
      <Box
        component="ul"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
          flexWrap:'wrap'
        }}
      >
        <Box
          component="li"
          sx={{ ...styles.listStyle, backgroundColor: "#FFE3C9" }}
        >
          <Typography variant="p" component="p" sx={styles.peraSTyle}>
            Total transaction
          </Typography>
          <Typography variant="h5" component="h5" sx={styles.headingStyle}>
            ${rummYData?.transactionDetails?.totalTransaction}
          </Typography>
        </Box>

        <Box
          component="li"
          sx={{ ...styles.listStyle, backgroundColor: "#FFD6D4" }}
        >
          <Typography variant="p" component="p" sx={styles.peraSTyle}>
            Rumie Payouts
          </Typography>
          <Typography variant="h5" component="h5" sx={styles.headingStyle}>
            ${rummYData?.transactionDetails?.payouts}
          </Typography>
        </Box>

        <Box
          component="li"
          sx={{ ...styles.listStyle, backgroundColor: "#B5E9F9" }}
        >
          <Typography variant="p" component="p" sx={styles.peraSTyle}>
            total shipping amount
          </Typography>
          <Typography variant="h5" component="h5" sx={styles.headingStyle}>
            ${rummYData?.transactionDetails?.totalShippingAmount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionDetails;
