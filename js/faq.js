//   Questions Accordion
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(function(accordionBtn) {
    accordionBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if(!accordionBtn.nextElementSibling.classList.contains('active')) {
            accordionBtn.nextElementSibling.classList.add('active');
            accordionBtn.nextElementSibling.style.cssText = `
                visibility: visible;
                opacity: 1;
                height: 100%;
                padding: 2em 0;
            `;
            accordionBtn.lastElementChild.style.transform = `rotate(135deg)`;
        } else {
            accordionBtn.nextElementSibling.classList.remove('active');
            accordionBtn.nextElementSibling.style.cssText = `
            visibility: hidden;
            opacity: 0;
            height: 0;
            padding: 0;
        `;
        accordionBtn.lastElementChild.style.transform = `rotate(0)`;
        }
    })
});
