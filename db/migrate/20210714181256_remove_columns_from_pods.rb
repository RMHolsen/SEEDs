class RemoveColumnsFromPods < ActiveRecord::Migration[5.0]
  def change
    remove_column :pods, "created_at"
    remove_column :pods, "updated_at"
  end
end
