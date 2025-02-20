import axios from "axios";
import { getIdToken } from "./auth"; // Import getIdToken

const API_BASE_URL =
  "https://worood-flower-shop-6fd48-default-rtdb.europe-west1.firebasedatabase.app/";

export async function createResource(data) {
  const token = await getIdToken();
  if (!token) {
    throw new Error("User is not authenticated");
  }

  const response = await axios.post(
    `${API_BASE_URL}/resources.json?auth=${token}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log("Resource created:", response.data);
  return response.data;
}
