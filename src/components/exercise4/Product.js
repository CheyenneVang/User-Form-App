function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p className="description">{props.description}</p>
        </article>
    );
}

export default Product;