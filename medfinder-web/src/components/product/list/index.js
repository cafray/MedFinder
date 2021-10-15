import './styles.css';

const Product = () => {

  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img src="https://cdn.ultrafarma.com.br/static/produtos/814653/large-637057972254402658-814653.jpg" className="img-fluid" />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">
              R$ 49
            </label>
          </h6>
          <small>
            <b>Paracetamol</b>
          </small>
        </div>
        <div className="col-3">
          <button
           
            className="btn btn-secondary rounded-circle"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
