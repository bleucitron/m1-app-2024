<script lang="ts">
	import { pokedex } from '$lib/pokedex.svelte';
	import Pokemon from '$lib/Pokemon.svelte';

	const { data } = $props();
	const pokemon = $derived(data.pokemon);
</script>

<Pokemon
	name={pokemon.name}
	id={pokemon.id}
	img={pokemon.sprites.front_default}
	found={pokedex.ids.includes(pokemon.id)}
/>
