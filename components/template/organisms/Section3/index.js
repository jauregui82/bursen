import PropTypes from "prop-types";
import { useEffect } from "react";
import { palett } from "../../../../styles/theme";
// import"./carousel";
class Carousel {
    galleryControlsContainer = document.querySelector('.gallery-controls');

    constructor(container, items, controls) {
      this.carouselContainer = container;
      this.carouselControls = controls;
      this.carouselArray = [...items];
    }
  
    // Assign initial css classes for gallery and nav items
    setInitialState() {
      this.carouselArray[0].classList.add('gallery-item-first');
      this.carouselArray[1].classList.add('gallery-item-previous');
      this.carouselArray[2].classList.add('gallery-item-selected');
      this.carouselArray[3].classList.add('gallery-item-next');
      this.carouselArray[4].classList.add('gallery-item-last');
  
      document.querySelector('.gallery-nav').childNodes[0].className = 'gallery-nav-item gallery-item-first';
      document.querySelector('.gallery-nav').childNodes[1].className = 'gallery-nav-item gallery-item-previous';
      document.querySelector('.gallery-nav').childNodes[2].className = 'gallery-nav-item gallery-item-selected';
      document.querySelector('.gallery-nav').childNodes[3].className = 'gallery-nav-item gallery-item-next';
      document.querySelector('.gallery-nav').childNodes[4].className = 'gallery-nav-item gallery-item-last';
    }
  
    // Update the order state of the carousel with css classes
    setCurrentState(target, selected, previous, next, first, last) {
  
      selected.forEach(el => {
        el.classList.remove('gallery-item-selected');
  
        if (target.className == 'gallery-controls-previous') {
          el.classList.add('gallery-item-next');
        } else {
          el.classList.add('gallery-item-previous');
        }
      });
  
      previous.forEach(el => {
        el.classList.remove('gallery-item-previous');
  
        if (target.className == 'gallery-controls-previous') {
          el.classList.add('gallery-item-selected');
        } else {
          el.classList.add('gallery-item-first');
        }
      });
  
      next.forEach(el => {
        el.classList.remove('gallery-item-next');
  
        if (target.className == 'gallery-controls-previous') {
          el.classList.add('gallery-item-last');
        } else {
          el.classList.add('gallery-item-selected');
        }
      });
  
      first.forEach(el => {
        el.classList.remove('gallery-item-first');
  
        if (target.className == 'gallery-controls-previous') {
          el.classList.add('gallery-item-previous');
        } else {
          el.classList.add('gallery-item-last');
        }
      });
  
      last.forEach(el => {
        el.classList.remove('gallery-item-last');
  
        if (target.className == 'gallery-controls-previous') {
          el.classList.add('gallery-item-first');
        } else {
          el.classList.add('gallery-item-next');
        }
      });
    }
  
    // Construct the carousel navigation
    setNav() {
      this.carouselContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';
  
      this.carouselArray.forEach(item => {
        const nav = this.carouselContainer.lastElementChild;
        nav.appendChild(document.createElement('li'));
      }); 
    }
  
    // Construct the carousel controls
    setControls() {
      this.carouselControls.forEach(control => {
        this.galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
      }); 
  
      !!this.galleryControlsContainer.childNodes[0] ? this.galleryControlsContainer.childNodes[0].innerHTML = this.carouselControls[0] : null;
      !!this.galleryControlsContainer.childNodes[1] ? this.galleryControlsContainer.childNodes[1].innerHTML = this.carouselControls[1] : null;
    }
   
    // Add a click event listener to trigger setCurrentState method to rearrange carousel
    useControls() {
      const triggers = [...this.galleryControlsContainer.childNodes];
  
      triggers.forEach(control => {
        control.addEventListener('click', () => {
          const target = control;
          const selectedItem = document.querySelectorAll('.gallery-item-selected');
          const previousSelectedItem = document.querySelectorAll('.gallery-item-previous');
          const nextSelectedItem = document.querySelectorAll('.gallery-item-next');
          const firstCarouselItem = document.querySelectorAll('.gallery-item-first');
          const lastCarouselItem = document.querySelectorAll('.gallery-item-last');
  
          this.setCurrentState(target, selectedItem, previousSelectedItem, nextSelectedItem, firstCarouselItem, lastCarouselItem);
        });
      });
    }
  }

