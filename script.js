'use strict';
document.addEventListener('DOMContentLoaded', function () {

    const addBookBtn = document.querySelector('.add-book-btn'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('.close-modal-btn'),
        readStatusBtn = document.querySelector('.bookReadStatus');


    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    Book.prototype.toggleRead = function () {
        this.read = !this.read
    }

    function toggleRead(index) {
        myLibrary[index].toggleRead();
        render();
    }

    const myLibrary = [];

    function render() {
        let libraryBook = document.querySelector('.books-grid');
        libraryBook.innerHTML = '';
        myLibrary.forEach((book, index) => {
            let bookEl = document.createElement('div')
            bookEl.innerHTML = `
        <div class="added-book">
            <div class="book-information">
                <div class="bookTitle">'${book.title}'</div>
                <div class="bookAuthor">${book.author}</div>
                <div class="bookPageCount">${book.pages} Pages</div>
                <button class="bookReadStatus">${book.read ? 'Read' : 'Not Read'}</button>
               <button  class="remove-btn" data-index='${index}'>Remove</button>
            </div>
        </div>
        `
            libraryBook.appendChild(bookEl)
            const removeButtons = document.querySelectorAll('.remove-btn')
            removeButtons.forEach(btn => {
                btn.addEventListener('click', removeCard)
            });
        })
    };

    function removeCard(event) {
        const index = event.target.getAttribute('data-index')
        myLibrary.splice(index, 1)
        render();
    }

    function readStatus() {
        const bookReadStatus = document.querySelectorAll('.bookReadStatus')
        bookReadStatus.forEach(book => {
            book.addEventListener('click', () => {
                if (book.textContent === 'Not Read') {
                    book.classList.add("read");
                    book.textContent = 'Read'
                } else {
                    book.classList.toggle('read')
                    book.textContent = 'Not Read'
                }
            })
        })
    }
    readStatus();

    function addBookToLibrary() {
        const bookTitle = document.querySelector('#titleInput').value,
            bookAuthor = document.querySelector('#authorInput').value,
            bookPages = document.querySelector('#pageNumber').value,
            bookReadStatus = document.querySelector("#status-check").checked;
        let newBook = new Book(bookTitle, bookAuthor, bookPages, bookReadStatus)
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

    function modalReset() {
        const inputValues = document.querySelectorAll('.inputForm').forEach(input => {
            input.value = '';
        })
        document.querySelector('#status-check').checked = false
    }

    document.querySelector("#addBookForm").addEventListener('submit', () => {
        event.preventDefault();
        addBookToLibrary();
        closeModal();
        modalReset();
    })

});