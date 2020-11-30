<template>
    <header class="clear-fix">
            <div class="xinglu-header clear-fix">
                <h1 id="xinglu-header-logo">
                    <a href="index.html">
                        <img src="../assets/images/index/logo.png" alt="星鹿直播" />
                    </a>
                </h1>
                <div class="xinglu-header-nav">
                    <div class="xinglu-nav-item">
                        <a class="headactive" href="index.html">首页</a>
                    </div>
                    <div class="xinglu-nav-item">
                        <a href="rankList.html">排行榜</a>
                    </div>
                    <div class="xinglu-nav-item">
                        <a href="shopMall.html">商城</a>
                    </div>
                    <div class="xinglu-nav-item">
                        <a href="download.html">下载客户端</a>
                    </div>
                </div>
                <div class="xinglu-header-search clear-fix">
                    <form action="">
                        <input type="text" placeholder="搜索房间" />
                        <button type="submit" class="btn-search"><img src="./../assets/images/index/sousuo.png" alt=""></button>
                    </form>
                </div>
                <div class="xinglu-header-right">
                    <div class="xinglu-header-control clearfix">
                        <div class="xinglu-nav-right xinglu-nav-dailihoutai">
                            <a class="xinglu-nav-title" href="">
                                <img  class="xinglu-nav-icon xinglu-nav-daili-icon" src="./../assets/images/index/houtai.png" alt="">
                                <span class="title">代理后台</span>
                            </a>
                        </div>
                        <div class="xinglu-nav-right xinglu-nav-onlineChongzhi">
                            <a class="xinglu-nav-title" href="">
                               <img  class="xinglu-nav-icon xinglu-nav-chongzhi-icon" src="./../assets/images/index/chongzhi.png" alt="">
                                <span class="title">在线充值</span>
                            </a>
                        </div>
                        <div class="xinglu-nav-right xinglu-nav-login">
                            <a
                                class="xinglu-nav-title"
                                href="#login"
                                id="nav-login"
                            >
                               <img class="xinglu-nav-icon xinglu-nav-login-icon" src="./../assets/images/index/login.png" alt="">
                                <span class="xinglu-login">登录</span>
                            </a>
                            <i class="xinglu-nav-login-l">|</i>
                            <a
                                class="xinglu-nav-title"
                                href="#register"
                                id="nav-register"
                            >
                                <span class="xinglu-register">注册</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<style>
@import '../styles/common/header.css';
@import '../styles/common/reset.css';
</style>