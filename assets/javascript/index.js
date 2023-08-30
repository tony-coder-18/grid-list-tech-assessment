const buttonsWithDataToggle = document.querySelectorAll('button[data-toggle]');

const gridList = document.querySelector(".row");
const gifts = document.querySelectorAll(".gift");
const giftContents = document.querySelectorAll(".gift__content ");
const purchaseMessage = document.querySelector(".purchase-message");

buttonsWithDataToggle.forEach(button => {
    
    button.addEventListener('click', () => {

        // Change Layout properties
        if (button.getAttribute('data-toggle') == "list") {
            if (!document.querySelector(".row--list")) {
                gridList.classList.add("row--list");
                gifts.forEach((gift)=>{
                    gift.classList.add("gift--list");
                });
                giftContents.forEach((giftContent)=>{
                    giftContent.classList.add("gift__content--list");
                });
                purchaseMessage.classList.add("purchase-message--list");
            } else {
                console.log("you clicked list");
            }
        } else {
            if (document.querySelector(".row--list")) {
                gridList.classList.remove("row--list");
                gifts.forEach((gift)=>{
                    gift.classList.remove("gift--list");
                });
                giftContents.forEach((giftContent)=>{
                    giftContent.classList.remove("gift__content--list");
                });
                purchaseMessage.classList.remove("purchase-message--list");
            } else {
                console.log("you clicked grid");
            }
        }
    })
});

// To Add bg color on click
const buttonGrid = document.getElementById('gridToggle');
const buttonList = document.getElementById('listToggle');

buttonGrid.addEventListener('click', () => {
    if (!buttonGrid.classList.contains('grid-list-toggle-active')) {
        buttonGrid.classList.add('grid-list-toggle-active');
        buttonList.classList.remove('grid-list-toggle-active');
    }
});

buttonList.addEventListener('click', () => {
    if (!buttonList.classList.contains('grid-list-toggle-active')) {
        buttonList.classList.add('grid-list-toggle-active');
        buttonGrid.classList.remove('grid-list-toggle-active');
    }
});