import axios from "axios";
import { message } from "antd";

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const res=await axios.post("http://localhost:8000/api/users/login",{
      email:reqObj.email,
      password:reqObj.password
    });
    console.log(reqObj);
    
    // const response = await axios.post(
    //   "http://localhost:8000/api/users/login",
    //   reqObj
    // );
    // const { admin, username, _id } = response.data;
    // localStorage.setItem("user", JSON.stringify({ admin, username, _id }));
    // message.success("Login success");
    // dispatch({ type: "LOADING", payload: false });
    // setTimeout(() => {
    //   window.location.href = "/";
    // }, 500);
  } catch (error) {
    console.log(error);
    
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/users/register",
      reqObj
    );
    message.success("Registration successfull");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);

    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};
