# 6. Cho chuỗi log: log = “ERROR: Login failed at 10:45”
#     Kiểm tra trong log có chứa từ “ERROR” hay không (dùng in)
#     Nếu có, in ra: “❌ Có lỗi xảy ra”
#     Nếu không, in ra: "✅ Hệ thống bình thường”

log = "ERROR: Login failed at 10:45"


# Way1:
log_ERROR = "error"
if log_ERROR.lower() in log.lower():
    print("❌ Có lỗi xảy ra")
else:
    print("✅ Hệ thống bình thường")


# Way2:
if "error" in log.lower():
    print("❌ Có lỗi xảy ra")
else:
    print("✅ Hệ thống bình thường")

