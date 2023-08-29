import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../Pages/CryptoContext";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

// function to add price to the carousel coins, via a RegEx (thanks google!)
export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const StyledLink = styled(RouterLink)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "white",
  textDecoration: "none",
}));

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axiosInstance.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <StyledLink to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          sx={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <Box
            component="span"
            sx={{
              color: profit > 0 ? "green" : "red",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </Box>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </StyledLink>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div>
      {/* TrendingCoins Carousel */}
      <div
        sx={{
          height: "50%",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px", // Add margin to create spacing
        }}
      >
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      </div>

      {/* Top 100 CryptoCurrencies by Market Cap */}
      <h2>Top 100 CryptoCurrencies by Market Cap</h2>
      {/* Rest of your content */}
    </div>
  );
};

export default Carousel;
