import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function NftListingCard({ nftListing }) {
  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      lg={4}
      xl={5}
      key={nftListing.id}
      sx={{ maxWidth: 345, mt: 2 }}
      px={2}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={nftListing.img}
            alt={nftListing.name}
            height={200}
          />
          <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography gutterBottom>
              Name:{nftListing.collectionName}
            </Typography>
            <Typography>Price:{nftListing.price}$</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default NftListingCard;
