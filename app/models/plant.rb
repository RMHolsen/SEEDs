class Plant < ApplicationRecord
    has_many :pods, dependent: :destroy 
end 