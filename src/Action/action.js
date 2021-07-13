import myStore from "../Store/store";

const myAction = (userdata,ref) => {
    if(ref==="user")
  myStore.dispatch({
    type: "user",
    payload: userdata,
  });
  else{
    myStore.dispatch({
        type: "post",
        payload: userdata,
      });
  }
}

export default myAction
