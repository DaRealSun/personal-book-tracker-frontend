personal-book-tracker/
│
├── src/
│   ├── components/           # UI Components
│   │   ├── Header.js         # App Header
│   │   ├── Browse.js         # Browse Books Page
│   │   ├── BookCard.js       # Single Book Card
│   │   ├── BookList.js       # List of Books
│   │   ├── Login.js          # Login Page
│   │   └── MainContainer.js  # Dashboard/Main Section
│   │
│   ├── hooks/                # API and State Hooks
│   │   ├── useBooks.js       # Fetch books from API
│   │   └── useAuth.js        # Handle authentication
│   │
│   ├── utils/                # Utility Functions and Redux
│   │   ├── bookSlice.js      # Redux slice for books
│   │   ├── validate.js       # Form validation functions
│   │   └── constants.js      # Constants (API URLs, etc.)
│   │
│   ├── pages/                # Page Components
│   │   ├── Home.js           # Home Page
│   │   ├── ToRead.js         # To Read Section
│   │   ├── Reading.js        # Reading Section
│   │   └── Read.js           # Completed Books
│   │
│   ├── App.js                # Main App Entry
│   ├── index.js              # React DOM render
│   └── services/             # API calls
│       └── bookService.js    # Axios API Service
│
└── public/                   # Static assets
