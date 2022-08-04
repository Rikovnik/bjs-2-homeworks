class PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(battered) {

		if (battered > 100) {
      this.state = 100
    }
		else if (battered < 0) {
      this.state = 0
    }
    else this._state = battered;
	}

	get state() {
		return this._state
	}
}

class Magazine extends PrintEditionItem {
 	constructor(name, releaseDate, pagesCount) {
    	super(name, releaseDate, pagesCount);
    	this.type = 'magazine';
  	}
};

class Book extends PrintEditionItem {
 	constructor(author, name, releaseDate, pagesCount) {

    	super(name, releaseDate, pagesCount);    	
    	this.type = 'book';
    	this.author = author;
  	}
};

class NovelBook extends Book {
 	constructor(author, name, releaseDate, pagesCount) {

		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';	
 	}
};

class FantasticBook extends Book {
 	constructor(author, name, releaseDate, pagesCount) {

		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';	
 	}
};

class DetectiveBook extends Book {
 	constructor(author, name, releaseDate, pagesCount) {

		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';	
 	}
};

class Library {
 	constructor(name) {
    	this.name = name;
    	this.books= [];
 	}

 	addBook(book) {
    	if (book.state > 30) this.books.push(book)
  	}

  	findBookBy(type, value) {
    	let findBook = this.books.find(item => item[type] === value);
    	if(findBook !== undefined) return findBook; 
    	else return null;
  	}

 	giveBookByName(bookName) {
    	let indexBook = this.books.findIndex(item => item.name === bookName);
    	if(indexBook !== -1) {
      	let giveBook = this.books[indexBook];
      	this.books.splice(indexBook, 1);
      	return giveBook;
    	} 
    	else return null;
  }
}

