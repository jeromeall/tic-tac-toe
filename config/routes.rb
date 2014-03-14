TicTacToe::Application.routes.draw do
  root to: "sites#index"
  get "/tic_toe_template", to: "sites#tic_toe_template"


end
