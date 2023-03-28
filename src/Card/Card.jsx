import { fetchWrapper } from "_helpers";
import { useEffect, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useSelector } from "react-redux";

const Card = () => {
  const token = useSelector((state) => state.auth?.user?.tokens?.access?.token);

  const [data, setData] = useState({});

  const baseUrl = `${process.env.REACT_APP_API_URL}/cards`;

  const fetchCards = async () => {
    console.log("token", token);

    setData(await fetchWrapper.get(baseUrl));
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="allcards">
      {data.results?.map((each) => (
        <Cards
          key={each.id}
          expiry={each.cardExpiration}
          name={each.cardHolder}
          number={each.cardNumber}
        />
      ))}
    </div>
  );
};

export default Card;
