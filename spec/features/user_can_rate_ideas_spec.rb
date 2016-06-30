require 'rails_helper'

RSpec.describe 'When a user rates an idea' do
  it 'the rating is increased with thumbs up', :js => true do
    idea1 = create(:idea)

    visit '/'
    wait_for_ajax
    within("#idea-#{idea1.id}") do
      find(".upgrade-button").click
    end

    within("#idea-#{idea1.id}") do
      expect(page).not_to have_content("swill")
      expect(page).to have_content("plausible")
    end
  end

  it 'the rating is decreased with thumbs down', :js => true do
    idea1 = create(:idea, quality: 'genius')

    visit '/'
    wait_for_ajax
    within("#idea-#{idea1.id}") do
      find(".downgrade-button").click
    end

    within("#idea-#{idea1.id}") do
      expect(page).not_to have_content("genius")
      expect(page).to have_content("plausible")
    end
  end

  it 'the rating is not impacted by invalid ratings', :js => true do
    idea1 = create(:idea, quality: 'genius')
    idea2 = create(:idea, quality: "swill")

    visit '/'
    wait_for_ajax
    within("#idea-#{idea1.id}") do
      find(".upgrade-button").click
    end
    within("#idea-#{idea2.id}") do
      find(".downgrade-button").click
    end

    within("#idea-#{idea1.id}") do
      expect(page).to have_content("genius")
    end
    within("#idea-#{idea2.id}") do
      expect(page).to have_content("swill")
    end
  end

end
