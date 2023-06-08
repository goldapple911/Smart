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
    <div className=" flex flex-row justify-center">
      <div className="flex flex-col justify-center mx-auto">
        <div className=" flex flex-row mt-20 flex-wrap justify-center">
          {data.results &&
            data.results.length > 0 &&
            data.results.map((item, key) => (
              <Card sx={{ maxWidth: 345 }} className=" w-1/5 h-1/4 mx-2 mt-2">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.name}
                    className=" w-full h-32"
                  />
                  <CardContent className=" flex justify-around">
                    <Typography
                      gutterBottom
                    >
                      <p className=" font-bold">Name:{item.onChainCollection.data.name}</p>
                    </Typography>
                    <Typography >
                      <p className=" font-bold"> Price:{item.price}</p>
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
