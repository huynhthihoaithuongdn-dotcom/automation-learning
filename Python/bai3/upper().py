# len(): số lượng kí tự (include space)
user_name = "HoaithUong@123 abc"

print(len(user_name))

if 4<len(user_name)<20:
    print("ten nguoi dung hop le")
else:
    print("ten nguoi dung ko hop le")

# upper(): in hoa
print(user_name.upper())
# lower(): in thường
print(user_name.lower())
# capitalize(): viết hoa chữ cái first của chuỗi
print(user_name.capitalize())
# title(): viết hoa chữ cái first của mỗi từ
print(user_name.title())