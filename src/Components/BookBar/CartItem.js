import Button from "../BookList/Button";
function CartItem(props){
    
    const {item, removefromcart} = props;
    return (
        <div className="row">
            
            <div className="col">
                <p className=" lead mt-0 font-weight-bold mb-2 fs-6">{item.name}</p>

                <p className="">x {item.quantity}</p>
            </div>
            <div className="col justify-content-end">
                <button onClick={(e)=> removefromcart(item)} className="btn btn-sm btn-primary"> Remove </button>

            </div>
            
            



        </div>



    );

}
export default CartItem;