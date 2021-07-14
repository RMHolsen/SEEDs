class PlantSerializer
  # Restart server after making changes to this file
  
  include FastJsonapi::ObjectSerializer
  attributes :name, :latin_name, :season, :light, :water, :germ_days, :notes
end
