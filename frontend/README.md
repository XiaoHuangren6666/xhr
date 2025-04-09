# Frontend Finance Tracker

This is the frontend part of the Fullstack Finance Tracker application built with Vue 3. The application allows users to manage their daily income and expenses, register and log in, and view their financial records on a calendar.

## Features

- **User Management**: Users can register and log in to their accounts.
- **Finance Record Management**: Users can input their daily income and expenses, including project name, amount, and source.
- **Calendar View**: Users can select a specific date to view their financial records.

## Project Structure

```
frontend
├── src
│   ├── App.vue                # Root component of the Vue application
│   ├── main.js                # Entry point of the Vue application
│   ├── components             # Contains reusable components
│   │   ├── CalendarView.vue   # Component for displaying the calendar
│   │   ├── FinanceForm.vue    # Component for inputting finance records
│   │   └── UserManagement.vue  # Component for user registration and login
│   ├── views                  # Contains different views for the application
│   │   ├── HomeView.vue       # Main content view
│   │   ├── LoginView.vue      # View for user login
│   │   └── RegisterView.vue   # View for user registration
│   └── store                  # Vuex store for state management
│       └── index.js           # Configuration for Vuex store
├── package.json               # npm configuration file for frontend dependencies
└── README.md                  # Documentation for the frontend part of the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the frontend application, use the following command:
```
npm run serve
```

This will start the development server, and you can access the application at `http://localhost:8080`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.