---
title: "Git Repository"
description: "Giới thiệu"
---

## Repository là gì?

Repository là nơi sẽ ghi lại trạng thái của thư mục và file. Trạng thái được lưu lại đang được chứa như là lịch sử thay đổi của nội dung. Bằng việc đặt thư mục muốn quản lý lịch sử thay đổi dưới sự quản lý của repository, có thể ghi chép lại lịch sử thay đổi của thư mục và file trong thư mục đó.

## Remote repository và local repository

Đầu tiên, repository của Git được phân thành 2 loại là **remote repository** và **local repository**.

- **Remote repository**: Là repository để chia sẻ giữa nhiều người và nó nằm trên server.
- **Local repository**: Là repository nằm trên trên máy cá nhân của mình, dành cho một developer sử dụng.

Do repository phân thành 2 loại là **local** và **remote** nên với những công việc bình thường thì có thể sử dụng **local repository** và thực hiện trên toàn bộ máy sẵn có. Khi muốn public nội dung công việc mà bản thân đã làm trên local repository, thì sẽ upload lên remote repository rồi công khai. Thêm nữa, thông qua **remote repository** cũng có thể lấy về nội dung công việc của người khác.

## Làm thế nào để tạo repository