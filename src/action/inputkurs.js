export function getInputKurs(id){
    return (dispatch)=>{
      if(id!==undefined){
        dispatch({
          type: "GET_INPUT_KURS",
          payload: id
        })
      }
    }
  }
  