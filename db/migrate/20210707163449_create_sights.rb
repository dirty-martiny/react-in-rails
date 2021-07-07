class CreateSights < ActiveRecord::Migration[6.1]
  def change
    create_table :sights do |t|
      t.string :name
      t.string :address1
      t.string :city
      t.string :zip_code
      t.string :state
      t.string :country
      t.string :phone
      t.integer :trip_id

      t.timestamps
    end
  end
end
