import React from "react";
import { Box } from "@mui/material";
import ContentItems from "./ContentItems";
import image from "../Images/one.jpg";
const contentArray = [
  {
    title: "Get things done",
    description:
      "lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.",
    image: "/src/Images/one.jpg",
  },
  {
    title: "Productivity Is Brilliant",
    description:
      "lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.",
    image: "/src/Images/2.jpg",
  },
  {
    title: "Fast Development",
    description:
      "lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.",
    image: "/src/Images/3.jpg",
  },
];
function Content() {
  return (
    <Box
      bgcolor="#fbf2f2"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      height="10%"
    >
      {contentArray?.map((content, index) => (
        <ContentItems
          title={content.title}
          description={content.description}
          img={content.image}
          key={index}
          swap={index % 2 === 0}
        />
      ))}
    </Box>
  );
}

export default Content;
