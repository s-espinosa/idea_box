require 'rails_helper'

RSpec.describe "GET /api/v1/ideas" do
  it 'returns a list of all ideas' do
    idea1, idea2 = create_list(:idea, 2)

    get '/api/v1/ideas'

    expect(json_body.count).to eq(2)
    expect(json_body.first['title']).to eq(idea1["title"])
    expect(json_body.first['quality']).to eq("swill")
  end
end
