require 'rails_helper'

RSpec.describe "POST /api/v1/ideas" do
  it 'creates and returns an idea' do
    post '/api/v1/ideas?title=Title1&body=Body1'

    expect(json_body['title']).to eq("Title1")
    expect(json_body['quality']).to eq("swill")
  end
end
