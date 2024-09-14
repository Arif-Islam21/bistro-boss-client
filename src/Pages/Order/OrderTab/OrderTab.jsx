import { useState } from "react";
import PaginatedItems from "../../../Components/PaginatedItems/PaginatedItems";
import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const [showItem, setShowItem] = useState([]);
  return (
    <div className="">
      {/* {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))} */}
      <PaginatedItems
        itemsPerPage={6}
        items={items}
        setShowItem={setShowItem}
      />
    </div>
  );
};

export default OrderTab;
