//1 How would you declare an array of objects representing customers, with each object having properties for their name, address, and phone number,
// and each customer object also having an array of orders,
// with each order object having properties for its total cost, date, and items purchased?
let customers = [
  {
    name: "Mg Mg",
    address: "Yangon",
    phoneNumber: "988888888",
    orders: [
      {
        totalCost: 1500,
        date: new Date(),
        purchasedItems: ["Milk", "Coke"],
      },
      {
        totalCost: 3000,
        date: new Date(),
        purchasedItems: ["Coca cola", "Pepsi"],
      },
    ],
  },
];

// 2 Can you declare an object representing a shopping cart, with properties for its total cost and an array of items,
// with each item object having properties for its name, price, and quantity?
let shoppingCart = [
  {
    totalCost: 10000,
    items: [
      {
        name: "Potato Chips",
        price: 1500,
        quantity: 3,
      },
      {
        name: "Coke",
        price: 500,
        quantity: 2,
      },
    ],
  },
];

// 3 How would you declare an array of objects representing students, with each object having properties for their name, grade level, and GPA,
// and each student object also having an object representing their schedule, with properties for the classes they are taking and the times they meet?
let students = [
  {
    name: "Mg Mg",
    gradeLevel: 12,
    gpa: 4.5,
    schedule: {
      classes: [
        {
          className: "Myanmar",
          time: "4:00PM",
        },
        {
          className: "English",
          time: "2:00PM",
        },
      ],
    },
  },
];

// 4 Can you declare an object representing a bookstore, with properties for its name and location,
// and an array of books, with each book object having properties for its title, author, and publication year?
let bookstore = {
  name: "ABC",
  location: "Yangon",
  books: [
    {
      title: "Use",
      author: "Aung Aung",
      publicationYear: "2012",
    },
  ],
};

// 5 How would you declare an array of objects representing cars, with each object having properties for its make, model, and year,
// and each car object also having an array of service records, with each record object having properties for the date of service, the type of service performed, and the cost?
let cars = [
  {
    make: "Japan",
    model: "Toyota",
    year: "2004",
    serviceRecords: [
      {
        dateOfService: new Date(),
        typeofService: "Tier",
        cost: 35000,
      },
    ],
  },
];

// 6 Can you declare an object representing a music player, with properties for its current playlist and an array of songs,
// with each song object having properties for its title, artist, and duration?
let musicPlayer = {
  currentPlaylist: [
    {
      title: "Shake it Off",
      artist: "Taylor Swift",
      duration: 3.5,
    },
  ],
};

// 7 How would you declare an array of objects representing cities, with each object having properties for its name, population, and location,
// and each city object also having an array of attractions, with each attraction object having properties for its name, type, and location?
let cities = [
  {
    name: "North Dagon",
    population: 35000,
    location: "Yangon",
    attractions: [
      {
        name: "Maharmyai",
        type: "Apartments",
        location: "Near 41 ward",
      },
    ],
  },
];

// 8 Can you declare an object representing a restaurant, with properties for its name, cuisine type, and location,
// and an array of menu items, with each menu item object having properties for its name, price, and description?
let restaurant = {
  name: "ABC",
  cuisineType: "French cuisine",
  location: "North Dagon",
  menuItems: [
    {
      name: "Pizza",
      price: 15000,
      descripiton: "Pineapple Pizza",
    },
  ],
};

// 9 How would you declare an array of objects representing movies, with each object having properties for its title, director, and release year,
// and each movie object also having an array of reviews, with each review object having properties for its rating and comments?
let movies = [
  {
    title: "Tarzan",
    director: "Mg Mg",
    releaseYear: "2003",
    reviews: [
      {
        rating: 3.4,
        comments: ["haha", "hee"],
      },
    ],
  },
];

// 10 Can you declare an object representing a social media platform, with properties for its name, user base, and features,
// and an array of users, with each user object having properties for their name, profile picture, and posts,
// with each post object having properties for its content, likes, and comments?
let platform = {
  name: "Facebook",
  userBase: 340000,
  feactures: ["Posts", "Comments"],
  users: [
    {
      name: "Mg Mg",
      profilePicture: "./photo.png",
      posts: [
        {
          content: "sleeping",
          likes: 2,
          comments: ["ok", "haha"],
        },
      ],
    },
  ],
};
