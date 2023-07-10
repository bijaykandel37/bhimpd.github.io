import { v4 as uuidv4 } from "uuid";

const initialState = {
  list: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE":
      const updatedList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: updatedList,
      };

    case "EDIT":
      const updatedProduct = action.updatedProduct;
      const editedList = state.list.map((elem) => {
        if (elem.id === updatedProduct.id) {
          return {
            id: updatedProduct.id,
            data: updatedProduct.data,
          };
        }
        return elem;
      });
      return {
        ...state,
        list: editedList,
      };

      case "LOAD":
        return {
          ...state,
          list: action.data,
        };
case "VIEW":
  return{
    ...state,
    selectedProduct:action.payload,
  }   

    default:
      return state;
  }
};

export default ProductReducer;
