<script lang="ts">
	import Pokemon from '$lib/Pokemon.svelte';
	import Wild from '$lib/Wild.svelte';

	let started = $state(false);
	let { data } = $props();

	const wildIds = [1, 4, 7];
</script>

<h1>Pokesvelte</h1>

<button onclick={() => (started = !started)}>{started ? 'Started' : 'Start'}</button>

{#if !started}
	<div class="wilds">
		{#each wildIds as id}
			{@const { name, sprites } = data.pokemons[id - 1]}
			<Wild
				img={sprites.front_default}
				{name}
				catchPokemon={() => {
					console.log('Attrapé', id, name);
				}}
			/>
		{/each}
	</div>
{/if}

<style>
	.wilds {
		display: flex;
		gap: 0.5rem;
	}
</style>
