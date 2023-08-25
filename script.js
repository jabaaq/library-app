'use strict';

const bookTitle = document.querySelector('titleInput'),
    bookAuthor = document.querySelector('authorInput'),
    bookPages = document.querySelector('pageNumber'),
    addBookbtn = document.querySelector('.add-book-btn'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('#close-modal-btn')


function showModal() {
    modal.classList.add('open')
}

function closeModal() {
    modal.classList.remove('open')
}

addBookbtn.addEventListener('click', () => {
    showModal();
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
})

window.addEventListener('click', () => {
    if (event.target == modal) {
        closeModal();
    }
})


modalCloseBtn.addEventListener('click', () => {
    closeModal();
})




const myLibrary = [];

function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {

}