fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["Lan", 25, True, 3.14]
empty = []   # list rỗng


print(len(fruits))  #số lượng phần tử của list fruits

# CALL:
print(fruits[0], fruits[1])
print(numbers[-1])

#CHANGE:
# fruits[1] = "blueberry"         #thay đổi phần tử thứ 2 từ banana thành blueberry   
# print(fruits)
# numbers[-1] = 1946
# print(numbers)

# numbers[1:4] = [1890, 1970, 1990]   #thay đổi phần tử tại vị trí thứ234  thành 1890, 1970, 1990
# print(numbers)
# numbers[1:4] = [123, 434]        #thay đổi phần tử tại vị trí thứ234 thành 123, 434 và tự triệt tiêu những phần tử ko mentioned đến
# print(numbers)

#ADD: 
# fruits.insert(-1, "orange")   #thêm phần tử orange vào trước phần tử cuối cùng
# print(fruits)
# fruits.insert(1, "orange")   #thêm phần tử orange vào trước phần tử tại vị trí thứ 2
# print(fruits)
# numbers.insert(2, 76444)  #thêm phần tử 76444 vào vị trí thứ 3
# print(numbers)

# fruits.append("grape guava")  #thêm phần tử "grape guava" vào cuối list fruits
# print(fruits)
# fruits.extend(["grape guava"])  #thêm phần tử "grape guava" vào cuối list fruits
# print(fruits)

#DELETE:
# fruits.remove("apple")  #xóa theo giá trị, remove apple 
# print(fruits)
# numbers.pop(1)          #xóa theo index, rmeove phần tử tại vị trí thứ 2 
# print(numbers)

# del numbers[1:4]  #xóa nhiều phần tử liên tiếp, xóa phần tử tại vị trí thứ 2,3,4
# print(numbers)