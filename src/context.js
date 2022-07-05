import React, { useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  cart:cartItems,
  totalPrice:0,
  totalQuantity:0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () =>{
    dispatch({ type:'CLEAR_CART'})
  }

  const removeItem = (id) =>{
    dispatch({ type:'REMOVE_ITEM', payload:id})
  }

  const increaseItem = (id) =>{
    dispatch({ type:'INCREASE_ITEM', payload:id})
  }

  const decreaseItem = (id) =>{
    dispatch({ type:'DECREASE_ITEM', payload:id})
  }

  useEffect(() => {
    dispatch({type: 'SET_TOTAL_QUANTITY'})
    dispatch({type: 'SET_TOTAL_PRICE'})
  }, [state.cart])
 

  return (
    <AppContext.Provider value={{ ...state, clearCart, removeItem, increaseItem, decreaseItem }}>
      {children}
    </AppContext.Provider>
  )
}


export { AppContext, AppProvider }
