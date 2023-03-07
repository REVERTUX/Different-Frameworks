<script lang="ts">
	import type { PageData } from './$types';
	import type { UserI } from './+page';

	export let data: PageData;
    
	let user: UserI;

	async function loadData() {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`);
		const json = await response.json();
		user = json;
	}

	loadData();
</script>

<div>
	<a href="/posts">Return</a>
	<div class="post-entity">
		<div>{user ? `${user.name}` : 'loading...'}</div>
		<div>{data.title}</div>
		<div>{data.body}</div>
	</div>
</div>

<style>
	.post-entity {
		border-radius: 16px;
		background-color: #30373c;
		padding: 8px;
		margin: 80px 100px;
	}
</style>
