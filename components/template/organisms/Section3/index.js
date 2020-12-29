import PropTypes from "prop-types";
// import {Carousel} from '3d-react-carousal';
const slides = [
    <img  src="https://picsum.photos/749/499/?random" alt="1" />,
    <img  src="https://picsum.photos/749/499/?random" alt="2" />  ,
    <img  src="https://picsum.photos/749/499/?random" alt="3" />  ,
    <img  src="https://picsum.photos/749/499/?random" alt="4" />  ,
    <img src="https://picsum.photos/749/499/?random" alt="5" />   ];
const Section3 = () =>{


    return(
        <>
            {/* <Carousel slides={slides} autoplay={true} interval={10000}/> */}
            
            <style jsx>
                {`
                `}
            </style>
        </>
    )
}
Section3.propTypes = {
    action: PropTypes.func,
    children: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf([
        "primary",
        "btnWhite"
      ])
  };

export default Section3;