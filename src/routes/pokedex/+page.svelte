<script lang="ts">
	const { data } = $props();
</script>

<h1>Pokedex</h1>

<img src={data.pokemons[0].sprites.back_default} alt={data.pokemons[0].name} />
<img src={data.pokemons[1].sprites.back_default} alt={data.pokemons[1].name} />
<img src={data.pokemons[2].sprites.back_default} alt={data.pokemons[2].name} />
