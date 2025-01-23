<script lang="ts">
	import { getRandomNumber } from '$lib/helpers';
	import Wild from '$lib/Wild.svelte';
	import { pokedex } from '$lib/pokedex.svelte';

	let wildId: number | undefined = $state();
	let { data } = $props();

	const started = $derived(pokedex.ids.length);

	$effect(() => {
		if (started) {
			setInterval(() => {
				wildId = getRandomNumber(1, data.pokemons.length + 1);
			}, 2000);
		}
	});

	const wildIds = [1, 4, 7];
</script>

<h1>Pokesvelte</h1>

{#if !started}
	<div class="wilds">
		{#each wildIds as id}
			{@const { name, sprites } = data.pokemons[id - 1]}
			<Wild
				img={sprites.front_default}
				{name}
				catchPokemon={() => {
					pokedex.discover(id);
				}}
			/>
		{/each}
	</div>
{:else if wildId}
	{@const wildPokemon = data.pokemons[wildId - 1]}
	<Wild
		img={wildPokemon.sprites.front_default}
		name={wildPokemon.name}
		catchPokemon={() => {
			pokedex.discover(wildId);
		}}
	/>
{/if}

<style>
	.wilds {
		display: flex;
		gap: 0.5rem;
	}
</style>
