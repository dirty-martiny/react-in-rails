class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :trip_name
      t.string :trip_location
      t.string :trip_date_range
      t.boolean :is_public
      t.integer :user_id

      t.timestamps
    end
  end
end
