import { Grid, Box, Typography, Button } from "@mui/material";

const renderTeletubbyCard = (teletubby, index) => {
  return (
    <Grid
      container
      direction={index % 2 ? "row-reverse" : "row"}
      key={index}
      alignItems="center"
      sx={{
        marginY: 1,
        marginX: 20,
        border: 1,
        overflow: "auto",
      }}
    >
      <Grid item md={4} lg={2} sm={6} xs={12}>
        <Box sx={{ maxWidth: "100%" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP76b2ZOBjyeUqGngkDSc_bE4ASrqGaLTmWA&usqp=CAU"
            alt={teletubby.name}
            style={{ width: "100%" }}
          />
        </Box>
      </Grid>
      <Grid item md={8} lg={10} sm={6} xs={12}>
        <Box sx={{ marginX: 5 }}>
          <Typography variant="h3">{teletubby.name}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {teletubby.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            {teletubby.traits.map((item, key) => {
              return (
                <Button
                  variant="outlined"
                  color="primary"
                  key={index}
                  sx={{ mr: 2, mb: 1 }}
                >
                  {item}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default renderTeletubbyCard;
