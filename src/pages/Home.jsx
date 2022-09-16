import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../Components/MainList/list";
import Searchbar from "../Components/searchbar";
import SidePanels from "../Components/sidePanels";
import { dataList } from "../constants/itemsobject";
import EmptyView from "./emptyview";
import "./styles.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [cusines, setcusines] = useState([
    { id: 1, checked: false, label: "American" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);
  const [Result, setResult] = useState(false);

  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [list, setList] = useState(dataList);
  const [inputSearch, setInputSearch] = useState("");

  const handleSelectCategory = (e, value) =>
    !value ? null : setSelectedCategory(value);
  const handleSelectRating = (e, value) =>
    !value ? null : setSelectedRating(value);

  // CHECK THE CHECKBOX ON WHICH USER CLICKED

  const handleChangeChecked = (id) => {
    const cuisinesStateList = cusines;
    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setcusines(changeCheckedCuisines);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  //RATING FILTER

  const applyFilter = () => {
    let updatedList = dataList;

    //RATING FILTER
    //CHECK IF USER SELECTED A RATING AND IF USER  SELECTED THEN WE WILL
    //WE WILL SIMPLY FILTER IT AND UPDATE OUR LIST

    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // CATEGORY FILTER

    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // CUISINES FILTER
    //FIRST CHECK IF USER SELECTED ANY CUISINE OR NOT
    //THEN WE WILL APPLY FILTER

    const cuisineCheck = cusines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisineCheck.length) {
      updatedList = updatedList.filter((item) =>
        cuisineCheck.includes(item.cuisine)
      );
    }

    // PRICE FILTER
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // SEARCH FILTER

    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);

    //
    !updatedList.length ? setResult(false) : setResult(true);
  };

  //THIS USEEFFECT WILL RUN THERE WILL BE A CHANGE IN SELECTEDRATING STATE...
  // AND USEEFFECT WILL CALL APPLY FILTER
  useEffect(() => {
    applyFilter();
  }, [selectedRating, selectedCategory, cusines, selectedPrice, inputSearch]);

  return (
    <div className="home">
      <Searchbar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <SidePanels
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            cusines={cusines}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changedPrice={handleChangePrice}
          />
        </div>
        <div className="home_list-wrap">
          {Result ? <ItemList list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
