require 'rails_helper'

RSpec.describe "DELETE /api/v1/ideas/:id" do
  it 'deletes an idea from the database' do
    idea1, idea2 = create_list(:idea, 2)
    expect(Idea.all.count).to eq(2)

    delete "/api/v1/ideas/#{idea1.id}"

    expect(Idea.all.count).to eq(1)
  end
end
