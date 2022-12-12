import axios from "axios";

export const getFavourites = async (uid: string) => {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      method: "GET",
    };
    const data = await axios.get(
      `https://cookbook-ochre-six.vercel.app/favourites?uid=${uid}`,
      options
    );
    if (data.data) {
      return data.data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
