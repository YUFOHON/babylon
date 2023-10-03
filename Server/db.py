from pymongo import MongoClient
from pymongo.server_api import ServerApi



def connect_to_db():
    uri = "mongodb+srv://Chester:Chesterpw@cluster0.6jkg6p8.mongodb.net/?retryWrites=true&w=majority"

    # C reate a new client and connect to the server
    client = MongoClient(uri)

    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    # connection to the db
    cluster = MongoClient(uri)
    db = cluster["Fitsion_Pro"]
    collection = db['User_Inventory']
    return collection


