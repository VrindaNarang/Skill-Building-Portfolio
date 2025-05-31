export default function Price({oldPrice,newPrice,description}){
    return(
        <div>
            <p>{oldPrice}</p>
            <p>{newPrice}</p>
            <p>{description}</p>
        </div>
    );
}

