# import json
import json
from flask import Flask, render_template
# , render_template, jsonify
# from flask import jsonify
app = Flask(__name__)



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

            


# # routing /////
# routing html files

# @app.route("/")
# def loginp ():
#     return render_template('login.html')


# @app.route("/home")
@app.route("/")
def home ():
    j_path ='static/s_data.json'
    with open(j_path, 'r') as json_file:
        data = json.load(json_file)
        # data_story=data[story]
        # return data
        return render_template('home.html', data=data)
    
 




# routing for functions

@app.route("/add_story")
def add_story ():
        return render_template('story_form.html')

    


@app.route("/post_story")
def post_story ():
    return render_template('home.html')




if __name__ == '__main__':
    app.run(debug=True)

