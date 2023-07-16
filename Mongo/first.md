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



///cloud setup
Database access > Add New Database User > Provide username+password
Builtin-role > Atlas Admin > Add User


Network Access> Add IP Address >  0.0.0.0/0 > Confirm


mongodb+srv://<username>:<password>@cluster0.f8vmc.mongodb.net/?retryWrites=true&w=majority

mongodb+srv://test:abc@cluster0.f8vmc.mongodb.net/?retryWrites=true&w=majority

db.restaurants.find({"mealTypes.mealtype_id":1})


db.restaurants.find({state_id:1}).pretty()


db.restaurants.find({condition},{projection}).pretty()

db.restaurants.find({state_id:1},{restaurant_name:1,address:1}).pretty()

db.restaurants.find({state_id:1},{restaurant_name:1,address:1,_id:0}).pretty()


db.restaurants.find({"mealTypes.mealtype_id":1},{restaurant_name:1,mealTypes:1,_id:0})


db.restaurants.find({},{restaurant_name:1,mealTypes:1,_id:0})

db.restaurants.find({"mealTypes.mealtype_id":{$in:[1,4,5]}},{restaurant_name:1,mealTypes:1,_id:0})


db.restaurants.find({
    $and:[
        {"mealTypes.mealtype_id":1},
        {"cuisines.cuisine_id":1}
    ]
},{restaurant_name:1,mealTypes:1,_id:0,cuisines:1}).pretty()


db.restaurants.find({
    $or:[
        {"mealTypes.mealtype_id":1},
        {"cuisines.cuisine_id":1}
    ]
},{restaurant_name:1,mealTypes:1,_id:0,cuisines:1}).pretty()



db.restaurants.find({state_id:1},{restaurant_name:1,address:1,cost:1}).sort({cost:1}).pretty()



db.restaurants.find({state_id:1},{restaurant_name:1,address:1,cost:1}).sort({cost:1}).skip(1).pretty()

1-2
db.restaurants.find({},{restaurant_name:1,address:1,cost:1}).sort({cost:1}).skip(0).limit(2).pretty()

3-4
db.restaurants.find({},{restaurant_name:1,address:1,cost:1}).sort({cost:1}).skip(2).limit(2).pretty()

5-6
db.restaurants.find({},{restaurant_name:1,address:1,cost:1}).sort({cost:1}).skip(4).limit(2).pretty()



db.restaurants.find({cost:{$lt:500}},{restaurant_name:1,address:1,cost:1}).pretty()


db.restaurants.find({cost:{$gt:500,$lt:1000}},{restaurant_name:1,address:1,cost:1}).pretty()


////////Aggregartion 
> $match It is used for filtrting document (condition as like in find)
> $project It will select some specifi fields from a collection 
> $group it is used to group document on based on some values 
> $sort Its is used to sort the data 
> $skip Skip number of documents 
> $limit To retrive number of documents 
> $unwind Deconstructs an array, like flat the array 
> $out Is to write the document output

db.orders.insert([ { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 }, { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 }, { "_id" : 3 } ])

db.inventory.insert([ { "_id" : 1, "sku" : "almonds", description: "product 1", "instock" : 120 }, { "_id" : 2, "sku" : "bread", description: "product 2", "instock" : 80 }, { "_id" : 3, "sku" : "cashews", description: "product 3", "instock" : 60 }, { "_id" : 4, "sku" : "pecans", description: "product 4", "instock" : 70 }, { "_id" : 5, "sku": null, description: "Incomplete" }, { "_id" : 6 } ])

db.inventory.insert([ { "_id" : 7, "sku" : "almonds", description: "American Almonds", "instock" : 10 } ])



db.orders.aggregate([
    {$lookup:{
        from:'inventory',
        localField:'item',
        foreignField:'sku',
        as:'combine_data'
    }}
])

//update
db.collection.update(
    {condition},
    {values}
)

db.user.update(
    {"name":"Nikita"},
    {
        $set:{
            "role":"User",
            "city":"Paris"
        }
    }
)

db.user.update(
    {"name":"Nikita"},
    {
        $unset:{
            "role":1
        }
    }
)

// Delete
//remove all
db.user.remove({})

//delete particuler
db.user.remove({"name":"Nikita"})