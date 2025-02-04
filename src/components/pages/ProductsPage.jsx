// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getProductsThunk,
//   deleteProductsThunk,
// } from "../../redux/products/thunk";
import { useDeleteProductsMutation, useGetProductsQuery } from "../../redux/products/productsAPI";
// import { productsSelector } from "../../redux/products/selectors";

const ProductsPage = () => {
  const {isLoading, data: products, isError} = useGetProductsQuery();
  const [deleteProduct, delInfo] = useDeleteProductsMutation()
  
  // const products = useSelector(productsSelector);
  // const {products, error, isLoading } = useSelector((state) => state.products);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProductsThunk());
  // }, [dispatch]);
  return (
    <>
      {delInfo.isLoading && <h1>Deleting...</h1>}
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {products && (
        <div className="container text-center">
          <div className="row">
            {products.map(({ id, title, description, images, price }) => (
              <div className="col" key={id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={images[0]} className="card-img-top" alt={title} />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price} $</p>
                    <p className="card-text">{description}</p>
                    <button
                      className="btn btn-danger"
                      onClick={()=>deleteProduct(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isError && <h2>error</h2>}
    </>
  );
};

export default ProductsPage;
