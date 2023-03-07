<script lang="ts">
    export let id: string
    export let title: string
    export let body: string
</script>

<div class="post">
    <a href={`posts/${id}`}>
        <div>{title}</div>
        <div>{body}</div>
    </a>
</div>

<style>
    .post {
        border-radius: 16px;
        background-color: #30373c;
        padding: 8px;
    }

    .post:hover {
        cursor: pointer;
        background-color: #242a2d;
    }
</style>