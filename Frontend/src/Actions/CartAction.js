import axios from "axios";
import { data } from "jquery";
import { json } from "react-router-dom";

export  const GetCartData = (dispatch)=>{
       async function GetData(){
        axios.get('http://localhost:3066/user/cartitem',{ 
            headers: { 
                "Authorization" : `Bearer ${localStorage.getItem("TokenID")}`,
               }
        })
        .then((data)=>{
            dispatch({
                type:"GETCARTDATA",
                payload:data.data.cartItem || []
            })
            
        })

       }
       GetData()
}
export  const GetPatchData = async (Data,id,dispatch)=>{
    await fetch(`https://dead-gold-binturong-kilt.cyclic.app/cart/${id}`,{
      method:"PATCH",
      body: JSON.stringify(Data),
      headers :{
      "Content-Type":"application/json",
      },   
     });
 

}
export const GetDeleteData = async (id,index,Array,dispatch)=>{
      
      let temp=[]
      Array.splice(index,1);
 
         temp=[...Array]
     
         dispatch({
             type:"GETCARTDATA",
             payload:temp
      })
    //   await fetch(`https://dead-gold-binturong-kilt.cyclic.app/cart/${id}`,{
    //      method:'DELETE'
    //   });
    localStorage.setItem('CartData',JSON.stringify(temp));
      
      
}     
