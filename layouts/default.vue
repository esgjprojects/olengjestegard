<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script setup>
useHead({
    title: 'Ølen Gjestegård',
    link: [
        {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css'
        },
        {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
        }
    ]
})
</script>