import { Grid, Box, Typography, Button } from '@mui/material';

const renderTeletubbyCard = (teletubby, index) => {
  return (
    <Grid
      container
      direction={index % 2 ? 'row-reverse' : 'row'}
      key={index}
      alignItems='center'
      marginX={{ sm: 3, md: 4, lg: 10 }}
      sx={{
        marginY: 1,
        border: 1,
        overflow: 'auto',
      }}
    >
      <Grid item md={4} lg={2} sm={6} xs={12}>
        <Box sx={{ maxWidth: '100%' }}>
          <img
            src={teletubby.image_url}
            alt={teletubby.name}
            style={{ width: '100%', border: 1, margin: 0 }}
          />
        </Box>
      </Grid>
      <Grid item md={8} lg={10} sm={6} xs={12} sx={4}>
        <Box sx={{ marginX: 3 }}>
          <Typography variant='h3'>{teletubby.name}</Typography>
          <Typography variant='body1' sx={{ mt: 2 }}>
            {teletubby.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            {teletubby.traits.map((item, key) => {
              return (
                <Button variant='outlined' key={index} sx={{ mr: 2, mb: 1 }}>
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
