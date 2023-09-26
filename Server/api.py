import csv
import os
import re

import bson
from flask import Flask, jsonify, request, render_template, send_from_directory, session, redirect, url_for

import common
import dto
import otp_encrypt
import validate

app = Flask(__name__, static_folder='statics', static_url_path='/statics')
app.add_url_rule('/statics/<path:filename>',
                 endpoint='statics', view_func=app.send_static_file)
# Set a random string for the secret key of session
app.secret_key = "the secret key"
