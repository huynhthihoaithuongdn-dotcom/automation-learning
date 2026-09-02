# For: duyệt qua từng phần tử, và thực hiện hành động cho từng phần tử đấy. 

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print("Tôi thích ăn", fruit)


student = {"name": "Lan", "age": 25}
for key_new in student:
    print(key_new, "->", student[key_new])
# lấy từng key trong student, gán key đấy vào biến key_new.
# với từng biến key_new sẽ có mỗi value (Lan ,25)
# sau đó, in ra: biến key_new [name] -> value của key_new [name], tức là Lan 

for aa, gtri in student.items():
    print(gtri, "là giá trị của key", aa)



credentials = [
    ("user1", "pass1"),
    ("user2", "pass2"),
    ("invalid_user", "wrong_pass")
]

for username, password in credentials:
    print(f"Testing login with:{username} /{password}")




# range(): hàm này thường đi với for để tạo ra một dãy số

for i in range(9):
    print(i)

for i in range(4,9):
    print(i)

for i in range(4,9,3):
    print(i)