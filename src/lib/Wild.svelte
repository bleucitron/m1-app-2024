<script lang="ts">
	type Props = {
		name: string;
		img: string;
		catchPokemon: () => Promise<void>;
	};
	const { img, name, catchPokemon }: Props = $props();
</script>

<button class="Wild" onclick={catchPokemon}>
	<img src={img} alt={name} />
</button>

<style>
	.Wild {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 15rem;
		margin: auto;
	}
	img {
		height: 15rem;
		object-fit: cover;
	}
</style>
