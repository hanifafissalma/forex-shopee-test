export function getKurs(id){
    return (dispatch)=>{
      if(id!==undefined){
        dispatch({
          type: "GET_KURS",
          payload: id
        })
      }
    }
  }

export function deleteKurs(id){
  return (dispatch)=>{
    dispatch({
      type:"DELETE_KURS",
      payload: id
    })
  }
  
}
  