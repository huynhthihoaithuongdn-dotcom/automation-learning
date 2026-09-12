# 1. Nhập số
#     Viết chương trình yêu cầu người dùng nhập số
#     Nếu nhập đúng → in bình phương
#     Nếu nhập sai → in “Sai định dạng”


try:
    number_input = input("Enter a number: ")
    number = int(number_input)
    if number > 0:
        print(f"Binh phuong cua {number} la {number ** 2}")
except ValueError:
    print("Sai dinh dang")
