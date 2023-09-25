import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TransactionDetails = () => {
  return (
    <Box component="div" sx={{marginTop:'5rem'}}>
      <Typography variant="h3" component="h3" className="section-title">
        Transaction Details
      </Typography>
      <Box
        component="ul"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop:'2rem',
          "& li:nth-child(1)": { backgroundColor: "#FFE3C9" },
          "& li:nth-child(2)": { backgroundColor: "#FFD6D4" },
          "& li:nth-child(3)": { backgroundColor: "#B5E9F9" },
        }}
      >
        <Box
          component="li"
          sx={{ width: "31.5%", padding: "3rem 3rem", borderRadius: "1rem" , '& p, & h5': {color:'#3E3879'} }}
        >
          <Typography
            variant="p"
            component="p"
            sx={{ color: "$9248", fontSize: "1.4rem", fontFamily: "Noir Pro", textTransform:'capitalize' }}
          >
            transaction details
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontSize: "3rem", fontWeight: "500", fontFamily: "Noir Pro", marginTop:'0.5rem' }}
          >
            $9248
          </Typography>
        </Box>

        <Box
          component="li"
          sx={{ width: "31.5%", padding: "3rem 3rem", borderRadius: "1rem", '& p, & h5': {color:'#3E3879'}  }}
        >
          <Typography
            variant="p"
            component="p"
            sx={{ color: "$9248", fontSize: "1.4rem", fontFamily: "Noir Pro", textTransform:'capitalize' }}
          >
            transaction details
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontSize: "3rem", fontWeight: "500", fontFamily: "Noir Pro", marginTop:'0.5rem' }}
          >
            $9248
          </Typography>
        </Box>

        <Box
          component="li"
          sx={{ width: "31.5%", padding: "3rem 3rem", borderRadius: "1rem", '& p, & h5': {color:'#3E3879'}  }}
        >
          <Typography
            variant="p"
            component="p"
            sx={{ color: "$9248", fontSize: "1.4rem", fontFamily: "Noir Pro", textTransform:'capitalize' }}
          >
            transaction details
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontSize: "3rem", fontWeight: "500", fontFamily: "Noir Pro", marginTop:'0.5rem' }}
          >
            $9248
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionDetails;
