fruits = {"apple", "banana", "cherry", "apple", "apple"}
fruits2 = {"cherry", "watermelon", "guava"}
empty_set = set()       # Set rỗng

#Kiểm tra phần tử có tồn tại trong set hay không:
if "cherry" in fruits:
    print("cóa á")

#CALL:
print(fruits)  # {'apple', 'banana', 'cherry'} (apple chỉ xuất hiện 1 lần)
print(empty_set)        # set()

#CHANGE: ko thể thay đổi phần tử đã có trong set, nhưng có thể thêm hoặc xóa phần tử

#ADD:
# fruits.add("kiwi")        # add phần tử "kiwi" vào set fruits
# print(fruits)  

# fruits.update(["kiwi", "orange"])  #thêm nhiều phần tử vào set fruits
# print(fruits)  

#DELETE:
# fruits.remove("banana")  #xóa 1 phần tử "banana" khỏi set fruits
# print(fruits)  

# Find out the similar of two sets:
common_fruits = fruits & fruits2
print("phan tu chung:", common_fruits)


