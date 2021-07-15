import myStore from "../Store/store";

const myAction = (userdata, ref) => {
  if (ref === "user")
    myStore.dispatch({
      type: "user",
      payload: userdata,
    });
  else if (ref === "post") {
    myStore.dispatch({
      type: "post",
      payload: userdata,
    });
  } else if (ref === "username") {
    myStore.dispatch({
      type: "username",
      payload: userdata,
    });
  } else if (ref === "location") {
    myStore.dispatch({
      type: "location",
      payload: userdata,
    });
  }
};

export default myAction;
