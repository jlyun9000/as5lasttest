import React from "react"

// Try to use Functional Components
const InventoryItem = ({SKU, Name, Quantity, Price}) => {
    if (Quantity > 100){
        return(
            <div className="many-item">
                <p>SKU: {SKU}</p>
                <p>Name: {Name}</p>
                <p>Quantity: {Quantity}</p>
                <p>Price per lb: $<del>{Price}</del> ${(Price*0.8).toFixed(2)}</p>
            </div>
        );
    }
    else{
        return(
            <div className="each-item">
                <p>SKU: {SKU}</p>
                <p>Name: {Name}</p>
                <p>Quantity: {Quantity}</p>
                <p>Price per lb: ${Price}</p>
            </div>
        );
    }

}

export default InventoryItem;