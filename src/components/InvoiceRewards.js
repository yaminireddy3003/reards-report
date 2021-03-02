import React from 'react';

class InvoiceRewards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalBill: 0,
            totalRewards: 0
        };
    }

    componentDidMount() {
        this.calculateRewardPoints();
    }

    componentWillReceiveProps(nextProps) {
        const { totalBill } = this.state;
        if (totalBill !== nextProps.invoiceBill) {
            this.calculateRewardPoints();
        }

    }

    calculateRewardPoints = () => {
        const { invoiceBill } = this.props;
        let points = 0;
        if (invoiceBill <= 100 && invoiceBill > 50) {
            points = invoiceBill - 50;
        } else if (invoiceBill > 100) {
            points = (invoiceBill - 100) * 2 + (parseInt(invoiceBill / 50) - 1) * 50;
        }

        this.setState({
            totalRewards: points
        });
    };

    render() {
        const { totalRewards } = this.state;
        return (
            <div>
                Total Rewards: {totalRewards}
            </div>
        )
    }
}

export default InvoiceRewards;