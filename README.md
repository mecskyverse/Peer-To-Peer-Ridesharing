# Peer-to-Peer Ridesharing


<img style="width:300px; height:200px;" src="https://github.com/mecskyverse/Peer-To-Peer-Ridesharing/assets/91150257/b37238c4-ef05-42b3-9bb7-0f7c2f2c71d3" alt="Image Description" >

Peer-to-Peer Ridesharing Web App built using React and Ethereum smart contracts. The purpose of this application is to provide a platform for users to share rides with others, allowing them to save costs and reduce their environmental impact. The app also incorporates features such as hosting rides and creating votes to adjust the overall fare price.

You can live interact with the website here.

<h2>Features</h2>
1. Book Ride
The "Book Ride" feature enables users to find and book rides shared by other users. Users can specify their desired pickup and drop-off locations, along with the preferred date. The app will display a list of available rides matching the criteria, and users can book a seat in the desired ride. It integrates Google Maps API to tell you about the distance and estimated price you have to give for reaching your destination. 

2. Host Ride
The "Host Ride" feature allows users to become ride hosts and offer their available seats to others. Users can specify the pickup and drop-off locations, date, time, and the number of available seats in their vehicle. Interested users can book these available seats.

3. Create Vote
The "Create Vote" feature enables users to initiate a voting process to increase or decrease the overall fare price for a specific ride. Users can create a vote, specify the reason for the fare adjustment, and invite other participants to vote. Once the voting period ends, the system will calculate the outcome based on the votes received.

Installation
To set up the Peer-to-Peer Ridesharing Web App locally, please follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/ridesharing-web-app.git
Navigate to the project directory:
bash
Copy code
cd ridesharing-web-app
Install dependencies using a package manager such as npm or yarn:
Copy code
npm install
or

Copy code
yarn install
Configure the Ethereum smart contract:

Update the contract address and ABI in the appropriate configuration file.
Make sure you have an Ethereum provider set up, such as MetaMask, to interact with the contract.
Start the development server:

sql
Copy code
npm start
or

sql
Copy code
yarn start
Access the application in your browser at http://localhost:3000.
Usage
Sign up for an account or log in if you already have one.
Explore the available rides by using the "Book Ride" feature.
To offer a ride, use the "Host Ride" feature and provide the necessary details.
Engage in the voting process by using the "Create Vote" feature when necessary.
Manage your bookings, host rides, and active votes through the corresponding sections of the app.
Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your contribution.
Make the necessary changes and commit them.
Push your changes to your forked repository.
Submit a pull request describing your changes.
Please make sure to follow the code style guidelines and write clear commit messages.

License
This project is licensed under the MIT License.

Acknowledgements
We would like to express our gratitude to the following resources and libraries that made this project possible:

React
Ethereum
Web3.js
MetaMask
Contact
If you have any questions, suggestions, or feedback, please feel free to reach out to
