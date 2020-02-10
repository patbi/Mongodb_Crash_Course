/* start server mongo*/
	- mongod

	OR start and change port
	
	- mongod --port 27018

/* connect on mongo console  */

	- mongo 

	OR

	- mongo --port 27018

/* list databases */

1 - show dbs

/* select db for insert data collections*/

2- use shop


/* Clear console */
	* cls

/* CRUD Operations */

- CREATE
	* insertOne(data, options)
	* insertMany(data, options)

 - READ
	* find(filer, options) 
	* findOne(filer, options)

 - UPDATE
	* updateOne(filter, data, options) 
	* updateMany(filter, data, options)
	* replaceOne(filter, data, options)

  - DELETE
  	* deleteOne(filter, options)
  	* deleteMany(filter, options)



/* insert data collection in your database */

3 - db.products.insertOne({name: "A Book", price: 12.99})
	
		OR	insertMany

	db.products.insertMany([
	{attribute: "value"},
	{},
	{}
	])

/* find data collections */

4- db.products.find()  

	OR find

	db.products.find().pretty()
	db.shop.find({age: {$gt: 20}}).pretty()
	db.shop.findOne({age: {$gt: 28}})

/* update data */

5 - db.products.updateOne({attribute: "value"}, {$set: {newAttribute: "value"}})
	db.updateMany({}, {$set: {newAttribute: "value"}})
	db.shop.updateOne({_id: ObjectId("5e41343add506ff1c8011438")}, {$set: {delayed: true}})
	db.shop.update({_id: ObjectId("5e41343add506ff1c8011438")}, {$set: {delayed: false}})

	db.shop.update({_id: ObjectId("5e41343add506ff1c8011438")}, {delayed: false})

	db.shop.replaceOne({_id: ObjectId("5e41343add506ff1c8011438")}, {
	 	"newAttribute": "value",
	 	"newAttribute": "value",
	 	"newAttribute": "value",
	 	"newAttribute": "value"
	 })


/* delete data */

6 - db.products.deleteOne({attribut: "value"})  
	db.products.deleteMany({equalAttribute: "value"})


