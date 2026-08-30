# slicing (): cắt chuỗi 
# Cú pháp: `ten_chuoi[start:stop:step]`
# - `start`: Chỉ số bắt đầu (bao gồm). Nếu bỏ trống, mặc định là 0.
# - `stop`: Chỉ số kết thúc (không bao gồm). Nếu bỏ trống, mặc định là đến hết chuỗi.
# - `step`: Bước nhảy (mặc định là 1).

success_message = "Đơn hàng #DH-98765 đã được tạo thành công."

success_message_start = success_message.find("#")
success_message_end = success_message_start + 9
order_id = success_message[success_message_start : success_message_end]
print(f"ma don hang la: {order_id}")


url = "https://example.com/dashboard?session_id=abc123xyz&user=test"

url_start = url.find("session_id=") + len("session_id=") #bắt đầu tìm từ chữ "session_id=" + độ dài của chuỗi "session_id="
url_end = url.find("&")
real_sessionid = url[url_start:url_end]
print(f"url la: {real_sessionid}")

text = "Automation Testing"
print(text[::1])
print(text[::-1])
print(text[::3])