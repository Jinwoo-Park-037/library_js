const myLibrary = [];

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

}





