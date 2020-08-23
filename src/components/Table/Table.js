import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchData } from '../../actions/orderActions';
import './Table.scss';

const convertTime = (date) => {
    if (date) {
        return moment(date).format('MMM. DD, YYYY');
    } else {
        return '';
    }
};

class Table extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { filteredList } = this.props;

        return (
            <div className="order-table">
                <div className="app-container">
                    <div className="order-table-header">
                        <div className="status">STATUS</div>
                        <div className="delivery">DELIVERY DAY</div>
                        <div className="supplier">SUPPLIER</div>
                        <div className="total">TOTAL</div>
                    </div>
                    <div className="order-table-body">
                        {filteredList.map((order) => (
                            <div className="order-table-row" key={order.id}>
                                <div className="status">
                                    <span className={`status-cell ${order.orderBuyerStatus.toLowerCase()}`}>
                                        {order.orderBuyerStatus}
                                    </span>
                                </div>
                                <div className="delivery">{convertTime(order.deliveryDay)}</div>
                                <div className="supplier supplier-cell">
                                    <span>{order.vendorName}</span>
                                    {order.isBYOS === false && <span className="market-label">Market</span>}
                                    {order.isPendingVendorOnboarding && <span className="first-label">1st</span>}
                                </div>
                                <div className="total">{order.total ? `$${order.total}` : ''}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filteredList: state.orderReducer.filteredList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
