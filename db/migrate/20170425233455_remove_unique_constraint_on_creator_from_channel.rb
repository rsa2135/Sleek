class RemoveUniqueConstraintOnCreatorFromChannel < ActiveRecord::Migration[5.0]
  def change
    remove_index :channels, :creator_id
    add_index :channels, :creator_id
  end
end
