import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  return (
    <div>
      This is the <strong>PRODUCT</strong> page
      <p>
      Quisque ut libero at eros suscipit pharetra sed at nisi. Vestibulum ac euismod nisl. Quisque purus tellus, condimentum quis ullamcorper at, scelerisque et sem. Duis fringilla eros vel orci iaculis pulvinar. Pellentesque sit amet dolor arcu. Etiam in tincidunt felis. Proin orci est, elementum et magna interdum, tempor luctus est. Quisque a vehicula lorem. Aenean dignissim magna sit amet arcu mattis imperdiet. Etiam consequat felis vitae eros bibendum laoreet.
      </p>
      <div>
        <strong>Id</strong>: {id}
        <p><Link to="/products">Back to Products Page</Link></p>
      </div>
    </div>
  );
}

export default Product;
