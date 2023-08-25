/* eslint-disable react/prop-types */
export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>ProductsNew</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Discription: <input name="description" type="text" />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" />
        </div>
        <div>
          Supplier_id: <input name="supplier_id" type="text" />
        </div>
        {/* <div>
          Images: <input name="images" type="text" />
        </div>
        <div>
          Is_discounted: <input name="is_discounted?" type="text" />
        </div> */}

        <button type="submit">Create product</button>
      </form>
    </div>
  );
}
