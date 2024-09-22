# SP2 Auction Platform

An online auction platform where users can bid on various items, create listings, and manage their profile. This project was created as part of the Noroff Frontend developer semester project 2 and demonstrates key concepts in API interaction, client-side rendering, authentication, and form validation.

## Features

- **User Authentication**: Users can register and log in to their accounts with a required `@stud.noroff.no` email address. Logged-in users have access to additional features like creating listings and placing bids.
  
- **Listing Items for Auction**: Users can create new auction listings by adding descriptions, setting an auction end date, and uploading images via a URL.
  
- **Bidding System**: Users can place bids on active auction items. Listings are dynamically updated with the latest created items shown first.

- **Profile Management**: Users can update their profile avatar and view their bidding history and wins.

- **Search Functionality**: Users can search for listings based on their queries.

## Technologies Used

- **Frontend**: Vanilla JavaScript, HTML5, SCSS
- **API**: Interaction with the [Noroff Auction API](https://docs.noroff.dev/docs/v2)
- **Build Tools**: Vite, Babel
- **Hosting**: Deployed on [Netlify](https://www.netlify.com/)

## Getting Started

### Prerequisites

- Node.js v14.x or higher
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Glenn-2k/SP2.git
   ```

2. Navigate to the project directory:
   ```bash
   cd SP2
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run start
   ```

5. Open your browser and go to http://localhost:3000.

6. The optimized files will be generated in the /dist folder.


## Usage

### Authentication

- **Registration**: New users can register using an `@stud.noroff.no` email address via the "Register" form.
- **Login**: Existing users can log in and access their profile and bid on listings.
- **Logout**: Users can log out from the navigation bar.

### Listings

- **View Listings**: Browse all active listings on the homepage, with the latest created items shown first.
- **Search Listings**: Use the search bar to find specific auction items.
- **Create Listing**: After logging in, users can create their auction listings, upload images via a URL, and set an auction end time.
- **Bid on Listings**: Users can place bids on active auctions.

### Profile

- **View Profile**: Users can view their profile and see their listings and won auctions.
- **Edit Avatar**: Users can update their profile avatar.

## Deployment

The project is deployed on [Netlify](https://app.netlify.com). For a live demo, visit the project at: [SP2 Auction Platform](https://glennsp2.netlify.app)



## Acknowledgments

- Special thanks to fellow students and **Claude.ai** for helpful insights and support during the development of this project.

