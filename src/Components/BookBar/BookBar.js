import HeaderCard from "./HeaderCard";
import Cart from "./Cart";
import BookFilter from "./BookFilter";

function BookBar(props){
    return(
        <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="container sticky-top">
                <HeaderCard></HeaderCard>
                <BookFilter></BookFilter>
                <Cart></Cart>
            </div>
            
        </div>


    );
}
export default BookBar;