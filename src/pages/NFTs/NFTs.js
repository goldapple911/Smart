

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

  
}
export default NFTListings;
