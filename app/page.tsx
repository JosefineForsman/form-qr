import FormSchema from "./_components/FormSchema";
import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import { Divider } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          // justifyContent: "center",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "19px",
              margin: "50px auto 40px auto", // 'auto' is shorthand for 'top right bottom left'
              alignItems: "center",
            }}
          >
            <Image src="/sqli.svg" alt="SQLI" width="100" height="100" />
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{
                borderColor: "black",
                borderLeft: "0.5px solid",
                height: "100px",
              }}
            />
            <Image src="/sitecore.svg" alt="SQLI" width="140" height="100" />
          </Box>
        </Typography>
        <FormSchema />
      </Box>
    </Container>
  );
}
