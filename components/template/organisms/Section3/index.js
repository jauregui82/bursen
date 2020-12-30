import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";

const slides = [
  <img src="https://picsum.photos/749/499/?random" alt="1" />,
  <img src="https://picsum.photos/749/499/?random" alt="2" />,
  <img src="https://picsum.photos/749/499/?random" alt="3" />,
  <img src="https://picsum.photos/749/499/?random" alt="4" />,
  <img src="https://picsum.photos/749/499/?random" alt="5" />,
];
const Section3 = () => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"));

  return (
    <>
      <Head>
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"></script>
      </Head>
      <style jsx>{``}</style>
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        {slides.map(slide => (
          <div class="item">
            {slide}
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};
Section3.propTypes = {
  action: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "btnWhite"]),
};

export default Section3;
