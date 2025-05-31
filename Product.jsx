import "./Product.css";
import Price from "./Price";

function Product({title,idx}){
    let oldPrices=["12,495","11,900","1599","599"];
    let newPrices=["8,999","9,199","899","278"];
    let description=[
        "8000 DPI",
        "intuitive surface",
        "designed for ipad",
        "wireless"
    ];

    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>Description</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx] }description={description[idx]}/>
        </div>
    );
}

export default Product;