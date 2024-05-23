
const CoffeeCard = ({ coffee }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handDelete = _id =>{
        console.log(_id);

    }

    return (
        <div className="card p-5 card-side bg-base-100 shadow-xl ">
            <figure className="w-56"><img src={photo} alt="Movie" /></figure>
            <div className="w-full justify-between flex">
                <div className="pl-2">
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{details}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="btn w-16 btn-primary">View</button>
                    <button className="btn w-16 btn-warning">Edit</button>
                    <button onClick={() =>handDelete(_id)} className="btn w-16 btn-error">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;