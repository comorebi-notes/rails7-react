class Api::V1::AudiosController < ApplicationController
  def show
    audio = { id: params[:id], name: "ID: #{params[:id]} の作品"  }
    render json: audio
  end
end
