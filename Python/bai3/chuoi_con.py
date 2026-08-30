# chuỗi con (in)
# Để kiểm tra xem một chuỗi có chứa một chuỗi con khác hay không.
# Kết quả trả về là `True` hoặc `False`.
# Cú pháp: 
# - `in`: Kiểm tra chuỗi con có ở bất kỳ đâu trong chuỗi lớn.
# - `ten_chuoi.startswith(chuoi_con)`: Kiểm tra chuỗi có bắt đầu bằng `chuoi_con` không.
# - `ten_chuoi.endswith(chuoi_con)`: Kiểm tra chuỗi có kết thúc bằng `chuoi_con` không.

# Người dùng nhập email, cần kiểm tra có chứa ký tự @:
email = "usergmail.com"
if "@" in email:
    print("valid email")
else:
    print("invalid email")


# Kiểm tra tên SP có đúng từ khóa tìm kiếm không, search_keyword = "MacBook Pro"
search_result = "Apple MacBook Pro M3 16-inch 2023"
search_keyword = "macBook pro"
search_keyword1 = "apple"

if search_keyword.lower() in search_result.lower():
    print("correct")
else: 
    print("incorrect")


print(search_result.lower().startswith(search_keyword1.lower()))
    # mean: kiểm tra tên chuỗi "Apple MacBook Pro M3 16-inch 2023" có bắt đầu bằng chuỗi con "apple" hay ko

print(search_keyword.lower() in search_result.lower())
    #  mean: kiểm tra chuỗi con "macBook pro" có trong tên chuỗi "Apple MacBook Pro M3 16-inch 2023" hay ko
