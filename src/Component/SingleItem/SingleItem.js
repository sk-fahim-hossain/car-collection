import './SingleItem.css';

const SingleItem = (props) => {
    const item = props.singleItem;

    return (
        <div>
            <div className="item">
                <p>{item.Name}</p>
                <p>${item.Price}</p>
            </div>  
        </div>
    );
};

export default SingleItem;