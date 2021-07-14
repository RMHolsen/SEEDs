class PlantsController < ApplicationController 
    # Restart server after making changes to this file
    def index
        plants = Plant.all 
        # alt code: render json: plants, only: [:name, :latin_name]
        render json: PlantSerializer.new(plants)
    end 

    def show 
        plant = Plant.find_by(id: params[:id])
        if plant 
            render json: plant 
        else 
            render json: {message: 'Plant not found'}
        end 
    end 

    def create 
    #At this point this is rather an artifact, but eventually there should be a page to enter plant information for a new plant
        plant = Plant.new(plant_params)
        if plant.save 
            render json: PlantSerializer.new(plant)
        else 
            render json: {errors: plant.errors.full_messages}
        end 
    end 

    private

    def plant_params 
        params.require(:plant).permit(:name, :latin_name, :light, :water, :season, :germ_days)
    end 
end 