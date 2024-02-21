import FormSchema from "./_components/FormSchema";
import { Container, Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        // backgroundColor: "hotpink",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography marginBottom="20px">Sign up and get candy!</Typography>
        <FormSchema />
      </Box>
    </Container>
  );
}