const Section3 = () =>{
    useEffect(()=>{
        const galleryContainer = document.querySelector('.gallery-container');
        const galleryControls = ['previous', 'next'];
        const galleryItems = document.querySelectorAll('.gallery-item');
        const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
        exampleCarousel.setControls();
        exampleCarousel.setNav();
        exampleCarousel.setInitialState();
        exampleCarousel.useControls();
    },[])

    return(
        <>
        <div className="gallery">
            <div className="gallery-container">
            <img className="gallery-item" src="http://fakeimg.pl/600/?text=1" />
            <img className="gallery-item" src="http://fakeimg.pl/600/?text=2" />
            <img className="gallery-item" src="http://fakeimg.pl/600/?text=3" />
            <img className="gallery-item" src="http://fakeimg.pl/600/?text=4" />
            <img className="gallery-item" src="http://fakeimg.pl/600/?text=5" />
            </div>
            <div className="gallery-controls"></div>
        </div>
            
            <style jsx>
                {`
                    .gallery {
                        width: 100%;
                    }
                    
                    .gallery-container {
                        align-items: center;
                        display: flex;
                        height: 400px;
                        margin: 0 auto;
                        max-width: 1000px;
                        position: relative;
                    }
                    
                    .gallery-item {
                        height: 150px;
                        opacity: .4;
                        position: absolute;
                        transition: all 0.3s ease-in-out;
                        width: 150px;
                        z-index: 0;
                    }
                    
                    .gallery-item.gallery-item-selected {
                        box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
                        height: 300px;
                        opacity: 1;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 300px;
                        z-index: 2;
                    }
                    
                    .gallery-item.gallery-item-previous,
                    .gallery-item.gallery-item-next {
                        height: 200px;
                        opacity: 1;
                        width: 200px;
                        z-index: 1;
                    }
                    
                    .gallery-item.gallery-item-previous {
                        left: 30%;
                        transform: translateX(-50%);
                    }
                    
                    .gallery-item.gallery-item-next {
                        left: 70%;
                        transform: translateX(-50%);
                    }
                    
                    .gallery-item.gallery-item-first {
                        left: 15%;
                        transform: translateX(-50%);
                    }
                    
                    .gallery-item.gallery-item-last {
                        left: 85%;
                        transform: translateX(-50%);
                    }
                    
                    .gallery-controls {
                        display: flex;
                        justify-content: center;
                        margin: 30px 0;
                    }
                    
                    .gallery-controls button {
                        border: 0;
                        cursor: pointer;
                        font-size: 16px;
                        margin: 0 20px;
                        padding: 0 12px;
                        text-transform: capitalize;
                    }
                    
                    .gallery-controls button:focus {
                        outline: none;
                    }
                    
                    .gallery-controls-previous {
                        position: relative;
                    }
                    
                    .gallery-controls-previous::before {
                        border: solid #000;
                        border-width: 0 2px 2px 0;
                        content: '';
                        display: inline-block;
                        height: 4px;
                        left: -10px;
                        padding: 2px;
                        position: absolute;
                        top: 0;
                        transform: rotate(135deg) translateY(-50%);
                        transition: left 0.15s ease-in-out;
                        width: 4px;
                    }
                    
                    .gallery-controls-previous:hover::before {
                        left: -18px;
                    }
                    
                    .gallery-controls-next {
                        position: relative;
                    }
                    
                    .gallery-controls-next::before {
                        border: solid #000;
                        border-width: 0 2px 2px 0;
                        content: '';
                        display: inline-block;
                        height: 4px;
                        padding: 2px;
                        position: absolute;
                        right: -10px;
                        top: 50%;
                        transform: rotate(-45deg) translateY(-50%);
                        transition: right 0.15s ease-in-out;
                        width: 4px;
                    }
                    
                    .gallery-controls-next:hover::before {
                        right: -18px;
                    }
                    
                    .gallery-nav {
                        bottom: -15px;
                        display: flex;
                        justify-content: center;
                        list-style: none;
                        padding: 0;
                        position: absolute;
                        width: 100%;
                    }
                    
                    .gallery-nav li {
                        background: #ccc;
                        border-radius: 50%;
                        height: 10px;
                        margin: 0 16px;
                        width: 10px;
                    }
                    
                    .gallery-nav li.gallery-item-selected {
                        background: #555;
                    }
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