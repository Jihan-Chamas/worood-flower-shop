import { getAuth } from "firebase/auth";

const auth = getAuth();

export async function getIdToken() {
  if (auth.currentUser) {
    return await auth.currentUser.getIdToken();
  }
  return null;
}
