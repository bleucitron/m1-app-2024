<script lang="ts">
	const { data } = $props();
</script>

<div>
	<p>{data.pokemon.id}</p>
	<p>{data.pokemon.name}</p>
	<img src={data.pokemon.sprites.front_default} alt={data.pokemon.name} />
</div>
