import json
import flask
import datetime
from flask import Flask, redirect, render_template, url_for
app = Flask(__name__)
# data_files
stories_file ='data/stories_data.json'
users_file ='data/users_data.json'

# class
class story :
    def __init__(self,title,description,content,date) :
        self.title=title
        self.description=description
        self.content=content
        self.datetime =date 
    #  method (obj-->dec) for json file
    def convert_to_dectinary (self):
        dectionary = { 
        "title": self.title,
        "description" :self.description,
        "content": self.content ,
        "date": self.datetime }
        return dectionary    
    
#functions 
def create_story ():
    title = flask.request.args.get("story_title")
    description = flask.request.args.get("story_description")
    content= flask.request.args.get("story_content")
    # date formating
    date_now=(datetime.datetime.now())
    date=str(date_now.strftime("%x"))
    # object creation & converting
    story_obj = story(title,description,content,date) 
    story_dec =story_obj.convert_to_dectinary()
    return story_dec
    
def creat_new_user(name,passwored):
    return {  "name": name,"password": passwored  }
    
def read_file (file_path) :
    with open(file_path, 'r') as json_file:
        data = json.load(json_file)  
    return data

def write_file (file_path, data) :
    with open(file_path, 'w') as json_file:
        json.dump(data, json_file, indent=1)

# home page
@app.route("/")
def home ():
    data =read_file(stories_file)
    username="Dear"
    return render_template('home.html', data=data, name=username) 

@app.route("/user/<username>")
def user_home(username):
    data =read_file(stories_file)  
    return render_template('home.html', data=data, name=username) 

@app.route("/login")
def go_login() :  
     mass =""
     return render_template('login.html',response=mass)  

@app.route("/signup")
def go_signup() :  
     mass =""
     return render_template('signup.html', response=mass) 

# check user
@app.route("/signupcheck")
def su_check() :
     user_name_new=flask.request.args.get("user_name_new")
     pass_wored_new1=flask.request.args.get("pass_wored_new1")
     pass_wored_new2=flask.request.args.get("pass_wored_new2")
     if user_name_new=="no_user" :
          mass="this name is already exist, try another one... "               
          return render_template("signup.html", response=mass) 
     else :
        data =read_file(users_file)
        users=data['users']
        for user in users :
            if user['name']==user_name_new :
                mass="this name is already exist, try another one... "               
                return render_template("signup.html", response=mass)  
            else :
                if pass_wored_new1==pass_wored_new2 :
                    new_user= creat_new_user(user_name_new,pass_wored_new1)
                    data['users'].append(new_user)
                    write_file (users_file, data)
                    return redirect (url_for("user_home" ,username=user_name_new))
                else :
                    mass="passwored is not simeller try again"
                    return render_template("signup.html", response=mass)   


@app.route("/logincheck")
def logincheck() :  
     ui_name=flask.request.args.get("ui_name")
     ui_pass=flask.request.args.get("ui_pass") 
     data =read_file(users_file)
     users=data['users']
     for user in users :
         if user['name']==ui_name  :
            # user_found = True 
            if user['password']==ui_pass :
                return redirect (url_for("user_home", username=ui_name) )
            else :
                mass="password isn't correct"
                return render_template("/login.html", response=mass) 
     else :
        mass="user name isn't correct"
        return render_template("/login.html", response=mass)  
        

# CRUD 
@app.route("/story/<int:id>")
def display_story (id):
    data =read_file(stories_file)
    story=data['stoies'][id]
    return render_template('display.html', story=story,id=id)

@app.route("/<int:id>/delet_story")
def delet_story (id):  
    data =read_file(stories_file)
    stories_data =data['stoies']
    del stories_data[id]
    write_file(stories_file,data)    
    return redirect('/')

@app.route("/add_story")
def add_story ():
    empity_story={
    "title": "",
    "description" :"",
    "content": ""
    }
    return render_template('story_form.html',story= empity_story)

@app.route("/post_new_story")
def post_new_story ():
    new_story = create_story()
    data =read_file(stories_file)
    data['stoies'].append(new_story)
    write_file (stories_file, data)
    return redirect('/')  

@app.route("/<int:id>/edit_story")
def edit_story (id):
    data =read_file(stories_file)
    story=data['stoies'][id]
    return render_template('story_form.html',story=story,id=id)

@app.route("/<int:id>/post_edited_story")
def post_edited_story (id):
    new_story = create_story()
    data =read_file(stories_file)
    data['stoies'][id]=new_story  
    write_file(stories_file,data)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)

