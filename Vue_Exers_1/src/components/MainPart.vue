<script setup>
import { ref } from 'vue';


const count = ref(0)

let click = false;

function updateValue(value, sign) {
    if (!click) {
        count.value = value;
        const elements = document.getElementsByClassName('point');
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = sign + Math.abs(value);
        }

        click = true;
    }
}

function onClickTang() {
    updateValue(1, "+");
}

function onClickGiam() {
    updateValue(-1, "-");
}


window.addEventListener("scroll", function () {
    const target = document.getElementById("footer");
    const scrollPosition = window.scrollY;
    const hideAt = 1000;
    if (scrollPosition > hideAt) {
        target.style.display = "none";
    } else {
        target.style.display = "block";
    }
});
</script>

<template>
    <main class="main-content">
        <div class="main-container py-2">
            <div class="screen-default">
                <div class="hidden-md-down post-action">
                    <div class="post-action d-flex flex-colume align-items-center mx-auto">
                        <span></span>

                        <div class="votes vote--side post-action-vote mb-1">
                            <button class="icon-btn vote" @click="onClickTang">
                                <i aria-hidden="true" class="fa fa-caret-up"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg>
                            </button>

                            <div class="point text-muted">{{ count }}</div>

                            <button class="icon-btn vote" @click="onClickGiam">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                            </button>




                        </div>


                        <div class="subscribe mb-2">
                            <a href="" class="mb-2-a">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-bookmark" viewBox="0 0 16 16">
                                    <path
                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                </svg>
                            </a>
                        </div>
                        <span class="mb-2">
                            <a href="" class="mb-2-a">A</a>
                        </span>
                        <div class="social-sharing mb-2 social-sharing--horizontal">
                            <a href="https://www.facebook.com/share_channel/#" class="link link--muted">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </a>

                            <a href="https://www.facebook.com/share_channel/#" class="link link--muted">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="post-body__main post-content">
                    <article class="post-content">
                        <header class="mb-05">
                            <div class="post-content__author_meta">
                                <div class="post-author mb-2 text-break">
                                    <div
                                        class="mr-05 d-flex position-relative flex-col justify-content-center align-items-center">
                                        <a href="/u/Thanh_Tung"
                                            class="position-relative d-flex position-relative flex-col justify-content-center align-items-center"><img
                                                src="https://images.viblo.asia/avatar/8853cc3b-e6a0-4bab-9c60-2932d829a639.jpg"
                                                srcset="https://images.viblo.asia/avatar-retina/8853cc3b-e6a0-4bab-9c60-2932d829a639.jpg 2x"
                                                alt="Avatar"
                                                class="avatar avatar--lg level-default avatar-event flex-center"
                                                data-v-f09f4d56="" data-loaded="true"> <!----></a>
                                    </div>
                                    <div class="post-author__info mr-1">
                                        <div class="d-flex">
                                            <div class="flex-fix mr-05"><a href="/u/Thanh_Tung"
                                                    class="text-bold post-author__name">
                                                    Huỳnh Thanh Tùng
                                                </a> <span class="text-muted">@Thanh_Tung</span></div>
                                            <div class="subscribe"><button type="button"
                                                    class="el-button el-button--mini-mini is-plain"><!----><!----><span>
                                                        Theo dõi
                                                    </span></button></div>
                                        </div>
                                        <div class="stats"><span class="stats-item text-muted w-25" data-tippy=""
                                                data-original-title="Reputations: 360"><i aria-hidden="true"
                                                    class="stats-item__icon fa fa-star"></i>
                                                360
                                            </span><span class="stats-item text-muted w-25" data-tippy=""
                                                data-original-title="Người theo dõi: 8"><i aria-hidden="true"
                                                    class="stats-item__icon fa fa-user-plus"></i>
                                                8
                                            </span><span class="stats-item text-muted w-25" data-tippy=""
                                                data-original-title="Bài viết: 29"><i aria-hidden="true"
                                                    class="stats-item__icon fa fa-pencil"></i>
                                                29
                                            </span> </div>
                                    </div>
                                </div>
                                <div class="post-meta d-flex flex-column flex-wrap align-items-sm-end">
                                    <div title="thg 12 23, 2019 1:22 CH" class="text-muted">
                                        Đã đăng vào thg 12 23, 2019 8:22 CH
                                        <!----> <span title="4 phút đọc"
                                            class="post-reading_time is-divide is-divide--fit text-muted">
                                            4 phút đọc
                                        </span> <!---->
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="post-meta__item mr-1 text-muted" data-tippy=""
                                            data-original-title="Lượt xem: 11156"><i aria-hidden="true"
                                                class="el-icon-view post-meta__icon"></i> <span>11.1K</span></div>
                                        <div class="post-meta__item mr-1 text-muted" data-tippy=""
                                            data-original-title="Di chuyển đến bình luận"><button type="button"
                                                class="el-button el-button--text"><!----><i
                                                    class="fa fa-comments-o post-meta__icon"></i><span>
                                                    0
                                                </span></button></div>
                                        <div class="post-meta__item text-muted" data-tippy=""
                                            data-original-title="Xem danh sách người bookmark"><button type="button"
                                                class="el-button el-button--text"><!----><i
                                                    class="fa fa-bookmark post-meta__icon"></i><span>
                                                    0
                                                </span></button></div> <!---->
                                    </div>
                                </div>
                            </div>
                            <h1 class="article-content__title">
                                Những chú ý khi sử dụng v-model trong vue js
                            </h1> <!---->
                        </header>
                        <div class="d-md-flex align-items-top justify-content-between">
                            <div class="tags d-flex flex-wrap align-items-center" data-v-4365a2a0=""> </div>
                            <div class="post__menu">
                                <div class="el-dropdown"><button type="button"
                                        class="el-button p-0 el-button--text text-muted el-dropdown-selfdefine"
                                        data-tippy="" data-original-title="Hiển thị các hành động" aria-haspopup="list"
                                        aria-controls="dropdown-menu-4481" role="button" tabindex="0"><!----><i
                                            class="post__menu__more el-icon-more-outline"></i><!----></button>
                                    <ul class="el-dropdown-menu el-popper el-dropdown-menu--medium" style="display:none;"
                                        id="dropdown-menu-4481"><!---->
                                        <li tabindex="-1" class="el-dropdown-menu__item"><!----><i aria-hidden="true"
                                                class="fa fa-flag-o pr-0 mr-05"></i>
                                            Báo cáo
                                        </li>
                                        <li tabindex="-1" class="el-dropdown-menu__item"><!----><i aria-hidden="true"
                                                class="fa fa-plus-square-o pr-0 mr-05"></i>
                                            Thêm vào series của tôi
                                        </li> <!----> <!----> <!----> <!----> <!---->
                                        <li tabindex="-1" class="el-dropdown-menu__item"><!----><i aria-hidden="true"
                                                class="fa fa-magic pr-0 mr-05"></i>
                                            Bôi màu code tự động
                                        </li>
                                    </ul>
                                </div> <!----> <!----> <!----> <!----> <!---->
                            </div>
                        </div> <!---->
                        <div>
                            <div role="alert" class="el-alert mt-1 el-alert--warning is-light"><i
                                    class="el-alert__icon el-icon-warning is-big"></i>
                                <div class="el-alert__content"><!---->
                                    <p class="el-alert__description">
                                        Bài đăng này đã không được cập nhật trong 5 năm
                                    </p><!----><i class="el-alert__closebtn el-icon-close"></i>
                                </div>
                            </div>
                        </div>
                        <div class="article-content__body my-2 flex-fill">
                            <div class="md-contents" style="font-size:18px;line-height:1.75;">
                                <h3 id="_mo-dau-0">Mở đầu</h3>
                                <p>v-model là chức năng được sử dụng rất nhiều khi tạo form sử dụng Vue.js. Bạn có thể sử
                                    dụng v-model để tạo ra các ràng buộc dữ liệu hai chiều trên các ô input hoặc textarea
                                    hay thậm chí là file. Nó sẽ tự động chọn đúng cách để cập nhật các phần tử dựa trên kiểu
                                    nhập. Mặc dù khi sử dụng bạn sẽ thấy có đôi chút magic, nhưng v-model thực sự là một cú
                                    pháp không thể thiếu mỗi khi bạn muốn handle một form một cách thuận tiện và ngon lành
                                    😄 Note: v-model sẽ bỏ qua các giá trị ban đầu, "checked" hoặc "selected" attribute được
                                    tìm thấy trên bất kì form elements nào. Nó sẽ luôn luôn xử lý các dữ liệu của Vue
                                    instance như là những dữ liệu luôn đúng. Bạn nên khai báo giá trị ban đầu ở phía
                                    Javascript bên trong các component.</p>
                                <h3 id="_hoat-dong-cua-v-model-1">Hoạt động của v-model</h3>
                                <p>v-model là một syntax sugar (cú pháp ngọt - dễ nhìn) để viết v-on và v-bind với nhau
                                    trong một dòng. Tổng quan, hai dòng sau thực hiện cùng một hoạt động:</p>

                                <div style="position:relative"
                                    onclick="this.removeAttribute('class');this.querySelectorAll('.v-markdown-it-show-more').forEach(el => el.remove());"
                                    onmouseenter="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='block' : null"
                                    onmouseleave="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='none' : null">
                                    <pre class="language-none" data-filename=""><code class="language-none">&lt;input v-model="searchText"&gt;
                                        &lt;input :value="searchText" @change="searchText = $event.target.value"&gt;
                                </code></pre>

                                    <button class="v-markdown-it-code-copy" data-clipboard-text="<input v-model=&quot;searchText&quot;>
                                            <input :value=&quot;searchText&quot; @change=&quot;searchText = $event.target.value&quot;>
                                                " delay="2000" title="Sao chép">
                                        <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                                        <span class="v-markdown-icon el-icon-document-copy"></span>
                                    </button>

                                </div>
                                <p>Thành phần tùy chỉnh của v-model
                                    Trường hợp sử dụng v-model đối với thành phần tùy chỉnh, mặc định thì props được gọi là
                                    value và sự kiện của input được sử dụng. Value này có thể thay đổi được bằng định nghĩa
                                    ở phía thành phần tùy chỉnh.</p>
                                <p>Ví dụng sau được trích từ trang tài liệu tham khảo chính thức:</p>

                                <div style="position:relative"
                                    onclick="this.removeAttribute('class');this.querySelectorAll('.v-markdown-it-show-more').forEach(el => el.remove());"
                                    onmouseenter="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='block' : null"
                                    onmouseleave="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='none' : null">
                                    <pre class="language-none" data-filename=""><code class="language-none">Vue.component('my-checkbox', { model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // Tùy theo điều này,  cho phép sử dụng thuộc tính `value` với mục đích riêng biệt.
    value: String,
    // `checked` sẽ được sử dụng như thuộc tính thay thế `value`
    checked: {
      type: Number,
      default: 0
    }
  },
  // ...
})
</code></pre>

                                    <button class="v-markdown-it-code-copy" data-clipboard-text="Vue.component('my-checkbox', { model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // Tùy theo điều này,  cho phép sử dụng thuộc tính `value` với mục đích riêng biệt.
    value: String,
    // `checked` sẽ được sử dụng như thuộc tính thay thế `value`
    checked: {
      type: Number,
      default: 0
    }
  },
  // ...
})
" delay="2000" title="Sao chép">
                                        <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                                        <span class="v-markdown-icon el-icon-document-copy"></span>
                                    </button>

                                    <div class="v-content-flex-center">

                                    </div>
                                </div>
                                <h3 id="_nhung-loi-thuong-gap-2">Những lỗi thường gặp</h3>
                                <p>Viêt cả v-model và <a href="https://viblo.asia/u/change" target="_blank">@change</a>
                                    V-model như đã nói ở trên là Event handling (xử lý sự kiện). Nên việc kết hợp viết hai
                                    lần sử dụng v-model và <a href="https://viblo.asia/u/change" target="_blank">@change</a>
                                    là không cần thiết, và làm cho code trở nên Not Syntax Suger. Ví dụ như đoạn mã ở dưới.
                                </p>
                                <p>// Đoạn code lỗi</p>

                                <div style="position:relative"
                                    onclick="this.removeAttribute('class');this.querySelectorAll('.v-markdown-it-show-more').forEach(el => el.remove());"
                                    onmouseenter="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='block' : null"
                                    onmouseleave="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='none' : null">
                                    <pre class="language-none" data-filename=""><code class="language-none">&lt;input v-model="searchText" @change="(value) =&gt; searchText = value"&gt;
