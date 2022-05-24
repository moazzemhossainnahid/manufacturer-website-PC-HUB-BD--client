import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

import { useNavigate, useParams } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
;

const Purchase = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

const [quantity,setQuantity] = useState(0)
  const { id } = useParams();
  const [selected, SetSelected] = useState({});
  useEffect(() => {
    const selected = async () => {
      const { data } = await axios.get(http://localhost:5000/products/${id});
      SetSelected(data);
    
    };
    selected();
  }, [id]);

 const getQuantity = (event)=>{
setQuantity(event.target.value);

 }
 const handleSubmit = async(event) => {
   event.preventDefault();
 const  orderPrice = parseInt(quantity ) * parseInt(selected.price)
  const orderInfo ={email:user.email, product:selected.name,quantity:quantity ,total:orderPrice ,img:selected.img}
  
   const { data } = await axios.post('http://localhost:5000/order',{orderInfo})
  
   if(data.insertedId){
     toast.success('Order added successfully')
     navigate('/dashboard')
   }
     
  
 }
 
  return (<div className="flex justify-center pt-5 px-2">
  <div className="card  w-96 shadow-xl">
  <figure className="px-2 pt-8">
    <img  src={selected.img} alt="Shoes" className="rounded-xl w-1/4" />
  </figure>
  <form onSubmit={handleSubmit} className="flex flex-col px-10    ">
   
  <p className="text-4xl font-bold mt-2">{selected.name}</p>
  <p className="text-justify font-semibold">{selected.description}</p>
    <p className="text-xl font-semibold py-2">Available:{selected.available}</p>
  
    <label className="text-xl font-semibold py-2">Minimum quantity</label>
  <input onChange={getQuantity} 
   
   type="text" name='quan'  className="input input-bordered w-full text-lg " />
   {quantity <= 9 ? <small className="text-red-400">minimum quantity 10</small> : ''}
   {quantity > selected.available ? <small className="text-red-400">not available</small> : ''}
    <label className="text-xl font-semibold py-4">Price: <span className="font-bold">${selected.price} pp</span></label>
  
   
   
   
    <input disabled={quantity <= 9 || quantity > selected.available}
     className={quantity <= 9 || quantity > selected.available ? 'btn bg-gradient-to-r from-secondary/25 mb-4 to-primary/25 border-none text-white ' : 'btn bg-gradient-to-r from-secondary mb-4 to-primary border-none text-white '} type="submit" value="Confirm order" />
    
  </form>
</div>
  
  
  </div>
    

  )}
    
    export default Purchase;