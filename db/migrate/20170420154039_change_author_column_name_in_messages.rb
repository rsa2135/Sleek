class ChangeAuthorColumnNameInMessages < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :author, :author_id
  end
end
