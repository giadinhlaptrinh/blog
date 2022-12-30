---
title: "Git Help"
---

Khi sử dụng Git, có rất nhiều **commands**, vì thế nếu chúng ta gặp khó khăn trong việc ghi nhớ các **Git commands** hoặc **options** của **commands**, chúng ta có thể sử dụng **Git help**.

Có một số cách khác nhau để chúng ta có thể sử dụng `help command` trong **command line**:

`git command -help` Xem tất cả các options cho 1 command cụ thể

`git help --all` - Xem tất cả các commands


> Các lệnh này rất hữu ích vì chúng ta có thể sử dụng chúng ở mọi nơi, kể cả khi không có kết nối internet.

## Xem tất cả các options cho 1 command cụ thể
Ví dụ: chúng ta có thể xem trợ giúp cho command `git config` bằng cách:

```bash
git config -help
```

![Image](./images/lessons/02-starting-to-use-git/git-help.png)

Chúng ta cũng có thể sử dụng `-h` thay cho `-help`

Ví dụ:
```bash
git commmit -h
```

![Image](./images/lessons/02-starting-to-use-git/git-commit-help.png)

> 💡Sử dụng `git command --help` để mở hướng dẫn trên Browser (Trình duyệt)

Ví dụ:

```bash
git commmit --help
```

![Image](./images/lessons/02-starting-to-use-git/git-commit-help-page.png)

## Xem tất cả các commands
Để xem tất cả các commands trong Git, chúng ta có thể sử dụng `git help --all` hoặc `git help -a`

Ví dụ:

```bash
git help --all
```

![Image](./images/lessons/02-starting-to-use-git/git-help-all.png)

> 💡 Sử dụng `git help --all` sẽ hiển thị một danh sách rất dài các commands.
Sử dụng phím `enter` để xem thêm, sử dụng tổ hợp phím `Shift + g` để đi đến cuối danh sách hoặc sử dụng phím `q` để thoát.
