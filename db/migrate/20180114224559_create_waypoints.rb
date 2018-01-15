class CreateWaypoints < ActiveRecord::Migration[5.1]
  def change
    create_table :waypoints do |t|
      t.string :name
      t.decimal :lat
      t.decimal :lng

      t.timestamps
    end
  end
end
