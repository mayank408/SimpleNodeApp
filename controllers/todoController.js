var bodyParser = require('body-parser')
var mongoose = require('mongoose')


mongoose.connect('mongodb://test:test@ds161960.mlab.com:61960/todos')

var todoschema = new mongoose.Schema({
	item: String
})

var Todo = mongoose.model('Todo',todoschema)

var itemOne = Todo({item:'Buy flowers'}).save(function(err){
	if(err) throw err;
	console.log('item saved');
})

var data = [{item: 'get milk'} ,{item:'walk dog'} , {item:'kick some codin'}]
var url = bodyParser.urlencoded({extended: false})

module.exports = function(app){

	app.get('/todo' , function(req,res){

		res.render('todo',{todos: data})


	})



	app.post('/todo' , url, function(req,res){

		console.log('request made')
		data.push(req.body);
		res.json(data);
		
	})



	app.delete('/todo/:item' , function(req,res){

		data = data.filter(function(todo){
			return todo.item.replace(/ /g , '-')!== req.params.item;

		})
		res.json(data)
		
	})

}