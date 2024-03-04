from flask import Blueprint, redirect , render_template
from flask import abort
from functions import *

story_bp= Blueprint( "story" ,__name__, template_folder = "templates")

@story_bp.route("/story/<int:id>")
def display_story (id):
    data =read_file(stories_file)
    srories_num =len(data['stories'])
    if(id>= srories_num) :
        abort(404)
    else :
        story=data['stories'][id]
        return render_template('display.html', story=story,id=id)
        
@story_bp.route("/<int:id>/delet_story")
def delet_story (id):  
    data =read_file(stories_file)
    stories_data =data['stories']
    del stories_data[id]
    write_file(stories_file,data)    
    return redirect('/')

@story_bp.route("/add_story")
def add_story ():
    empity_story={ }
    return render_template('story_form.html',story= empity_story)

@story_bp.route("/post_new_story")
def post_new_story ():
    new_story = create_story()
    data =read_file(stories_file)
    data['stories'].append(new_story)
    write_file (stories_file, data)
    return redirect('/')  

@story_bp.route("/<int:id>/edit_story")
def edit_story (id):
    data =read_file(stories_file)
    story=data['stories'][id]
    return render_template('story_form.html',story=story,id=id)

@story_bp.route("/<int:id>/post_edited_story")
def post_edited_story (id):
    new_story = create_story()
    data =read_file(stories_file)
    data['stories'][id]=new_story  
    write_file(stories_file,data)
    return redirect('/')

