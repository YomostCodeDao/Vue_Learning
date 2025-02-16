<script setup>

</script>

<template>
    <header class="main-navbar">
        <div class="main-navbar-container py-1 main-container">
            <div class="d-flex main-navbar-grow">
                <a href="https://viblo.asia/newest" class="main-navbar-logo mr-lg-5">
                    <img src="../assets/logo_full.svg" alt="Viblo" width="62" height="21">
                </a>

                <ul class="main-menu list-unstyled">
                    <li class="main-menu-item">
                        <a href="https://viblo.asia/newest" class="link">Bài Viết</a>
                    </li>
                    <li class="main-menu-item">
                        <a href="https://viblo.asia/questions" class="link">Hỏi Đáp</a>
                    </li>
                    <li class="main-menu-item">
                        <a href="https://viblo.asia/discussion" class="link">Thảo Luận</a>
                    </li>
                </ul>

            </div>

            <div class="main-navbar-right">
                <a href="" class="link text-muted hidden-md-up mr-1"></a>
                <div class="sb hidden-sm-down flex-fill mr-1">
                    <input type="text" class="sb-input" placeholder="Tìm kiếm trên Viblo">
                    <button class="btn btn-primary"></button>
                </div>

                <div class="main-navbar__group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-info"
                        viewBox="0 0 16 16">
                        <path
                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                </div>

                <div class="main-navbar__group">
                    <div class="mr-05">
                        <!--  -->
                    </div>

                    <div class="main-navbar__group">
                        <div class="sm-response el-dropdown ">
                            <span class="el-dropdow-link switch-language">
                                <img src="../assets/vi-flag-32x48.png" alt="" width="20" height="20" class="imageLocale">
                                <span class="leading-none block hiden-sm-screen">Vi</span>

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
</template>

<style scoped></style>
