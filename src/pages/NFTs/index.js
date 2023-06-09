import React, { useEffect, useState } from "react";
import {
  TextField,
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    loadNftListing();
  }, []);

  useEffect(() => {
    setFilteredNftListing(
      nftListing.filter((nftListing) =>
        nftListing.collectionName.toLowerCase().includes(searchTerm)
      )
    );
  }, [nftListing, searchTerm]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 15,
        mb: 10,
      }}
    >
      <TextField
                placeholder="Search nft name"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearch}
                sx={{padding:5}}
            />

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
