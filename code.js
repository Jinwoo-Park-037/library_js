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
    console.log(newBook.info());

}

// when pressing add button, dialog box is opened -->
// showModal() prevents interaction with the rest of the page while the dialog is open. show() allows interactions
document.getElementById("add-button").addEventListener("click", () => {
    dialog.showModal();
});

// close dialog box and save data when submit button is clicked
document.getElementById("submit-button").addEventListener("click", () => {
    // add book
    addBookToLibrary(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementById("Y/N").toUpperCase().value == "Y" ? true : false
    );

    // clear values
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("Y/N").value = "";

    setTimeout(() => {
        dialog.close()
    }, 0);
});

// when close button is pressed, dialog box is closed
closeBtn.addEventListener("click", () => {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("Y/N").value = "";

    setTimeout(() => {
        dialog.close()
    }, 0);
});

