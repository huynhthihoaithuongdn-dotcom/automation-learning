# replace(): tìm và thay thế một chuỗi con = một chuỗi con khác
# Cú pháp: ten_chuoi.replace(old_string, new_string, count) 
# ---> tìm và thay thế chuoi_cu bằng chuoi_moi. Tham số count (tùy chọn) giới hạn số lần thay thế.

phone = "0987-654-321"
print(phone.replace("-",""))

# Chuẩn hóa đường dẫn file:
path = "C:\\Users\\Lan\\Documents"
print(path.replace("\\","/"))


# Chuẩn hóa giá tiền
price_text = "1,550,000 đ"
price_cleaned = price_text.replace(",","").replace(" đ","")
price_value = int(price_cleaned)
print(f"Giá tị của giá tiền là: {price_value}")