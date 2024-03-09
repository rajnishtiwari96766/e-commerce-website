import React from "react";
import { customHook2 } from "../../context/filter_context";
import { NavLink } from "react-router-dom";
import Category_filter from "./category_filter";

const Sorting = () => {
  const {
    gridView,
    listView,
    filter_products,
    sort,
    all_products
  } = customHook2();
  
  return (
    <div className="flex justify-between p-2">
      <div>
        <button className="p-2" onClick={gridView}>
          <i class="fa-solid fa-grip fa-xl"></i>
        </button>
        <button onClick={listView}>
          <i class="fa-solid fa-list fa-lg"></i>
        </button>
      </div>
      <Category_filter/>
      <div>{`${filter_products.length} Products Available`}</div>

      <div>
        <form>
          {/* <label htmlFor="filter"></label> */}
          <select name="filter" id="filter" onClick={sort}>
            <option value="lowest">Lowest-Price</option>
            <option value="highest">Highest-Price</option>
            <option value="a-z">Products A-Z</option>
            <option value="z-a">Products Z-A</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sorting;
