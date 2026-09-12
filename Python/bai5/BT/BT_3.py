# 3. Xử lý ValueError và lỗi logic với raise
#     Bài toán: Viết một chương trình yêu cầu người dùng nhập vào năm sinh và tính tuổi của họ. Chương trình phải xử lý được các trường hợp nhập sai.
#     Yêu cầu:
#     SD khối try-except để bắt lỗi ValueError nếu người dùng nhập vào chữ thay vì số.
#     Sau khi chuyển đổi thành số thành công, hãy kiểm tra xem năm sinh có hợp lệ hay không (ví dụ: không được lớn hơn năm hiện tại).
#     Nếu năm sinh không hợp lệ, hãy dùng raise ValueError để chủ động tạo ra một lỗi với thông báo "Năm sinh không thể lớn hơn năm hiện tại."
#     Sử dụng khối else để in ra tuổi của người dùng chỉ khi mọi thứ đều hợp lệ.


try:
    birth_year_input = input("Nhap nam sinh: ")
    birth_year = int(birth_year_input)
    current_year = 2026

    if birth_year > current_year:
        raise ValueError("Năm sinh không thể lớn hơn năm hiện tại.") 
except ValueError as error:
    if birth_year_input.isdigit():
        print(error)
    else:
        print("Vui long nhap ky tu SO")
else:
    print(f"Tuoi tho: {current_year - birth_year}")
finally:                                                # có thể bỏ qua
    print("close chuong trinh")



# from datetime import datetime
# def lay_nam_hien_tai():
# 	return datetime.now().year

# nam_hien_tai = lay_nam_hien_tai()
# print(nam_hien_tai)