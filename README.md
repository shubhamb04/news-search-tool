# News Search App

The News Search App is a web application built with React and Node.js. It fetches data from The Guardian API through a Node.js server and displays search results in real-time, grouped by sections.

## Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**: Clone the News Search App repository from GitHub:

   ```bash
   git clone git@github.com:shubhamb04/news-search-tool.git
   ```

2. **Install Dependencies**: Navigate to the root folder of the project and install dependencies for both the server and the React app:

   ```bash
   cd news-search-tool
   cd search-tool-api
   npm install

   cd ..
   cd search-tool-ui
   npm install
   ```

3. **Set Environment Variables**: Create a `.env` file in the `server` folder and add the following environment variables:

   ```
   PORT=3000
   API_KEY=<Your_Guardian_API_Key>
   API_URL=https://content.guardianapis.com/search
   ```

   Replace `<Your_Guardian_API_Key>` with your actual Guardian API key.

## Running the Server

To start the Node.js server:

1. Navigate to the `search-tool-api` folder:

   ```bash
   cd news-search-tool
   cd search-tool-api
   ```

2. Run the server:

   ```bash
   npm start
   ```

## Running the React App

To start the React app:

1. Navigate to the `search-tool-ui` folder:

   ```bash
   cd news-search-tool
   cd search-tool-ui
   ```

2. Start the development server:

   ```bash
   npm start
   ```

The React app will be accessible at `http://localhost:3001` since I am using port 3000 for server. It will ask you to open on different port.

## Usage

1. Open your web browser and navigate to `http://localhost:3001`.
2. In the search bar, type the text you want to search for.
3. As you type, the app will fetch and display search results in real-time, grouped by sections.

## Testing

I have not written test cases for now as I was more focused on developing the logic as per the details.
