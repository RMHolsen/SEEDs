class PodsController < ApplicationController
    # Restart server after making changes to this file
    def index
        pods = Pod.all 
        render json: PodSerializer.new(pods)
    end 

    def show
        pod = Pod.find(params[:id])
        if pod 
            render json: pod 
        else 
            render json: {message: 'Pod not found'}
        end 
    end 

    def create 
        pod = Pod.new(pod_params)
        # byebug
        if pod.save 
            render json: PodSerializer.new(pod)
        else 
            render json: {errors: pod.errors.full_messages}
        end 
    end 

    def update
        pod = Pod.find(params[:id])
        if pod.update(pod_params)
            render json: PodSerializer.new(pod)
        else 
            render json: {errors: pod.errors.full_messages}
        end 
    end 

    private

    def pod_params 
        params.require(:pod).permit(:total_count, :germ_count, :season, :location, :additives, :water, :pkg_year, :sow_year, :plant_id)
    end 
end 