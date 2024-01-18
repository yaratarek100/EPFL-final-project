import flask
import datetime
import random

app=flask.Flask("gallary_app")

# classes
class story :
    def __init__(self,id,user,name,description,date,category,image) :
            self.name=name
            self.user=user
            self.id=id
            self.description=description
            self.date=date
            self.category=category
            self.image=image

class user :
    def __init__(self,name,pass_word) :
        self.name=name
        self.pass_word=pass_word

        # self.image=image


            # self.image=image  
            
#   add_item ():

#  def drive(self,speed) :
#     print(self.name + " is driving at "+str(speed)+ " km/h.")

#  def show_color(self) :    
#     print(self.name + " is " +self.color)



# 
def get_pages(page_name):
    html_file=open(page_name)
    content=html_file.read()
    html_file.close()
    return content

# # routing /////
# routing html files

@app.route("/")
def login ():
    return get_pages("login.html")

# @app.route("/home")
# def home ():
# return get_pages("home.html")

# @app.route("/prsonal")
# def prsonal ():
# return get_pages("prsonal.html")

# @app.route("/aboutus")
# def aboutus ():
# return get_pages("aboutus.html")

# # routing for other pages

# @app.route("/liked")
# def liked ():
# return 

# @app.route("/category")
# def category ():
# return 

# @app.route("/some_one")
# def some_one ():
# return 

# @app.route("/follwed_artist")
# def follwed_artist ():
# return 

# ##routing operation

# @app.route("/delete")
# def delete ():
# return 

# @app.route("/edite")
# def edite ():
# return 

# @app.route("/add_item")
# def add_item ():
# return 

# @app.route("/search")
# def search ():
# return 




