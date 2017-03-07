var bodyParser = require('body-parser')


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