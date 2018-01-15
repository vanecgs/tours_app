json.extract! waypoint, :id, :name, :lat, :lng, :created_at, :updated_at
json.url waypoint_url(waypoint, format: :json)
