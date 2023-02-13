import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import variables from "../../../../Style/variables";

export default function QAPaper(props) {
  const [expanded, setExpanded] = useState(false); //摺疊開關
  const title = props.title;
  const content = props.content;
  const openaccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      disableGutters
      elevation={0}
      expanded={expanded}
      onChange={openaccordion}
      sx={{
        mt: 2,
        mb: 2,
        width: "50vw",
        backgroundColor: "transparent",
        "&:before": {
          display: "none",
        },
        "&$expanded": {
          margin: "0",
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ m: 0 }}>
        <Typography
          variant="h5"
          component="h5"
          color={variables.Darkblue}
          fontWeight="700"
          my={0}
        >
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Box>{content}</Box>
      </AccordionDetails>
    </Accordion>
  );
}
