import pdb
from flask import Flask, render_template, request 
from boggle import Boggle

app = Flask(__name__)
app.config['SECRET_KEY'] = 'top_secret'

boggle_game = Boggle()
#instance of Boggle() 


@app.route('/')
def show_main_page(): 
    """ root route where the board is created and rendered to the DOM """
    board = boggle_game.make_board()
    # pdb
    return render_template('index.html', board=board)