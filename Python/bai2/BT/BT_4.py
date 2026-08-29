# 4/ Tạo list scores = [9, 7, 10, 8, 6] và làm:
# In ra điểm cao nhất
# Tính điểm trung bình
# Thêm điểm 5 vào cuối list

ex_list = [9, 7, 10, 8, 6]

print("diem cao nhat:", max(ex_list))

print("diem TB:", sum(ex_list)/len(ex_list))

ex_list.append(5)
print("list sau khi them diem 5:", ex_list)

ex_list.extend([988,111])
print("list sau khi them diem 988, 111:", ex_list)

ex_list.insert(2, 9876)
print("list sau khi them diem 9876 vao vi tri 2:", ex_list)