</code></pre>

                                    <button class="v-markdown-it-code-copy" data-clipboard-text="<input v-model=&quot;searchText&quot; @change=&quot;(value) => searchText = value&quot;>
" delay="2000" title="Sao chép">
                                        <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                                        <span class="v-markdown-icon el-icon-document-copy"></span>
                                    </button>

                                </div>
                                <p>Do bản thân v-model đã có sẵn Event handling (xử lý sự kiện) của sự kiện <a
                                        href="https://viblo.asia/u/change" target="_blank">@change</a>, nên sự kiện đối với
                                    change bị lặp lại hai lần. Nếu trường hợp muốn xử lý nhiều sự kiện hơn một sự kiện
                                    change, chúng ta nên dùng việc sử dụng v-model và thay thế vào đó là sử dụng đồng thời
                                    v-bind và v-on hoặc sử dụng thuộc tính thay thế searchText.</p>
                                <p>// Đoạn code chuẩn Syntax Suger</p>

                                <div style="position:relative" class="v-markdown-content-box"
                                    onclick="this.removeAttribute('class');this.querySelectorAll('.v-markdown-it-show-more').forEach(el => el.remove());"
                                    onmouseenter="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='block' : null"
                                    onmouseleave="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='none' : null">
                                    <pre class="language-none" data-filename=""><code class="language-none">&lt;input v-model="searchText"&gt;
