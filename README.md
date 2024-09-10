
# Campaign Manager Web
This is the frontend of a campaign management system, developed in React with Material-UI. The system allows you to view, create, edit, and delete campaigns, as well as list the available campaigns integrated with a backend API.

## Features
- List campaigns with options to view, edit, and delete.
- Create and edit campaigns.
- Date validation in the form.
- Integration with a RESTful API.
- Utilization of Material-UI for design and styled components.

## Prerequisites
- **Node.js** (version 16 or higher)
- **npm** (or yarn) to manage packages
- **Backend** configured and running (see [Campaign Manager API](https://github.com/pedrocezar/campaign-manager-ai))

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/pedrocezar/campaign-manager-web.git
   cd campaign-manager-web
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:4000`.

## How to Use
- **List Campaigns**: The homepage (`/campaigns`) displays a list of all available campaigns. You can view details, edit, or delete a campaign directly from the list.
- **Create a New Campaign**: Navigate to the campaign creation page by clicking the "Add Campaign" button. Fill in the required fields, including the dates, and click "Save Campaign".
- **Edit Campaign**: On the listing page, click "View" to edit the details of the selected campaign.
- **Delete Campaign**: You can remove a campaign by clicking the "Delete" button, which will mark the campaign as inactive.

## Technologies Used
- **React.js** - Library for building the user interface.
- **Material-UI** - Component library for React with modern design.
- **Axios** - HTTP client for integrating with the campaigns API.
- **React Router DOM** - Frontend route management.

## Available Scripts
- `npm start` - Starts the development server.
- `npm run build` - Creates the optimized build for production.
- `npm test` - Runs the tests.
