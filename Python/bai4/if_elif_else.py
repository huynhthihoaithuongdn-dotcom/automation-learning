# if-elif-else: ktra nhiều hơn 2 DK
# Cú pháp: 
# if dieu_kien_1:
#     # Thực thi nếu dieu_kien_1 là True
# elif dieu_kien_2:
#     # Thực thi nếu dieu_kien_1 là False VÀ dieu_kien_2 là True
# else:
#     # Thực thi nếu tất cả các điều kiện trên đều False


tb = 6

if tb >= 8:
    print("Hoc luc: Gioi")
elif 6 < tb < 8:
    print("Hoc luc: Kha")
elif 5 < tb <= 6:
    print("Hoc luc: TB")
else: 
    print("Hoc luc: Yeu")


response_code = 404

if response_code == 200:
    print("API thanh cong")
elif response_code == 401:
    print("Author ko hop le")
elif response_code == 403:
    print("User doesn't have permission to access")
elif response_code == 500:
    print("May chu gap su co Internal Server Error")
else:
    print(f"Loi ko xac dinh {response_code}")