# strip(): loại bỏ khoảng trắng or tab (\t) or ký tự xuống dòng (\n) ở 2 đầu
# lstrip(): loại bỏ khoảng trắng or tab (\t) or ký tự xuống dòng (\n) ở đầu bên trái
# rstrip(): loại bỏ khoảng trắng or tab (\t) or ký tự xuống dòng (\n) ở đầu ben phải

phone = "   0987654321  \t  "
log = "    ERROR: Connection failed"


print(phone.lstrip())
print(phone.lstrip())
print(log.rstrip())
print(phone.rstrip())