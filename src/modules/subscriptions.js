import axios from "axios";
import { getAuthHeaders } from "./auth";

const Subscriptions = {
  async create(stripeToken) {
    let response;
    try {
      const result = await axios.post(
        "/subscriptions",
        {
          stripeToken: stripeToken,
        },
        {
          headers: getAuthHeaders(),
        }
      );
      response = { success: true, message: result.data.message };
    } catch (error) {
      response = { success: false, message: error.response.data.message };
    } finally {
      return response;
    }
  },
};

export default Subscriptions;
