---
title: "Giới thiệu về Version Control System"
---

## Version Control

*Version Control là gì?*

Version Control System (VCS) - Hệ thống quản lý phiên bản là một hệ thống ghi lại các thay đổi đối với file hoặc tập hợp file theo thời gian để bạn có thể ghi nhớ lại những sự thay đổi với từng phiên bản cụ thể sau này. 

Nếu chúng ta là một nhà thiết kế đồ họa hoặc một lập trình viên và muốn giữ lại mọi phiên bản của hình ảnh hoặc source codes (những thứ mà bạn chắc chắn muốn nhất), Hệ thống kiểm soát phiên bản (VCS) là một thứ rất tuyệt vời để chúng ta sử dụng. Nó như một chiếc nút Undo thần kỳ cho phép bạn có thể quay trở về trạng thái trước đó của các files đã chọn, hoặc toàn bộ dự án. Nó còn cho phép bạn so sánh các thay đổi theo thời gian, xem ai đã sửa đổi lần cuối điều gì đó có thể gây ra sự cố, ai đã gây ra lỗi và khi nào, v.v. Nếu bạn làm hỏng mọi thứ hoặc làm mất files, bạn có thể dễ dàng khôi phục. 

> 💡 Mọi người thường sử dụng VCS để quản lý các file source code trong phát triển phần mềm, mặc dù trên thực tế, chúng ta có thể dùng VCS với hầu hết mọi loại file trên máy tính.

## Local Version Control Systems

Bạn còn nhớ phương pháp chúng ta đã làm trong phần trước, đó là tự sao chép lại các files sau đó đặt thêm tên version hoặc thêm ngày tháng đã thay đổi vào tên file hay thư mục. 

Đây là một cách tiếp cận phổ biến vì tính đơn giản của nó. Nhưng cách làm này dẫn đến khả năng sai sót cao.

Để giải quyết vấn đề này, chúng ta có các VCS cục bộ có cơ sở dữ liệu đơn giản lưu giữ tất cả các sự thay đổi của file.

![Image](/static/images/lessons/learn-git/01-introduction/local-vcs.png)
*Sơ đồ làm việc của hệ thống LVCS*

Một trong những công cụ VCS phổ biến nhất là một hệ thống có tên RCS, vẫn được sử dụng trong nhiều máy tính ngày nay.

## Centralized version control

Vấn đề lớn tiếp theo mà chúng ta gặp phải là cần hợp tác với các developers khác trên các hệ thống khác. Để giải quyết vấn đề này, Hệ thống kiểm soát phiên bản tập trung (CVCS) đã được phát triển. 

Các hệ thống này (chẳng hạn như CVS, Subversion và Perforce) có một server duy nhất chứa tất cả các files và một số máy client truy cập trực tiếp đến server. 

![Image](/static/images/lessons/learn-git/01-introduction/central-vcs.png)
*Sơ đồ làm việc của hệ thống CVCS*

**CVCS** mang lại nhiều lợi thế so với các VCS local. Ví dụ: 
- Ở một mức độ nhất định, mọi người đều biết những gì mọi người khác trong dự án đang làm. 
- Admin có quyền kiểm soát chi tiết đối với ai có thể làm gì và việc quản lý CVCS dễ dàng hơn nhiều so với xử lý dữ liệu local trên các máy client.

Tuy nhiên, **CVCS** cũng có một số nhược điểm lớn. 

- Nó không có sẵn tại máy cá nhân của developer; có nghĩa là chúng ta luôn cần được kết nối với mạng để thực hiện bất kỳ hành động nào. Hơn nữa, nếu server tạm ngừng hoạt động thì các developer cũng gần như không thể lưu các thay đổi lên server.

- Vì mọi thứ đều tập trung, nên trong mọi trường hợp máy chủ trung tâm bị sự cố hoặc bị hỏng sẽ dẫn đến mất toàn bộ dữ liệu của dự án. Ngoại trừ bất kỳ bản sao nào mà các developer tình cờ có trên máy cá nhân của họ. 

- Các VCS cục bộ cũng gặp phải vấn đề tương tự.

> 💡 Nếu bạn chỉ lưu giữ dữ liệu ở 1 nơi duy nhất, bạn có nguy cơ mất tất cả.


