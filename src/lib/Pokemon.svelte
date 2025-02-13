<script lang="ts">
	type Props = {
		id: number;
		name: string;
		img: string;
		found?: boolean;
		recent?: boolean;
	};
	const { id, name, img, found = false, recent = false }: Props = $props();
</script>

<div class="Pokemon" class:found class:recent>
	<p>#{id}</p>
	<p>{name}</p>

	<img src={img} alt={name} />
</div>

<style>
	.Pokemon {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 15rem;
		margin: auto;
	}
	p {
		margin: 0;
		font-size: 1.5rem;
		text-transform: capitalize;
	}
	img {
		height: 15rem;
		object-fit: cover;
		filter: contrast(0%) brightness(200%);
	}
	.found img {
		filter: none;
	}
	.recent {
		outline: 1px solid red;
	}
</style>
