function Products(props) {
  const { products } = props;
  return (
    <div>
      This is the <strong>PRODUCTS</strong> page
      <p>
      Vestibulum felis purus, placerat eget purus id, luctus fermentum purus. Aliquam augue tellus, maximus sit amet consectetur ut, volutpat vitae neque. Phasellus sit amet sem pellentesque, bibendum odio sit amet, tempor risus. Cras sit amet massa ut ante iaculis rhoncus. Aenean ultricies, libero at consequat pretium, enim elit consequat quam, sit amet ultrices arcu erat sed enim. Cras finibus feugiat libero eget elementum. Aliquam rutrum purus ac urna pretium laoreet. Proin aliquam tempus laoreet. Phasellus ut egestas mi. Morbi nec orci felis. Proin vulputate egestas felis, at eleifend est.
      </p>
      <ul>
        { products.map(p => 
          <li key={p.id}>
            { p.name }
          </li>
        )}
      </ul>
    </div>
  );
}
  
  export default Products;
  