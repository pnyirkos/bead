'use strict'

const Route = use('Route')

Route.get('/', 'CompetitorController.main')
Route.get('/competitorCreate', 'CompetitorController.create').middleware('auth')
Route.post('/competitorCreate', 'CompetitorController.doCreate').middleware('auth')
Route.get('/competitor/:id/edit', 'CompetitorController.edit').middleware('auth')
Route.post('/competitor/:id/edit', 'CompetitorController.doEdit').middleware('auth')
Route.post('/competitor/:id/delete', 'CompetitorController.doDelete').middleware('auth')
Route.get('/competitor/:id', 'CompetitorController.show')

Route.get('/matchAll', 'MatchController.main')
Route.get('/match/:id', 'MatchController.show')
Route.get('/matchCreate', 'MatchController.create').middleware('auth')
Route.post('/matchCreate', 'MatchController.doCreate').middleware('auth')
Route.get('/match/:id/edit', 'MatchController.edit').middleware('auth')
Route.post('/match/:id/edit', 'MatchController.doEdit').middleware('auth')
Route.post('/match/:id/delete', 'MatchController.doDelete').middleware('auth')

Route.get('/register', 'UserController.register')
Route.post('/register', 'UserController.doRegister')

Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')

Route.group('ajax', function () {
    Route.post('/login', 'UserController.ajaxLogin')
    Route.post('/register', 'UserController.ajaxRegister')
    Route.delete('/match/:id/delete', 'MatchController.ajaxDelete').middleware('auth')
    Route.delete('/competitor/:id/delete', 'CompetitorController.ajaxDelete').middleware('auth')
}).prefix('/ajax')
