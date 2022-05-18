import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Panda's Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                  <a className='nav-link active'>Seccion 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Seccion 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Seccion 3</a>
              </li>
              <li>
                <CartWidget></CartWidget>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

}

export default Navbar