const section = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const header = document.querySelector('header');
const gradients = [
    'linear-gradient(to right top, #414141, #000000)',
    
];

const options ={
    threshold: 0.7
};

let observer =  new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            //bubble.style.background = gradients[gradientIndex];
            //header.style.background = gradients[gradientIndex];


        }
    });
}


section.forEach(section => {
    observer.observe(section);
})