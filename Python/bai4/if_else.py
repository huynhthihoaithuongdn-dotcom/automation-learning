# if-else: lựa chọn 1 trong 2. một cho TH DK đúng, và một cho tất cả các TH còn lại (khi điều kiện sai).
# Cú pháp: 
# if dieu_kien:
#     # Thực thi nếu dieu_kien là True
# else:
#     # Thực thi nếu dieu_kien là False

login_message = "DANG NHAP THANH CONG"

if login_message.capitalize() == "Dang nhap thanh cong":
    print("✅ TEST PASSED: Chức năng đăng nhập hoạt động đúng.")
else:
    print("❌ TEST FAILED: Đăng nhập thất bại hoặc thông báo lỗi không đúng.")