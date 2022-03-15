class Api::V1::InstrumentsController < ApplicationController
  def index
    categories = [
      { id: 1, name: 'ギター' },
      { id: 2, name: 'ピアノ' },
      { id: 3, name: 'ストリングス' }
    ]
    render json: categories
  end

  def show
    audios = case params[:id]&.to_i
             when 1
               [
                 { id: 1, name: 'ギターの曲1' },
                 { id: 2, name: 'ギターの曲2' },
                 { id: 3, name: 'ギターの曲3' }
               ]
             when 2
               [
                 { id: 4, name: 'ピアノの曲1' },
                 { id: 5, name: 'ピアノの曲2' },
                 { id: 6, name: 'ピアノの曲3' }
               ]
             when 3
               [
                 { id: 7, name: 'ストリングスの曲1' },
                 { id: 8, name: 'ストリングスの曲2' },
                 { id: 9, name: 'ストリングスの曲3' }
               ]
             else []
             end
    render json: audios
  end
end
