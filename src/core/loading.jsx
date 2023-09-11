import Lottie from "react-lottie";
import loadingData from "../assets/loading.json";
const Loading = ({ height, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={height} width={width} />
    </>
  );
};

export default Loading;
