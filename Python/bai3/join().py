#join(): nối phần tử của list/tuple thành một chuỗi 
# Cú pháp: ky_tu_noi.join(list_can_noi)
    # vd: ",".join(user_name)

data = ["SP001", "Laptop ABC", "15000000"]

data_line = " and ".join(data)
print(data_line)