This project is a base layout template using Gulp, SCSS, and Stylelint, designed to streamline the development process and maintain code quality. It provides a structured environment for web development with a focus on automation, efficient styling, and code linting.

Getting Started
To start using this template, follow these steps:

Clone the Repository:

Replace <your_account> and <repo_name> with your GitHub username and the new repository name.

bash
Копировать код
git clone https://github.com/<your_account>/<repo_name>.git
cd <repo_name>
Install Dependencies:

Make sure you have Node.js installed, then run:

bash
Копировать код
npm install
Run the Development Server:

To start the development server with Gulp, use:

bash
Копировать код
gulp
This will launch a local server, watch files for changes, and automatically reload the browser.

Features
Gulp: Task runner for automating repetitive tasks like compiling SCSS, minifying files, and reloading the browser.
SCSS: A CSS preprocessor that allows for variables, nested rules, mixins, and more, providing more efficient and manageable stylesheets.
Stylelint: A modern linter that helps enforce consistent conventions and avoid errors in stylesheets.
Project Structure
The project has the following main folders and files:

src/: Contains all the source files.

scss/: SCSS files for styling the project.
js/: JavaScript files.
images/: Images used in the project.
index.html: Main HTML file.
gulpfile.js: Configuration file for Gulp tasks.

package.json: Contains all dependencies and scripts for the project.

.stylelintrc: Configuration file for Stylelint rules.

Usage
To use this template effectively:

Development: Run gulp to start the development environment. It will watch your SCSS, JavaScript, and HTML files for changes.
Production: Use gulp build to compile and minify your files for production.
[DEMO LINK](https://jdifek.github.io/nothing-landing/) 
Check out the live demo of the template here.

Contributing
If you want to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License.
