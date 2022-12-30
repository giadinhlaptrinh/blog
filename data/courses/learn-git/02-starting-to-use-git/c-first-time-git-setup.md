---
title: "Thiết lập Git cho lần đầu"
description: "Giớ thiệu"
---

Điều đầu tiên chúng ta nên làm sau khi cài đặt Git là đặt tên và email của mình. Đây là bước quan trọng vì bất kỳ *commit* nào mà chúng ta thực hiện sau này, đều sử dụng thông tin này để xác định ai là tác giả của *commit*.

Bạn có thể thay đổi tên và email được liên kết với các *commit* của mình bằng cách sử dụng `git config` command. Tên và email mới bạn đặt sẽ hiển thị trong bất kỳ *commit* nào trong tương lai.

Việc thay đổi tên và email sẽ chỉ ảnh hưởng đến các lần *commit* trong tương lai và sẽ không thay đổi tên và email được sử dụng cho các lần *commit* trước đây.

## Đặt tên và email cho mọi repository trên máy tính của bạn

##### 1. Mở Git Bash.
##### 2. Đặt tên và email
```bash
git config --global user.name "Mona Lisa"
git config --global user.email "mona_lisa@example.com"
```
##### 3. Kiểm tra lại xem bạn đã đặt đúng tên và email chưa
```bash
git config --global user.name
> Mona Lisa

git config --global user.email
> mona_lisa@example.com
```

## Chúng ta cũng có thể đặt tên và email cho một repository
Trong nhiều trường hợp chúng ta có các account khác nhau và muốn rằng mỗi repository sẽ dùng 1 account riêng; lúc này chúng ta nên đặt tên và email theo mỗi repository.

##### 1. Mở Git Bash.

##### 2. Thay đổi thư mục làm việc đến nơi bạn muốn.
##### 3. Đặt tên và email
```bash
git config user.name "Mona Lisa"
git config user.email "mona_lisa@example.com"
```
##### 3. Kiểm tra lại xem bạn đã đặt đúng tên và email chưa
```bash
git config user.name
> Mona Lisa

git config user.email
> mona_lisa@example.com
```

> Chúng ta thấy rằng, để đặt tên và email cho tất cả các repository thì chỉ cần thêm tham số `--global`