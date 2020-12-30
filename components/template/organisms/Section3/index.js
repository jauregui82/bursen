import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import { CustomTypography } from "../../../template";

const slides = [
	<div className="item-video"><a className="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"></a></div>,
	<div className="item-video" data-merge="1"><a className="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"></a></div>,
  <img src="https://picsum.photos/749/499/?random" alt="2" />,
  <img src="https://picsum.photos/749/499/?random" alt="3" />,
  <img src="https://picsum.photos/749/499/?random" alt="4" />,
  <img src="https://picsum.photos/749/499/?random" alt="5" />,
];
const Section3 = () => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"));
	
  return (
    <div id="como-usar-simulador" style={{position:"relative", paddingBottom: "3rem", marginBottom: "8rem"}}>
      <Head>
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"></script>
      </Head>
			<div className={"title1"}>
				<CustomTypography  name="title2">¿Cómo usar este simulador?</CustomTypography>
			</div>
      <OwlCarousel 
        className="owl-theme" 
        loop 
        center 
        margin={10} 
				nav
				video
      >
        {slides.map((slide,i) => (
          <div class="item" key={i}>
            {slide}
          </div>
        ))}
      </OwlCarousel>
			<div className={"affterSlider"}/>
			<style jsx>
							{`
								.title1 {
									padding-bottom: 11rem;
								}
								.owl-video-play-icon {
									background: url(./video.svg) no-repeat;
								}
								.affterSlider {
									width: 100%;
									height: 262px;
									background-color: #313342;
									position: absolute;
									bottom: -25px;
								}
							`}
					</style>
    </div>
  );
};
Section3.propTypes = {
  action: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "btnWhite"]),
};

export default Section3;
