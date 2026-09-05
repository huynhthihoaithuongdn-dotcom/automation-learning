# 1:
#  a. Kiểm tra message đăng nhập xem có nắm trong danh sách sau:
#         expected_messages = [“Login succesfull”, “Welcome”]
#         actual_message = “Welcome”
#  Nếu actual message nằm trong expected_messages thì in ra “Message valid” ngược lại thì in ra “Message invalid”

expected_messages = ["Login successful", "Welcome"]
actual_message = "welcome"

# Way1:
for mess in expected_messages:
    if actual_message.lower() == mess.lower():
        print("Message valid")
        break
    else:
        print("Message invalid")

     # Idea: duyệt qua các message trong expected_messages. nếu tìm thấy actual thì stop và rời khỏi vòng lặp.
     # nếu ko thì ra in message.  

# Way2: 
if actual_message.lower() in [mess.lower() for mess in expected_messages]: 
    print("Message valid")
else:
    print("Message invalid")

#  b. Tìm số chia hết cho 7 đầu tiên trong dãy từ 1 đến 100 và in ra màn hình

for i in range (1,101):
    if i % 7 == 0:
        print(f"so chia het cho 7 la {i}")
        break

#  c. Phân loại học lực theo điểm trong list sau: scores = [95, 82, 67, 45, 88, 90, 50]
#         Từ 90 điểm trở lên → Xuất sắc
#         ⇒ 70: Khá
#         ⇒ 50: Trung bình
#         < 50: Yếu

scores = [95, 82, 67, 45, 88, 90, 50]

for score in scores:
    if score >= 90:
        print(score, "-> Xuat sac")
    elif score >= 70:
        print(score, "-> Kha")
    elif score >= 50:
        print(score, "-> Trung Binh")
    else:
        print(score, "-> Yeu")

    # Note: bởi vì scores là một list, nên ko thể dùng IF-ELSE để so sánh trực tiếp, 
    #       phải duyệt từng điểm trong scores--> dùng FOR


#  d. In ra bảng cửu chương 2&3. 

# Way1:
for n in range (1,10):
    print(f"2 * {n} = {2*n}")

for m in range (1,10):
    print(f"3 * {m} = {3*m}")

# Way2: 
numbers = [2, 3]

for num in numbers:
    for i in range (1, 10):
        print(f"{num} -> {num}*{i} = {num*i}")

