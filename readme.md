#Vấn đề đã gặp 
###1. Thay đổi biến kết hợp media query
 Mô tả: Mình muốn với màn hình nhỏ font size nhỏ, màn lớn font size lớn, mình đã sử dụng biến như sau:

 VD:

    $h1-font-size: 2rem;
    @media screen and (min-with = 968px) {
        $h1-font-size: 2.5rem;
    }
  => Khi sử dụng css (--h1-font-size...) thì ok. Chuyển sang scss thì không. Lý do là vì??? Mình chưa tìm được, đúng hơn là chưa tìm được chỗ giải thích dễ hiểu.
  Cách khắc phục là dùng @mixin

      @mixin h1-font-size() {
        font-size: 2rem;
        @media screen and (min-width: 968px) {
          font-size: 2.5rem;
        }
      }
  Sau đó thay vì dùng như thế này

       font-size: $h1-font-size
  Chúng ta sẽ dùng như thế này

        @include h1-font-size();
