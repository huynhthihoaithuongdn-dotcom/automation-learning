# 2.
#   a. Tìm kiếm sản phẩm trong list sản phẩm sau:
#       products = [”iPhone 13”, “Samsung Galaxy”, “MacBook Pro 16 inch”, “Oppo Reno”]
        
#        Viết chương trình duyệt danh sách và kiểm tra xem “MacBook Pro 16 inch” có tổn tại không
#        Nếu có → in “Đã tìm thấy sản phẩm” và dừng vòng lặp (break)
#        Nếu không → in “Không tìm thấy sản phẩm”

products = ["iPhone 13", "Samsung Galaxy", "MacBook Pro 16 inch", "Oppo Reno"]

search_product = "macbook pro 16 inch"
for product_duyet in products:
    if search_product.lower() == product_duyet.lower():
        print(f"Da tim thay san pham {search_product.title()}")
        break
else:
    print("Ko tim thay san pham")



#   b. Cho list số sau:  numbers = [2, 5, 8, 11, 14, 17, 20]
        
#       In ra tất cả các số trong list
#       In ra số chẵn trong list
#       Tính tổng tất cả số trong list
#       In ra bảng cửu chương của từng số trong list (gợi ý: dùng for i in range(1, 11):)

numbers = [2, 5, 8, 11, 14, 17, 20]

for num_1 in numbers:
    print(f"Cac so trong list: {num_1}")

for num_2 in numbers:
    if num_2 % 2 == 0:
        print(f"So chan la: {num_2}")


print(f"Tong tat ca so trong list la: {sum(numbers)}")


num_3 = 0

while num_3 < len(numbers):
    value_of_num = numbers[num_3]

    for i in range(1,10):
        print(f"{value_of_num} -> {value_of_num}*{i} = {value_of_num * i}")
    i += 1

    num_3 += 1
else:
    print("invalid")        