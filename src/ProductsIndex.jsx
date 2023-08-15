/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>Name: {product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
          <p>Supplier: {product.supplier.name}</p>
          <p>Tax: {product.tax}</p>
          <p>Total: {product.total}</p>
          <p>Description: {product.description}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ))}
    </div>
  );
}
