# 1:
#  a. Kiểm tra message đăng nhập xem có nắm trong danh sách sau:
#         expected_messages = [“Login succesfull”, “Welcome”]
#         actual_message = “Welcome”
#  Nếu actual message nằm trong expected_messages thì in ra “Message valid” ngược lại thì in ra “Message invalid”

expected_messages = ["Login successful", "Welcome"]
actual_message = "welcome"

i = 0

while i < len(expected_messages):
    if actual_message.lower() == expected_messages[i].lower():
        print("Message valid")
        break
    i += 1
else:
    print("Message invalid")

# khi i < len thì chạy đoạn lệnh IF. Nếu actual giống giá trị của ptử thứ i trong ds expected
# thì in ra và break vòng lặp. 
# Nếu KO, thì giá trị i tăng lên 1. Và chạy lại vòng lặp Whie, xem xét i < len ko,.....
# Nếu đến một giá i>= len thì dòng lệnh ELSE chạy.


#  b. Tìm số chia hết cho 7 đầu tiên trong dãy từ 1 đến 100 và in ra màn hình

i = 1
while i < 100:
    if i % 7 == 0:
        print(f"so chia het cho 7 la {i}")
        break
    i += 1
else:
    print(f"ko tim thay")


#  c. Phân loại học lực theo điểm trong list sau: scores = [95, 82, 67, 45, 88, 90, 50]
#         Từ 90 điểm trở lên → Xuất sắc
#         ⇒ 70: Khá
#         ⇒ 50: Trung bình
#         < 50: Yếu

scores = [95, 82, 67, 45, 88, 90, 50]

i = 0
while i < len(scores):
    score = scores[i]

    if score >= 90:
        print(score, "-> Xuat sac")
    elif score >= 70:
        print(score, "-> Kha")
    elif score >= 50:
        print(score, "-> Trung Binh")
    else:
        print(score, "-> Yeu")

    i += 1
# else:
#     print("invalid")          # ko nhất thiết phải có


#  d. In ra bảng cửu chương 2&3. 

i = [2,3]
n = 1

while n <= 9:
    for value_of_i in i:
        print(f"{value_of_i} * {n} = {value_of_i*n}")
    n += 1
# else:
#     print("invalid")          # ko nhất thiết phải có










# n = 1

# while n <= 9:
#     print(f"2 * {n} = {2*n}")
#     n += 1

# n = 1

# while n <= 9:
#     print(f"3 * {n} = {3*n}")
#     n += 1

