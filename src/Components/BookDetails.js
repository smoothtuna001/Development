import Button from './Button'
let bookCount = 0;

function displayFormattedProductCount(){
    return bookCount > 0 ? bookCount : 'Zero';
}

function bookDetails(props){
    let badgeClass = "badge badge-margin-left-240 badge text-white"
    badgeClass += props.isAvailable ? ' bg-success' : ' bg-danger';

    return (

        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{'margin-right': 30}}>${props.price}</h6>
            <Button>-</Button>
            <span style={  {padding: '8px 14px', 'font-size': 13}}>
                {displayFormattedProductCount()}
            </span>
            <Button>+</Button>
            <span className={badgeClass + " mx-2"}>{props.isAvailable ? 'Available' : 'Unavailable'} </span>
            <Button>Add to Cart</Button>
          </div>

    )

}

export default bookDetails;