import json
import flask
from flask import Flask, redirect, render_template
import datetime
app = Flask(__name__)
json_path ='static/stories_data.json'


# classes
class story :
    def __init__(self,title,description,content,date) :
        self.title=title
        self.description=description
        self.content=content
        self.datetime =date 

# class user :
#     def __init__(self,name,password) :
#         self.name=name
#         self.password=password
        


def create_story ():
    title = flask.request.args.get("story_title")
    description = flask.request.args.get("story_description")
    content= flask.request.args.get("story_content")
# date formating
    date_now=(datetime.datetime.now())
    date=str(date_now.strftime("%x"))
    
# object creation
    story_obj = story(title,description,content,date) 

    # convert to dec for json file

    story_dec = { 
    "title": story_obj.title,
    "description" :story_obj.description,
    "content": story_obj.content ,
    "date": date
    }

    return story_dec     

@app.route("/")
def home ():
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)
    return render_template('home.html', data=data)

# routing for functions

@app.route("/add_story")
def add_story ():
    empity_story={
      "title": "",
      "description" :"",
      "content": ""
    }
    return render_template('story_form.html',story= empity_story)

@app.route("/<id>/edit_story")
def edit_story (id):
    id=int(id)
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)['stoies'][id]
    return render_template('story_form.html',story=data,id=id)

@app.route("/post_new_story")
def post_new_story ():
    new_story = create_story()
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)
        data['stoies'].append(new_story)
    with open(json_path, 'w') as json_file:
        json.dump(data, json_file, indent=1)
    return redirect('/')  

@app.route("/<id>/post_edited_story")
def post_edited_story (id):
    id=int(id)
    new_story = create_story()
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)
        p=data['stoies'][id]=new_story  
    with open(json_path, 'w') as json_file:
        json.dump(data, json_file, indent=1)
    return redirect('/')

@app.route("/<id>")
def display_story (id):    
    id=int(id)
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)['stoies'][id]
    return render_template('prsonal.html', story=data,id=id)

@app.route("/<id>/delet_story")
def delet_story (id):    
    id=int(id)
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)
        stories_data =data['stoies']
        del stories_data[id]
    with open(json_path, 'w') as json_file:
        json.dump(data, json_file, indent=1)      
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)

