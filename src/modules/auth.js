import JtockAuth from "j-tockauth";

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://api-el-gaucho-nyheter.herokuapp.com";
} else {
  apiUrl = "http://localhost:3000";
}

const auth = new JtockAuth({
  host: apiUrl,
  prefixUrl: "/api/v1",
});

const login = async (event, dispatch, history) => {
  event.preventDefault();
  try {
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await auth.signIn(email, password);
    dispatch({
      type: "AUTHENTICATE",
      payload: {
        authenticated: response.success,
        currentUser: response.data,
      },
    });

    history.replace({ pathname: "/" });
  } catch (error) {
    return error.response.data.error;
  }
};

const signUp = async (event, dispatch, history) => {
  event.preventDefault();
  try {
    const email = event.target.email.value;
    const password = event.target.password.value;
    const password_confirmation = event.target.password_confirmation.value;
    const response = await auth.signUp(email, password, password_confirmation);

    dispatch({
      type: "AUTHENTICATE",
      payload: {
        authenticated: response.data.success,
        currentUser: response.data.data,
      },
    });

    history.push("/", { message: response.data.data.message });
  } catch (error) {
    dispatch({
      type: "AUTHENTICATE",
      payload: {
        message: "Invalid input, please try again.",
      },
    });
  }
};

const getAuthHeaders = () => {
  let headers = sessionStorage.getItem("J-tockAuth-Storage");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json",
  };
  return headers;
};

export { login, signUp, getAuthHeaders };
