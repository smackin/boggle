from flask import Flask, render_template, request, session, jsonify
from boggle import Boggle
import pdb

app = Flask(__name__)
app.config['SECRET_KEY'] = 'top_secret'

boggle_game = Boggle()
#instance of Boggle() 

@app.route('/')
def show_main_page(): 
    """ root route where the board is created and rendered to the DOM """
    board = boggle_game.make_board()
    # pdb
    session['board'] = board
    return render_template('index.html', board=board)

@app.route('/check-word')
def check_word():
    """take the word from the params of the axios.GET request and check it against the board we have saved in the session."""
    word = request.args['word']
    board = session['board']
    response_string = boggle_game.check_valid_word(board, word)
    # response_String takes the boggle_game variable( which is a new insance of boggle in boggle.py ) which is using the class method of check_valid_word and accepting board (with letters) and word (from the input) 
    # this variable will represent one of the three strings in check_valid_word function. 
    return jsonify({'response': response_string})
    # this route is for running the check_valid_word() function which is an AJAX request and uses JSON.  this is why the jsonify method is used.   we need to make the response, which is a dictionary, and return it as JSON in order to process the data sent to the request.  