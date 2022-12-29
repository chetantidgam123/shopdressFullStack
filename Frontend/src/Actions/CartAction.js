import axios from "axios";
import { data } from "jquery";
import { json } from "react-router-dom";

export  const GetCartData = (dispatch)=>{

   const getDatabyId = async (id)=>{
    let data = ''
       await axios.get(`https://dull-plum-parrot-boot.cyclic.app/product/${id}`)
       .then((res)=>{ res.json()})
       .then((data)=>{
            data =  data.data.data;
        })
        return data;
   }
       async function GetData(){
        axios.get('https://dull-plum-parrot-boot.cyclic.app/user/cart',{ 
            headers: { 
                "Authorization" : `Bearer ${localStorage.getItem("TokenID")}`,
               }
        })
        .then(async (data)=>{
            let b =[]
            let a = data.data.data
            b = await a.map((ele)=>{
                let data = getDatabyId(ele.productId)
                return data
            })
            console.log(b);
            dispatch({
                type:"GETCARTDATA",
                payload:b
            })
        })
        // let res = await fetch('https://dead-gold-binturong-kilt.cyclic.app/cart');
        // let data= JSON.parse(localStorage.getItem('CartData'))||[];
    
        // dispatch({
        //     type:"GETCARTDATA",
        //     payload:data
        // })

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
