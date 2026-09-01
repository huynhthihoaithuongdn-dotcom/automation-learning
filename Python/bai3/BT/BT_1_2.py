# 1. Cho chuỗi: text = “  hello world  “
#     Dùng len() để đếm số ký tự (bao gồm cả khoảng trắng)
#     Dùng strip() để bỏ khoảng trắng đầu và cuối, sau đó in lại chiều dài

text = "  hello world  "

print(f"So ky tu (include space): {len(text)}")

# way1:
text_not_space = text.strip()
text_len = len(text_not_space)
print(f"So ky tu sau khi bo khoang trang: {text_len}")

# way2:
print(f"So ky tu sau khi bo khoang trang: {len(text.strip())}")


# 2. Cho chuỗi: name = “tên bạn”
#     In ra chữ hoa toàn bộ
#     In ra chữ thường toàn bộ
#     In ra dạng capitalize (chữ cái đầu viết hoa)
#     In ra dạng title (mỗi từ viết hoa chữ cái đầu)

name = "huỳnh thị hoài Thương"

print(f"Chu hoa: {name.upper()}")
print(f"Chu thuong: {name.lower()}")
print(f"Chu cai dau viet hoa: {name.capitalize()}")
print(f"Viet hoa chu cai dau: {name.title()}")
