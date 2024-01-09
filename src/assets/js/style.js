const style = {
    visualAnimation: function () {
        document.addEventListener("DOMContentLoaded", function () {
            console.log('Start Animation');

        });
    }
}

const utils = {
    modal: {
        init: function () {
            const modalWrapper = document.querySelectorAll('.modal-wrapper');
            const dim = document.querySelectorAll('.modal-wrapper .dim');
            const closeBtn = document.querySelectorAll('.modal-wrapper .modal_close');
        
            function closeModal() {
                modalWrapper.forEach(el => {
                    el.classList.remove('on');
                });
            }
        
            dim.forEach(el => {
                el.addEventListener('click', closeModal);
            });
        
            closeBtn.forEach(el => {
                el.addEventListener('click', closeModal);
            });
        },
        open: function (id) {
            const modalId = id || event.currentTarget.getAttribute('data-modal');

            if (!modalId) {
                return;
            }

            const modalWrapper = document.querySelector(`#${modalId}`);
            modalWrapper.classList.add('on');
        },
        close: function (modalId) {
            const modalWrapper = document.querySelector(`#${modalId}`);
            modalWrapper.classList.remove('on');
        }
    },
    imageModal: {
        init: function (modalId) {
            const modalWrapper = document.querySelector(`#${modalId}`);
            const dim = document.querySelector(`#${modalId} .dim`);
        
            function closeModal() {
                modalWrapper.classList.remove('on');
                document.querySelector('html').removeAttribute('style', 'overflow');
            }
            
            dim.addEventListener('click', closeModal);
        },
        open: function (id) {
            const modalId = id || event.currentTarget.getAttribute('data-modal');
            const src = event.target.getAttribute('src');

            if (!modalId) {
                return;
            }

            const modalWrapper = document.querySelector(`#${modalId}`);
            modalWrapper.classList.add('on');
            document.querySelector('html').style.overflow = 'hidden';

            const image = modalWrapper.querySelector('img');
            image.setAttribute('src', src);
        },
        close: function (modalId) {
            const modalWrapper = document.querySelector(`#${modalId}`);
            modalWrapper.classList.remove('on');
        }
    },
    createCustomElement(tagName, textContent = null, attributes = {}) {
        const element = document.createElement(tagName);

        if (textContent !== null) {
            element.textContent = textContent;
        }
    
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
    
        return element;
    },
    
}