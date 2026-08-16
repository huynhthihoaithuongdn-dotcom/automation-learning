# lưu dữ liệu dạng "key": "value"
person = {"name": "Lan", "age": 18}
product = {"id": 1, "name": "Laptop", "price": 1000}
mixed = {"name": "Lan", "age": 18, "isStudent": True}
empty = {}   # dictionary rỗng

# CALL:
print(person["name"], person["age"])  #truy xuất phần tử của dictionary theo key
print(mixed["isStudent"])

#CHANGE:
# person["age"] = 30        #thay đổi giá trị của key "age" từ 18 thành 30
# print(person["age"])  

# person.update({"age": 30})  #thay đổi giá trị của key "age" từ 18 thành 30
# print(person["age"])

#ADD:
# person["email"] = "lan@example.com" #thêm key "email" với giá trị 
# print(person)   

# person.update({
#     "phone": "123-456-7890",
#     "city": "Danang",       
#     "country" : "SPAIN"
# })
# print(person)  #thêm nhiều key-value vào dictionary

#DELETE:
# mixed.pop("isStudent")  #xóa theo key, remove key "isStudent" và giá trị của nó
# print(mixed)
    # pop (): làm 1 một hàm, gọi hàm với tham số key
# del mixed["isStudent"]  #xóa theo key, remove key "age" và giá trị của nó
# print(mixed)
#     # del []: là 1 từ khóa trong Python. 

# Duyệt qua dictionary:
for key in mixed:
    print(key)    #truy xuất giá trị của dictionary theo key

for value in mixed.values():
    print(value)  #truy xuất giá trị của dictionary theo value

for key,value in mixed.items():
    print(key, value)  #truy xuất giá trị của dictionary theo key và value

for amora in mixed.values():
    print(amora)  #có thể thay đổi tên,  áp dụng cho key - value - key value luôn. 

