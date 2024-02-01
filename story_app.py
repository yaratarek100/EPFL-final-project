from flask import Flask
from Blueprints.story.story import story_bp
from Blueprints.registration.registration import user_bp

app = Flask(__name__)

app.register_blueprint(user_bp)
app.register_blueprint(story_bp)


if __name__ == '__main__':
    app.run(debug=True)

