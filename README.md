# INST377-Group_Project
Group 24

# Name (Please Input your name):
Thomas Tran, Sharanya Padithaya, Allen Jiang, Mohamed Ndaloma

# Title of Project
Corporate Talk

# Description of Project
When talking to your coworkers in the work environment, sometimes you need to speak in a way that makes it seem like you know what you are talking about. The more ssophisticated you sound the higher potential of being promoted, possibly.

# Description of target browsers
Mainly on a computer with the use of microsoft edge or google chrome

## Developer Manual
How to install your application and all dependencies?
1. To simply install the application you can open a program called Visual Studios
2. Next, you would navigate to the top left that looks like three lines. 
3. A dropdown will appear and you would need to go to Terminal -> New Terminal
4. After that, a console will open up and you can input the command "git clone git@github.com:ttran316/inst377-group-project.git"
5. It should now download all the necessary files. 

How to run your application on a server?
In order to run the application on a server, you would need to get an extension called Live Server. This can be found by being in Visual Studios and clicking the keybinds of (Ctrl+Shift+X). Afterwards you would search up Live Server from Ritwick Dey.

How to run any tests you have written for your software?
The best way to run tests is to utilize Insominia and check if there are any errors. Alternatively, you could create console.logs within the code if you want to alter it and an issue arises.

The API for your server application
GET /api/data: This gets all the words from the translate table that you have recently inputted into the translator. It will display both the word you inputted and the time it was done. Please note that it is deleted after refreshing the page.

GET /api/person: This gets all the people that have worked on the project. If you are in need of assistence you can come look for us via our names.

POST /api/data: Once the translate button is clicked, everything that was typed into the simple words' textbox is put into the table hosted by SupaBase. In addition, the time will be recorded based on your device and placed into the same database.

DELETE /api/data: This is what clears all of the data entries after the page is reloaded.

A clear set of expectations around known bugs and a road-map for future development.
Many of the error testing console logs have been removed in order to promote cleaner code. If you are in need of the console logs and error codes, let one of us know.
Regarding the future, we believe it can be enhanced by creating our own API instead of an external one for translating the words. Currently, it seems like it only creates a random sentence without basing it off of what the user types in. 
