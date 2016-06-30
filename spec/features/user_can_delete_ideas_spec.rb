require 'rails_helper'

RSpec.describe 'When a user deletes an idea' do
  it 'the idea is removed from the page and deleted', :js => true do
    idea1, idea2 = create_list(:idea, 2)

    visit '/'
    wait_for_ajax
    within("#idea-#{idea1.id}") do
      find(".delete-button").click
    end

    expect(page).not_to have_content(idea1.title)
    expect(page).not_to have_content(idea1.body)
    expect(page).to have_content(idea2.title)
    expect(page).to have_content(idea2.body)
  end
end
