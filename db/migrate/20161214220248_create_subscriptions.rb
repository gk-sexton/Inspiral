class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.string :feed_title, null: false
      t.integer :user_id, null: false
      t.text :url, null: false

      t.timestamps
    end
    add_index :subscriptions, :user_id
  end
end
