import { createPopper } from '@popperjs/core/lib/popper-lite.js';

console.log( 'Hello World' );

const accordions = document.querySelectorAll(".accordion");
if ( accordions.length > 0 ) {
    accordions.forEach((accordion) => {
        // add event listener to accordion title
        const accordionTitle = accordion.querySelector(".accordion-title");
        const button = accordion.querySelector("button");
        accordionTitle.addEventListener("click", () => {
            event.preventDefault();
            accordion.classList.toggle("is-open");
            button.classList.toggle("rotate-180");
        });
        
    });
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

function show( popperInstance, tooltip ) {
    // Make the tooltip visible
    tooltip.setAttribute('data-show', '');

    tooltip.classList.toggle('show-tooltip')

    // Enable the event listeners
    popperInstance.setOptions((options) => ({
        ...options,
        modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
        ],
    }));

    // Update its position
    popperInstance.update();
}

function hide( popperInstance, tooltip ) {
    // Hide the tooltip
    tooltip.removeAttribute('data-show');

    tooltip.classList.toggle('show-tooltip')

    // Disable the event listeners
    popperInstance.setOptions((options) => ({
        ...options,
        modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
        ],
    }));
}

document.addEventListener("DOMContentLoaded", function(){
        
    const button = document.querySelector('.button-tooltip');
    const tooltip = document.querySelector('.tooltip');

    const buttons = document.querySelectorAll('.button-tooltip')

    buttons.forEach((button) => {
        let tooltip = button.nextElementSibling
        let popperInstance = createPopper(button, tooltip, {
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [40, 40],
                        },
                    },
                ],
            placement: 'top'
        })

        showEvents.forEach((event) => {
            button.addEventListener(event, function() {
                show(popperInstance, tooltip)
            });
        });
    
        hideEvents.forEach((event) => {
            button.addEventListener(event, function() {
                hide(popperInstance, tooltip)
            });
        });

        tooltip.classList.remove('hidden')
    })

});
