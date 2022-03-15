class Api::V1::GenresController < ApplicationController
  def index
    genres = [
      { id: 1, name: 'ポップス' },
      { id: 2, name: '和風' },
      { id: 3, name: 'アップテンポ' }
    ]
    render json: genres
  end

  def show
    audios = case params[:id]&.to_i
             when 1
               [
                 { id: 11, name: 'ポップスの曲1' },
                 { id: 12, name: 'ポップスの曲2' },
                 { id: 13, name: 'ポップスの曲3' }
               ]
             when 2
               [
                 { id: 14, name: '和風の曲1' },
                 { id: 15, name: '和風の曲2' },
                 { id: 16, name: '和風の曲3' }
               ]
             when 3
               [
                 { id: 17, name: 'アップテンポの曲1' },
                 { id: 18, name: 'アップテンポの曲2' },
                 { id: 19, name: 'アップテンポの曲3' }
               ]
             else []
             end
    render json: audios
  end
end
