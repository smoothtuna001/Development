import './App.css';
import BookList from './Components/BookList/BookList';
import HeaderCard from './Components/BookBar/HeaderCard';
import { useState } from 'react';
import BookFilter from './Components/BookBar/BookFilter';
import CartItem from './Components/BookBar/CartItem'; 

function App(){

  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [stockOnlyValue, setStockOnly] = useState('false')
  const [bName, setName] = useState('');
  const [bPrice, setPrice] = useState('');

  const addToCart = (book) => {
    const newCart = { ...cart };
    
    const name = book.name
    const price = book.price
    if (newCart[name]) {
      newCart[name].quantity = (newCart[name].quantity + book.quantity);
    } else {
      newCart[name] = { name, quantity: book.quantity };
    }
    setTotal(total + (price * book.quantity));
    setCart(newCart);
  };

  const removeFromCart = (book) => {
    const newCart = { ...cart };
    const name = book.name
    const price = book.price
    if(newCart[name].quantity === 0){
        delete newCart[name];
      } else {
      newCart[name].quantity--;
    }
    setCart(newCart);
    setTotal(total - price);
  };

  function onFilterValueSelected(filterValue){
    setStockOnly(filterValue.target.checked)

  }
  function onNameChange(filterValue){
    setName(filterValue.target.value)
  }

  function onPriceChange(filterValue){
    setPrice(filterValue.target.value)
  }
 
 

 return (

  <ul className="list-group justify-content-end">
    <div className='row d-flex flex-row mx-3'>
      {/* BookBar */}
        <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="container sticky-top">
                <HeaderCard></HeaderCard>
                <BookFilter 
                availableSelected={onFilterValueSelected}
                nameChange={onNameChange}
                priceChange={onPriceChange}></BookFilter>
                <div className='card m-2 mb-3 shadow-lg rounded align-items-center'>
                  <h3 className='card-body'> This is my cart</h3>
                  <ul>
                    {console.log(cart)}
                    
                    {Object.values(cart).map((book) => (
                        <>
                        <CartItem item={book} price={book.price} removefromcart={removeFromCart} key={book.name} />
                        </>
                          ))}
                          {!isNaN(total)  && total >= 0 && <h3>Total: ${total.toString()}</h3>}

                  </ul>
                </div>
            </div>
                
        </div>
      <BookList 
      stockOnly={stockOnlyValue}
      nameInput={bName}
      priceInput={bPrice}
       sendData={addToCart}></BookList>
      </div>
     </ul>
 );

   
}

export default App;


