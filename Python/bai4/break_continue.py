# break: tìm thấy đc sp cẩn tìm, thoát vòng lặp right away. This helps to save time and resources. 

number = [367, 8, 342989, 999, 1528, 9880, 55, 852]

for num in number:
    print(f"Dang xem xet so: {num}")
    if num == 999:
        print("Da tim thay so 999!")
        break


# continue: bỏ qua những thứ ko lq, nhảy ngay đến lần lặp tiếp theo. 

for num_continue in number:                     # in ra các số ko chia het cho 2.
    print(f"Dang xem xet so: {num_continue}")
    if num_continue % 2 == 0:                   # nếu chia hết cho 2, bỏ qua, ko in ra
        continue
    print(num_continue)