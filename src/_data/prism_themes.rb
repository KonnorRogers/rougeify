hash = {}

src_dir = File.expand_path("../", __dir__)

Dir["#{src_dir}/prism-themes/**/*.css"].each do |file|
  hash[file.to_s] = {
    theme_name: File.basename(file, File.extname(file)).split(/prism-/)[1].to_s,
    content: File.read(file)
  }
end

hash
