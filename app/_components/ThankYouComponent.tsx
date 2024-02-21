import { Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";

const ThankYouComponent = () => {
  const [confetti, setConfetti] = useState(false);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 20,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 6000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "800px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  useEffect(() => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 6000);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Confetti active={confetti} config={config} />
      <Typography variant="h5">Thank you for signing up!</Typography>
      <Typography variant="h6" marginBottom="20px">
        Enjoy some candy
      </Typography>
    </Box>
  );
};

export default ThankYouComponent;
