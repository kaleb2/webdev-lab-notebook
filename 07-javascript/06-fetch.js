const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const addBookToDOM = (book) => {
  let element = document.createElement("div");
  let title = document.createElement("h3");
  let author = document.createElement("p");
  let released = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = book.authors[0];
  released.textContent = book.released.substr(0, 4);
  pages.textContent = `${book.numberOfPages} pages`;

  element.append(title);
  element.append(author);
  element.append(released);
  element.append(pages);

  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.marginTop = "20px";

  app.append(element);
};

const fetchData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((b) => {
        console.log(b.name, b.authors[0]);

        addBookToDOM(b);
      });
    })
    .catch((er) => {
      let element = document.createElement("div");
      element.textContent = "An error occured. Please reload the page.";
      app.append(element);
    })
    .finally(() => {
      let loader = document.querySelector("#loading");
      app.removeChild(loader);
    });
};

fetchData(url);
