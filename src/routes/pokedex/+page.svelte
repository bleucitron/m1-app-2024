<script lang="ts">
	const { data } = $props();
</script>

<h1>Pokedex</h1>

<ul>
	{#each data.pokemons as { id, name, sprites }}
		{@const src = sprites.back_default}
		<li class:found={id % 2 === 0}><a href="/pokedex/{id}"><img {src} alt={name} /></a></li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		margin-block: 1rem;
		gap: 1rem;
	}
	li:hover img {
		filter: drop-shadow(0px 0px 10px #333);
	}
	li img {
		filter: contrast(0%) brightness(200%);
	}
	li:hover img {
		filter: contrast(0%) brightness(200%) drop-shadow(0px 0px 10px #333);
	}
	li.found img {
		filter: none;
	}
	li.found:hover img {
		filter: drop-shadow(0px 0px 10px #333);
	}
</style>
