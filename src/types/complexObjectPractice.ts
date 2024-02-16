type TypeOfLibrary = "national" | "academic" | "public";

type Books = {
    title: string;
    pages: number;
    isbn: string;
};

type Members = {
    name: string;
    phone: string;
    [key: string]: string; // Index signature
};
type Library = {
    name: string; 
    address: string;
    numberOfBooks: number;
    type: TypeOfLibrary;
    books: Books[];
    generics: string[];
    members: Members[];
};

const library: Library = {
    name: "New York Library",
    address: " 24, Some Street, New York",
    numberOfBooks: 1254,
    type: "national", // 'national', 'academic', 'public'
    books: [
      {
        title: "Harry Potter",
        pages: 756,
        isbn: "9971-5-0210-0",
      },
      {
        title: "Davinci Code",
        pages: 386,
        isbn: "9971-5-0210-0",
      },
    ],
    generics: ["fiction", "history", "computers", "poetry"],
    members: [
      {
        name: "John Doe",
        phone: "+167678978",
      },
      {
        name: "Mark Doe", // Name is mandatory
        phone: "+167678978", // Phone is mandatory
        email: "mark@email.com", // Can have additional optional fields
      },
    ],
  };

  console.log(library);
  