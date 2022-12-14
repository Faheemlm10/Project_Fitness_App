import React from "react";
import { Box } from "@mui/material";

const HorizontalScrollBar = ({ data }) => {
  return (
    <div>
      {console.log(data)}
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {item}
        </Box>
      ))}
   gbnm
    </div>
  );
};

export default HorizontalScrollBar;
