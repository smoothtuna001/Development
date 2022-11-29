import BookDetails from './BookDetails';


function Books(props){
    

    return(
    <li className="list-group-item m-2 mb-3 shadow-lg rounded">
      <div className="media align-items-lg-center flex-column flex-lg-row p-2 d-flex">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <h6 className="mt-0 font-weight-bold mb-2">{props.author}, {props.year}</h6>
          <p className="font-italic text-muted mb-2 small">{props.description}</p>
          <BookDetails price={props.price}isAvailable={props.isAvailable}/>
        </div><img src={props.imageURL} alt="Generic placeholder image" width="100" className="ml-lg-5 order-1 order-lg-2 m-3" />
        </div>
    </li>
)
}

export default Books