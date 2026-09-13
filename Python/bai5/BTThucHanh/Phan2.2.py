# Viết chương trình chia 2 số a và b do người dùng nhập. 
# Dùng try-except riêng biệt để bắt lỗi ValueError (nếu nhập chữ) 
#     và ZeroDivisionError (nếu chia cho 0) với các thông báo lỗi tương ứng.

# try có lỗi mới sinh ra except. Vậy, cần phải làm cho try có lỗi, thì mới đúng y/c đề bài


# Way1: 
try: 
    a_input = input("Nhap so a: ")
    a = int(a_input)
    b_input = input("Nhap so b: ")
    b = int(b_input)
    if a == 0 or b == 0:
        raise ZeroDivisionError
    if not a_input.isdigit() and not b_input.isdigit():
          raise ValueError
except(ValueError, ZeroDivisionError) as error:
    if isinstance(error, ValueError):
        print("PLs nhap number")
    else:
        print("a hoac b phai khac 0")
else:
    print(f"{a} chia {b} = {a//b}")


#Way2: 
try:
    a_input = input("Nhap so a: ")
    a = int(a_input)

    b_input = input("Nhap so b: ")
    b = int(b_input)

    print(f"{a} chia {b} = {a // b}")

except (ValueError, ZeroDivisionError) as error:
    if isinstance(error, ValueError):
        print("PLs nhap number")
    else:
        print("a hoac b phai khac 0")
