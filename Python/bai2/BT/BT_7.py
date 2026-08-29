# 7/ Tạo set emails = {"a@gmail.com", "b@gmail.com", "a@gmail.com"}
# Quan sát kết quả khi in set ra
# Thêm “c@gmail.com”
# Thử xóa “d@gmail.com” bằng remove và bằng discard, giải thích sự khác nhau

ex_emails = {"a@gmail.com", "b@gmail.com", "a@gmail.com"}


print("in ra kq:", ex_emails)

ex_emails.add("c@gmail.com")
print("sau khi them new email:", ex_emails)

ex_emails.remove("d@gmail.com")
print(ex_emails)

ex_emails.discard("d@gmail.com")
print(ex_emails)

# khi xóa phần từ bằng REMOVE, python sẽ check phần tử có tồn tại ko, nếu ko, return error. 
# khi xóa phần từ bằng DISCARD, python sẽ check phần tử có tồn tại ko, nếu ko thì KO throw back error và cứ thế trả về kq
