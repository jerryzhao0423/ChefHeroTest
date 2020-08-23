import React from 'react';
import { connect } from 'react-redux';
import close from '../../static/ic-close.svg';
import down from '../../static/ic-down.svg';
import './Filter.scss';
import { applyFilter, resetFilter } from '../../actions/orderActions';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false,
            activeSupplier: 'All Supplier',
        };
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.closeSelect);
    }

    openSelect = (e) => {
        e.stopPropagation();
        const { showList } = this.state;
        this.setState({ showList: !showList }, () => window.addEventListener('click', this.closeSelect));
    };

    selectSupplier = (supplier) => {
        const { applyFilter } = this.props;
        this.setState({ activeSupplier: supplier });
        applyFilter(supplier);
    };

    closeSelect = () => {
        this.setState({ showList: false });
        window.removeEventListener('click', this.closeSelect);
    };

    reset = () => {
        const { resetFilter } = this.props;
        this.setState({ activeSupplier: 'All Supplier' });
        resetFilter();
    };

    render() {
        const { supplierList } = this.props;
        const { showList, activeSupplier } = this.state;

        return (
            <div className="filter">
                <div className="app-container">
                    <div className="filter-label">Supplier</div>
                    <div className="select-box">
                        <div className="select-box-selected" onClick={this.openSelect}>
                            {activeSupplier}
                            <img src={down} alt="dropdown" className={showList ? 'up' : 'down'} />
                        </div>
                        <button
                            disabled={activeSupplier === 'All Supplier'}
                            className="select-box-reset"
                            onClick={this.reset}
                        >
                            <img src={close} alt="Reset Filters" />
                            Reset Filters
                        </button>
                        {showList && (
                            <div className="select-box-options">
                                {supplierList.map((supplier) => (
                                    <div
                                        key={supplier}
                                        className="select-box-option"
                                        onClick={() => this.selectSupplier(supplier)}
                                    >
                                        {supplier}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        supplierList: state.orderReducer.supplierList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        applyFilter: (filter) => dispatch(applyFilter(filter)),
        resetFilter: () => dispatch(resetFilter()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
