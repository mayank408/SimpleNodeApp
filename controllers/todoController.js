var bodyParser = require('body-parser')
var mongoose = require('mongoose')


mongoose.connect('mongodb://test:test@ds161960.mlab.com:61960/todos')

var todoschema = new mongoose.Schema({
	item: String
})

var Todo = mongoose.model('Todo',todoschema)

//var data = [{item: 'get milk'} ,{item:'walk dog'} , {item:'kick some codin'}]
var url = bodyParser.urlencoded({extended: false})

module.exports = function(app){

	app.get('/todo' , function(req,res){

		Todo.find({} , function(err,data){
			if(err) throw err;
			res.render('todo',{todos: data})

		})
	})


	app.post('/todo' , url, function(req,res){

		var newTodo = Todo(req.body).save(function(err,data){
			if(err) throw err
				res.json(data);
		})
		console.log('request made')
	})



	app.delete('/todo/:item' , function(req,res){

		Todo.find({item: req.params.item.replace(/\-/," ")}).remove(function(err,data){
			if(err) throw err
				res.json(data);
		})

		})		


}