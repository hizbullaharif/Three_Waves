import React, { Component } from "react";
import PageTop from "../utils/pageTop";
import LoadsmoreCards from "./LoadsmoreCards";
import { frets, price } from "../utils/form/fixed_categories";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import faTh from "@fortawesome/fontawesome-free-solid/faTh";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";


import {
  getProductsToShop,
  getBrands,
  getWoods,
} from "../../actions/products_actions";
import CollapseCheckbox from "../utils/collapseCheckbox";
import CollapseRadio from "../utils/collapseRadio";

class Shop extends Component {
  state = {
    grid: "",
    limit: 6,
    skip: 0,
    filters: {
      brand: [],
      frets: [],
      wood: [],
      price: [],
    },
  };

  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
    this.props.dispatch(
      getProductsToShop(this.state.skip, this.state.limit, this.state.filters)
    );
  }

  handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  handleFilters = (filters, category) => {
    const newFilters = { ...this.state.filters };
    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = this.handlePrice(filters);
      newFilters[category] = priceValues;
    }
    this.showFilteredResults(newFilters);

    this.setState({
      filters: newFilters,
    });
  };

  showFilteredResults(newFilters) {
    this.props
      .dispatch(getProductsToShop(0, this.state.limit, newFilters))
      .then(() => {
        this.setState({
          skip: 0,
        });
      });
  }

  loadmoreCards = () => {
    let skip = this.state.skip + this.state.limit;
    this.props
      .dispatch(
        getProductsToShop(
          skip,
          this.state.limit,
          this.state.filters,
          this.props.products.toShop
        )
      )
      .then(() => {
        this.setState({ skip });
      });
  };

  handleGrid = () => {
    this.setState({
      grid: !this.state.grid ? "grid_bars" : "",
    });
  };

  render() {
    console.log("Filters", this.state.filters);
    const products = this.props.products;
    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <CollapseCheckbox
                initState={true}
                title="Brands"
                list={products.GET_BRANDS}
                handleFilters={(filters) =>
                  this.handleFilters(filters, "brand")
                }
              />
              <CollapseCheckbox
                initState={false}
                title="Frets"
                list={frets}
                handleFilters={(filters) =>
                  this.handleFilters(filters, "frets")
                }
              />

              <CollapseCheckbox
                initState={false}
                title="Wood"
                list={products.GET_BRANDS}
                handleFilters={(filters) => this.handleFilters(filters, "wood")}
              />

              <CollapseRadio
                initState={true}
                title="Price"
                list={price}
                handleFilters={(filters) =>
                  this.handleFilters(filters, "price")
                }
              />
            </div>
            <div className="right">
              <div className="shop_options">

                <div className="shop_grids clear">
                  <div
                    className={`grid_btn ${this.state.grid ? "" : "active"}`}
                    onClick={() => this.handleGrid()}
                  >
                    <FontAwesomeIcon icon={faTh} />
                  </div>
                  <div
                    className={`grid_btn ${!this.state.grid ? "" : "active"}`}
                    onClick={() => this.handleGrid()}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                </div>

                <div>
                  <LoadsmoreCards
                    grid={this.state.grid}
                    limit={this.state.limit}
                    size={products.toShopSize}
                    products={products.toShop}
                    loadmore={() => {
                      this.loadmoreCards();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Shop);

// ///Function Component/////////
// **************************
// import React, { useEffect } from "react";
// import PageTop from "../utils/pageTop";
// import { useSelector, useDispatch } from "react-redux";
// import { getBrands, getWoods } from "../../actions/products_actions";

// const Shop = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.products);
//   console.log(data);

//   useEffect(() => {
//     dispatch(getBrands());
//     dispatch(getWoods());
//   }, []);

//   return (
//     <div>
//       <PageTop title="Browse Products" />
//       <div className="container">
//         <div className="shop_wrapper">
//           <div className="left">
//             left
//           </div>
//           <div className="right">
//             Right
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;
