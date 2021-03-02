import React from 'react';
import InvoiceRewards from './InvoiceRewards';

class InoviceData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceBill: 0,
            isBilled: false
        };
    }
    updateBillAmount = (billAmount) => {
        let { invoiceBill } = this.state;
        if (/^\d+$/.test(billAmount)) {
            invoiceBill = parseInt(billAmount);
        } else if(billAmount === ''){
            invoiceBill = 0;
        }
        this.setState({
            invoiceBill
        });
    };
    handleRewards = () => {
        this.setState({
            isBilled: true
        });
    };

    clearBill = () => {
        this.setState({
            invoiceBill: 0,
            isBilled: false
        });
    };
    render() {
        const { isBilled, invoiceBill } = this.state;
        return (
            <React.Fragment>
                <div className="invoice_bill">
                    Bill amount<input onChange={(e) => this.updateBillAmount(e.target.value)} value={invoiceBill} />
                    <button onClick={this.handleRewards} className="invoice-button">submit</button>
                    <button onClick={this.clearBill} className="invoice-button">clear</button>
                </div>
                {isBilled && <InvoiceRewards invoiceBill={invoiceBill} />}
            </React.Fragment>
        )
    }
}

export default InoviceData;