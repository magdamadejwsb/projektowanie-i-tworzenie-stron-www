const accordionBtns = document.querySelectorAll('.accordion_btn');
const accordionBtnsArrow = document.querySelectorAll('.fa-chevron-down');

function openAccordionItem (){
    if (this.nextElementSibling.classList.contains('active_accordion_box')) {
        this.nextElementSibling.classList.remove('active_accordion_box');
        this.lastElementChild.classList.remove('active_accordion_btn');
    } else {
        closeAccordionItem();
        this.nextElementSibling.classList.toggle('active_accordion_box');
        this.lastElementChild.classList.toggle('active_accordion_btn');
    }
}

const closeAccordionItem = () => {
    const allActiveItems = document.querySelectorAll('.accordion_info');
    allActiveItems.forEach(item => {
        item.classList.remove('active_accordion_box');
    })
    accordionBtnsArrow.forEach(arrowItem => {
        arrowItem.classList.remove('active_accordion_btn')
    })
}

accordionBtns.forEach(btn => {
    btn.addEventListener('click', openAccordionItem)
})
