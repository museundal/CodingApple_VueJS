<template>
    <div class="discount">
        <h4>지금 결제하면 {{ amount }}% 할인</h4>
    </div>
</template>

<script>
export default {
    name: 'Discount', // 컴포넌트명
    data() {
        return {
            amount: 30,
        }
    },
    mounted() {
        const timer = setInterval(() => {
            if (this.amount > 0) {
                this.amount--;
            }
            if (this.amount == 0) {
                clearInterval(timer)
            }
        }, 1000)

    },
}
</script>

<style>
.discount {
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
</style>