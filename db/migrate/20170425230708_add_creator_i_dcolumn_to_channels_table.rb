class AddCreatorIDcolumnToChannelsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :creator_id, :integer, null: false
    add_index :channels, :creator_id, unique: true
  end
end
