# While: vòng lặp while. dùng để lặp lại 1 khối lệnh chừng nào khối lệnh đó còn đúng. 
# Ko biết đc số lần lặp như FOR

# Khi gọi API có thể bị lỗi mạng, ta muốn thử lại vài lần trước khi bỏ cuộc.
retry_count = 0
max_retries = 5
success = False

while not success and retry_count < max_retries:            # khi API chưa thành công và số lần retry < 5, keep going chạy code bên trong While
    print(f"API is calling, attemmpt {retry_count +1}")     # continue in ra cú pháp + số lần retry, chỉ đơn giản là display số lần thử.
    retry_count += 1                                        # mỗi lần retry + 1, cho đến khi vòng While ko còn đúng (<5) thì thực thi IF

    # if retry_count == 4:                                  # [nhánh nhỏ] nếu retry = 4 thì trả về Success
    #     success = True                                    # vì we admit that Success = True, bắt đầu thực thi IF

if success:
    print("API called successfully")
else:
    print("API called failed")



count = 3
while count > 0:
    print(count)
    count -= 1  # Rất quan trọng! Nếu không có dòng này sẽ lặp vô hạn.
print("Bắt đầu!")