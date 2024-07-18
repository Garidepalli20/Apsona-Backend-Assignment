# Apsona-Backend-Assignment

# Notes Application

This is a simple notes application built using React, where users can add, archive, and delete notes. The application utilizes local storage for data persistence.

## Features

- Add new notes with customizable content.
- Archive notes to keep them but remove from the main list.
- Delete notes, which moves them to the trash.
- Restore notes from the trash or permanently delete them.

## Technologies Used

- React: Frontend UI library for building the user interface.
- JavaScript (ES6+): Programming language used for frontend logic.
- CSS: Styling the application.
- Local Storage: For persisting notes data across sessions.

## Project Structure

The project directory structure is as follows:

├── public/ # Static files ├── src/ # Source files │ ├── components/ # React components │ ├── pages/ # Page components (Home, Archived, Trash) │ ├── App.js # Main application component │ ├── index.js # Entry point for React rendering │ └── App.css # Styles for the application ├── .gitignore # Git ignore file ├── package.json # Node.js dependencies and scripts └── README.md # Project documentation

bash Copy code

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/notes-app.git
   cd notes-app
   Install dependencies:
   ```

bash Copy code npm install Run the application:

bash Copy code npm start Open the application:

Open your browser and go to http://localhost:3000 to view the application.

Usage Adding a Note:

Click on the "Add Note" button. Enter your note content and click "Save". Archiving a Note:

Click on the "Archive" button on a note to move it to the archived section. Deleting a Note:

Click on the "Delete" button on a note to move it to the trash section. Restoring or Permanently Deleting from Trash:

Navigate to the "Trash" section to restore or permanently delete notes. Contributing Contributions are welcome! Here's how you can contribute to this project:

Fork the repository. Create your feature branch: git checkout -b feature/new-feature. Commit your changes: git commit -am 'Add new feature'. Push to the branch: git push origin feature/new-feature. Submit a pull request. License This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements This project was inspired by the need for a simple notes application using React. Thanks to the React community for great resources and library
