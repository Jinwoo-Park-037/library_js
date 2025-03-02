const myLibrary = [];

const dialog = document.getElementById("dialog");
const closeButton = document.getElementById("closeBtn");

//book function
function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function()
    {
        return (title + " by " + author + ", " + pages.toString() + " pages," + (read ? " already read" : " not read yet"));
    }
}

function addBookToLibrary(title, author, pages, read)
{
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log("book added");

}

// when pressing add button, dialog box is opened
document.getElementsByClassName("add-button").addEventListener("click", dialog.showModal());

document.getElementById("submit-button")

// when close button is pressed, dialog box is closed
closeBtn.addEventListener("click")

