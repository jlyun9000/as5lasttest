import React, { Component } from "react"
import datas from "./inventory.json"
import InventoryItem from "./InventoryItem"

// Try to use Class Components
class InventoryList extends Component{
    constructor(props){
        super(props);
        this.state = {inventory_list: []};
    }

    componentDidMount(){
        this.setState({inventory_list: datas});
    }

    render() {
        return(
            <div className="list-table">
            {this.state.inventory_list.map((item) => (
                <InventoryItem
                key = {item.SKU}
                SKU = {item.SKU}
                Name = {item.Name}
                Quantity = {item.Quantity}
                Price = {item.Price}/>
            ))}
            </div>
        )
    }
}


export default InventoryList