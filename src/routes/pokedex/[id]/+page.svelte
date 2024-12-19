<script lang="ts">
	import Pokemon from '$lib/Pokemon.svelte';

	const { data } = $props();
</script>

<Pokemon name={data.pokemon.name} id={data.pokemon.id} img={data.pokemon.sprites.front_default} />