&lt;script&gt;
data(){
  return {
    innerSearchText: ''
  }
},
computed: {
  searchText: {
    get () {
      return this.innerSearchText
    },
    set (value) {
      this.innerSearchText = value
    }
  }
}
&lt;/script&gt;
</code></pre>

                                    <button class="v-markdown-it-code-copy" data-clipboard-text="<input v-model=&quot;searchText&quot;>
<script>
data(){
  return {
    innerSearchText: ''
  }
},
computed: {
  searchText: {
    get () {
      return this.innerSearchText
    },
    set (value) {
      this.innerSearchText = value
    }
  }
}
</script>
" delay="2000" title="Sao chép">
                                        <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                                        <span class="v-markdown-icon el-icon-document-copy"></span>
                                    </button>

                                    <div class="v-content-flex-center">
                                        <button style="display: none;" class="v-markdown-it-show-more button-more">
                                            <span class="el-icon-bottom"></span>
                                            <span class="show-more-text">Xem thêm</span>
                                        </button>
                                    </div>
                                </div>
                                <p>// Đoạn code chuẩn Syntax Suger</p>

                                <div style="position:relative"
                                    onclick="this.removeAttribute('class');this.querySelectorAll('.v-markdown-it-show-more').forEach(el => el.remove());"
                                    onmouseenter="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='block' : null"
                                    onmouseleave="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='none' : null">
                                    <pre class="language-none" data-filename=""><code class="language-none">&lt;input :value="searchText" @change="onChange"&gt;
