class Carousel {
  constructor(id) {
    this.el = document.querySelector(id);
    this.wrapper = this.el.querySelector('#js-car-wr');
    this.slides = this.el.querySelectorAll('.js-car-item');
    this.frames = 20;
    this.controlsArea = this.el.querySelector('#car-controls');
    this.controlsLeft = this.controlsArea.querySelectorAll('a')[0];
    this.controlsRight = this.controlsArea.querySelectorAll('a')[1];
    this.dotsArea = this.el.querySelector("#js-car-scroller");
    this.dots = this.dotsArea.querySelectorAll('.js-car-dots');
    this.slideIndex = 0;
    this.currentSlide = this.slides[this.slideIndex];
    this.wid = this.slides[this.slideIndex].offsetWidth;
    this.scrolledPx = 0;
  }
  
  init() {
    this.controlsRight.addEventListener('click', (e) => {
      e.preventDefault();
      this.move()
    });
    this.controlsLeft.addEventListener('click', (e) => {
      e.preventDefault();
      this.moveBackwards();
    });
  }
  
  move() {
    let that = this;
    let wrapper = this.wrapper;
    let slides = this.slides;
    let current = this.currentSlide;
    let len = slides.length;
    let wid = Math.round(this.wid);
    let frames = this.frames;
    let step = wid / frames;
    let finishPoint = 0;
    let allSlidesWid = Math.floor(wid * (len - 1));
    let scrolled = 0;
    
    let roll = setInterval(function(e) {
      if (that.slideIndex !== -1) {        
        wrapper.scrollLeft += step;
        finishPoint += step;
        scrolled += step;
      }
      
      if (that.scrolledPx >= allSlidesWid || that.slideIndex === -1) {
        that.slideIndex = -1;
        let stepback = that.scrolledPx / frames;
        wrapper.scrollLeft -= stepback;
        scrolled += stepback;
        if (scrolled >= (that.scrolledPx)) {
          wrapper.scrollLeft -= step;
          that.scrolledPx = 0;
          that.slideIndex = 0;
          scrolled = 0;
          that.currentSlide = slides[that.slideIndex];
          that.dotsChangeClass.apply(that);
          clearInterval(roll);
        }        
      }
      
      if (finishPoint > wid) {
        let temp = wid - Math.round(finishPoint);
        wrapper.scrollLeft -= -(temp);
        that.scrolledPx += scrolled;
        that.scrolledPx = Math.round(that.scrolledPx);
        if (that.slideIndex === len) {
          that.slideIndex = 0;
        } else {
          that.slideIndex++;          
        }
        that.currentSlide = slides[that.slideIndex];        
        that.dotsChangeClass.apply(that);        
        clearInterval(roll);
      }
    }, 500 / frames);
    
  }
  
  moveBackwards() {
    let that = this;
    let wrapper = this.wrapper;
    let slides = this.slides;
    let current = this.currentSlide;
    let len = slides.length;
    let wid = Math.round(this.wid);
    let frames = this.frames;
    let step = wid / frames;
    let finishPoint = 0;
    let allSlidesWid = Math.floor(wid * (len - 1));
    let scrolled = 0;
    let roll = setInterval(function(e) {
      wrapper.scrollLeft -= step;
      finishPoint += step;
      scrolled += step;
      
      if (that.scrolledPx <= 0) {
        for (let i = 0; i < that.slideIndex; i++) {
          that.move();
        }
        
        that.scrolledPx = 0;
        that.slideIndex = 0;
        that.currentSlide = slides[that.slideIndex];
        clearInterval(roll);
      }
      
      if (finishPoint > wid) {
        let temp = wid - Math.round(finishPoint);
        wrapper.scrollLeft -= temp;
        that.scrolledPx -= scrolled;
        that.scrolledPx = Math.round(that.scrolledPx);
        that.slideIndex--;
        that.currentSlide = slides[that.slideIndex];
        that.dotsChangeClass.apply(that);
        clearInterval(roll);
      }
    }, 500 / frames);
    
  }
  
  dotsChangeClass() {
    this.dots.forEach(dot => dot.classList.remove('active'));
    this.dots[this.slideIndex].classList.add('active');
  }
  
  autoslide() {
    const that = this;
    let as = setTimeout(() => {
      that.move();
      setTimeout(that.autoslide(), 5000);
    }, 5000);
  }
  
}