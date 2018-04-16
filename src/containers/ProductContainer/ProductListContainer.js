import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductDetail from '../../pages/ProductPage/ProductDetail';
import { fetchAllProduct } from './../../actions/product';

function showProductItem(data) {
    return data.map(function(item, index){
        if(!item.id){
            item.id= index;
        }

        return item;
    })
}

class ProductListContainer extends React.Component {
    componentDidMount() {
        this.props.fetchAllProduct();
    }

    render() {
        const { products, history } = this.props;
        const newProducts = showProductItem(products.data);
        return(
            <ProductDetail
                products = {newProducts}
                history = {history}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

ProductListContainer.prototype = {
    fetchAllProduct: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, {fetchAllProduct})(ProductListContainer);
