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
import { getNFTList } from "api";
import NftListingCard from "../../components/NftListingCard";
import { maxHeight } from "@mui/system";

const NFTSListPage = () => {
  const [nftListing, setNftListing] = useState([]);
  const [filteredNftListing, setFilteredNftListing] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const loadNftListing = async () => {
    const responseData = await getNFTList(offset);
    setNftListing([...nftListing, ...responseData.results]);
    setFilteredNftListing([...nftListing, ...responseData.results]);
    setOffset(offset + 20);
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
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 15,
        mb: 10,
      }}
    >
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
          <NftListingCard nftListing={nftListing} />
        ))}
      </Grid>
    </Container>
  );
};
export default NFTSListPage;
