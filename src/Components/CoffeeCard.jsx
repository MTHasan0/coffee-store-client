import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',

        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });


            }
            const remaining = coffees.filter(cof => cof._id !== _id);
            setCoffees(remaining);
          })
      }
    });

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
          <Link to={`update-coffee/${_id}`}><button className="btn w-16 btn-warning">Edit</button></Link>
          <button onClick={() => handDelete(_id)} className="btn w-16 btn-error">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;