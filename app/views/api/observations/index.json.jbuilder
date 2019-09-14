@observations.each do |observation|
  json.set! observation.id do
    json.partial! 'api/observations/observation', observation: observation
  end
end