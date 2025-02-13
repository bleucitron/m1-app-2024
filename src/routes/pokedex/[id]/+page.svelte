<script lang="ts">
	import Pokemon from '$lib/Pokemon.svelte';

	const { data } = $props();
	const { pokemon, pokedex } = $derived(data);
</script>

<Pokemon
	name={pokemon.name}
	id={pokemon.id}
	img={pokemon.sprites.front_default}
	found={pokedex.includes(pokemon.id)}
/>
