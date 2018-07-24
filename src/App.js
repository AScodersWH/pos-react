import React, {Component} from 'react';
import './App.css';
import  { loadAllItems, loadPromotions } from './dataBase';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
           items : loadAllItems(),
            promotions : loadPromotions(),
            flag : true ,
            trolley : []
        }
    }

    jumpToTrolleyPage =()=> {
        this.Setstate = {flag  : false};
}

    jumpToListPage= () => {
        this.Setstate = {flag : true};
    }

    addToTrolley = item => {
        this.setState = {trolley: [...this.state.trolley,item]}

    }

   printTrolleyList = () =>{
       const trolleyList = this.state.trolley.map(item => (`${item.barcode}-${item.amount}`));
       alert(trolleyList);
   }


    render() {
        return (
            <div className="row justify-content-center">
                <ItemList items={this.state.items} promotions={this.state.promotions}
                          changePage={this.jumpToTrolleyPage} addToCart={this.addToTrolley}/>
            </div>
        );
    }
}

class ItemList extends Component {

    render() {
        return (
            <div>
                <button >GO TO SHOPPING CART</button>
                <h3>ITEMS LIST</h3>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.barcode}>

                                <div>{item.name}</div>
                                <div>{item.price}元/{item.unit}</div>
                                <div  barcode={item.barcode}>
                                    <input type="number" min="0" defaultValue="0" className=""/>
                                    <button>ADD</button>
                                </div>
                        </li>
                    ))}
                </ul>
                <h3 >PROMOTIONS LIST</h3>
                <ul >
                    {this.props.promotions.map(item => item.barcodes.map(barcode => (<li >{item.type}</li>)))}
                </ul>
            </div>
        );
    }
}

export default App;
