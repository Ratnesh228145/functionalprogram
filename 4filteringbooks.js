//sample list of books with authors and publication years.......
const books=[
    {
        title:"Book 1",
        author:"author 1",
        year: 2005,
    },
    {
        title:"Book 2",
        author:"author 2",
        year: 2015,
    },
    {
        title:"Book 3",
        author:"author 3",
        year: 2012,
    },
    // add more books as needed
];
 
//function to filter and capitalize author names
function filterAndCapitalizeAuthors(booklist){
    const currentyear=new Date().getFullYear();

    //use the filter method to get books published after 2010
    const filteredBooks=booklist.filter((book)=>book.year>2010);

    //use the map method to capitalize author name
    const booksWithCapitalizedAuthors=filteredBooks.map((book)=>({...book,
        author:book.author.toUpperCase()}));
    return booksWithCapitalizedAuthors;
}

//call the function to filter and capitalize authors
const filteredAndCapitalizedBooks=filterAndCapitalizeAuthors(books);

//Display the filtered and capitalized books
console.log(filteredAndCapitalizedBooks);