<template>
    <div class="fixed bottom-0 left-0 w-full h-[100px] bg-white z-50 border-t">
        <!-- 關鍵1：overflow-x-auto 容器 -->
        <div class="overflow-x-auto overflow-y-hidden">
            <!-- 關鍵2：flex 並且 min-w-max 確保超出 -->
            <div class="flex min-w-max gap-2 px-2 py-2">
                <div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center">
                    <button
                        class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs">
                        <img src="/public/img/menu-icon/cock_logo.png" alt="menu-cockfight" class="menu-icon" />
                        <span>Daga1</span>
                    </button>
                </div>
                <div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center">
                    <button
                        class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs">
                        <img src="/public/img/menu-icon/cock_logo.png" alt="menu-cockfight" class="menu-icon" />
                        <span>Daga2</span>
                    </button>
                </div>
                <div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center">
                    <button
                        class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs">
                        <img src="/public/img/menu-icon/cock_logo.png" alt="menu-cockfight" class="menu-icon" />
                        <span>Daga3</span>
                    </button>
                </div>
                <div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center">
                    <button
                        class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs">
                        <img src="/public/img/menu-icon/cock_logo.png" alt="menu-cockfight" class="menu-icon" />
                        <span>Daga4</span>
                    </button>
                </div>
                <div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center">
                    <button
                        class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs">
                        <img src="/public/img/menu-icon/cock_logo.png" alt="menu-cockfight" class="menu-icon" />
                        <span>Daga5</span>
                    </button>
                </div>
                <div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center">
                    <button
                        class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs">
                        <img src="/public/img/menu-icon/cock_logo.png" alt="menu-cockfight" class="menu-icon" />
                        <span>Daga6</span>
                    </button>
                </div>
                <div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center">
                    <button
                        class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs">
                        <img src="/public/img/menu-icon/cock_logo.png" alt="menu-cockfight" class="menu-icon" />
                        <span>Daga7</span>
                    </button>
                </div>
                <div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center">
                    <button
                        class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs">
                        <img src="/public/img/menu-icon/cock_logo.png" alt="menu-cockfight" class="menu-icon" />
                        <span>Daga8</span>
                    </button>
                </div>
                <div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center">
                    <button
                        class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs">
                        <img src="/public/img/menu-icon/cock_logo.png" alt="menu-cockfight" class="menu-icon" />
                        <span>Daga9</span>
                    </button>
                </div>
                <div class="bottombar-btnwrapper w-[85px] h-[80px] flex-shrink-0 flex items-center justify-center">
                    <button
                        class="bottombar-btn w-full h-full m-[2px] flex flex-col items-center justify-center font-bold text-xs">
                        <img src="/public/img/menu-icon/cock_logo.png" alt="menu-cockfight" class="menu-icon" />
                        <span>Daga10</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.hex-wrapper {
    clip-path: polygon(50% 0%, 90% 25%, 90% 75%,
            50% 100%, 10% 75%, 10% 25%);
    background: #ffff96;
}
</style>
