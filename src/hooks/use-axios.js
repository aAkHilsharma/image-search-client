import axios from "axios";
import useImages from "./use-images";

const useAxios = () => {
  const { setImages, setLoading } = useImages();

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchImages = async (url) => {
    setLoading(true);

    setTimeout(async () => {
      try {
        const res = await axios(url);
        setImages(res.data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  return { fetchImages };
};

export default useAxios;
