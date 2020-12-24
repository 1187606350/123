<template>
    <div class="bannerWrap">
        <div class="banner">
            <el-carousel>
                 <el-carousel-item>
                    <img src="@/assets/images/banner/banner1.jpg" alt="">
                </el-carousel-item>
                 <el-carousel-item>
                    <img src="@/assets/images/banner/banner2.jpg" alt="">
                </el-carousel-item>
                 <el-carousel-item>
                    <img src="@/assets/images/banner/banner3.jpg" alt="">
                </el-carousel-item>
                 <el-carousel-item>
                    <img src="@/assets/images/banner/banner4.jpg" alt="">
                </el-carousel-item>
                 <el-carousel-item>
                    <img src="@/assets/images/banner/banner5.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

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

    .banner .el-carousel__container {
        width: 1920px;
        height: 580px;
    }

    .banner .el-carousel__item img {
        width: 100%;
        height: 100%;
    }

    /* 通用banner样式E */
</style>