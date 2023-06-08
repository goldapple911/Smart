import React, { useEffect, useState } from "react";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const NFTListings = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=0"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div >
      <div >
        <div>
          {data.results &&
            data.results.length > 0 &&
            data.results.map((item, key) => (
              <Card sx={{ maxWidth: 345 }} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.name}

                  />
                  <CardContent >
                    <Typography
                      gutterBottom
                    >
                      <p >Name:{item.onChainCollection.data.name}</p>
                    </Typography>
                    <Typography >
                      <p> Price:{item.price}</p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
export default NFTListings;
