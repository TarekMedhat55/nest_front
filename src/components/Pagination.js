import ReactPaginate from "react-paginate";
const Paginate = ({ pageCount }) => {
  const handlePageClick = (data) => {};
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={3}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="Prev"
      containerClassName={"pagination justify-content-center mt-5"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Paginate;
