import JtockAuth from "j-tockauth";

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://";
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

export { login };
