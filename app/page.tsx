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
        <Typography
          marginBottom="20px"
          variant="h4"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.2rem",
            },
          }}
        >
          SQLI & SITECORE
        </Typography>
        <FormSchema />
      </Box>
    </Container>
  );
}