&lt;script&gt;
data(){
  return {
    searchText: ''
  }
}
&lt;/script&gt;
</code></pre>

                                    <button class="v-markdown-it-code-copy" data-clipboard-text="<input :value=&quot;searchText&quot; @change=&quot;onChange&quot;>
<script>
data(){
  return {
    searchText: ''
  }
}
</script>
" delay="2000" title="Sao chép">
                                        <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                                        <span class="v-markdown-icon el-icon-document-copy"></span>
                                    </button>

                                </div>
                                <p>Sự kết hợp giữa v-model và set tạo động lực phát triển cho trường hợp kết hợp với Vuex
                                    với nhiều nội dung khác.</p>
                                <p>Truyền nguyên props cho v-model
                                    Đối với biến v-model, trường hợp muốn làm cầu nói với props thì mình thấy rất nhiều.
                                    Nhưng nếu sử dụng điều này, lỗi cảnh báo sẽ được hiển thị vì props bị thay đổi trực
                                    tiếp.</p>
                                &lt;!-- Đoạn mã lỗi --&gt;

                                <div style="position:relative"
                                    onclick="this.removeAttribute('class');this.querySelectorAll('.v-markdown-it-show-more').forEach(el => el.remove());"
                                    onmouseenter="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='block' : null"
                                    onmouseleave="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='none' : null">
                                    <pre class="language-none" data-filename=""><code class="language-none">&lt;input v-model="searchText"&gt; # Cảnh báo sẽ được hiển thị vì v-model thực thi searchText = $event.taget.value
