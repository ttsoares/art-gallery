import Desktop from "../components/Desktop";
import Tablet from "../components/Tablet";
import Mobile from "../components/Mobile";
import useWindowSize from "../hooks/useWindowSize";

const Home: React.FC = () => {
  const size = useWindowSize();

  // Another possible way to do it
  // const wWidth = window.matchMedia("(max-width: 768px)").matches;

  return (
    <>
      {size.width! >= 768 && <Desktop />}
      {size.width! <= 768 && size.width! >= 376 && <Tablet />}
      {size.width! <= 375 && <Mobile />}
    </>
  );
};

export default Home;
