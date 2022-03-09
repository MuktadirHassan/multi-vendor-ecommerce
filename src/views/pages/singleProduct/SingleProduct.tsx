import useAPI from "hooks/useAPI";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add_to_cart } from "redux/actions/cartAction";
import ProductService from "services/Product.service";

const SingleProduct = () => {
  const { id = "" } = useParams();

  const { data: product } = useAPI<IProduct>(() =>
    ProductService.getProductDetailsById(id)
  );

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-2 gap-4">
      {product ? (
        <img
          src={process.env.REACT_APP_IMAGE_BASE_URL + product.image}
          alt=""
        />
      ) : null}
      <div className="grid grid-cols-1 gap-3">
        <h1 className="text-2xl">{product?.name}</h1>
        <p className="text-gray-700">{product?.description}</p>
        <button
          className="p-2 text-xl border rounded-lg bg-slate-400"
          onClick={() => dispatch(add_to_cart(product as IProduct))} // dispatch -> action
        >
          Add to cart
        </button>
      </div>
      {/* <button
        className="p-2 border"
        onClick={() => dispatch(remove_from_cart(id))}
      >
        Remove From cart
      </button> */}
    </div>
  );
};
export default SingleProduct;
