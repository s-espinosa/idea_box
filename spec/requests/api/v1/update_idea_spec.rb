require 'rails_helper'

RSpec.describe "PATCH /api/v1/ideas" do
  it 'updates an idea' do
    idea1 = create(:idea)

    patch "/api/v1/ideas/#{idea1.id}?quality=plausible"

    updated = Idea.find(idea1.id)
    expect(updated["quality"]).to eq(1)
    expect(updated["title"]).to eq("#{idea1.title}")
  end
end
