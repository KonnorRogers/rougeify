Bridgetown.configure do |config|
  config.url = ENV.fetch("URL", "https://konnorrogers.github.io")
  config.base_path = ENV.fetch("BASE_PATH", "/rougeify")
  config.base_url = config.url + config.base_path
end
