 import { FaPlus, FaRupeeSign } from "react-icons/fa";
  
//  type productsProps = {
//     productId: string,
//     photo: string,
//     name: string,
//     price: number,
//     stock: number,
//     handler: ()=> void;
//  }

 type productsProps = {
    products : any;
 }

const ProductCard = ({products}:productsProps) => {

    const {productId, photo, name, price, stock, handler } = products;
    return (
        <div className="product-cards">
            <img src={`${photo}`} alt={name}/>
            <p>{name}</p>
            <span><FaRupeeSign/>{price}</span>

            <div>
                <button onClick={()=> handler()}>
                    <FaPlus/>
                </button>
            </div>
        </div>
    )
}
export default ProductCard;