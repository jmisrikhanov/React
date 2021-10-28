import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import { MainContainer } from "./HomeStyle";
import RecipeCardComp from "./RecipeCardComp";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "9276aa1a";
const APP_KEY = "73d7d54218655b2be3e0ffcc764fc8ad";

const Home = () => {
  const [query, setQuery] = useState("apple");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      //   console.log("result: ", result);
      if (result.status === 200) {
        // console.log(result.data.hits);
        setRecipes(result.data.hits);
      } else {
        alert("Please fill the form");
      }
    }
  };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />

      {recipes ? (
        <MainContainer>
          {recipes?.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe?.recipe} />
          ))}
        </MainContainer>
      ) : null}
    </div>
  );
};

export default Home;
