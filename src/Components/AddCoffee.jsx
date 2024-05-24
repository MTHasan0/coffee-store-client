import React from 'react';
import Swal from 'sweetalert2'

// or via CommonJS
// const Swal = require('sweetalert2')

const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })



    }

    return (
        <div className='flex justify-center items-center '>

            <form onSubmit={handleAddCoffee} className='bg-red-50 p-10 w-[50%] space-y-4'>
                <p className='text-3xl font-bold text-center p-5'>Add Coffee here</p>
                <div className='flex gap-4  '>
                    <div className='w-full'>
                        <label className="input input-bordered flex items-center gap-2 w-full">

                            <input type="text" name='name' className="grow w-full" placeholder="Coffee name" />
                        </label>
                    </div>
                    <div className='w-full'>
                        <label className="input input-bordered flex items-center gap-2 w-full">


                            <input type="text" name='quantity' className="grow w-full" placeholder="Available quantity" />
                        </label>
                    </div>
                </div>
                <div className='flex gap-4  '>
                    <div className='w-full'>
                        <label className="input input-bordered flex items-center gap-2 w-full">

                            <input type="text" name='supplier' className="grow" placeholder="Supplier Name" />
                        </label>
                    </div>
                    <div className='w-full'>
                        <label className="input input-bordered flex items-center gap-2 w-full">


                            <input type="text" name='taste' className="grow" placeholder="Taste" />
                        </label>
                    </div>
                </div>
                <div className='flex gap-4  '>
                    <div className='w-full'>
                        <label className="input input-bordered flex items-center gap-2 w-full">

                            <input type="text" name='category' className="grow" placeholder="Category" />
                        </label>
                    </div>
                    <div className='w-full'>
                        <label className="input input-bordered flex items-center gap-2 w-full">


                            <input type="text" name='details' className="grow" placeholder="Details" />
                        </label>
                    </div>
                </div>
                <div className='justify-center items-center'>
                    <div className='w-full '>
                        <label className="input input-bordered flex items-center gap-2">


                            <input type="text" name='photo' className="grow " placeholder="Photo URL" />
                        </label>
                    </div>
                </div>

                <input className='btn btn-block text-white bg-slate-500 hover:text-black hover:duration-1000' type='submit' defaultValue='Add Coffee'></input>
            </form>
        </div>
    );
};

export default AddCoffee;