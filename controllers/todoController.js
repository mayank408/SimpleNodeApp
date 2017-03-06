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



	app.delete('/todo' , function(req,res){

		
		
	})

}