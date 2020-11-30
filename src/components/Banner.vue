<template>
    <div class="bannerWrap">
        <div class="banner">
            <el-carousel>
                 <el-carousel-item v-for="item in img_list" :key="item">
                    <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                  banner1: require('@/assets/images/banner/banner1.jpg'),
                banner2: require('@/assets/images/banner/banner2.jpg'),
                banner3: require('@/assets/images/banner/banner3.jpg'),
                banner4: require('@/assets/images/banner/banner4.jpg'),
                banner5: require('@/assets/images/banner/banner5.jpg'),
                img_list: [banner1, banner2, banner3, banner4, banner5],
              
                current: 0
            }

        },
    }
</script>
<style>
    /* 通用banner样式S */
    .bannerWrap {
        position: relative;
        height: 580px;
    }

    .banner {
        position: absolute;
        left: 50%;
        margin-left: -960px;
    }

    .banner .swiper-container {
        width: 1920px;
        height: 580px;
    }

    .banner .swiper-slide img {
        width: 100%;
        height: 100%;
    }

    .banner .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        background: #ffffff;
        opacity: 0.5;
        border-radius: 50%;
        margin-right: 20px !important;
        margin-bottom: 12px !important;
    }

    .banner .my-bullet-active {
        width: 28px;
        height: 14px;
        background: #ffffff;
        border-radius: 5px;
        opacity: 1;
    }

    /* 通用banner样式E */
</style>