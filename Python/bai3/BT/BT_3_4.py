# 3. Viết chương trình cắt chuỗi: s = “Automation Testing”
#     Lấy ra từ “Automation”
#     Lấy ra từ “Testing”
#     Lấy 5 ký tự đầu tiên
#     Lấy 5 ký tự cuối cùng

s = "Automation Testing"

print(f"Lấy ra từ “Automation”: {s[:10]}")
print(f"Lấy ra từ Testing: {s[11:]}")
print(f"Lấy ra từ 5 ký tự đầu tiên: {s[:5]}")
print(f"Lấy ra từ 5 ký tự cuối cùng: {s[-5:]}")

# 4. Cho chuỗi số điện thoại: messy_phone = “ 090-123 4567 “
#     Dùng strip() để bỏ khoảng trắng
#     Dùng replace() để bỏ dấu - và khoảng trắng. In ra số điện thoại chuẩn hóa: 0901234567

messy_phone = " 090-123 4567 "

print(f"Bo khoang trang: {messy_phone.strip()}")
print(f"SDT chuan hoa: {messy_phone.strip().replace("-","").replace(" ","")}")
