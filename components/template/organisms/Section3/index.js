import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import { CustomTypography } from "../../../template";

const slides = [
		<video autobuffer controls preload="auto" width="100%" height="499" style={{backgroundColor: "#000"}} poster="" data-description="Lorem ipsum dolor amet">
			<source src="http://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
		</video>,
		<video autobuffer controls preload="auto" width="100%" height="499" style={{backgroundColor: "#000"}} poster="" data-description="Lorem ipsum dolor amet">
			<source src="http://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
		</video>,
		<video autobuffer controls preload="auto" width="100%" height="499" style={{backgroundColor: "#000"}} poster="" data-description="Lorem ipsum dolor amet">
			<source src="http://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
		</video>,
		<video autobuffer controls preload="auto" width="100%" height="499" style={{backgroundColor: "#000"}} poster="" data-description="Lorem ipsum dolor amet">
			<source src="http://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
		</video>,
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
				<style>
						{`
							.owl-item.active.center {
									transform: scale(1.4);
									z-index: 1;
							}
							.owl-item {
								transition: .5s;
							}
							.owl-carousel .owl-stage-outer {
								height: calc(100vh - 400px);
								padding-top: 70px;
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
							.owl-nav {
								display: flex;
								justify-content: space-between;
								position: relative;
								top: -20rem;
							}
							.owl-prev{
								width: 55px;
								height: 55px;
								position: absolute!important;
								background-color: #FFFFFF!important;
								border-radius: 50%!important;
								font-size: 2rem!important;
								left: 4rem;
							}
							.owl-next{
								width: 55px;
								height: 55px;
								position: absolute!important;
								background-color: #FFFFFF!important;
								border-radius: 50%!important;
								font-size: 2rem!important;
								right: 4rem;
							}
							.owl-dot.active > span{
								background: #BD2626!important;
								width: 18px!important;
								height: 18px!important;
								margin: 1px 7px!important;
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
