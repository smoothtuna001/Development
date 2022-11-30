import React, {useState} from 'react';

function BookFilter(props){

    let [bName, setName] = useState('');
    let [bPrice, setPrice] = useState('');
    let [bAvail, setAvail] = useState('');

    function nameInputHandler(event){
        setName(event.target.value);
        props.nameChange(event)
    }

    function priceInputHandler(event){
        setPrice(event.target.value);
        props.priceChange(event)
    }

    function availabilityInputHandler(event){
        setAvail(event.target.checked);
        props.availableSelected(event)

    }




    return(
        <div className='card m-2 mb-3 shadow-lg rounded align-items-center'>
            <form className="row g-3 p-3">
                <div> <h6 className="mb-0"> Filter:</h6></div>
                <div className="col-md-6">
                    <label for="name">Title</label>
                    <input type="text" 
                            className="form-control" 
                            id="name" 
                            value={bName}
                            placeholder="Book Title" 
                            onChange={nameInputHandler}/>
                </div>
                <div className="col-md-6">
                    <label for="price">Price</label>
                    <input type="number" 
                            min="0" step="1" 
                            className="form-control" 
                            id="price" 
                            value={bPrice}
                            placeholder="Enter a Max Price" 
                            onChange={priceInputHandler}/>
                </div>

                <div className="col-md-12">

                    <div class="form-check form-switch">
                        <input class="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        id="isAvailable" 
                        onChange={availabilityInputHandler} 
                        value={bAvail}/> 
                        <label class="form-check-label" for="isAvailable">Show Only In Stock?</label>
                </div>

                </div>


                
            </form>

        </div>

    );


}
export default BookFilter;