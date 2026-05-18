# Userscript Bypass thời gian đợi 15 phút làm bài của Fami Số hoá

Script hoạt động bằng cách ghi đè 2 hàm `setInterval` và `setTimeout` của trình duyệt để tua nhanh thời gian 15 phút

---

## Hướng dẫn cài đặt

### Bước 1: Cài đặt Extension hỗ trợ Userscript
Mình đã test trên Violentmonkey và Tampermonkey, nếu bạn chưa cài extension này bạn có thể cài 1 trong 2 extension đó, nhấp vào link bên dưới và chọn phiên bản phù hợp với trình duyệt của bạn

* [Violentmonkey](https://violentmonkey.github.io/)
* [Tampermonkey](https://www.tampermonkey.net/)

**Lưu ý**: Đối với trình duyệt Google Chrome phiên bản mới nhất đã không cho phép cài đặt Violentmonkey, bạn hãy dùng Tampermonkey hoặc đổi qua trình duyệt khác

### Bước 2: Cài đặt Script
Nhấp vào link dưới đây để tiến hành cài đặt script:

**[Cài đặt userscript](https://raw.githubusercontent.com/TVTIT/bypass_15m_fami_sohoa/refs/heads/main/bypass_timer.user.js)**

Extension Userscript sẽ hiển thị cửa sổ cài đặt. Nhấn **Install** (hoặc **Confirm installation**) để hoàn tất.

### Bước 3:
Truy cập [Fami Số hoá](https://fami.hust.edu.vn/sohoa), chọn làm bất kỳ bài đánh giá liên tục. Khi đó, bạn sẽ không cần chờ 15 phút nữa.

**Lưu ý**: Thỉnh thoảng nó vẫn sẽ hiện màn hình đợi 15 phút, bạn hãy tắt hẳn tab đó đi, vào lại trang chủ của số hoá (không nên mở lại link bài thi ngay) rồi vào lại bài đánh giá liên tục. Mình đã thử khoảng 1-2 lần là được

---

## ⚠️ Thông báo miễn trừ trách nhiệm (Disclaimer)
* Userscript này mình viết hoàn toàn bằng AI.
* Userscript này được viết và chia sẻ hoàn toàn vì mục đích **giáo dục và nghiên cứu học thuật** (Educational Purposes).
* Mình sẽ không chịu trách nhiệm nếu userscript này ảnh hưởng đến kết quả học tập của bạn.

Nếu bạn muốn đóng góp, hãy [tạo 1 issue](https://github.com/TVTIT/bypass_15m_fami_sohoa/issues/new) hoặc [tạo 1 pull request](https://github.com/TVTIT/bypass_15m_fami_sohoa/compare)