&lt;script&gt;
  props: {
    searchText: String
  }
&lt;/script&gt;
</code></pre>

                                    <button class="v-markdown-it-code-copy" data-clipboard-text="<input v-model=&quot;searchText&quot;> # Cảnh báo sẽ được hiển thị vì v-model thực thi searchText = $event.taget.value
<script>
  props: {
    searchText: String
  }
</script>
" delay="2000" title="Sao chép">
                                        <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                                        <span class="v-markdown-icon el-icon-document-copy"></span>
                                    </button>

                                </div>
                                <p>Ngoài ra, để sử lỗi này, việc định nghĩa data từ giá trị của props sẽ tạo ra lỗi tương
                                    tự. Ví dụ như đoạn code ở dưới:</p>
                                &lt;!-- Đoạn mã lỗi --&gt;

                                <div style="position:relative"
                                    onclick="this.removeAttribute('class');this.querySelectorAll('.v-markdown-it-show-more').forEach(el => el.remove());"
                                    onmouseenter="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='block' : null"
                                    onmouseleave="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='none' : null">
                                    <pre class="language-none" data-filename=""><code class="language-none">&lt;input v-model="searchTextData"&gt; 
&lt;script&gt;
  props: {
    searchText: String
  },
  data() {
    return {
      searchTextData: this.$props.searchText 
    }
  }
&lt;/script&gt;
</code></pre>

                                    <button class="v-markdown-it-code-copy" data-clipboard-text="<input v-model=&quot;searchTextData&quot;> 
<script>
  props: {
    searchText: String
  },
  data() {
    return {
      searchTextData: this.$props.searchText 
    }
  }
</script>
" delay="2000" title="Sao chép">
                                        <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                                        <span class="v-markdown-icon el-icon-document-copy"></span>
                                    </button>

                                </div>
                                <p>Đoạn mã này nhìn thì thấy có vẻ như hoạt động đúng. Nhưng trên thực tế, sau khi giá trị
                                    của props được khởi tạo thì giá trị giữa props và data sẽ không được đồng bộ. Cho nên,
                                    dù đã sử thành đoạn mã mới, nhưng việc sửa chữa vẫn không được thực thi đúng.</p>
                                <p>Vậy thì làm thế nào để có thể tránh nó? Bằng cách sử dụng các thuộc tính được tính toán
                                    thì có thể khắc phục được..</p>
                                &lt;!-- Đoạn code chuẩn Syntax Suger --&gt;

                                <div style="position:relative" class="v-markdown-content-box"
                                    onclick="this.removeAttribute('class');this.querySelectorAll('.v-markdown-it-show-more').forEach(el => el.remove());"
                                    onmouseenter="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='block' : null"
                                    onmouseleave="this.getElementsByClassName('v-markdown-it-show-more')[0] ? this.getElementsByClassName('v-markdown-it-show-more')[0].style.display='none' : null">
                                    <pre class="language-none" data-filename=""><code class="language-none">&lt;input v-model="innerSearchText"&gt;
