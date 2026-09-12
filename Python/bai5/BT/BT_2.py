# 2. File
#     Đọc file data.txt
#     Nếu file tồn tại → in nội dung
#     Nếu không → in “File không tồn tại”
#     Luôn in “Kết thúc chương trình”

try:
    with open("Python/bai5/BT/LICENSE.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("File doesn't exist")
else:
    print("I found and printed the file")
finally:
    print("DONE!")

# "r": đọc file
# "w" → ghi file (xóa nội dung cũ nếu file đã tồn tại)
# "a" → ghi thêm vào cuối file (append)
# "x" → tạo file mới, báo lỗi nếu file đã tồn tại

# try: Add more content to file
content_add = "\nbeautiful scars, it changed me a lot"
try:
    with open("Python/bai5/BT/LICENSE.txt", "a") as file:
        file.write(content_add)
    with open("Python/bai5/BT/LICENSE.txt", "r") as file:
        content = file.read()
    print(content)
except FileNotFoundError:
    print("File doesn't exist")
else:
    print("I found and printed the file")
finally:
    print("DONE!")