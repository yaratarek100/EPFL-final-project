# import json
import json
import flask
from flask import Flask, redirect, render_template, url_for
# , render_template, jsonify
# from flask import jsonify
app = Flask(__name__)
json_path ='static/s_data.json'


# classes
class story :
    def __init__(self,id,title,content) :
        self.id=id
        self.title=title
        self.content=content
            
class user :
    def __init__(self,name,pass_word) :
        self.name=name
        self.pass_word=pass_word


def create_story ():
    # object creation
    id =flask.request.args.get("story_id")
    title = flask.request.args.get("story_title")
    content= flask.request.args.get("story_content")

    story_obj = story(id,title,content) 

    # convert to dec for json file
    story_dec = { 
    "id": story_obj.id,
    "title": story_obj.title,
    "content": story_obj.content }

    return story_dec
    




# # routing /////
# routing html files

# @app.route("/")
# def loginp ():
#     return render_template('login.html')


# @app.route("/home")
        

@app.route("/")
def home ():
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)
    return render_template('home.html', data=data)
    
 




# routing for functions

@app.route("/add_story")
def add_story ():
    return render_template('story_form.html')

@app.route("/edit_story/<id>")
def edit_story (id):
    id=int(id)
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)[id]
    return render_template('story_form.html',data=data)

    


@app.route("/post_story")
def post_story ():
    # new_story = {"id": 4, "title": "22", "content": "Another City"}
    new_story = create_story()
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)
        data['stoies'].append(new_story)
    with open(json_path, 'w') as json_file:
        json.dump(data, json_file, indent=1)
    # return render_template('home.html')
    return redirect('/')  

@app.route("/display_story/<id>")
def display_story (id):    
    id=int(id)
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)['stoies'][id]
    return render_template('prsonal.html', story=data)


@app.route("/delet_story/<id>")
def delet_story (id):    
    id=int(id)
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)
        stories_data=data['stoies']
        stories_data.pop(id)      
    with open(json_path, 'w') as json_file:
        json.dump(data, json_file, indent=1)      
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)

