class PodSerializer
  # Restart server after making changes to this file
  include FastJsonapi::ObjectSerializer
  attributes attributes :total_count, :germ_count, :season, :location, :additives, :water, :pkg_year, :sow_year, :created_at, :updated_at, :plant_id, :plant
end
