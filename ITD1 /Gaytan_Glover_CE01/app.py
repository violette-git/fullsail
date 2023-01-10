import os

# Create the static folder
os.makedirs("static")

# Create the templates folder
os.makedirs("templates")

# Create the index.html file in the templates folder
open("templates/index.html", "w").close()

# Change the current working directory to the static folder
os.chdir("static")

# Create the js and css folders
os.makedirs("js")
os.makedirs("css")
os.makedirs("img")

# Change the current working directory to the js folder
os.chdir("js")

# Create the script.js file
open("script.js", "w").close()

# Change the current working directory to the css folder
os.chdir("../css")

# Create the styles.css file
open("styles.css", "w").close()