![Image](/static/images/lessons/learn-git/01-introduction/cvs.png)
*Concurrent Versions System (CVS)*


![Image](/static/images/lessons/learn-git/01-introduction/svn.png)
*Apache Subversion (SVN)*

## Distributed version control
Đây là lúc Hệ thống kiểm soát phiên bản phân tán (DVCS) được tạo ra. Trong DVCS (ví dụ như như Git, Mercurial, Bazaar hoặc Darcs), máy tính cá nhân của lập trình viên không chỉ kiểm tra ảnh chụp nhanh mới nhất của tệp; thay vào đó, chúng phản ánh đầy đủ kho lưu trữ, bao gồm toàn bộ lịch sử của nó. 

Do đó, nếu bất kỳ server nào chết và các hệ thống này đang cộng tác thông qua máy chủ đó, bất kỳ kho lưu trữ máy cá nhân nào cũng có thể được sao lưu trở lại vào server để khôi phục. Mỗi bản sao thực sự là một bản sao lưu đầy đủ của tất cả dữ liệu.

Hơn nữa, nhiều hệ thống trong số này xử lý khá tốt với việc có một số kho lưu trữ từ xa mà chúng có thể làm việc cùng, vì vậy bạn có thể cộng tác đồng thời với các nhóm người khác nhau theo những cách khác nhau trong cùng một dự án. Điều này cho phép bạn thiết lập một số loại quy trình công việc không thể thực hiện được trong các hệ thống tập trung, chẳng hạn như mô hình phân cấp.

![Image](/static/images/lessons/learn-git/01-introduction/distributed-vcs.png)
*Sơ đồ làm việc của hệ thống DVCS*

Như bạn có thể thấy trong sơ đồ trên, mỗi lập trình viên tự duy trì một kho lưu trữ cục bộ, đây thực sự là bản sao hoặc bản sao được nhân bản từ kho lưu trữ trung tâm về trên ổ cứng của họ. Họ có thể cam kết (commit) và cập nhật (update) kho lưu trữ cục bộ của mình mà không có sự can thiệp nào.

Họ có thể cập nhật kho lưu trữ cục bộ của họ với dữ liệu mới từ máy chủ trung tâm bằng một hoạt động được gọi là "pull" kéo về và đẩy ngược lại các thay đổi đối với kho lưu trữ chính bằng một hoạt động được gọi là "push" đẩy từ kho lưu trữ cục bộ của họ lên kho chính.

Hành động nhân bản "clone" toàn bộ kho lưu trữ vào máy trạm của bạn để có được một kho lưu trữ cục bộ mang lại cho bạn những lợi thế sau:
- Tất cả các hoạt động (ngoại trừ pull và push) đều rất nhanh vì công cụ chỉ cần truy cập vào ổ cứng chứ không phải máy chủ từ xa. Do đó, không phải lúc nào bạn cũng cần kết nối internet.
- Việc "commit" ủy thác các bộ thay đổi mới có thể được thực hiện cục bộ mà không cần thao tác dữ liệu trên kho lưu trữ chính. Khi bạn đã có sẵn một nhóm các bộ thay đổi, bạn có thể đẩy "push" tất cả chúng cùng một lúc.
- Vì mọi người đóng góp đều có một bản sao đầy đủ của kho dự án, họ có thể chia sẻ các thay đổi với nhau nếu họ muốn nhận được một số phản hồi trước khi ảnh hưởng đến các thay đổi trong kho lưu trữ chính.
- Nếu máy chủ trung tâm bị sập bất cứ lúc nào, dữ liệu bị mất có thể được phục hồi dễ dàng từ bất kỳ kho lưu trữ cục bộ nào của người đóng góp.
Sau khi biết tìm hiểu về quy trình làm việc và lợi thế của VCS phân tán, đã đến lúc chúng ta đi sâu vào Git.

## Tác dụng chính của VCS trong một dự án phần mềm
- 1. Lưu lại lịch sử các version của bất kỳ thay đổi nào của dự án. Giúp xem lại các sự thay đổi hoặc khôi phục (revert) lại sau này.
- 2. Việc chia sẻ source code trở nên dễ dàng hơn, các lập trình viên có thể chia sẻ public cho bất kỳ ai, hoặc private chỉ cho một số người có thẩm quyền để truy cập vào và lấy code về.