from flask import Blueprint, Flask, redirect, render_template, url_for,session
from flask import abort
from functions import *


user_bp= Blueprint( "user" ,__name__, template_folder = "templates")

@user_bp.route("/")
def home ():
    data =read_file(stories_file)
    username="Dear"
    return render_template('home.html', data=data, name=username) 

@user_bp.route("/user")
def user_home():
    if 'username' in session:
        username = session['username']
    data =read_file(stories_file)  
    return render_template('home.html', data=data, name=username)     
    
@user_bp.route("/login")
def go_login() :  
     mass =""
     return render_template('login.html',response=mass)  

@user_bp.route("/signup")
def go_signup() :  
     mass =""
     return render_template('signup.html', response=mass) 

# check user
@user_bp.route("/signupcheck")
def su_check() :
    user_name_new=flask.request.args.get("user_name_new")
    pass_wored_new1=flask.request.args.get("pass_wored_new1")
    pass_wored_new2=flask.request.args.get("pass_wored_new2")

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
            # return redirect (url_for("user.user_home" ,username=user_name_new))
            session['username'] = user_name_new
            return redirect (url_for("user.user_home"))
        else :
            mass="passwored is not simeller try again"
            return render_template("signup.html", response=mass)   

@user_bp.route("/logincheck")
def logincheck() :  
     ui_name=flask.request.args.get("ui_name")
     ui_pass=flask.request.args.get("ui_pass") 
     data =read_file(users_file)
     users=data['users']
     for user in users :
         if user['name']==ui_name  :
            # user_found = True 
            if user['password']==ui_pass :
                # return redirect (url_for("user.user_home", username=ui_name) )
                session['username'] = ui_name
                return redirect (url_for("user.user_home"))
                       
            else :
                mass="password isn't correct"
                return render_template("/login.html", response=mass) 
            
     else :
        mass="user name isn't found"
        return render_template("/login.html", response=mass)  
