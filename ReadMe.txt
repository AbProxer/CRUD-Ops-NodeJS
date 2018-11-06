1.	Fisrt of all I just install package to my application by using command 
	npm init
2.	then add dependencies into the package.json file, write "npm install" into the commamd line and run it jsut to
	install those dependecies. express and body-parser.
	Note: in order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece
	of express middleware that reads a form's input and stores it as a javascript object accessible through req.body

3.	create app.js file and include different modules like:
	express, bodyparser, path.  using require function to include modules.

4.	initialize express application. express();

5.	setup route through get request. because till now we have nothing to get on localhost. so we haveto set the 
	get request. so that we can show something on the browser.

6.	adding a middleware of bodayparser, which loads whenever we reload our browser. 

7.	add nodemon by using "npm install nodemon -g" globally. we use this to avoid recall the server again and again.

8.	Now we move to template engine: ejs,... and install it by using "npm install ejs --save"

9.	setup middleware for ejs files (view engine).

10.	cteate folder views for storing views and add subfolder named as partials to add header and footer.

11.	install express-validator and add them to t he input fields.

12.	install mongojs for database.

11.	 