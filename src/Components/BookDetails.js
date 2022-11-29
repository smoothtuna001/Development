import Button from './Button'
import React, {useState} from 'react';



function BookDetails(props){
    //let bookCount = 0;
    let [bookCount, setCount] = useState(0);

    function displayFormattedProductCount(){
        return bookCount > 0 ? bookCount : 'Zero';
    }


    let badgeClass = "badge badge-margin-left-240 text-white"
    badgeClass += props.isAvailable ? ' bg-success' : ' bg-danger';

    let incrementBookCount = function(){
        // bookCount++;
        // console.log(bookCount)
        setCount(++bookCount);

    }

    let decrementBookCount = function(){
        // bookCount--;
        // console.log(bookCount)
        setCount(--bookCount);

    }

    return (

        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{'margin-right': 30}}>${props.price}</h6>
            <Button eventHandler={decrementBookCount}>-</Button>
            <span style={  {padding: '8px 14px', 'font-size': 13}}>
                {displayFormattedProductCount()}
            </span>
            <Button eventHandler={incrementBookCount}>+</Button>
            <span className={badgeClass + " mx-2"}>{props.isAvailable ? 'Available' : 'Unavailable'} </span>
            <Button>Add to Cart</Button>
          </div>

    )

}

export default BookDetails;