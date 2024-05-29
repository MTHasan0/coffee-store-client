import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './Header';

const UpdateCoffee = () => {


    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
        <Header></Header>
            <div className='flex justify-center items-center '>


                <form onSubmit={handleUpdateCoffee} className='bg-red-50 p-10 w-[50%] space-y-4'>
                    <p className='text-3xl font-bold text-center p-5'>Update your Coffee! <span className='text-purple-600 font-bold'> {name}</span></p>
                    <div className='flex gap-4  '>
                        <div className='w-full'>
                            <label className="input input-bordered flex items-center gap-2 w-full">

                                <input type="text" name='name' className="grow w-full" placeholder="Coffee name" value={name} />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className="input input-bordered flex items-center gap-2 w-full">


                                <input type="text" name='quantity' className="grow w-full" placeholder="Available quantity" defaultValue={quantity} />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-4  '>
                        <div className='w-full'>
                            <label className="input input-bordered flex items-center gap-2 w-full">

                                <input type="text" name='supplier' className="grow" placeholder="Supplier Name" defaultValue={supplier} />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className="input input-bordered flex items-center gap-2 w-full">


                                <input type="text" name='taste' className="grow" placeholder="Taste" defaultValue={taste} />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-4  '>
                        <div className='w-full'>
                            <label className="input input-bordered flex items-center gap-2 w-full">

                                <input type="text" name='category' className="grow" placeholder="Category" defaultValue={category} />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className="input input-bordered flex items-center gap-2 w-full">


                                <input type="text" name='details' className="grow" placeholder="Details" defaultValue={details} />
                            </label>
                        </div>
                    </div>
                    <div className='justify-center items-center'>
                        <div className='w-full '>
                            <label className="input input-bordered flex items-center gap-2">


                                <input type="text" name='photo' className="grow " placeholder="Photo URL" defaultValue={photo} />
                            </label>
                        </div>
                    </div>

                    <input className='btn btn-block text-white bg-slate-500 hover:text-black hover:duration-1000' type='submit' value='Update Coffee'></input>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;