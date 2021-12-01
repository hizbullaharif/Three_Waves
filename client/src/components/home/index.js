import React,{Component} from 'react';
import HomePromotion from './HeaderPromotion';
import HomeSlider from './HeaderSlider';
import {connect} from 'react-redux'

import {getProductsByArrival, getProductsBySell} from '../../actions/products_actions'
import CardBlock from '../utils/card_block';

class Home extends Component {
    componentDidMount(){
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(getProductsByArrival());
    }
    render() {
        return (
            <div>
                <HomeSlider/>

                <CardBlock
                    list={this.props.products.bySell}
                    title="Best Selling guitars"
                />

                <HomePromotion/>

                <CardBlock
                    list={this.props.products.byArrival}
                    title="New arrivals"
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(Home);






































// const Home = (props) => {
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getProductsBySell());
//         dispatch(getProductsByArrival())
//     },[]);
    
//     return (
//         <>
//             <HeaderSlider/>
//             <CardBlock
//                 list={props.products.bySell}
//             />
//             <HeaderPromotion/>
//             <CardBlock
//                 list={props.products.byArrival}
//             />
//         </>
//     )
// };

// const mapStateToProps = (state) =>{
//     return {
//         products:state.products
//     }
// }

// export default connect(mapStateToProps)(Home);