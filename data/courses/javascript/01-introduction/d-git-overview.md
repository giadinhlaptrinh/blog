---
title: "Giới thiệu về Git"
---

## Git là gì?
Git là một công cụ Kiểm soát phiên bản phân tán (DVCS) hỗ trợ các luồng công việc phi tuyến tính phân tán bằng cách cung cấp một cơ chế giúp dữ liệu của dự án được đảm bảo hơn, từ đó các nhà phát triển xây dựng được phần mềm chất lượng hơn. 

Git cung cấp tất cả các tiện ích VCS phân tán cho người dùng đã được đề cập trước đó. Kho Git rất dễ tìm và truy cập. Bạn sẽ biết Git linh hoạt và tương thích với hệ thống của bạn như thế nào khi bạn xem qua các tính năng được đề cập dưới đây:

## Các tính năng của Git
#### Mã nguồn mở và miễn phí
Git được phát hành theo giấy phép nguồn mở của GNU. Chúng ta không cần phải trả tiền để mua Git. Nó hoàn toàn miễn phí. Và vì nó là nguồn mở, chúng ta có thể sửa đổi mã nguồn theo yêu cầu của mình.

[Free and Open Source](https://git-scm.com/about/free-and-open-source)

#### Tốc độ
Vì chúng ta không phải kết nối với git server nào để thực hiện các hoạt động thường ngày, nên nó hoàn thành tất cả các tác vụ một cách nhanh chóng. Các thử nghiệm hiệu năng được thực hiện bởi Mozilla cho thấy nó nhanh hơn so với các hệ thống kiểm soát phiên bản khác. Tìm nạp lịch sử phiên bản từ kho lưu trữ cục bộ có thể nhanh hơn một trăm lần so với tìm nạp từ máy chủ từ xa. Phần cốt lõi của Git được viết bằng ngôn ngữ C, giúp tránh các chi phí thời gian chạy liên quan đến các ngôn ngữ cấp cao khác.

#### Khả năng mở rộng
Git rất có thể mở rộng rất lơn. Vì vậy, nếu trong tương lai, số lượng cộng tác viên làm việc tăng Git có thể dễ dàng xử lý thay đổi này. Mặc dù Git đại diện cho toàn bộ kho lưu trữ, dữ liệu được lưu trữ ở phía máy khách rất nhỏ vì Git nén tất cả dữ liệu khổng lồ thông qua kỹ thuật nén không mất dữ liệu.

#### Đáng tin cậy
Vì mọi người đóng góp đều có kho lưu trữ cục bộ của riêng mình ở local, nếu chẳng may sự cố hệ thống, dữ liệu bị mất có thể được phục hồi từ bất kỳ kho lưu trữ cục bộ khác. Bạn sẽ luôn có một bản sao lưu của tất cả các tập tin của bạn.

#### Bảo mật
Git sử dụng mã hóa SHA1 (Chức năng băm an toàn) để đặt tên và xác định các đối tượng trong kho lưu trữ của mình. Mỗi tệp và "commit" ủy thác sẽ được kiểm tra tổng hợp và truy xuất nhanh bằng tổng kiểm tra tại thời điểm "checkout". Lịch sử Git được lưu trữ bằng cách đặt ID cho từng phiên bản cụ thể, nó phụ thuộc vào lịch sử thời gian thay đổi và quá trình phát triển hoàn chỉnh của dự án. Một khi nó được xuất bản "commited", khi thay đổi các phiên bản cũ mà hệ thống Git sẽ đưa ra các cảnh báo trực quan ngay lập tức .

#### Kinh tế
Trong trường hợp CVCS, máy chủ trung tâm cần đủ mạnh để phục vụ các yêu cầu của toàn đội. Đối với các nhóm nhỏ hơn, đó không phải là vấn đề, nhưng khi quy mô nhóm tăng lên, các giới hạn phần cứng của máy chủ có thể là một nút cổ chai hiệu năng. Trong trường hợp DVCS, nhà phát triển không tương tác với máy chủ trừ khi họ cần đẩy hoặc kéo thay đổi. Tất cả các công việc nặng nề xảy ra ở phía máy khách, vì vậy phần cứng máy chủ thực sự có thể rất đơn giản.

#### Hỗ trợ mạnh mẽ cho phát triển phi tuyến tính
Git hỗ trợ phân nhánh và hợp nhất nhanh chóng, nó bao gồm các công cụ cụ thể để trực quan hóa và điều hướng một lịch sử phát triển phi tuyến tính. Một giả định cốt lõi trong Git là một thay đổi sẽ được hợp nhất thường xuyên hơn so với nó được viết, vì nó được thông qua xung quanh các nhà phê bình khác nhau. Chi nhánh "branch" ở Git rất nhẹ. Một nhánh trong Git chỉ là một tham chiếu đến một ủy thác "commit" duy nhất. Với các ủy thác của nhánh cha mẹ, cấu trúc nhánh đầy đủ có thể được xây dựng.

#### Phân nhánh dễ dàng
Quản lý phân nhánh với Git rất đơn giản. Chỉ mất vài giây để tạo "create", xóa "delete" và hợp nhất "merge" các nhánh. Các nhánh tính năng cung cấp một môi trường biệt lập cho mọi thay đổi đối với dự án code của bạn. Khi một nhà phát triển muốn bắt đầu làm việc trên một cái gì đó, bất kể lớn hay nhỏ, họ tạo ra một chi nhánh mới để thực hiện code trên đó. Điều này đảm bảo rằng nhánh chính luôn chứa mã  có chất lượng cao nhất, ổn định và hoàn thiện nhất trước khi được phân phối tới người sử dụng.

#### Phát triển phân tán

Git cung cấp cho mỗi nhà phát triển một bản sao cục bộ của toàn bộ lịch sử phát triển và các thay đổi được sao chép "fork" từ kho này sang kho khác. Những thay đổi này được nhập dưới dạng các nhánh phát triển bổ sung và có thể được hợp nhất theo cách tương tự như một nhánh được phát triển cục bộ.

#### Khả năng tương thích với các hệ thống hoặc giao thức hiện có
Các kho lưu trữ có thể được xuất bản qua http, ftp hoặc giao thức Git qua socket hoặc ssh. Git cũng có phần mô phỏng máy chủ Hệ thống Phiên bản đồng thời (CVS), cho phép sử dụng các ứng dụng khách CVS và trình cắm IDE hiện có được truy cập kho Git. Các kho lưu trữ SubVersion (SVN) và SVK của Apache có thể được sử dụng trực tiếp với Git-SVN.

## Vai trò của Git trong ngành lập trình là gì?

Bây giờ bạn đã biết Git là gì, bạn nên biết Git là một phần không thể thiếu của các developer.

Git thúc đẩy giao tiếp giữa các developer và giúp họ trao đổi thông tin, chia sẻ công việc để cùng hoạt động, tham gia trong toàn bộ vòng đời phát triển ứng dụng, từ thiết kế cho đến quá trình phát triển đến hỗ trợ sản xuất.


![Image](./images/lessons/01-introduction/sdlc.png)
*Sơ đồ vòng đời cơ bản của quá trình phát triển phần mềm*

Sơ đồ trên cho thấy toàn bộ vòng đời của việc phát triển phần mềm bắt đầu từ việc lập kế hoạch dự án đến phân tích và phát triển. Git đóng một vai trò quan trọng khi nói đến việc quản lý source code của developer.
## Các công ty sử dụng Git

Trong 10 năm trở lại đây, Git đã trở nên phổ biến hơn rất nhiều so với các công cụ kiểm soát phiên bản khác như Apache Subversion (SVN), Mercurial, v.v. Bạn có thể so sánh sự quan tâm của mọi người với Git theo thời gian với các công cụ kiểm soát phiên bản khác thông qua biểu đồ được thu thập từ [Google Trends](https://trends.google.com.vn/trends) bên dưới:

![Image](./images/lessons/01-introduction/google-trend.png)

Trong các công ty lớn, các sản phẩm phần mềm thường được phát triển bởi các developer ở khắp nơi trên thế giới. Để kết nối và thực hiện giao tiếp giữa họ, Git là giải pháp hoàn hảo nhất.

Một số công ty lớn đang sử dụng Git như: Facebook, Yahoo, Zynga, Quora, Twitter, eBay, Salesforce, Microsoft và nhiều hơn nữa.

Gần đây, tất cả các công việc phát triển mới của Microsoft đều nằm trong các tính năng của Git. Microsoft đang di chuyển .NET và nhiều dự án nguồn mở lên GitHub. 
