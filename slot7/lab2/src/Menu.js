// Import menu images from assets
import menu1 from "./assets/menu1.jpg";
import menu2 from "./assets/menu2.jpg";
import menu3 from "./assets/menu3.jpg";
import menu4 from "./assets/menu4.jpg";

// Menu component displays a menu section with cards
function Menu() {
  return (
    // Main container for the menu
    <div className="Menu">
      <div className="menu-title d-flex flex-column align-items-start text-white">
        <h1 className="text-center">Our Menu</h1>
      </div>
      <div className="menu-items d-flex justify-content-center gap-2">
        <div
          className="card"
          style={{
            flex: 1,
            height: "fit-content",
            position: "relative",
            overflow: "hidden",
            margin: "0 70px",
          }}
        >
          <span
            className="badge position-absolute text-bg-warning fs-5"
            style={{
              top: "0px",
              left: "0px",
              zIndex: 10,
              borderRadius: "0px",
            }}
          >
            SALE
          </span>
          <img
            src={menu1}
            className="card-img-top"
            alt="Delicious pepperoni pizza"
          />
          <div className="card-body">
            <h5 className="card-title">Margherita Pizza</h5>
            <span className="card-text d-flex align-items-center">
              <p className="text-decoration-line-through">&40.00</p>
              <p className="text-warning">&24.00</p>
            </span>
            <a href="/" className="btn bg-gray text-white w-100">
              Buy
            </a>
          </div>
        </div>
        <div className="card" style={{ flex: 1, height: "fit-content" }}>
          <img
            src={menu2}
            className="card-img-top"
            alt="Delicious pepperoni pizza"
          />
          <div className="card-body">
            <h5 className="card-title">Mushroom Pizza</h5>
            <span className="card-text d-flex align-items-center">
              <p className="text-dark">&24.00</p>
            </span>
            <a href="/" className="btn bg-gray text-white w-100">
              Buy
            </a>
          </div>
        </div>
        <div
          className="card"
          style={{
            flex: 1,
            height: "fit-content",
            position: "relative",
            overflow: "hidden",
            margin: "0 70px",
          }}
        >
          <span
            className="badge position-absolute text-bg-warning fs-5"
            style={{
              top: "0px",
              left: "0px",
              zIndex: 10,
              borderRadius: "0px",
            }}
          >
            NEW
          </span>
          <img
            src={menu3}
            className="card-img-top"
            alt="Delicious pepperoni pizza"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <span className="card-text d-flex align-items-center">
              <p className="text-dark">&25.00</p>
            </span>
            <a href="/" className="btn bg-gray text-white w-100">
              Buy
            </a>
          </div>
        </div>
        <div
          className="card"
          style={{
            flex: 1,
            height: "fit-content",
            position: "relative",
            overflow: "hidden",
            margin: "0 70px",
          }}
        >
          <span
            className="badge position-absolute text-bg-warning fs-5"
            style={{
              top: "0px",
              left: "0px",
              zIndex: 10,
              borderRadius: "0px",
            }}
          >
            SALE
          </span>
          <img
            src={menu4}
            className="card-img-top"
            alt="Delicious pepperoni pizza"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <span className="card-text d-flex align-items-center">
              <p className="text-decoration-line-through">&40.00</p>
              <p className="text-warning">&30.00</p>
            </span>
            <a href="/" className="btn bg-gray text-white w-100">
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Menu component as default
export default Menu;
