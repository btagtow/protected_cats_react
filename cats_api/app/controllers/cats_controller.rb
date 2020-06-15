class CatsController < ApplicationController

    before_action :authenticate, only: [:index, :create]
    
    def index
        @cats = Cat.all
        render json: @cats
    end

    def show
        @cats = Cat.where(user_id: params[:id])
        render json: @cats
    end

    def create
        @cat = Cat.create(cat_params)
        render json: @cat
    end

    private

    def cat_params
        params.require(:cat).permit(:name, :color).merge(user_id: @user_id)
    end

end
