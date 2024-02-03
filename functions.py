import json
import flask
import datetime

# data_files
stories_file ='data/stories_data.json'
users_file ='data/users_data.json'

# class
class story :
    def __init__(self,title,description,content) :
        self.title=title
        self.description=description
        self.content=content
        
    #method 1 (adding date with datetime module)
    def add_date(self) :
        # date formating
        date_now=(datetime.datetime.now())
        date=str(date_now.strftime("%x"))
        self.datetime =date 

    #  method 2 (obj-->dec) for json file
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
    
    # object creation & converting
    story_obj = story(title,description,content) 
    story_obj.add_date()
    story_dec =story_obj.convert_to_dectinary()
    return story_dec
    
def creat_new_user(name,passwored):
    return {  "name": name , "password": passwored  }
    
def read_file (file_path) :
    with open(file_path, 'r') as json_file:
        data = json.load(json_file)  
    return data

def write_file (file_path, data) :
    with open(file_path, 'w') as json_file:
        json.dump(data, json_file, indent=1)