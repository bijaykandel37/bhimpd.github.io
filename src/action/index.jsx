import { v4 as uuidv4 } from "uuid";


export const add = (data) => {
    return {
      type: "ADD",
      payload: {
        id: uuidv4(),
        data: data,
      },
    };
  };


export const edit =(updatedProduct)=>{
    return{
        type: "EDIT",
        updatedProduct
    }

}



export const del =(id)=>{
    return{
        type: "DELETE",
        id
    }

}


export const view =(product)=>{
    return{
        type: "VIEW",
        payload:product
    }

}
