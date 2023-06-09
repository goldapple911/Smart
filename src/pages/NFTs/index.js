import React, { useEffect, useState } from "react";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  Container,
} from "@mui/material";

const NFTSListPage = () => {
  const [nftListing, setNftListing] = useState([]);
  const [filteredNftListing, setFilteredNftListing] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const loadNftListing = async () => {
    const response = await fetch(
      `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
    );
    const data = await response.json();
    setNftListing([...nftListing, ...data.results]);
    setFilteredNftListing([...nftListing, ...data.results]);
    setOffset(offset + 20);
    console.log(response);
  };

  useEffect(() => {
    loadNftListing();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        loadNftListing();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <Container sx={{ display: "flex", justifyContent: "center", mt:20}} >
      <Grid
        container
        spacing={2}
        columns={{ xs: 2, sm: 8, md: 12, lg: 16, xl: 20 }}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredNftListing.map((nftListing) => (
          <Grid
            xs={2}
            sm={4}
            md={4}
            lg={4}
            xl={5}
            key={nftListing.id}
            sx={{ maxWidth: 345, mt:2,}}
            px={2}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={nftListing.img}
                  alt={nftListing.name}
                />
                <CardContent
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Typography gutterBottom>
                    <p >
                      Name:{nftListing.collectionName}
                    </p>
                  </Typography>
                  <Typography>
                    <p>Price:{nftListing.price}$</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default NFTSListPage;
