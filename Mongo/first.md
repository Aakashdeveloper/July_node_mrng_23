SQL

RollNo | Hindi | English |
  1    |  89   |         |
  2    |       |  78     |
  3    | 91    |         |


Mongo
[
    {
        "RollNo":1,
        "Hindi":89
    },
    {
        "RollNo":2,
        "English":78
    },
    {
        "RollNo":3,
        "Hindi":91
    }
]



// Setup mongodb local
> Download and install mongodb

> In C drive make folder by the name of data
C:/data

> In data folder make folder by the name of db
C:/data/db

//Server
> Always running while using an application
# window
> open cmd and go inside bin folder
> cd C:/ProgramFile/Mongodb/server/5.1/bin
> mongod
> 27017

//Client
> Use for testing queries
> open cmd and go inside bin folder
> cd C:/ProgramFile/Mongodb/server/5.1/bin
> mongo

SQL        Mongo
Database   Database
Tables     Collection
Row        Document
Select     Find
Insert     Insert
Update     Update
Delete     Delete


/// See all database
> show dbs

/// to go inside db
use dbname

///to see collection
show collections

//to see data inside collection
db.collectionName.find()

db.category.find()

//To Create new database
> use dbname

// insert record
db.collectionName.insert()

db.user.insert({"name":"Amit","city":"Venice"})
db.user.insert({"name":"Nikita","city":"Paris"})
db.user.insert({"name":"Rahul","city":"Venice"})

db.user.insert({"_id":1,"name":"Keerti","city":"Mumbai"})
db.user.insert({"_id":2,"name":"Yash","city":"Delhi"})

_id Object Id
12 byte in size
Primary key
Always unique


db.user.find({city:"Venice",name:"Aakash"})

db.user.createIndex({"name":1},{unique:true})


db.catgeory.drop()