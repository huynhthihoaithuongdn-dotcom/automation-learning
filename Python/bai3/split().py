# split(): tách chuỗi, tách ra một DS các chuỗi con

hobbies_str = "đá bóng, đọc sách, nghe nhạc, uống rượu, nhảy dây"

hobbies_split_space = hobbies_str.split()     #tách theo space
print(hobbies_split_space)

hobbies_split_comma = hobbies_str.split(", ")     #tách theo dấu phẩy
print(hobbies_split_comma)


#log file xuống dòng bằng \n
logs = "INFO: Start\nERROR: Timeout\nINFO: End"

logs_split = logs.split("\n")
print(logs_split)
