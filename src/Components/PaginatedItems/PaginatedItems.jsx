import { useState } from "react";
import ReactPaginate from "react-paginate";
import FoodCard from "../SectionTitle/FoodCard/FoodCard";

const PaginatedItems = ({ itemsPerPage, items }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      {/* <Items currentItems={currentItems} /> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {currentItems.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center my-8">
        <ReactPaginate
          breakLabel={
            <span className="px-4 py-2 btn border rounded-lg">...</span>
          }
          nextLabel={
            <span className="px-4 py-2 rounded-lg btn btn-outline border-0 border-b-4 border-orange-400 text-orange-400 cursor-pointer">
              Next
            </span>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <span className="px-4 py-2 rounded-lg btn btn-outline border-0 border-b-4 border-orange-400 text-orange-400 cursor-pointer">
              Previous
            </span>
          }
          renderOnZeroPageCount={null}
          pageClassName="pagination-item"
          className="flex gap-4 items-center"
        />
      </div>
    </div>
  );
};

export default PaginatedItems;
