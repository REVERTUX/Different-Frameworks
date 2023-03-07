<script lang="ts">
	import type { PageData } from './$types';
	import Post from './Post.svelte';

	export let data: PageData;
</script>

<ul class="posts">
	{#each data.items as { body, id, title, userId } (id)}
		<Post {body} {id} {title} />
		<!-- <li><a href={`/posts/${item.id}`}>{item.title}</a></li> -->
	{/each}
</ul>

<style>
	.posts {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin: 16px;
	}
</style>
