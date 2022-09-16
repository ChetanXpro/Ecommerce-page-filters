import React from "react";
import { categoryList, ratingList } from "../constants/itemsobject";
import CheckboxProton from "./Checkbox/checkbox";

import FilterListToggle from "./FilterListToggle/FilterListToggle";
import "./sidePanel.css";
import SliderRange from "./Slider/slider";

const SidePanels = ({
  selectedCategory,
  selectToggle,
  selectRating,
  selectedRating,
  cusines,
  changeChecked,
  changedPrice,
  selectedPrice,
}) => {
  return (
    <div className="sidepanell">
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>

      <div className="input-group">
        <p className="label">Cuisines</p>

        <div className="input-group">
          {cusines.map((cusine) => (
            <CheckboxProton
              key={cusine.id}
              cusine={cusine}
              changeChecked={changeChecked}
            />
          ))}
          <div className="input-group">
            <p className="label">Price Range</p>
            <br />

            <SliderRange value={selectedPrice} changedPrice={changedPrice} />
          </div>
        </div>
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default SidePanels;
