# Jellybean App

A simple web application to perform CRUD operations on jelly bean flavors.

## Features

- **Add a new flavor**: Add a new jelly bean flavor to the list.
- **View all flavors**: View all existing jelly bean flavors.
- **Update a flavor**: Update the name of an existing jelly bean flavor.
- **Delete a flavor**: Delete a jelly bean flavor from the list.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/0captjack/jellybean
   cd jellybean (go to the folder)

2. Install the dependencies:
    npm install

Running the Application
1. Start the server:
    node server/server.js

2. Open your browser and navigate to:
    http://localhost:3000

## Project Structure
    jellybean-app/
    ├── client/
    │   └── index.html
    └── server/
        └── server.js

## API Endpoints
**POST** /flavors: Add a new flavor
- Request body: { "name": "Flavor Name" }
- Response: { "id": 1, "name": "Flavor Name" }
**GET** /flavors: View all flavors
- Response: [ { "id": 1, "name": "Flavor Name" }, ... ]
**PUT** /flavors/:id: Update a flavor
- Request body: { "name": "New Flavor Name" }
- Response: { "id": 1, "name": "New Flavor Name" }
**DELETE** /flavors/:id: Delete a flavor
- Response: 204 No Content

**License**
This project is licensed under the MIT License.