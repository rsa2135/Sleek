class AddCreatorToChannelsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :username, :string, null: false
  end
end
