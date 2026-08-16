# giống LIST, nhưng ko thể thay đổi (immutable)
# thường dùng cho dữ liệu cố định
# nếu muốn thay đổi ---> hãy dùng LIST


#pi = (3.14, 3.14159, 3.141592653589793) # số pi là tuple, ko phải float. 

point = (1,2)
print(point[0], point[1])  # CALL: truy xuất phần tử của tuple

point[0] = 3  #CHANGE: sẽ báo lỗi vì tuple ko thể thay đổi
print(point)

