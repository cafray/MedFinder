
import './styles.css';

const Product = () => {

  return (
    <div className="product col-3">
      <img src="https://cdn.ultrafarma.com.br/static/produtos/814653/large-637057972254402658-814653.jpg" className="img-fluid align-center" />
      <button
        className={`btn btn-primary rounded-circle`}
      >
        +
      </button>
      <h4>
        <label className="badge badge-primary">
          R$ 58
        </label>
      </h4>
      <small>
        <b>Paracetamol</b>
      </small>
    </div>
  );
};

export default Product;
