'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const addBookBtn = document.querySelector('.add-book-btn'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('.close-modal-btn');




    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    const myLibrary = [];

    function render() {
        let libraryBook = document.querySelector('.books-grid');
        libraryBook.innerHTML = '';
        for (let i = 0; i < myLibrary.length; i++) {
            let book = myLibrary[i];
            let bookEl = document.createElement('div')
            bookEl.innerHTML = `
            <div class="added-book">
                <div class="book-information">
                    <div class="bookTitle">'${book.title}'</div>
                    <div class="bookAuthor">${book.author}</div>
                    <div class="bookPageCount">${book.pages}</div>
                    <div class="bookReadStatus">Have not read yet.</div>
                    <button class="remove-btn">Remove</button>
                </div>
            </div>
            `
            libraryBook.appendChild(bookEl)
        }
        const removeBtn = document.querySelectorAll('.remove-btn');

    };

    function removeCard(i) {
        myLibrary.splice(i, 1)
        render();
    }




    function addBookToLibrary() {
        const bookTitle = document.querySelector('#titleInput').value,
            bookAuthor = document.querySelector('#authorInput').value,
            bookPages = document.querySelector('#pageNumber').value,
            read = document.querySelector('#readOrNot').checked;
        let newBook = new Book(bookTitle, bookAuthor, bookPages, read)
        myLibrary.push(newBook)
        render();
    }

    function openModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }


    addBookBtn.addEventListener('click', () => {
        openModal();
    })

    modalCloseBtn.addEventListener('click', () => {
        closeModal();
    })


    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    })

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    })


    document.querySelector("#addBookForm").addEventListener('submit', () => {
        event.preventDefault();
        addBookToLibrary();
        closeModal();
    })

});