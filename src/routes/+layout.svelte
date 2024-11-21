<script lang="ts">
	import { page } from '$app/stores';
	const { children, data } = $props();
</script>

<nav>
	<ul>
		<li><a href="/" class:current={$page.url.pathname === '/'}>Accueil</a></li>
		<li>
			<a href="/team" class:current={$page.url.pathname === '/team'}>Team({data.teamSize})</a>
		</li>
		<li>
			<a href="/pokedex" class:current={$page.url.pathname === '/pokedex'}
				>Pokedex({data.speciesFound})</a
			>
		</li>
		<li><a href="/faq" class:current={$page.url.pathname === '/faq'}>FAQ</a></li>
		<li><a href="/profil" class:current={$page.url.pathname === '/profil'}>Profil</a></li>
	</ul>
</nav>

<main>
	{@render children()}
</main>

<style>
	nav {
		padding: 1rem;
	}

	.current {
		color: black;
	}
</style>