&lt;script&gt;
  props: {
    searchText: String
  },
  computed: {
    innerSearchText: {
      get () {
        return this.$props.searchText
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  }
&lt;/script&gt;
</code></pre>

                                    <button class="v-markdown-it-code-copy" data-clipboard-text="<input v-model=&quot;innerSearchText&quot;>
<script>
  props: {
    searchText: String
  },
  computed: {
    innerSearchText: {
      get () {
        return this.$props.searchText
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  }
</script>
" delay="2000" title="Sao chép">
                                        <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                                        <span class="v-markdown-icon el-icon-document-copy"></span>
                                    </button>

                                    <div class="v-content-flex-center">
                                        <button style="display:none" class="v-markdown-it-show-more button-more">
                                            <span class="el-icon-bottom"></span>
                                            <span class="show-more-text">Xem thêm</span>
                                        </button>
                                    </div>
                                </div>
                                <h3 id="_tong-quan-3">Tổng quan</h3>
                                <p>Đó là, thay vì gán một giá trị trong thành phần này, nó sẽ gửi một giá trị dưới dạng một
                                    sự kiện cho thành phần cha. Và bằng cách viết lại giá trị của props ở phía thành phần
                                    cha, thành phần này có thể được sử dụng một cách chính xác. Ngoài ra còn có một phương
                                    pháp sử dụng watch thay vì setter, nhưng tôi không khuyến nghị cá nhân vì luồng dữ liệu
                                    rất khó nhìn thấy.</p>
                            </div> <!---->
                        </div> <!---->
                        <div class="tags d-flex flex-wrap align-items-center" data-v-4365a2a0=""> <a href="/tags/vue-js"
                                class="el-tag tag el-tag--info el-tag--medium" data-v-19d5ce29="" data-v-4365a2a0="">
                                Vue js
                            </a> </div> <br>
                        <p title="People cannot distribute, remix, adapt, and build upon this workwithout author's permission (or as permitted by fair use)."
                            class="license-text text-muted">
                            All rights reserved
                        </p>
                        <div class="post-footer d-flex align-items-center justify-content-end mb-2">
                            <div class="social-sharing mr-1 social-sharing--vertical social-sharing--medium"
                                data-v-235dd1c0=""><a tooltip-placement="bottom" rel="noopener"
                                    class="link link--muted link--muted" data-v-235dd1c0="" data-tippy=""
                                    data-original-title="Chia sẻ liên kết đến trang này trên Facebook"><i aria-hidden="true"
                                        class="fa fa-facebook" data-v-235dd1c0=""></i></a> <a tooltip-placement="bottom"
                                    rel="noopener" class="link link--muted link--muted" data-v-235dd1c0="" data-tippy=""
                                    data-original-title="Chia sẻ liên kết đến trang này trên Twitter"><i aria-hidden="true"
                                        class="fa fa-twitter" data-v-235dd1c0=""></i></a></div>
                            <div class="post__menu">
                                <div class="el-dropdown"><button type="button"
                                        class="el-button p-0 el-button--text text-muted el-dropdown-selfdefine"
                                        data-tippy="" data-original-title="Hiển thị các hành động" aria-haspopup="list"
                                        aria-controls="dropdown-menu-3468" role="button" tabindex="0"><!----><i
                                            class="post__menu__more el-icon-more-outline"></i><!----></button>
                                    <ul class="el-dropdown-menu el-popper el-dropdown-menu--medium" style="display:none;"
                                        id="dropdown-menu-3468"><!---->
                                        <li tabindex="-1" class="el-dropdown-menu__item"><!----><i aria-hidden="true"
                                                class="fa fa-flag-o pr-0 mr-05"></i>
                                            Báo cáo
                                        </li>
                                        <li tabindex="-1" class="el-dropdown-menu__item"><!----><i aria-hidden="true"
                                                class="fa fa-plus-square-o pr-0 mr-05"></i>
                                            Thêm vào series của tôi
                                        </li> <!----> <!----> <!----> <!----> <!---->
                                        <li tabindex="-1" class="el-dropdown-menu__item"><!----><i aria-hidden="true"
                                                class="fa fa-magic pr-0 mr-05"></i>
                                            Bôi màu code tự động
                                        </li>
                                    </ul>
                                </div> <!----> <!----> <!----> <!----> <!---->
                            </div>
                        </div>
                    </article>
                </div>
            </div>



        </div>
    </main>
</template>

<style></style>