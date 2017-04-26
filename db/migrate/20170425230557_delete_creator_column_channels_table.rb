class DeleteCreatorColumnChannelsTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :channels, :creator
  end
end
