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

const login = async (event) => {
  event.preventDefault();
  try {
    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await auth.signIn(email, password);

    debugger;
  } catch (error) {
    return error.response.data.error;
  }
};

export { login };
