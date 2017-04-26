class RenameUsernameColumnToCreatorColumnChannelsTable < ActiveRecord::Migration[5.0]
  def change
    rename_column :channels, :username, :creator
  end
end
