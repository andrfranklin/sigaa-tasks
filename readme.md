## What is this?
This project is a doodle of a bot that scrapes the tasks registered in my account in the university system.

The goal is to add the functionality to send the scraped data to some calendar system to facilitate personal organization.

## Why?
Currently, tasks registered in the university system, in addition to being available on the student's profile, are also sent to students' emails, which is not very practical and can easily get lost.

Allowing integration with other calendar systems can be a solution to facilitate students' personal organization.

#### *NOTE*:
*This project is not intended to become a functionality of the current system of the university in question, but to be a case study of a possible functionality.* 

*It is still in development, and the result may differ from what I currently think about this case.*

## How to test:

If you are a UFRN student:
- Make sure you have Node js v12 or higher installed on your PC
- Clone this project to your PC,
- Create a `.env` file in the project root folder, with the variables:

	`USERNAME: Your login on sigaa`
    
	`PASSWORD: Your login password`
- Open the project folder in your computer's terminal,
- Install the dependencies using `npm install`,
- Run the project using `npm run dev`,
- Access `localhost:5000/api/`

Wait for the execution, and the return should contain your tasks that are still open and should be displayed in your browser window.

*Possible bugs are not yet being handled.*

## Technologies used:
- Javascript (Nodejs),
- Express
- Puppeteer